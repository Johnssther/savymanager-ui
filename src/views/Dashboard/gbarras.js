
import React, { Component } from 'react';
import WidgetO from '../Widgets/Widget02'
// Main Chart
import ApiDashboard from '../../api/dashboard';
import {
  Card, CardBody,
  CardHeader,
  CardColumns
} from 'reactstrap';
import Loading from '../components/loading'

import { Bar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2';

import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

class Gbarras extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gastoTotal: '',
    }
  }

  render() {
    const mes = this.props.mes;
    console.log(mes, 'a');

    return (
      <>
        <Card style={{ borderRadius:'10px' }}>
          <CardHeader style={{ borderRadius:'10px 10px 0px 0px' }}>
            Histograma del 2025
              <div className="card-header-actions">
            </div>
          </CardHeader>
          <CardBody>
            <div className="chart-wrapper">
              <Bar
                data={
                  {
                    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
                    datasets: [
                      {
                        label: 'Gastos mensuales',
                        backgroundColor: this.props.color,
                        borderColor: 'purple',
                        borderWidth: 1,
                        hoverBackgroundColor: 'purple',
                        hoverBorderColor: 'rgb(92, 7, 132)',
                        data: mes.map((item) => item.precio_total_mes),
                      },
                    ],
                  }
                }
                options={
                  {
                    tooltips: {
                      enabled: false,
                      custom: CustomTooltips
                    },
                    maintainAspectRatio: false
                  }
                } />
            </div>
          </CardBody>
        </Card>
      </>
    );
  }

}

export default Gbarras;