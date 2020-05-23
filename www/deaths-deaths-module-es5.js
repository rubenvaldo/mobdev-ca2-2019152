function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["deaths-deaths-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/deaths/deaths.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/deaths/deaths.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDeathsDeathsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar color=\"primary\">\n\t\t<ion-title>Death Count</ion-title>\n\t</ion-toolbar>\n\t<ion-toolbar>\n\t\t<ion-searchbar [(ngModel)]=\"name\" (ionChange)=\"ngOnInit($event)\"\n\t\t\tplaceholder=\"Search by Name (e.g Walter White)\"></ion-searchbar>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n\t<ion-card *ngFor=\"let death of deaths | async\" class=\"movie-card\">\n\n\t\t<ion-item class=\"movie-info\" lines=\"none\">\n\t\t\t<ion-icon name=\"skull-outline\" slot=\"start\"></ion-icon>\n\t\t\tName: {{ death.name }}\n\t\t</ion-item>\n\n\t\t<ion-item class=\"movie-info\" lines=\"none\">\n\t\t\t<ion-icon name=\"person-outline\" slot=\"start\"></ion-icon>\n\t\t\tDeath Count: {{ death.deathCount }}\n\t\t</ion-item>\n\t</ion-card>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/deaths/deaths-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/deaths/deaths-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: DeathsPageRoutingModule */

  /***/
  function srcAppPagesDeathsDeathsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeathsPageRoutingModule", function () {
      return DeathsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _deaths_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./deaths.page */
    "./src/app/pages/deaths/deaths.page.ts");

    var routes = [{
      path: '',
      component: _deaths_page__WEBPACK_IMPORTED_MODULE_3__["DeathsPage"]
    }];

    var DeathsPageRoutingModule = function DeathsPageRoutingModule() {
      _classCallCheck(this, DeathsPageRoutingModule);
    };

    DeathsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DeathsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/deaths/deaths.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/deaths/deaths.module.ts ***!
    \***********************************************/

  /*! exports provided: DeathsPageModule */

  /***/
  function srcAppPagesDeathsDeathsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeathsPageModule", function () {
      return DeathsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _deaths_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./deaths-routing.module */
    "./src/app/pages/deaths/deaths-routing.module.ts");
    /* harmony import */


    var _deaths_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./deaths.page */
    "./src/app/pages/deaths/deaths.page.ts");

    var DeathsPageModule = function DeathsPageModule() {
      _classCallCheck(this, DeathsPageModule);
    };

    DeathsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _deaths_routing_module__WEBPACK_IMPORTED_MODULE_5__["DeathsPageRoutingModule"]],
      declarations: [_deaths_page__WEBPACK_IMPORTED_MODULE_6__["DeathsPage"]]
    })], DeathsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/deaths/deaths.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/deaths/deaths.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDeathsDeathsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RlYXRocy9kZWF0aHMucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/deaths/deaths.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/deaths/deaths.page.ts ***!
    \*********************************************/

  /*! exports provided: DeathsPage */

  /***/
  function srcAppPagesDeathsDeathsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeathsPage", function () {
      return DeathsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/api.service */
    "./src/app/services/api.service.ts"); // Reference from : https://mikhail-cct.github.io/mobdev/wk4/#/38 


    var DeathsPage = /*#__PURE__*/function () {
      function DeathsPage(router, api, activatedRoute) {
        _classCallCheck(this, DeathsPage);

        this.router = router;
        this.api = api;
        this.activatedRoute = activatedRoute;
        this.name = '';
      }

      _createClass(DeathsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.deaths = this.api.getDeathCount(this.name);
          this.deaths.subscribe(function (data) {
            console.log('my data', data);
          });
        }
      }]);

      return DeathsPage;
    }();

    DeathsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    DeathsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-deaths',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./deaths.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/deaths/deaths.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./deaths.page.scss */
      "./src/app/pages/deaths/deaths.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], DeathsPage);
    /***/
  },

  /***/
  "./src/app/services/api.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/api.service.ts ***!
    \*****************************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppServicesApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js"); // Reference from : https://mikhail-cct.github.io/mobdev/wk4/#/36 


    var ApiService = /*#__PURE__*/function () {
      function ApiService(http) {
        _classCallCheck(this, ApiService);

        this.http = http;
      }

      _createClass(ApiService, [{
        key: "getEpisodes",
        value: function getEpisodes() {
          return this.http.get("https://www.breakingbadapi.com/api/episodes");
        }
      }, {
        key: "getEpisode",
        value: function getEpisode(id) {
          return this.http.get("https://www.breakingbadapi.com/api/episodes/".concat(id));
        }
      }, {
        key: "getCharacters",
        value: function getCharacters(limit, offset) {
          return this.http.get("https://breakingbadapi.com/api/characters?limit=".concat(limit, "&offset=").concat(offset));
        }
      }, {
        key: "getCharacter",
        value: function getCharacter(id) {
          return this.http.get("https://www.breakingbadapi.com/api/characters/".concat(id));
        }
      }, {
        key: "getQuotes",
        value: function getQuotes() {
          var _this = this;

          this.http.get('https://breakingbadapi.com/api/quotes').subscribe(function (data) {
            _this.allQuotes = data;
          });
          return this.http.get('https://breakingbadapi.com/api/quotes');
        }
      }, {
        key: "getQuote",
        value: function getQuote(id) {
          return this.http.get("https://www.breakingbadapi.com/api/quotes/".concat(id));
        }
      }, {
        key: "getQuoteSearch",
        value: function getQuoteSearch(author) {
          var selectedQuotes = [];

          var _iterator = _createForOfIteratorHelper(this.allQuotes),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var quote = _step.value;

              if (quote.author.toLowerCase().includes(author.toLowerCase())) {
                selectedQuotes.push(quote);
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(selectedQuotes);
        }
      }, {
        key: "getDeathCount",
        value: function getDeathCount(name) {
          return this.http.get("https://breakingbadapi.com/api/death-count?name=".concat(name));
        }
      }]);

      return ApiService;
    }();

    ApiService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ApiService);
    /***/
  }
}]);
//# sourceMappingURL=deaths-deaths-module-es5.js.map