function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab1Tab1PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Consumo\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Consumo</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle>{{consumption.from | date:'MMM yyyy'}} - {{consumption.to | date:'MMM yyyy'}}</ion-card-subtitle>\n      <ion-card-title>Resumen</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-text>Consumo medio: <b>{{consumption.summary.average_consumption}} kWh</b></ion-text><br><br>\n\n      <ion-text>Consumo total: <b>{{consumption.summary.consumption}} kWh</b></ion-text><br>\n      <ion-text *ngFor=\"let period of consumption.periods\">{{period.period.price_type_name}}: <b>{{period.period.consumption}} kWh</b><br></ion-text>\n\n      <canvas #anuallyChart></canvas>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-slides pager=\"true\">\n    <ion-slide *ngFor=\"let month of months\">\n      <div style=\"text-align:left;width:100vw\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title>{{month.friendly_month_name}}</ion-card-title>\n          </ion-card-header>\n\n          <ion-card-content>\n            <ion-text>Punta: <b>{{month.value.consum}} kWh</b></ion-text><br>\n            <ion-text>Valle: <b>{{month.value | json}} kWh</b></ion-text>\n          </ion-card-content>\n        </ion-card>\n      </div>\n    </ion-slide>\n  </ion-slides>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/tab1/tab1-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/tab1/tab1-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: Tab1PageRoutingModule */

  /***/
  function srcAppTab1Tab1RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function () {
      return Tab1PageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tab1.page */
    "./src/app/tab1/tab1.page.ts");

    var routes = [{
      path: '',
      component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"]
    }];

    var Tab1PageRoutingModule = function Tab1PageRoutingModule() {
      _classCallCheck(this, Tab1PageRoutingModule);
    };

    Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Tab1PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tab1/tab1.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tab1/tab1.module.ts ***!
    \*************************************/

  /*! exports provided: Tab1PageModule */

  /***/
  function srcAppTab1Tab1ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function () {
      return Tab1PageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tab1.page */
    "./src/app/tab1/tab1.page.ts");
    /* harmony import */


    var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../explore-container/explore-container.module */
    "./src/app/explore-container/explore-container.module.ts");
    /* harmony import */


    var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./tab1-routing.module */
    "./src/app/tab1/tab1-routing.module.ts");

    var Tab1PageModule = function Tab1PageModule() {
      _classCallCheck(this, Tab1PageModule);
    };

    Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"], _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"]],
      declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
    })], Tab1PageModule);
    /***/
  },

  /***/
  "./src/app/tab1/tab1.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tab1/tab1.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab1Tab1PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/tab1/tab1.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tab1/tab1.page.ts ***!
    \***********************************/

  /*! exports provided: Tab1Page */

  /***/
  function srcAppTab1Tab1PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab1Page", function () {
      return Tab1Page;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! chart.js */
    "./node_modules/chart.js/dist/Chart.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_3__);

    var Tab1Page = /*#__PURE__*/function () {
      function Tab1Page(http, ref) {
        _classCallCheck(this, Tab1Page);

        this.http = http;
        this.ref = ref;
        this.consumption = {
          periods: [{
            period: {
              predicted_consumption: 63.661,
              predicted_generation: 0,
              price_type: "normal",
              price_type_name: "Punta",
              period_name: "P1",
              consumption: 63.661,
              generation: 0
            },
            months: [{
              month: "2020-01",
              month_label: "ENE \n\r 2020",
              value: {
                predicted_consumption: 0,
                predicted_generation: 0,
                display: "no_data"
              },
              friendly_month_name: "enero 2020"
            }, {
              month: "2020-02",
              month_label: "FEB",
              value: {
                predicted_consumption: 0,
                predicted_generation: 0,
                display: "no_data"
              },
              friendly_month_name: "febrero 2020"
            }, {
              month: "2020-03",
              month_label: "MAR",
              value: {
                predicted_consumption: 0,
                predicted_generation: 0,
                display: "no_data"
              },
              friendly_month_name: "marzo 2020"
            }, {
              month: "2020-04",
              month_label: "ABR",
              value: {
                predicted_consumption: 0,
                predicted_generation: 0,
                display: "no_data"
              },
              friendly_month_name: "abril 2020"
            }, {
              month: "2020-05",
              month_label: "MAY",
              value: {
                predicted_consumption: 0,
                predicted_generation: 0,
                display: "no_data"
              },
              friendly_month_name: "mayo 2020"
            }, {
              month: "2020-06",
              month_label: "JUN",
              value: {
                predicted_consumption: 0,
                predicted_generation: 0,
                display: "no_data"
              },
              friendly_month_name: "junio 2020"
            }, {
              month: "2020-07",
              month_label: "JUL",
              value: {
                consumption: 63.661,
                predicted_consumption: 63.661,
                generation: 0,
                predicted_generation: 0,
                display: "provisional"
              },
              end_date: "2020-07-31",
              friendly_month_name: "julio 2020"
            }, {
              month: "2020-08",
              month_label: "AGO",
              value: {
                predicted_consumption: 0,
                predicted_generation: 0,
                display: "no_data"
              },
              friendly_month_name: "agosto 2020"
            }, {
              month: "2020-09",
              month_label: "SEP",
              value: {
                predicted_consumption: 0,
                predicted_generation: 0,
                display: "no_data"
              },
              friendly_month_name: "septiembre 2020"
            }, {
              month: "2020-10",
              month_label: "OCT",
              value: {
                predicted_consumption: 0,
                predicted_generation: 0,
                display: "no_data"
              },
              friendly_month_name: "octubre 2020"
            }, {
              month: "2020-11",
              month_label: "NOV",
              value: {
                predicted_consumption: 0,
                predicted_generation: 0,
                display: "no_data"
              },
              friendly_month_name: "noviembre 2020"
            }, {
              month: "2020-12",
              month_label: "DIC",
              value: {
                predicted_consumption: 0,
                predicted_generation: 0,
                display: "no_data"
              },
              friendly_month_name: "diciembre 2020"
            }]
          }, {
            period: {
              predicted_consumption: 86.18,
              predicted_generation: 0,
              price_type: "reduced",
              price_type_name: "Valle",
              period_name: "P2",
              consumption: 86.18,
              generation: 0
            },
            months: [{
              month: "2020-01",
              month_label: "ENE \n\r 2020",
              value: {
                predicted_consumption: 0,
                predicted_generation: 0,
                display: "no_data"
              },
              friendly_month_name: "enero 2020"
            }, {
              month: "2020-02",
              month_label: "FEB",
              value: {
                predicted_consumption: 0,
                predicted_generation: 0,
                display: "no_data"
              },
              friendly_month_name: "febrero 2020"
            }, {
              month: "2020-03",
              month_label: "MAR",
              value: {
                predicted_consumption: 0,
                predicted_generation: 0,
                display: "no_data"
              },
              friendly_month_name: "marzo 2020"
            }, {
              month: "2020-04",
              month_label: "ABR",
              value: {
                predicted_consumption: 0,
                predicted_generation: 0,
                display: "no_data"
              },
              friendly_month_name: "abril 2020"
            }, {
              month: "2020-05",
              month_label: "MAY",
              value: {
                predicted_consumption: 0,
                predicted_generation: 0,
                display: "no_data"
              },
              friendly_month_name: "mayo 2020"
            }, {
              month: "2020-06",
              month_label: "JUN",
              value: {
                predicted_consumption: 0,
                predicted_generation: 0,
                display: "no_data"
              },
              friendly_month_name: "junio 2020"
            }, {
              month: "2020-07",
              month_label: "JUL",
              value: {
                consumption: 86.18,
                predicted_consumption: 86.18,
                generation: 0,
                predicted_generation: 0,
                display: "provisional"
              },
              end_date: "2020-07-31",
              friendly_month_name: "julio 2020"
            }, {
              month: "2020-08",
              month_label: "AGO",
              value: {
                predicted_consumption: 0,
                predicted_generation: 0,
                display: "no_data"
              },
              friendly_month_name: "agosto 2020"
            }, {
              month: "2020-09",
              month_label: "SEP",
              value: {
                predicted_consumption: 0,
                predicted_generation: 0,
                display: "no_data"
              },
              friendly_month_name: "septiembre 2020"
            }, {
              month: "2020-10",
              month_label: "OCT",
              value: {
                predicted_consumption: 0,
                predicted_generation: 0,
                display: "no_data"
              },
              friendly_month_name: "octubre 2020"
            }, {
              month: "2020-11",
              month_label: "NOV",
              value: {
                predicted_consumption: 0,
                predicted_generation: 0,
                display: "no_data"
              },
              friendly_month_name: "noviembre 2020"
            }, {
              month: "2020-12",
              month_label: "DIC",
              value: {
                predicted_consumption: 0,
                predicted_generation: 0,
                display: "no_data"
              },
              friendly_month_name: "diciembre 2020"
            }]
          }],
          forecast: {
            predicted_consumption: 149.841,
            predicted_generation: 0
          },
          from: "2020-01",
          to: "2020-12",
          total_months: 12,
          summary: {
            consumption: 149.841,
            average_consumption: 12.48675,
            generation: 0,
            average_generation: 0
          }
        };
        this.init();
      }

      _createClass(Tab1Page, [{
        key: "init",
        value: function init() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.getConsumption();

                  case 2:
                    this.createBarChart();

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getConsumption",
        value: function getConsumption() {
          var _this = this;

          return new Promise(function (resolve, reject) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var data;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!this.consumption) {
                        _context2.next = 4;
                        break;
                      }

                      resolve(this.consumption);
                      _context2.next = 10;
                      break;

                    case 4:
                      _context2.next = 6;
                      return this.http.get("https://dashboard-api.lucera.es/v1/contracts/electricity/61837/consumption/months?from=2020-01&to=2020-12", {}, {})["catch"](function (err) {
                        console.log(err);
                        reject(err);
                      });

                    case 6:
                      data = _context2.sent;
                      this.consumption = data;
                      this.ref.detectChanges();
                      resolve(data);

                    case 10:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          });
        }
      }, {
        key: "createBarChart",
        value: function createBarChart() {
          var ctx = this.barChart.nativeElement;
          ctx.height = 200;
          this.bars = new chart_js__WEBPACK_IMPORTED_MODULE_3__["Chart"](this.barChart.nativeElement, {
            type: "bar",
            data: {
              labels: this.consumption.periods[0].months.map(function (month) {
                return month.month_label;
              }),
              datasets: this.consumption.periods.map(function (period) {
                return {
                  stack: true,
                  label: period.period.price_type_name,
                  data: period.months.map(function (month) {
                    return month.value.consumption || 0;
                  }),
                  backgroundColor: period.period.price_type_name === "Punta" ? "rgb(247, 105, 69)" : "rgb(35, 235, 88)"
                };
              })
            },
            options: {
              scales: {
                xAxes: {
                  stacked: true
                },
                yAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }]
              }
            }
          });
        }
      }]);

      return Tab1Page;
    }();

    Tab1Page.ctorParameters = function () {
      return [{
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("anuallyChart")], Tab1Page.prototype, "barChart", void 0);
    Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-tab1",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tab1.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tab1.page.scss */
      "./src/app/tab1/tab1.page.scss"))["default"]]
    })], Tab1Page);
    /***/
  }
}]);
//# sourceMappingURL=tab1-tab1-module-es5.js.map