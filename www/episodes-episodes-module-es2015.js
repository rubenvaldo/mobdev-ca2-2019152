(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["episodes-episodes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/episodes/episodes.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/episodes/episodes.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar color=\"primary\">\n\t\t<ion-title>Episodes</ion-title>\n\t</ion-toolbar>\n</ion-header>\n<ion-content>\n\t<ion-list>\n\t\t<ion-item button detail lines=\"inset\" *ngFor=\"let episode of episodes | async\" (click)=\"openDetails(episode)\">\n\t\t\t<ion-label>\n\t\t\t\t<h2>{{ episode.title }}</h2>\n\t\t\t\t<ion-card-subtitle style=\"float: left;\">\n\t\t\t\t\t<p>S{{ episode.season }}E{{ episode.episode }}</p>\n\t\t\t\t</ion-card-subtitle>\n\t\t\t</ion-label>\n\t\t</ion-item>\n\t</ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/episodes/episodes-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/episodes/episodes-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: EpisodesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpisodesPageRoutingModule", function() { return EpisodesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _episodes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./episodes.page */ "./src/app/pages/episodes/episodes.page.ts");




const routes = [
    {
        path: '',
        component: _episodes_page__WEBPACK_IMPORTED_MODULE_3__["EpisodesPage"]
    }
];
let EpisodesPageRoutingModule = class EpisodesPageRoutingModule {
};
EpisodesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EpisodesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/episodes/episodes.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/episodes/episodes.module.ts ***!
  \***************************************************/
/*! exports provided: EpisodesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpisodesPageModule", function() { return EpisodesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _episodes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./episodes-routing.module */ "./src/app/pages/episodes/episodes-routing.module.ts");
/* harmony import */ var _episodes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./episodes.page */ "./src/app/pages/episodes/episodes.page.ts");







let EpisodesPageModule = class EpisodesPageModule {
};
EpisodesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _episodes_routing_module__WEBPACK_IMPORTED_MODULE_5__["EpisodesPageRoutingModule"]
        ],
        declarations: [_episodes_page__WEBPACK_IMPORTED_MODULE_6__["EpisodesPage"]]
    })
], EpisodesPageModule);



/***/ }),

/***/ "./src/app/pages/episodes/episodes.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/episodes/episodes.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VwaXNvZGVzL2VwaXNvZGVzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/episodes/episodes.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/episodes/episodes.page.ts ***!
  \*************************************************/
/*! exports provided: EpisodesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpisodesPage", function() { return EpisodesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");




let EpisodesPage = class EpisodesPage {
    constructor(router, api) {
        this.router = router;
        this.api = api;
    }
    ngOnInit() {
        this.episodes = this.api.getEpisodes();
        this.episodes.subscribe(data => {
            console.log('my data', data);
        });
    }
    openDetails(episode) {
        let episodeId = episode.episode_id;
        this.router.navigateByUrl(`/tabs/episodes/${episodeId}`);
    }
};
EpisodesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
EpisodesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-episodes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./episodes.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/episodes/episodes.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./episodes.page.scss */ "./src/app/pages/episodes/episodes.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
], EpisodesPage);



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
// Reference from : https://mikhail-cct.github.io/mobdev/wk4/#/36 




let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
    }
    getEpisodes() {
        return this.http.get(`https://www.breakingbadapi.com/api/episodes`);
    }
    getEpisode(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/episodes/${id}`);
    }
    getCharacters(limit, offset) {
        return this.http.get(`https://breakingbadapi.com/api/characters?limit=${limit}&offset=${offset}`);
    }
    getCharacter(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/characters/${id}`);
    }
    getQuotes() {
        this.http.get(('https://breakingbadapi.com/api/quotes')).subscribe(data => {
            this.allQuotes = data;
        });
        return this.http.get('https://breakingbadapi.com/api/quotes');
    }
    getQuote(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/quotes/${id}`);
    }
    getQuoteSearch(author) {
        let selectedQuotes = [];
        for (let quote of this.allQuotes) {
            if (quote.author.toLowerCase().includes(author.toLowerCase())) {
                selectedQuotes.push(quote);
            }
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(selectedQuotes);
    }
    getDeathCount(name) {
        return this.http.get(`https://breakingbadapi.com/api/death-count?name=${name}`);
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ApiService);



/***/ })

}]);
//# sourceMappingURL=episodes-episodes-module-es2015.js.map