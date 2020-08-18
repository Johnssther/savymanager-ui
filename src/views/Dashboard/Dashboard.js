
import React, { Component } from 'react';
// Main Chart
import ApiDashboard from '../../api/dashboard';
import Carrucelinfinite from '../components/carrucelinfinite';
import { Link } from 'react-router-dom';
import Main from '../layout/main'

import {
  Card, CardBody,
  Alert,
} from 'reactstrap';

import Loading from '../components/loading'
import Gbarras from '../Dashboard/gbarras'
import Datos from '../Dashboard/table'

import { connect } from 'react-redux'
import Select from 'react-select'

import { getExpensesType } from '../../services/expenses/expensestype'

//traslate
import dasboard_es from '../../traslate/es/dashboard'
import dasboard_en from '../../traslate/en/dashboard'
import dasboard_fr from '../../traslate/fr/dashboard'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gastoTotal: '',
      mes: [],
      loading: true,
      expensestype: [],
      valueSelectExpensestype: '',
      color: '#F55457',
      languaje: dasboard_es,
      btn_color: false,
    }
  }
  async componentDidMount() {
    this.getExpensesMonths()
    this.getExpensesMonth()
    await getExpensesType();

    const expensestype = await this.props.expensestypes.map((item) => {
      return { value: item.id, label: item.gasto }
    })

    this.setState({
      expensestype
    })

  }

  //getExpenseMont card
  getExpensesMonth(data) {
    ApiDashboard.getTotalExpensesMonth(data)
      .then((response) => {
        this.setState({
          gastoTotal: response,
          loading: false
        });
      })
      .catch(e => {
        console.log(e)
        this.setState({
          loading: false
        });
      })
  }
  //getExpenseMonts slider
  getExpensesMonths() {
    ApiDashboard.getTotalExpensesMonths()
      .then((response) => {
        this.setState({
          mes: response,
          loading: false
        });
      })
      .catch(e => {
        console.log(e)
        this.setState({
          loading: false
        });
      })
  }
  //getExpenseMonts
  async onChangeSelect(value) {
    await this.setState({ valueSelectExpensestype: value })
    this.getExpensesMonth(this.state.valueSelectExpensestype)
  }

  render() {
    const { languaje, btn_color } = this.state
    if (this.state.loading) {
      return (
        <Loading loading={this.state.loading}></Loading>
      );
    }
    return (
      <Main success={false}>

        <div className="row mb-2">
          <div className="offset-sm-3 col-sm-6">
            <Alert color="primary">
            {languaje.coming_soon}<br></br>
            {languaje.coming_soon_item1}<br></br>
            </Alert>
            <Alert color="success">
              {languaje.news}<br></br>
              {languaje.news_item1}<br></br>
              {languaje.news_item2}<br></br>
              {languaje.news_item3}<br></br>
            <Link title="Ir al modulo de ingresos" className="btn btn-warning" to={`/revenues`}>{languaje.to_explore}</Link>
            </Alert>
            <Select
              className="is-invalid"
              options={this.state.expensestype}
              onChange={(newValue) => { this.onChangeSelect(newValue.value) }}
            />
          </div>
          <div className=" col-sm-3">
            <button className={`btn btn-sm btn-${btn_color?'warning':'warning'} m-1`} onClick={()=>{ this.setState({ languaje: dasboard_es, btn_color:!btn_color }) }}>{languaje.btn_es}</button>
            <button className={`btn btn-sm btn-${btn_color?'warning':'warning'} m-1`} onClick={()=>{ this.setState({ languaje: dasboard_en, btn_color:!btn_color }) }}>{languaje.btn_en}</button>
            <button className={`btn btn-sm btn-${btn_color?'warning':'warning'} m-1`} onClick={()=>{ this.setState({ languaje: dasboard_fr, btn_color:!btn_color }) }}>{languaje.btn_fr}</button>
          </div>
        </div>
        <div className="row mb-2">
          <div className="offset-sm-3 col-sm-6">
            <Card style={{ borderRadius: '10px' }}>
              <CardBody>
                <div className="row">
                  <div className="col">
                    <h6>{languaje.my_expenses}</h6>
                    <h3>{'$' + new Intl.NumberFormat().format(this.state.gastoTotal.toString())}</h3>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className="row mb-2">
          <div className="offset-sm-3 col-sm-6">
            <Gbarras mes={this.state.mes} color={this.state.color} />
          </div>
        </div>
        {/* <Datos /> */}
      </Main>
    );
  }

}

const mapStateToProps = state => ({
  expensestypes: state.expensestype.expensestype,
  expense: state.personalexpenses.createpersonalexpense,
})

export default connect(mapStateToProps)(Dashboard)