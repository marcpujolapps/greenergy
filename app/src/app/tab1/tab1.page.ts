import { Component, ChangeDetectorRef, ViewChild } from "@angular/core";
import { HTTP } from "@ionic-native/http/ngx";
import { Chart } from "chart.js";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  @ViewChild("anuallyChart") barChart;
  bars: any;
  colorArray: any;
  consumption: any = {
    periods: [
      {
        period: {
          predicted_consumption: 63.661,
          predicted_generation: 0,
          price_type: "normal",
          price_type_name: "Punta",
          period_name: "P1",
          consumption: 63.661,
          generation: 0,
        },
        months: [
          {
            month: "2020-01",
            month_label: "ENE \n\r 2020",
            value: {
              predicted_consumption: 0,
              predicted_generation: 0,
              display: "no_data",
            },
            friendly_month_name: "enero 2020",
          },
          {
            month: "2020-02",
            month_label: "FEB",
            value: {
              predicted_consumption: 0,
              predicted_generation: 0,
              display: "no_data",
            },
            friendly_month_name: "febrero 2020",
          },
          {
            month: "2020-03",
            month_label: "MAR",
            value: {
              predicted_consumption: 0,
              predicted_generation: 0,
              display: "no_data",
            },
            friendly_month_name: "marzo 2020",
          },
          {
            month: "2020-04",
            month_label: "ABR",
            value: {
              predicted_consumption: 0,
              predicted_generation: 0,
              display: "no_data",
            },
            friendly_month_name: "abril 2020",
          },
          {
            month: "2020-05",
            month_label: "MAY",
            value: {
              predicted_consumption: 0,
              predicted_generation: 0,
              display: "no_data",
            },
            friendly_month_name: "mayo 2020",
          },
          {
            month: "2020-06",
            month_label: "JUN",
            value: {
              predicted_consumption: 0,
              predicted_generation: 0,
              display: "no_data",
            },
            friendly_month_name: "junio 2020",
          },
          {
            month: "2020-07",
            month_label: "JUL",
            value: {
              consumption: 63.661,
              predicted_consumption: 63.661,
              generation: 0,
              predicted_generation: 0,
              display: "provisional",
            },
            end_date: "2020-07-31",
            friendly_month_name: "julio 2020",
          },
          {
            month: "2020-08",
            month_label: "AGO",
            value: {
              predicted_consumption: 0,
              predicted_generation: 0,
              display: "no_data",
            },
            friendly_month_name: "agosto 2020",
          },
          {
            month: "2020-09",
            month_label: "SEP",
            value: {
              predicted_consumption: 0,
              predicted_generation: 0,
              display: "no_data",
            },
            friendly_month_name: "septiembre 2020",
          },
          {
            month: "2020-10",
            month_label: "OCT",
            value: {
              predicted_consumption: 0,
              predicted_generation: 0,
              display: "no_data",
            },
            friendly_month_name: "octubre 2020",
          },
          {
            month: "2020-11",
            month_label: "NOV",
            value: {
              predicted_consumption: 0,
              predicted_generation: 0,
              display: "no_data",
            },
            friendly_month_name: "noviembre 2020",
          },
          {
            month: "2020-12",
            month_label: "DIC",
            value: {
              predicted_consumption: 0,
              predicted_generation: 0,
              display: "no_data",
            },
            friendly_month_name: "diciembre 2020",
          },
        ],
      },
      {
        period: {
          predicted_consumption: 86.18,
          predicted_generation: 0,
          price_type: "reduced",
          price_type_name: "Valle",
          period_name: "P2",
          consumption: 86.18,
          generation: 0,
        },
        months: [
          {
            month: "2020-01",
            month_label: "ENE \n\r 2020",
            value: {
              predicted_consumption: 0,
              predicted_generation: 0,
              display: "no_data",
            },
            friendly_month_name: "enero 2020",
          },
          {
            month: "2020-02",
            month_label: "FEB",
            value: {
              predicted_consumption: 0,
              predicted_generation: 0,
              display: "no_data",
            },
            friendly_month_name: "febrero 2020",
          },
          {
            month: "2020-03",
            month_label: "MAR",
            value: {
              predicted_consumption: 0,
              predicted_generation: 0,
              display: "no_data",
            },
            friendly_month_name: "marzo 2020",
          },
          {
            month: "2020-04",
            month_label: "ABR",
            value: {
              predicted_consumption: 0,
              predicted_generation: 0,
              display: "no_data",
            },
            friendly_month_name: "abril 2020",
          },
          {
            month: "2020-05",
            month_label: "MAY",
            value: {
              predicted_consumption: 0,
              predicted_generation: 0,
              display: "no_data",
            },
            friendly_month_name: "mayo 2020",
          },
          {
            month: "2020-06",
            month_label: "JUN",
            value: {
              predicted_consumption: 0,
              predicted_generation: 0,
              display: "no_data",
            },
            friendly_month_name: "junio 2020",
          },
          {
            month: "2020-07",
            month_label: "JUL",
            value: {
              consumption: 86.18,
              predicted_consumption: 86.18,
              generation: 0,
              predicted_generation: 0,
              display: "provisional",
            },
            end_date: "2020-07-31",
            friendly_month_name: "julio 2020",
          },
          {
            month: "2020-08",
            month_label: "AGO",
            value: {
              predicted_consumption: 0,
              predicted_generation: 0,
              display: "no_data",
            },
            friendly_month_name: "agosto 2020",
          },
          {
            month: "2020-09",
            month_label: "SEP",
            value: {
              predicted_consumption: 0,
              predicted_generation: 0,
              display: "no_data",
            },
            friendly_month_name: "septiembre 2020",
          },
          {
            month: "2020-10",
            month_label: "OCT",
            value: {
              predicted_consumption: 0,
              predicted_generation: 0,
              display: "no_data",
            },
            friendly_month_name: "octubre 2020",
          },
          {
            month: "2020-11",
            month_label: "NOV",
            value: {
              predicted_consumption: 0,
              predicted_generation: 0,
              display: "no_data",
            },
            friendly_month_name: "noviembre 2020",
          },
          {
            month: "2020-12",
            month_label: "DIC",
            value: {
              predicted_consumption: 0,
              predicted_generation: 0,
              display: "no_data",
            },
            friendly_month_name: "diciembre 2020",
          },
        ],
      },
    ],
    forecast: {
      predicted_consumption: 149.841,
      predicted_generation: 0,
    },
    from: "2020-01",
    to: "2020-12",
    total_months: 12,
    summary: {
      consumption: 149.841,
      average_consumption: 12.48675,
      generation: 0,
      average_generation: 0,
    },
  };
  constructor(public http: HTTP, private ref: ChangeDetectorRef) {
    this.init();
  }

  async init() {
    await this.getConsumption();
    this.createBarChart();
  }

  getConsumption() {
    return new Promise(async (resolve, reject) => {
      if (this.consumption) {
        resolve(this.consumption);
      } else {
        const data = await this.http
          .get(
            "https://dashboard-api.lucera.es/v1/contracts/electricity/61837/consumption/months?from=2020-01&to=2020-12",
            {},
            {}
          )
          .catch((err) => {
            console.log(err);
            reject(err);
          });
        this.consumption = data;
        this.ref.detectChanges();
        resolve(data);
      }
    });
  }

  createBarChart() {
    let ctx = this.barChart.nativeElement;
    ctx.height = 200;
    this.bars = new Chart(this.barChart.nativeElement, {
      type: "bar",
      data: {
        labels: this.consumption.periods[0].months.map(
          (month) => month.month_label
        ),
        datasets: this.consumption.periods
          .map((period) => ({
            stack: true,
            label: period.period.price_type_name,
            data: period.months.map((month) => month.value.consumption || 0),
            backgroundColor:
              period.period.price_type_name === "Punta"
                ? "rgb(247, 105, 69)"
                : "rgb(35, 235, 88)",
          })),
      },
      options: {
        scales: {
          xAxes: {
            stacked: true,
          },
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }
}
