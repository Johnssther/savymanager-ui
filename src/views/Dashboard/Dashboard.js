import React, { Component } from 'react';
import WidgetO1 from '../Widgets/Widget02'
// Main Chart
import API from '../../api/api'
import {
  Card, CardBody,
  CardHeader,
  CardFooter,
  Button,
} from 'reactstrap';

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gastoTotal: '',
      mes:[]

    }
  }
  componentDidMount() {
    this.getGastos()
    this.getGastosMensuales()

  }
  getGastos() {
    this.setState({
      data: []
    })
    setTimeout(() => {
      let data = {
        mes:null,
      }
      API.getExpenses(data)
        .then((response) => {

          const total = response.map((item) => {
            return item.precio_total;
          })

          if (total.length > 0) {
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            var Preciototal = total.reduce(reducer);
          } else {
            var Preciototal = 0;
          }

          this.setState({
            gastoTotal: Preciototal,
          })
        })
    }, 500)
  }

  getGastosMensuales() {
    let data = {
      mes: 11,
    }
  
    API.getExpenses(data)
      .then((response) => {
        this.setState({
          mes: response
        })
      })
      .catch(e => console.log(e))
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {
    let mes_nombre = ['Enero', 'Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre',]
    
    return (
      <>
      <div className="animated fadeIn">
        <WidgetO1
          header={'$'+ new Intl.NumberFormat().format(this.state.gastoTotal.toString())}
          mainText='Gastos totales de este mes'
        />
      </div>
      <div className="animated fadeIn">
        <div>
            <div className="row">
              {this.state.mes.map(
                (item, index) =>
                  <div className="col-sm" key={index}>
                    <Card>
                      <CardHeader>
                        <strong>{ mes_nombre[item.mes-1] } { item.anio }</strong>
                      </CardHeader>
                      <CardBody>
                        Tus gastos de {mes_nombre[item.mes-1]} del { item.anio } fueron de: { `$ ${new Intl.NumberFormat().format(item.precio_total_mes)}`}
                      <hr></hr>

                      </CardBody>{/* 
                      <CardFooter>
                        <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Imprimir Gastos</Button>
                      </CardFooter> */}
                    </Card>
                  </div>
                )
              }

          </div>
        </div>
      </div>
      </>
    );
  }

}

export default Dashboard;
