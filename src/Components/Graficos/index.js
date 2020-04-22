import React, { Component } from "react";
import { Line } from "react-chartjs-2";

let options = {
  legend: {
    display: false,
  },
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: {
      left: 0,
      right: 10,
      top: 0,
      bottom: 0,
    },
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
          drawBorder: false,
        },
        ticks: {
          fontFamily:
            "'Work Sans', -apple-system, BlinkMacSystemFont,'Segoe UI','sans-serif'",
          padding: 15,
          fontColor: "rgb(147, 151, 152)",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          color: "rgba(200, 200, 200, 0.20)",
          drawOnChartArea: true,
          drawBorder: false,
        },
        ticks: {
          stepSize: 10,
          fontFamily:
            "'Work Sans', -apple-system, BlinkMacSystemFont,'Segoe UI','sans-serif'",
          padding: 15,
          fontColor: "rgb(147, 151, 152)",
        },
      },
    ],
  },
};
export default class GraficoLine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nometag: options,
    };
  }

  render() {
    return (
      <div className="box__grafico">
        {" "}
        <Line
          data={{
            labels: this.props.labels,
            datasets: [
              {
                fill: true,
                backgroundColor: this.props.fillcor,
                pointHitRadius: 5,
                borderColor: this.props.cor,
                pointBackgroundColor: this.props.bgcor,
                borderWidth: 3,
                radius: 6,
                pointBorderWidth: 4,
                pointBorderColor: "rgb(255,255,255)",
                data: this.props.dados,
              },
            ],
          }}
          options={this.state.nometag}
          redraw
        />
      </div>
    );
  }
}
