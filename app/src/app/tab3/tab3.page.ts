import { Component, ChangeDetectorRef, ViewChild } from "@angular/core";
import { HTTP } from "@ionic-native/http/ngx";
import { Chart } from "chart.js";

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"],
})
export class Tab3Page {
  @ViewChild("yearChart") yearChart;
  @ViewChild("dayChart") dayChart;
  dayBars: any;
  yearBars: any;
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
              consumption: 32,
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
              consumption: 36,
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
              consumption: 30,
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
              consumption: 62,
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
              consumption: 45,
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
              consumption: 50,
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
              consumption: 45,
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
              consumption: 40,
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
              consumption: 50,
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
              consumption: 52,
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
              consumption: 43,
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
              consumption: 120,
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
              consumption: 65,
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
              consumption: 70,
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
              consumption: 50,
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
              consumption: 100,
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
              consumption: 86.18,
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
              consumption: 85,
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
              consumption: 50,
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
              consumption: 60,
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
              consumption: 70,
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
              consumption: 90,
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
      consumption: 1461.021,
      average_consumption: 12.48675,
      generation: 0,
      average_generation: 0,
    },
  };
  consumption_day: any = {
    day: "2020-07-31",
    consumption: 10.569,
    generation: 0,
    periods: [
      {
        period: {
          price_type: "normal",
          price_type_name: "Punta",
          period_name: "P1",
          consumption: 2.902,
          average_consumption: 0.2902,
          generation: 0,
        },
        hour: [
          {
            value: {
              accuracy: "unknown",
              display: "no_data",
            },
            day: "2020-07-31",
            hour: 0,
            day_abbreviature: "0",
          },
          {
            value: {
              accuracy: "unknown",
              display: "no_data",
            },
            day: "2020-07-31",
            hour: 1,
            day_abbreviature: "1",
          },
          {
            value: {
              accuracy: "unknown",
              display: "no_data",
            },
            day: "2020-07-31",
            hour: 2,
            day_abbreviature: "2",
          },
          {
            value: {
              accuracy: "unknown",
              display: "no_data",
            },
            day: "2020-07-31",
            hour: 3,
            day_abbreviature: "3",
          },
          {
            value: {
              accuracy: "unknown",
              display: "no_data",
            },
            day: "2020-07-31",
            hour: 4,
            day_abbreviature: "4",
          },
          {
            value: {
              accuracy: "unknown",
              display: "no_data",
            },
            day: "2020-07-31",
            hour: 5,
            day_abbreviature: "5",
          },
          {
            value: {
              accuracy: "unknown",
              display: "no_data",
            },
            day: "2020-07-31",
            hour: 6,
            day_abbreviature: "6",
          },
          {
            value: {
              accuracy: "unknown",
              display: "no_data",
            },
            day: "2020-07-31",
            hour: 7,
            day_abbreviature: "7",
          },
          {
            value: {
              accuracy: "unknown",
              display: "no_data",
            },
            day: "2020-07-31",
            hour: 8,
            day_abbreviature: "8",
          },
          {
            value: {
              accuracy: "unknown",
              display: "no_data",
            },
            day: "2020-07-31",
            hour: 9,
            day_abbreviature: "9",
          },
          {
            value: {
              accuracy: "unknown",
              display: "no_data",
            },
            day: "2020-07-31",
            hour: 10,
            day_abbreviature: "10",
          },
          {
            value: {
              accuracy: "unknown",
              display: "no_data",
            },
            day: "2020-07-31",
            hour: 11,
            day_abbreviature: "11",
          },
          {
            value: {
              accuracy: "unknown",
              display: "no_data",
            },
            day: "2020-07-31",
            hour: 12,
            day_abbreviature: "12",
          },
          {
            value: {
              accuracy: "real",
              consumption: 0.162,
              generation: 0,
              display: "normal",
            },
            day: "2020-07-31",
            hour: 13,
            day_abbreviature: "13",
          },
          {
            value: {
              accuracy: "real",
              consumption: 0.117,
              generation: 0,
              display: "normal",
            },
            day: "2020-07-31",
            hour: 14,
            day_abbreviature: "14",
          },
          {
            value: {
              accuracy: "real",
              consumption: 0.262,
              generation: 0,
              display: "normal",
            },
            day: "2020-07-31",
            hour: 15,
            day_abbreviature: "15",
          },
          {
            value: {
              accuracy: "real",
              consumption: 0.192,
              generation: 0,
              display: "normal",
            },
            day: "2020-07-31",
            hour: 16,
            day_abbreviature: "16",
          },
          {
            value: {
              accuracy: "real",
              consumption: 0.2,
              generation: 0,
              display: "normal",
            },
            day: "2020-07-31",
            hour: 17,
            day_abbreviature: "17",
          },
          {
            value: {
              accuracy: "real",
              consumption: 0.307,
              generation: 0,
              display: "normal",
            },
            day: "2020-07-31",
            hour: 18,
            day_abbreviature: "18",
          },
          {
            value: {
              accuracy: "real",
              consumption: 0.289,
              generation: 0,
              display: "normal",
            },
            day: "2020-07-31",
            hour: 19,
            day_abbreviature: "19",
          },
          {
            value: {
              accuracy: "real",
              consumption: 0.368,
              generation: 0,
              display: "normal",
            },
            day: "2020-07-31",
            hour: 20,
            day_abbreviature: "20",
          },
          {
            value: {
              accuracy: "real",
              consumption: 0.395,
              generation: 0,
              display: "normal",
            },
            day: "2020-07-31",
            hour: 21,
            day_abbreviature: "21",
          },
          {
            value: {
              accuracy: "real",
              consumption: 0.61,
              generation: 0,
              display: "normal",
            },
            day: "2020-07-31",
            hour: 22,
            day_abbreviature: "22",
          },
          {
            value: {
              accuracy: "unknown",
              display: "no_data",
            },
            day: "2020-07-31",
            hour: 23,
            day_abbreviature: "23",
          },
        ],
      },
      {
        period: {
          price_type: "reduced",
          price_type_name: "Valle",
          period_name: "P2",
          consumption: 7.667,
          average_consumption: 0.5476428571428571428571428571,
          generation: 0,
        },
        hour: [
          {
            value: {
              accuracy: "real",
              consumption: 0.656,
              generation: 0,
              display: "normal",
            },
            day: "2020-07-31",
            hour: 0,
            day_abbreviature: "0",
          },
          {
            value: {
              accuracy: "real",
              consumption: 0.184,
              generation: 0,
              display: "normal",
            },
            day: "2020-07-31",
            hour: 1,
            day_abbreviature: "1",
          },
          {
            value: {
              accuracy: "real",
              consumption: 0.651,
              generation: 0,
              display: "normal",
            },
            day: "2020-07-31",
            hour: 2,
            day_abbreviature: "2",
          },
          {
            value: {
              accuracy: "real",
              consumption: 0.195,
              generation: 0,
              display: "normal",
            },
            day: "2020-07-31",
            hour: 3,
            day_abbreviature: "3",
          },
          {
            value: {
              accuracy: "real",
              consumption: 0.565,
              generation: 0,
              display: "normal",
            },
            day: "2020-07-31",
            hour: 4,
            day_abbreviature: "4",
          },
          {
            value: {
              accuracy: "real",
              consumption: 0.308,
              generation: 0,
              display: "normal",
            },
            day: "2020-07-31",
            hour: 5,
            day_abbreviature: "5",
          },
          {
            value: {
              accuracy: "real",
              consumption: 0.68,
              generation: 0,
              display: "normal",
            },
            day: "2020-07-31",
            hour: 6,
            day_abbreviature: "6",
          },
          {
            value: {
              accuracy: "real",
              consumption: 0.401,
              generation: 0,
              display: "normal",
            },
            day: "2020-07-31",
            hour: 7,
            day_abbreviature: "7",
          },
          {
            value: {
              accuracy: "real",
              consumption: 0.699,
              generation: 0,
              display: "normal",
            },
            day: "2020-07-31",
            hour: 8,
            day_abbreviature: "8",
          },
          {
            value: {
              accuracy: "real",
              consumption: 0.681,
              generation: 0,
              display: "normal",
            },
            day: "2020-07-31",
            hour: 9,
            day_abbreviature: "9",
          },
          {
            value: {
              accuracy: "real",
              consumption: 0.728,
              generation: 0,
              display: "normal",
            },
            day: "2020-07-31",
            hour: 10,
            day_abbreviature: "10",
          },
          {
            value: {
              accuracy: "real",
              consumption: 0.493,
              generation: 0,
              display: "normal",
            },
            day: "2020-07-31",
            hour: 11,
            day_abbreviature: "11",
          },
          {
            value: {
              accuracy: "real",
              consumption: 0.165,
              generation: 0,
              display: "normal",
            },
            day: "2020-07-31",
            hour: 12,
            day_abbreviature: "12",
          },
          {
            value: {
              accuracy: "unknown",
              display: "no_data",
            },
            day: "2020-07-31",
            hour: 13,
            day_abbreviature: "13",
          },
          {
            value: {
              accuracy: "unknown",
              display: "no_data",
            },
            day: "2020-07-31",
            hour: 14,
            day_abbreviature: "14",
          },
          {
            value: {
              accuracy: "unknown",
              display: "no_data",
            },
            day: "2020-07-31",
            hour: 15,
            day_abbreviature: "15",
          },
          {
            value: {
              accuracy: "unknown",
              display: "no_data",
            },
            day: "2020-07-31",
            hour: 16,
            day_abbreviature: "16",
          },
          {
            value: {
              accuracy: "unknown",
              display: "no_data",
            },
            day: "2020-07-31",
            hour: 17,
            day_abbreviature: "17",
          },
          {
            value: {
              accuracy: "unknown",
              display: "no_data",
            },
            day: "2020-07-31",
            hour: 18,
            day_abbreviature: "18",
          },
          {
            value: {
              accuracy: "unknown",
              display: "no_data",
            },
            day: "2020-07-31",
            hour: 19,
            day_abbreviature: "19",
          },
          {
            value: {
              accuracy: "unknown",
              display: "no_data",
            },
            day: "2020-07-31",
            hour: 20,
            day_abbreviature: "20",
          },
          {
            value: {
              accuracy: "unknown",
              display: "no_data",
            },
            day: "2020-07-31",
            hour: 21,
            day_abbreviature: "21",
          },
          {
            value: {
              accuracy: "unknown",
              display: "no_data",
            },
            day: "2020-07-31",
            hour: 22,
            day_abbreviature: "22",
          },
          {
            value: {
              accuracy: "real",
              consumption: 1.261,
              generation: 0,
              display: "normal",
            },
            day: "2020-07-31",
            hour: 23,
            day_abbreviature: "23",
          },
        ],
      },
    ],
    hours: [
      {
        value: {
          accuracy: "real",
          consumption: 0.656,
          generation: 0,
          display: "normal",
        },
        day: "2020-07-31",
        hour: 0,
        day_abbreviature: "0",
      },
      {
        value: {
          accuracy: "real",
          consumption: 0.184,
          generation: 0,
          display: "normal",
        },
        day: "2020-07-31",
        hour: 1,
        day_abbreviature: "1",
      },
      {
        value: {
          accuracy: "real",
          consumption: 0.651,
          generation: 0,
          display: "normal",
        },
        day: "2020-07-31",
        hour: 2,
        day_abbreviature: "2",
      },
      {
        value: {
          accuracy: "real",
          consumption: 0.195,
          generation: 0,
          display: "normal",
        },
        day: "2020-07-31",
        hour: 3,
        day_abbreviature: "3",
      },
      {
        value: {
          accuracy: "real",
          consumption: 0.565,
          generation: 0,
          display: "normal",
        },
        day: "2020-07-31",
        hour: 4,
        day_abbreviature: "4",
      },
      {
        value: {
          accuracy: "real",
          consumption: 0.308,
          generation: 0,
          display: "normal",
        },
        day: "2020-07-31",
        hour: 5,
        day_abbreviature: "5",
      },
      {
        value: {
          accuracy: "real",
          consumption: 0.68,
          generation: 0,
          display: "normal",
        },
        day: "2020-07-31",
        hour: 6,
        day_abbreviature: "6",
      },
      {
        value: {
          accuracy: "real",
          consumption: 0.401,
          generation: 0,
          display: "normal",
        },
        day: "2020-07-31",
        hour: 7,
        day_abbreviature: "7",
      },
      {
        value: {
          accuracy: "real",
          consumption: 0.699,
          generation: 0,
          display: "normal",
        },
        day: "2020-07-31",
        hour: 8,
        day_abbreviature: "8",
      },
      {
        value: {
          accuracy: "real",
          consumption: 0.681,
          generation: 0,
          display: "normal",
        },
        day: "2020-07-31",
        hour: 9,
        day_abbreviature: "9",
      },
      {
        value: {
          accuracy: "real",
          consumption: 0.728,
          generation: 0,
          display: "normal",
        },
        day: "2020-07-31",
        hour: 10,
        day_abbreviature: "10",
      },
      {
        value: {
          accuracy: "real",
          consumption: 0.493,
          generation: 0,
          display: "normal",
        },
        day: "2020-07-31",
        hour: 11,
        day_abbreviature: "11",
      },
      {
        value: {
          accuracy: "real",
          consumption: 0.165,
          generation: 0,
          display: "normal",
        },
        day: "2020-07-31",
        hour: 12,
        day_abbreviature: "12",
      },
      {
        value: {
          accuracy: "real",
          consumption: 0.162,
          generation: 0,
          display: "normal",
        },
        day: "2020-07-31",
        hour: 13,
        day_abbreviature: "13",
      },
      {
        value: {
          accuracy: "real",
          consumption: 0.117,
          generation: 0,
          display: "normal",
        },
        day: "2020-07-31",
        hour: 14,
        day_abbreviature: "14",
      },
      {
        value: {
          accuracy: "real",
          consumption: 0.262,
          generation: 0,
          display: "normal",
        },
        day: "2020-07-31",
        hour: 15,
        day_abbreviature: "15",
      },
      {
        value: {
          accuracy: "real",
          consumption: 0.192,
          generation: 0,
          display: "normal",
        },
        day: "2020-07-31",
        hour: 16,
        day_abbreviature: "16",
      },
      {
        value: {
          accuracy: "real",
          consumption: 0.2,
          generation: 0,
          display: "normal",
        },
        day: "2020-07-31",
        hour: 17,
        day_abbreviature: "17",
      },
      {
        value: {
          accuracy: "real",
          consumption: 0.307,
          generation: 0,
          display: "normal",
        },
        day: "2020-07-31",
        hour: 18,
        day_abbreviature: "18",
      },
      {
        value: {
          accuracy: "real",
          consumption: 0.289,
          generation: 0,
          display: "normal",
        },
        day: "2020-07-31",
        hour: 19,
        day_abbreviature: "19",
      },
      {
        value: {
          accuracy: "real",
          consumption: 0.368,
          generation: 0,
          display: "normal",
        },
        day: "2020-07-31",
        hour: 20,
        day_abbreviature: "20",
      },
      {
        value: {
          accuracy: "real",
          consumption: 0.395,
          generation: 0,
          display: "normal",
        },
        day: "2020-07-31",
        hour: 21,
        day_abbreviature: "21",
      },
      {
        value: {
          accuracy: "real",
          consumption: 0.61,
          generation: 0,
          display: "normal",
        },
        day: "2020-07-31",
        hour: 22,
        day_abbreviature: "22",
      },
      {
        value: {
          accuracy: "real",
          consumption: 1.261,
          generation: 0,
          display: "normal",
        },
        day: "2020-07-31",
        hour: 23,
        day_abbreviature: "23",
      },
    ],
    summary: {
      consumption: 10.569,
      average_consumption: 0.440375,
      generation: 0,
      average_generation: 0,
    },
  };
  generation: any = {
    inputs: {
      location: { latitude: 42.052, longitude: 1.625, elevation: 981.0 },
      meteo_data: {
        radiation_db: "PVGIS-SARAH",
        meteo_db: "ERA-Interim",
        year_min: 2005,
        year_max: 2016,
        use_horizon: true,
        horizon_db: "DEM-calculated",
      },
      mounting_system: {
        fixed: {
          slope: { value: 35, optimal: false },
          azimuth: { value: 0, optimal: false },
          type: "free-standing",
        },
      },
      pv_module: { technology: "c-Si", peak_power: 1.0, system_loss: 14.0 },
      economic_data: { system_cost: null, interest: null, lifetime: null },
    },
    outputs: {
      monthly: {
        fixed: [
          {
            month: 1,
            E_d: 3.42,
            E_m: 105.91,
            "H(i)_d": 3.96,
            "H(i)_m": 122.77,
            SD_m: 14.33,
          },
          {
            month: 2,
            E_d: 3.94,
            E_m: 110.27,
            "H(i)_d": 4.62,
            "H(i)_m": 129.44,
            SD_m: 12.38,
          },
          {
            month: 3,
            E_d: 4.47,
            E_m: 138.6,
            "H(i)_d": 5.47,
            "H(i)_m": 169.68,
            SD_m: 11.48,
          },
          {
            month: 4,
            E_d: 4.4,
            E_m: 131.89,
            "H(i)_d": 5.55,
            "H(i)_m": 166.61,
            SD_m: 12.12,
          },
          {
            month: 5,
            E_d: 4.71,
            E_m: 146.1,
            "H(i)_d": 6.07,
            "H(i)_m": 188.16,
            SD_m: 13.57,
          },
          {
            month: 6,
            E_d: 4.91,
            E_m: 147.35,
            "H(i)_d": 6.49,
            "H(i)_m": 194.77,
            SD_m: 7.3,
          },
          {
            month: 7,
            E_d: 5.13,
            E_m: 158.89,
            "H(i)_d": 6.87,
            "H(i)_m": 213.03,
            SD_m: 5.61,
          },
          {
            month: 8,
            E_d: 4.96,
            E_m: 153.67,
            "H(i)_d": 6.61,
            "H(i)_m": 204.88,
            SD_m: 6.98,
          },
          {
            month: 9,
            E_d: 4.49,
            E_m: 134.75,
            "H(i)_d": 5.81,
            "H(i)_m": 174.25,
            SD_m: 9.72,
          },
          {
            month: 10,
            E_d: 3.89,
            E_m: 120.58,
            "H(i)_d": 4.82,
            "H(i)_m": 149.43,
            SD_m: 9.46,
          },
          {
            month: 11,
            E_d: 3.25,
            E_m: 97.59,
            "H(i)_d": 3.85,
            "H(i)_m": 115.6,
            SD_m: 14.64,
          },
          {
            month: 12,
            E_d: 3.27,
            E_m: 101.5,
            "H(i)_d": 3.79,
            "H(i)_m": 117.55,
            SD_m: 11.88,
          },
        ],
      },
      totals: {
        fixed: {
          E_d: 4.24,
          E_m: 128.92,
          E_y: 1547.1,
          "H(i)_d": 5.33,
          "H(i)_m": 162.18,
          "H(i)_y": 1946.15,
          SD_m: 4.48,
          SD_y: 53.77,
          l_aoi: -2.53,
          l_spec: "0.78",
          l_tg: -5.89,
          l_total: -20.5,
        },
      },
    },
    meta: {
      inputs: {
        location: {
          description: "Selected location",
          variables: {
            latitude: { description: "Latitude", units: "decimal degree" },
            longitude: { description: "Longitude", units: "decimal degree" },
            elevation: { description: "Elevation", units: "m" },
          },
        },
        meteo_data: {
          description: "Sources of meteorological data",
          variables: {
            radiation_db: { description: "Solar radiation database" },
            meteo_db: {
              description:
                "Database used for meteorological variables other than solar radiation",
            },
            year_min: { description: "First year of the calculations" },
            year_max: { description: "Last year of the calculations" },
            use_horizon: { description: "Include horizon shadows" },
            horizon_db: { description: "Source of horizon data" },
          },
        },
        mounting_system: {
          description: "Mounting system",
          choices: "fixed, vertical_axis, inclined_axis, two_axis",
          fields: {
            slope: {
              description: "Inclination angle from the horizontal plane",
              units: "degree",
            },
            azimuth: {
              description:
                "Orientation (azimuth) angle of the (fixed) PV system (0 = S, 90 = W, -90 = E)",
              units: "degree",
            },
          },
        },
        pv_module: {
          description: "PV module parameters",
          variables: {
            technology: { description: "PV technology" },
            peak_power: {
              description: "Nominal (peak) power of the PV module",
              units: "kW",
            },
            system_loss: { description: "Sum of system losses", units: "%" },
          },
        },
        economic_data: {
          description: "Economic inputs",
          variables: {
            system_cost: {
              description: "Total cost of the PV system",
              units: "user-defined currency",
            },
            interest: { description: "Annual interest", units: "%/y" },
            lifetime: {
              description: "Expected lifetime of the PV system",
              units: "y",
            },
          },
        },
      },
      outputs: {
        monthly: {
          type: "time series",
          timestamp: "monthly averages",
          variables: {
            E_d: {
              description:
                "Average daily energy production from the given system",
              units: "kWh/d",
            },
            E_m: {
              description:
                "Average monthly energy production from the given system",
              units: "kWh/mo",
            },
            "H(i)_d": {
              description:
                "Average daily sum of global irradiation per square meter received by the modules of the given system",
              units: "kWh/m2/d",
            },
            "H(i)_m": {
              description:
                "Average monthly sum of global irradiation per square meter received by the modules of the given system",
              units: "kWh/m2/mo",
            },
            SD_m: {
              description:
                "Standard deviation of the monthly energy production due to year-to-year variation",
              units: "kWh",
            },
          },
        },
        totals: {
          type: "time series totals",
          variables: {
            E_d: {
              description:
                "Average daily energy production from the given system",
              units: "kWh/d",
            },
            E_m: {
              description:
                "Average monthly energy production from the given system",
              units: "kWh/mo",
            },
            E_y: {
              description:
                "Average annual energy production from the given system",
              units: "kWh/y",
            },
            "H(i)_d": {
              description:
                "Average daily sum of global irradiation per square meter received by the modules of the given system",
              units: "kWh/m2/d",
            },
            "H(i)_m": {
              description:
                "Average monthly sum of global irradiation per square meter received by the modules of the given system",
              units: "kWh/m2/mo",
            },
            "H(i)_y": {
              description:
                "Average annual sum of global irradiation per square meter received by the modules of the given system",
              units: "kWh/m2/y",
            },
            SD_m: {
              description:
                "Standard deviation of the monthly energy production due to year-to-year variation",
              units: "kWh",
            },
            SD_y: {
              description:
                "Standard deviation of the annual energy production due to year-to-year variation",
              units: "kWh",
            },
            l_aoi: { description: "Angle of incidence loss", units: "%" },
            l_spec: { description: "Spectral loss", units: "%" },
            l_tg: {
              description: "Temperature and irradiance loss",
              units: "%",
            },
            l_total: { description: "Total loss", units: "%" },
          },
        },
      },
    },
  };
  generation_day: any = {
    inputs: {
      location: { latitude: 42.052, longitude: 1.625, elevation: 981.0 },
      meteo_data: {
        radiation_db: "PVGIS-SARAH",
        meteo_db: "ERA-Interim",
        year_min: 2005,
        year_max: 2016,
        use_horizon: true,
        horizon_db: "DEM-calculated",
      },
      plane: {
        fixed: {
          slope: { value: 35.0, optimal: false },
          azimuth: { value: 0.0, optimal: false },
        },
      },
      time_format: "UTC",
    },
    outputs: {
      daily_profile: [
        {
          month: 7,
          time: "00:00",
          "G(i)": 0.0,
          "Gb(i)": 0.0,
          "Gd(i)": 0.0,
          "Gcs(i)": 0.0,
        },
        {
          month: 7,
          time: "01:00",
          "G(i)": 0.0,
          "Gb(i)": 0.0,
          "Gd(i)": 0.0,
          "Gcs(i)": 0.0,
        },
        {
          month: 7,
          time: "02:00",
          "G(i)": 0.0,
          "Gb(i)": 0.0,
          "Gd(i)": 0.0,
          "Gcs(i)": 0.0,
        },
        {
          month: 7,
          time: "03:00",
          "G(i)": 0.0,
          "Gb(i)": 0.0,
          "Gd(i)": 0.0,
          "Gcs(i)": 0.0,
        },
        {
          month: 7,
          time: "04:00",
          "G(i)": 0.0,
          "Gb(i)": 0.0,
          "Gd(i)": 0.0,
          "Gcs(i)": 14.08,
        },
        {
          month: 7,
          time: "05:00",
          "G(i)": 24.68,
          "Gb(i)": 0.0,
          "Gd(i)": 24.17,
          "Gcs(i)": 52.23,
        },
        {
          month: 7,
          time: "06:00",
          "G(i)": 103.82,
          "Gb(i)": 32.17,
          "Gd(i)": 68.3,
          "Gcs(i)": 220.86,
        },
        {
          month: 7,
          time: "07:00",
          "G(i)": 281.89,
          "Gb(i)": 158.39,
          "Gd(i)": 117.14,
          "Gcs(i)": 450.46,
        },
        {
          month: 7,
          time: "08:00",
          "G(i)": 476.48,
          "Gb(i)": 312.16,
          "Gd(i)": 154.96,
          "Gcs(i)": 671.35,
        },
        {
          month: 7,
          time: "09:00",
          "G(i)": 663.52,
          "Gb(i)": 470.24,
          "Gd(i)": 181.15,
          "Gcs(i)": 852.47,
        },
        {
          month: 7,
          time: "10:00",
          "G(i)": 796.59,
          "Gb(i)": 579.93,
          "Gd(i)": 202.63,
          "Gcs(i)": 975.15,
        },
        {
          month: 7,
          time: "11:00",
          "G(i)": 878.4,
          "Gb(i)": 643.64,
          "Gd(i)": 219.55,
          "Gcs(i)": 1029.03,
        },
        {
          month: 7,
          time: "12:00",
          "G(i)": 887.85,
          "Gb(i)": 649.53,
          "Gd(i)": 223.01,
          "Gcs(i)": 1010.05,
        },
        {
          month: 7,
          time: "13:00",
          "G(i)": 835.13,
          "Gb(i)": 599.32,
          "Gd(i)": 221.27,
          "Gcs(i)": 919.63,
        },
        {
          month: 7,
          time: "14:00",
          "G(i)": 715.54,
          "Gb(i)": 494.34,
          "Gd(i)": 208.42,
          "Gcs(i)": 764.89,
        },
        {
          month: 7,
          time: "15:00",
          "G(i)": 560.5,
          "Gb(i)": 366.39,
          "Gd(i)": 183.62,
          "Gcs(i)": 560.15,
        },
        {
          month: 7,
          time: "16:00",
          "G(i)": 380.28,
          "Gb(i)": 224.95,
          "Gd(i)": 147.58,
          "Gcs(i)": 329.83,
        },
        {
          month: 7,
          time: "17:00",
          "G(i)": 202.97,
          "Gb(i)": 99.88,
          "Gd(i)": 98.1,
          "Gcs(i)": 114.35,
        },
        {
          month: 7,
          time: "18:00",
          "G(i)": 59.02,
          "Gb(i)": 0.0,
          "Gd(i)": 57.8,
          "Gcs(i)": 33.2,
        },
        {
          month: 7,
          time: "19:00",
          "G(i)": 5.29,
          "Gb(i)": 0.0,
          "Gd(i)": 5.18,
          "Gcs(i)": 0.0,
        },
        {
          month: 7,
          time: "20:00",
          "G(i)": 0.0,
          "Gb(i)": 0.0,
          "Gd(i)": 0.0,
          "Gcs(i)": 0.0,
        },
        {
          month: 7,
          time: "21:00",
          "G(i)": 0.0,
          "Gb(i)": 0.0,
          "Gd(i)": 0.0,
          "Gcs(i)": 0.0,
        },
        {
          month: 7,
          time: "22:00",
          "G(i)": 0.0,
          "Gb(i)": 0.0,
          "Gd(i)": 0.0,
          "Gcs(i)": 0.0,
        },
        {
          month: 7,
          time: "23:00",
          "G(i)": 0.0,
          "Gb(i)": 0.0,
          "Gd(i)": 0.0,
          "Gcs(i)": 0.0,
        },
      ],
    },
    meta: {
      inputs: {
        location: {
          description: "Selected location",
          variables: {
            latitude: { description: "Latitude", units: "decimal degree" },
            longitude: { description: "Longitude", units: "decimal degree" },
            elevation: { description: "Elevation", units: "m" },
          },
        },
        meteo_data: {
          description: "Sources of meteorological data",
          variables: {
            radiation_db: { description: "Solar radiation database" },
            meteo_db: {
              description:
                "Database used for meteorological variables other than solar radiation",
            },
            year_min: { description: "First year of the calculations" },
            year_max: { description: "Last year of the calculations" },
            use_horizon: { description: "Include horizon shadows" },
            horizon_db: { description: "Source of horizon data" },
          },
        },
        plane: {
          description: "plane",
          fields: {
            slope: {
              description: "Inclination angle from the horizontal plane",
              units: "degree",
            },
            azimuth: {
              description:
                "Orientation (azimuth) angle of the (fixed) PV system (0 = S, 90 = W, -90 = E)",
              units: "degree",
            },
          },
        },
        time_format: [{ description: "Local or UTC" }],
      },
      outputs: {
        daily_profile: {
          type: "time series",
          timestamp: "hourly",
          variables: {
            "G(i)": {
              description: " Global irradiance on a fixed plane",
              units: "W/m2",
            },
            "Gb(i)": {
              description: "Direct irradiance on a fixed plane",
              units: "W/m2",
            },
            "Gd(i)": {
              description: "Diffuse irradiance on a fixed plane",
              units: "W/m2",
            },
            "Gcs(i)": {
              description: "Global clear-sky irradiance on a fixed plane",
              units: "W/m2",
            },
          },
        },
      },
    },
  };
  num_placas: number = 3;
  w_placa: number = 400;

  constructor(public http: HTTP, private ref: ChangeDetectorRef) {
    this.init();
  }

  async init() {
    await this.getConsumption();
    this.createYearChart();
    this.createDayChart();
    console.log(this.generation);
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

  updateCharts() {
    this.createYearChart();
    this.createDayChart();
  }

  createYearChart() {
    const datasets = this.consumption.periods
      .map((period) => ({
        stack: true,
        label: period.period.price_type_name,
        data: period.months.map((month) => month.value.consumption || 0),
        backgroundColor:
          period.period.price_type_name === "Punta"
            ? "rgb(0, 179, 47)"
            : "rgb(35, 235, 88)",
      }))
      .concat([
        {
          stack: false,
          label: "Generación",
          data: this.generation.outputs.monthly.fixed.map(
            (month) =>
              (month.E_m || 0) * ((this.num_placas * this.w_placa) / 1000)
          ),
          backgroundColor: "rgb(94, 236, 255)",
        },
      ]);

    if (this.yearBars) {
      this.yearBars.data.datasets = datasets;
      this.yearBars.update();
    } else {
      const ctx = this.yearChart.nativeElement;
      ctx.height = 200;
      this.yearBars = new Chart(this.yearChart.nativeElement, {
        type: "bar",
        data: {
          labels: this.consumption.periods[0].months.map(
            (month) => month.month_label
          ),
          datasets,
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

  createDayChart() {
    const datasets = this.consumption_day.periods
      .map((period) => ({
        stack: true,
        label: period.period.price_type_name,
        data: period.hour.map((hour) => hour.value.consumption || 0),
        backgroundColor:
          period.period.price_type_name === "Punta"
            ? "rgb(0, 179, 47)"
            : "rgb(35, 235, 88)",
      }))
      .concat([
        {
          stack: false,
          label: "Generación",
          data: this.generation_day.outputs.daily_profile.map(
            (hour) =>
              ((hour["G(i)"] || 0) / 1000) *
              ((this.num_placas * this.w_placa) / 1000)
          ),
          backgroundColor: "rgb(94, 236, 255)",
        },
      ]);
    if (this.dayBars) {
      this.dayBars.data.datasets = datasets;
      this.dayBars.update();
    } else {
      const ctx = this.dayChart.nativeElement;
      ctx.height = 200;
      this.dayBars = new Chart(this.dayChart.nativeElement, {
        type: "bar",
        data: {
          labels: this.consumption_day.periods[0].hour.map(
            (hour) => hour.hour + ""
          ),
          datasets,
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
}
