(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron\">\n  <h1 class=\"display-3\">Hello, world!</h1>\n  <p class=\"lead\">\n    Welcome in our company! This is our company portal. Everything you need in next few days should be available here.\n    Check out <a href=\"#\">News</a>, <a href=\"#\">Issues</a> and <a href=\"#\">Configuration</a> pages first.\n  </p>\n  <hr class=\"my-4\">\n  <p>Pssst. If you need help you can always visit your personal onboarding page.</p>\n  <p class=\"lead\">\n    <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">\n      Your personal onboarding page\n    </a>\n  </p>\n</div>\n\n<ng-container *ngIf=\"messages.length > 0\">\n  <ul class=\"list-group\">\n    <li *ngFor=\"let message of messages\" class=\"list-group-item d-flex justify-content-between align-items-center\">\n      <div>\n        <strong class=\"text-info\" style=\"width: 120px; display: inline-block;\">{{ message.from }}</strong>\n        <strong>{{ message.subject }}</strong>\n        <span class=\"text-muted\">\n        {{ message.text }}\n      </span>\n      </div>\n      <span class=\"badge badge-primary badge-pill\"\n            [class.badge-danger]=\"message.count > 5\">\n      {{ message.count }}\n    </span>\n    </li>\n  </ul>\n  <div class=\"text-center mt-3\">\n    <button class=\"btn btn-primary\">Load more</button>\n  </div>\n</ng-container>\n<div class=\"alert alert-dismissible alert-secondary\" *ngIf=\"messages.length === 0\">\n  Loading...\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/footer/footer/footer.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/footer/footer/footer.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<hr>\n<div class=\"text-muted\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <h6>\n        Copyright: Software House Company\n      </h6>\n    </div>\n    <div class=\"col-auto\">\n      <h6>\n        ng-poland 2019\n      </h6>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col text-muted\">\n      All rights reserved\n    </div>\n    <div class=\"col-auto\">\n        <a class=\"text-muted\" href=\"https://github.com/galczo5/ngpoland2019\">github.com/galczo5/ngpoland2019</a>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-4\">\n      <hr>\n    </div>\n  </div>\n\n  <div class=\"text-muted mt-1\">\n    <a href=\"#\" class=\"mr-3 text-muted\">Home</a>\n    <a href=\"#\" class=\"mr-3 text-muted\">News</a>\n    <a href=\"#\" class=\"mr-3 text-muted\">Issues</a>\n    <a href=\"#\" class=\"mr-3 text-muted\">Configuration</a>\n  </div>\n  <div class=\"form-inline mt-2\">\n    <label class=\"mr-3\">Search:</label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"...\">\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/gdpr/modal/gdpr-modal.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/gdpr/modal/gdpr-modal.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"modalVisible\">\n  <div class=\"modal\" style=\"display: block;\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\">Software House Company - GDPR policy</h5>\n        </div>\n        <div class=\"modal-body\" style=\"max-height: 600px; overflow-y: auto;\">\n          <p>\n            Our Company is part of the Our Company Group which includes Our Company International and Our Company Direct. This privacy policy will explain how our organization uses the personal data we collect from you when you use our website.\n          </p>\n          <p>\n            The right to access – You have the right to request Our Company for copies of your personal data. We may charge you a small fee for this service.\n          </p>\n          <p>\n            The right to rectification – You have the right to request that Our Company correct any information you believe is inaccurate. You also have the right to request Our Company to complete the information you believe is incomplete.\n          </p>\n          <p>\n            The right to erasure – You have the right to request that Our Company erase your personal data, under certain conditions.\n          </p>\n          <p class=\"text-muted\">\n            Rest of GDPR stuff...\n          </p>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-success\" (click)=\"close()\">Agree</button>\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-backdrop\" style=\"opacity: .5\"></div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/header/configuration/user-settings/user-settings.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/header/configuration/user-settings/user-settings.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal\" style=\"display: block;\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Configuration</h5>\n      </div>\n      <div class=\"modal-body\">\n\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label>First name</label>\n              <input class=\"form-control\" value=\"John\">\n            </div>\n          </div>\n          <div class=\"col\">\n            <div class=\"form-group\">\n              <label>Last name</label>\n              <input class=\"form-control\" value=\"Doe\">\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label>Language</label>\n          <select class=\"form-control\">\n            <option>English</option>\n            <option>Polish</option>\n          </select>\n        </div>\n\n        <div class=\"form-group has-success\">\n          <label class=\"form-control-label text-success\">Application token</label>\n          <input type=\"password\" value=\"***********************\" class=\"form-control is-valid text-success\">\n          <div class=\"valid-feedback\">Success! Token valid.</div>\n        </div>\n\n        <div class=\"form-group\">\n          <label>Widget</label>\n          <div class=\"form-check pl-0\">\n            <label class=\"form-check-label\" (click)=\"setWidget('news')\">\n              <input type=\"radio\" class=\"form-check-input\" name=\"widget\" checked *ngIf=\"activeWidget === Widget.NEWS\">\n              <input type=\"radio\" class=\"form-check-input\" name=\"widget\" *ngIf=\"activeWidget !== Widget.NEWS\">\n              Company news\n            </label>\n          </div>\n          <div class=\"form-check pl-0\">\n            <label class=\"form-check-label\" (click)=\"setWidget('activities')\">\n              <input type=\"radio\" class=\"form-check-input\" name=\"widget\" checked *ngIf=\"activeWidget === Widget.ACTIVITIES\">\n              <input type=\"radio\" class=\"form-check-input\" name=\"widget\" *ngIf=\"activeWidget !== Widget.ACTIVITIES\">\n              Your activity\n            </label>\n          </div>\n        </div>\n\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"saveChanges()\">Save changes</button>\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal-backdrop\" style=\"opacity: .5\"></div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/header/header/header.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/header/header/header.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n  <a class=\"navbar-brand\" href=\"#\">Software House Company</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor03\" aria-controls=\"navbarColor03\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor03\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">News</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Issues</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" (click)=\"openConfiguartion()\">Configuration</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\n    </form>\n  </div>\n</nav>\n\n<ol class=\"breadcrumb mt-3\">\n  <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\n  <li class=\"breadcrumb-item active\">News</li>\n</ol>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/widgets/activities/activities-list/activities-list.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/widgets/activities/activities-list/activities-list.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"activities.length > 0\">\n  <div class=\"list-group\">\n    <app-activity *ngFor=\"let activity of activities; let i = index\"\n                  [activity]=\"activity\"\n                  [active]=\"i%2 === 0\"></app-activity>\n  </div>\n\n  <h4 class=\"mt-5\">Recently closed:</h4>\n  <div class=\"list-group\">\n    <app-activity *ngFor=\"let activity of closedActivities; let i = index\"\n                  [activity]=\"activity\"\n                  [active]=\"i%2 === 0\"></app-activity>\n  </div>\n</ng-container>\n<div *ngIf=\"activities.length === 0\">\n  <div class=\"alert alert-dismissible alert-secondary\">\n    <strong>No new activities!</strong> <br>\n    Last update: {{ fetchDate | date: 'HH:mm:ss' }} <br>\n    Next refresh in few seconds...\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/widgets/activities/activity-widget/activity-widget.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/widgets/activities/activity-widget/activity-widget.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-activities-list></app-activities-list>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/widgets/activities/activity/activity.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/widgets/activities/activity/activity.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a href=\"#\" class=\"list-group-item list-group-item-action flex-column align-items-start\"\n   [class.active]=\"active\">\n  <div class=\"d-flex w-100 justify-content-between\">\n    <h5 class=\"mb-1\">\n      {{ activity.header }}\n    </h5>\n    <small>{{ activity.date | date }}</small>\n  </div>\n  <p class=\"mb-1 text-muted\">{{ activity.text }}</p>\n  <small class=\"text-muted\">{{ activity.subtext }}</small>\n</a>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/widgets/news/news-list/news-list.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/widgets/news/news-list/news-list.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"news.length > 0\">\n  <app-news *ngFor=\"let n of news\" [news]=\"n\"></app-news>\n  <h6 *ngIf=\"fetchDate\" class=\"text-right text-muted\">\n    Last update: {{ fetchDate | date: 'HH:mm:ss' }}\n  </h6>\n</ng-container>\n\n\n<div *ngIf=\"news.length === 0\">\n  <div class=\"alert alert-dismissible alert-secondary\">\n    <strong>No new news!</strong> <br>\n    Last update: {{ fetchDate | date: 'HH:mm:ss' }} <br>\n    Next refresh in few seconds...\n  </div>\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/widgets/news/news-widget/news-widget.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/widgets/news/news-widget/news-widget.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-news-list></app-news-list>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/widgets/news/news/news.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/widgets/news/news/news.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"alert alert-dismissible alert-info\"\n     [class.alert-danger]=\"news.important\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n  <h4 class=\"alert-heading\">\n    {{ news.header }}\n  </h4>\n  <p class=\"mb-0\">\n    {{ news.text }}\n  </p>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _inbox_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inbox.service */ "./src/app/inbox.service.ts");



let AppComponent = class AppComponent {
    constructor(viewContainerRef, inboxService) {
        this.viewContainerRef = viewContainerRef;
        this.inboxService = inboxService;
        this.messages = [];
    }
    ngOnInit() {
        this.inboxService.fetch()
            .subscribe(messages => this.messages = messages);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },
    { type: _inbox_service__WEBPACK_IMPORTED_MODULE_2__["InboxService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _gdpr_gdpr_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../gdpr/gdpr.module */ "./src/gdpr/gdpr.module.ts");





let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _gdpr_gdpr_module__WEBPACK_IMPORTED_MODULE_4__["GDPRModule"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/inbox-http-client.service.ts":
/*!**********************************************!*\
  !*** ./src/app/inbox-http-client.service.ts ***!
  \**********************************************/
/*! exports provided: InboxHttpClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxHttpClient", function() { return InboxHttpClient; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let InboxHttpClient = class InboxHttpClient {
    get(url) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([{
                from: 'Alex Smith',
                subject: 'New test scenarios',
                text: 'Hi, here you have...',
                count: 2
            }, {
                from: 'John Kowalski',
                subject: 'Deployment date?',
                text: 'John, what is planned date of...',
                count: 1
            }, {
                from: 'John Kowalski',
                subject: 'Version 1.1.2 backlog and roadmap',
                text: 'Guys, check out our backlog...',
                count: 12
            }, {
                from: 'Alex Smith',
                subject: 'New version of news widget',
                text: '',
                count: 3
            }, {
                from: 'Shannon Lee',
                subject: 'Party invitation',
                text: 'Shannon invites you to party...',
                count: 1
            }, {
                from: 'Admin',
                subject: 'Your account is active now',
                text: 'Your account is active now...',
                count: 1
            }]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(1500));
    }
};
InboxHttpClient = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], InboxHttpClient);



/***/ }),

/***/ "./src/app/inbox.service.ts":
/*!**********************************!*\
  !*** ./src/app/inbox.service.ts ***!
  \**********************************/
/*! exports provided: InboxService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxService", function() { return InboxService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _inbox_http_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inbox-http-client.service */ "./src/app/inbox-http-client.service.ts");



let InboxService = class InboxService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    fetch() {
        return this.httpClient.get('api/messages');
    }
};
InboxService.ctorParameters = () => [
    { type: _inbox_http_client_service__WEBPACK_IMPORTED_MODULE_2__["InboxHttpClient"] }
];
InboxService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], InboxService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/footer/footer.module.ts":
/*!*************************************!*\
  !*** ./src/footer/footer.module.ts ***!
  \*************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer.component */ "./src/footer/footer/footer.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




let FooterModule = class FooterModule {
};
FooterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
        bootstrap: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"]
        ]
    })
], FooterModule);



/***/ }),

/***/ "./src/footer/footer/footer.component.ts":
/*!***********************************************!*\
  !*** ./src/footer/footer/footer.component.ts ***!
  \***********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/footer/footer/footer.component.html")).default
    })
], FooterComponent);



/***/ }),

/***/ "./src/gdpr/gdpr.module.ts":
/*!*********************************!*\
  !*** ./src/gdpr/gdpr.module.ts ***!
  \*********************************/
/*! exports provided: GDPRModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GDPRModule", function() { return GDPRModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _modal_gdpr_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal/gdpr-modal.component */ "./src/gdpr/modal/gdpr-modal.component.ts");




let GDPRModule = class GDPRModule {
};
GDPRModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        declarations: [_modal_gdpr_modal_component__WEBPACK_IMPORTED_MODULE_3__["GdprModalComponent"]],
        entryComponents: [_modal_gdpr_modal_component__WEBPACK_IMPORTED_MODULE_3__["GdprModalComponent"]],
        providers: [
            // CODE EXAMPLE BELOW
            {
                multi: true,
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_BOOTSTRAP_LISTENER"],
                useFactory: (resolver) => {
                    return (cRef) => {
                        const factory = resolver.resolveComponentFactory(_modal_gdpr_modal_component__WEBPACK_IMPORTED_MODULE_3__["GdprModalComponent"]);
                        const viewContainerRef = cRef.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]);
                        viewContainerRef.createComponent(factory);
                    };
                },
                deps: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]]
            }
            // CODE EXAMPLE ABOVE
        ],
    })
], GDPRModule);



/***/ }),

/***/ "./src/gdpr/modal/gdpr-modal.component.css":
/*!*************************************************!*\
  !*** ./src/gdpr/modal/gdpr-modal.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvZ2Rwci9tb2RhbC9nZHByLW1vZGFsLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/gdpr/modal/gdpr-modal.component.ts":
/*!************************************************!*\
  !*** ./src/gdpr/modal/gdpr-modal.component.ts ***!
  \************************************************/
/*! exports provided: GdprModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GdprModalComponent", function() { return GdprModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GdprModalComponent = class GdprModalComponent {
    constructor() {
        this.modalVisible = true;
    }
    close() {
        this.modalVisible = false;
    }
};
GdprModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gdpr-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gdpr-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/gdpr/modal/gdpr-modal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gdpr-modal.component.css */ "./src/gdpr/modal/gdpr-modal.component.css")).default]
    })
], GdprModalComponent);



/***/ }),

/***/ "./src/header/configuration/configuration.module.ts":
/*!**********************************************************!*\
  !*** ./src/header/configuration/configuration.module.ts ***!
  \**********************************************************/
/*! exports provided: ConfigurationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationModule", function() { return ConfigurationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _user_settings_user_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-settings/user-settings.component */ "./src/header/configuration/user-settings/user-settings.component.ts");




let ConfigurationModule = class ConfigurationModule {
};
ConfigurationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_user_settings_user_settings_component__WEBPACK_IMPORTED_MODULE_3__["UserSettingsComponent"]],
        entryComponents: [_user_settings_user_settings_component__WEBPACK_IMPORTED_MODULE_3__["UserSettingsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], ConfigurationModule);



/***/ }),

/***/ "./src/header/configuration/user-settings-modal.service.ts":
/*!*****************************************************************!*\
  !*** ./src/header/configuration/user-settings-modal.service.ts ***!
  \*****************************************************************/
/*! exports provided: UserSettingsModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSettingsModalService", function() { return UserSettingsModalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_settings_user_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-settings/user-settings.component */ "./src/header/configuration/user-settings/user-settings.component.ts");



let UserSettingsModalService = class UserSettingsModalService {
    constructor(factoryResolver) {
        this.factoryResolver = factoryResolver;
        this.instance = null;
    }
    open(viewContainerRef) {
        if (this.instance !== null) {
            console.error('User settings modal already opened');
            return;
        }
        const factory = this.factoryResolver.resolveComponentFactory(_user_settings_user_settings_component__WEBPACK_IMPORTED_MODULE_2__["UserSettingsComponent"]);
        this.instance = viewContainerRef.createComponent(factory);
    }
    close() {
        if (this.instance === null) {
            console.error('User settings modal not opened');
            return;
        }
        this.instance.destroy();
        this.instance = null;
    }
};
UserSettingsModalService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }
];
UserSettingsModalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserSettingsModalService);



/***/ }),

/***/ "./src/header/configuration/user-settings/user-settings.component.ts":
/*!***************************************************************************!*\
  !*** ./src/header/configuration/user-settings/user-settings.component.ts ***!
  \***************************************************************************/
/*! exports provided: UserSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSettingsComponent", function() { return UserSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_settings_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-settings-modal.service */ "./src/header/configuration/user-settings-modal.service.ts");
/* harmony import */ var _platform_user_settings_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../platform/user-settings-store.service */ "./src/platform/user-settings-store.service.ts");
/* harmony import */ var _platform_widget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../platform/widget */ "./src/platform/widget.ts");





let UserSettingsComponent = class UserSettingsComponent {
    constructor(modalService, storeService) {
        this.modalService = modalService;
        this.storeService = storeService;
        this.Widget = _platform_widget__WEBPACK_IMPORTED_MODULE_4__["Widget"];
    }
    ngOnInit() {
        this.activeWidget = this.storeService.getWidget();
    }
    setWidget(widget) {
        localStorage.setItem('widget', widget);
    }
    saveChanges() {
        location.reload();
    }
    close() {
        this.modalService.close();
    }
};
UserSettingsComponent.ctorParameters = () => [
    { type: _user_settings_modal_service__WEBPACK_IMPORTED_MODULE_2__["UserSettingsModalService"] },
    { type: _platform_user_settings_store_service__WEBPACK_IMPORTED_MODULE_3__["UserSettingsStoreService"] }
];
UserSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-settings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/header/configuration/user-settings/user-settings.component.html")).default
    })
], UserSettingsComponent);



/***/ }),

/***/ "./src/header/header.module.ts":
/*!*************************************!*\
  !*** ./src/header/header.module.ts ***!
  \*************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "./src/header/header/header.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _configuration_configuration_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./configuration/configuration.module */ "./src/header/configuration/configuration.module.ts");





let HeaderModule = class HeaderModule {
};
HeaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _configuration_configuration_module__WEBPACK_IMPORTED_MODULE_4__["ConfigurationModule"]
        ],
        declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]],
        bootstrap: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]]
    })
], HeaderModule);



/***/ }),

/***/ "./src/header/header/header.component.ts":
/*!***********************************************!*\
  !*** ./src/header/header/header.component.ts ***!
  \***********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _configuration_user_settings_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration/user-settings-modal.service */ "./src/header/configuration/user-settings-modal.service.ts");



let HeaderComponent = class HeaderComponent {
    constructor(viewContainerRef, modalService) {
        this.viewContainerRef = viewContainerRef;
        this.modalService = modalService;
    }
    openConfiguartion() {
        this.modalService.open(this.viewContainerRef);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },
    { type: _configuration_user_settings_modal_service__WEBPACK_IMPORTED_MODULE_2__["UserSettingsModalService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/header/header/header.component.html")).default
    })
], HeaderComponent);



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.module */ "./src/header/header.module.ts");
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.module */ "./src/footer/footer.module.ts");
/* harmony import */ var _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./widgets/widgets.module */ "./src/widgets/widgets.module.ts");
/* harmony import */ var _platform_application_properties_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./platform/application-properties.service */ "./src/platform/application-properties.service.ts");
/* harmony import */ var _platform_user_settings_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./platform/user-settings.service */ "./src/platform/user-settings.service.ts");
/* harmony import */ var _platform_user_settings_store_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./platform/user-settings-store.service */ "./src/platform/user-settings-store.service.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_12__);













if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
const platformRef = Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])([
    { provide: _platform_application_properties_service__WEBPACK_IMPORTED_MODULE_9__["ApplicationPropertiesService"], useClass: _platform_application_properties_service__WEBPACK_IMPORTED_MODULE_9__["ApplicationPropertiesService"], deps: [] },
    { provide: _platform_user_settings_service__WEBPACK_IMPORTED_MODULE_10__["UserSettingsService"], useClass: _platform_user_settings_service__WEBPACK_IMPORTED_MODULE_10__["UserSettingsService"], deps: [] },
    { provide: _platform_user_settings_store_service__WEBPACK_IMPORTED_MODULE_11__["UserSettingsStoreService"], useClass: _platform_user_settings_store_service__WEBPACK_IMPORTED_MODULE_11__["UserSettingsStoreService"], deps: [] },
    // CODE EXAMPLE BELOW
    {
        multi: true,
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_INITIALIZER"],
        useFactory: (applicationPropertiesService, settingsService, settingsStoreService) => {
            return () => {
                const applicationProperties$ = applicationPropertiesService.get();
                applicationProperties$.subscribe(() => {
                    platformRef.bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_5__["AppModule"]);
                    platformRef.bootstrapModule(_header_header_module__WEBPACK_IMPORTED_MODULE_6__["HeaderModule"]);
                    platformRef.bootstrapModule(_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterModule"]);
                });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(applicationProperties$, settingsService.get())
                    .subscribe(value => {
                    settingsStoreService.setWidget(value[1].enabledWidget);
                    platformRef.bootstrapModule(_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_8__["WidgetsModule"]);
                });
            };
        },
        deps: [_platform_application_properties_service__WEBPACK_IMPORTED_MODULE_9__["ApplicationPropertiesService"], _platform_user_settings_service__WEBPACK_IMPORTED_MODULE_10__["UserSettingsService"], _platform_user_settings_store_service__WEBPACK_IMPORTED_MODULE_11__["UserSettingsStoreService"]]
    }
    // CODE EXAMPLE ABOVE
]);


/***/ }),

/***/ "./src/platform/application-properties.service.ts":
/*!********************************************************!*\
  !*** ./src/platform/application-properties.service.ts ***!
  \********************************************************/
/*! exports provided: ApplicationPropertiesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationPropertiesService", function() { return ApplicationPropertiesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let ApplicationPropertiesService = class ApplicationPropertiesService {
    get() {
        const properties = {
            restUrl: ''
        };
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(properties).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(1000));
    }
};
ApplicationPropertiesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApplicationPropertiesService);



/***/ }),

/***/ "./src/platform/user-settings-store.service.ts":
/*!*****************************************************!*\
  !*** ./src/platform/user-settings-store.service.ts ***!
  \*****************************************************/
/*! exports provided: UserSettingsStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSettingsStoreService", function() { return UserSettingsStoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./widget */ "./src/platform/widget.ts");



let UserSettingsStoreService = class UserSettingsStoreService {
    constructor() {
        this.state = _widget__WEBPACK_IMPORTED_MODULE_2__["Widget"].NEWS;
    }
    setWidget(type) {
        this.state = type;
    }
    getWidget() {
        return this.state;
    }
};
UserSettingsStoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UserSettingsStoreService);



/***/ }),

/***/ "./src/platform/user-settings.service.ts":
/*!***********************************************!*\
  !*** ./src/platform/user-settings.service.ts ***!
  \***********************************************/
/*! exports provided: UserSettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSettingsService", function() { return UserSettingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./widget */ "./src/platform/widget.ts");





let UserSettingsService = class UserSettingsService {
    get() {
        const item = localStorage.getItem('widget');
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
            enabledWidget: item === 'activities' ? _widget__WEBPACK_IMPORTED_MODULE_4__["Widget"].ACTIVITIES : _widget__WEBPACK_IMPORTED_MODULE_4__["Widget"].NEWS
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(3500));
    }
};
UserSettingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UserSettingsService);



/***/ }),

/***/ "./src/platform/widget.ts":
/*!********************************!*\
  !*** ./src/platform/widget.ts ***!
  \********************************/
/*! exports provided: Widget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Widget", function() { return Widget; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Widget;
(function (Widget) {
    Widget["ACTIVITIES"] = "activities";
    Widget["NEWS"] = "news";
})(Widget || (Widget = {}));


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
function showApplicationAreas(selector) {
    const element = document.querySelector(selector);
    element.classList.add('app-area');
}
function hideApplicationAreas(selector) {
    const element = document.querySelector(selector);
    element.classList.remove('app-area');
}
// tslint:disable-next-line:only-arrow-functions
(function () {
    const apps = [
        'app-root',
        'app-header',
        'app-widget',
        'app-footer'
    ];
    document.addEventListener('keydown', (event) => {
        if (event.key.toLowerCase() === '1') {
            apps.forEach(x => showApplicationAreas(x));
        }
        if (event.key.toLowerCase() === '2') {
            apps.forEach(x => hideApplicationAreas(x));
        }
    });
})();


/***/ }),

/***/ "./src/widgets/activities/activities-list/activities-list.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/widgets/activities/activities-list/activities-list.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ActivitiesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitiesListComponent", function() { return ActivitiesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _activities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../activities.service */ "./src/widgets/activities/activities.service.ts");



let ActivitiesListComponent = class ActivitiesListComponent {
    constructor(activitiesService) {
        this.activitiesService = activitiesService;
        this.activities = [];
        this.closedActivities = [];
        this.fetchDate = new Date();
    }
    ngOnInit() {
        this.activitiesService.get()
            .subscribe(activities => {
            this.fetchDate = new Date();
            this.activities = activities;
            this.activities.sort((a, b) => b.date.getTime() - a.date.getTime());
            this.closedActivities = this.activities.slice(0, 2);
        });
    }
};
ActivitiesListComponent.ctorParameters = () => [
    { type: _activities_service__WEBPACK_IMPORTED_MODULE_2__["ActivitiesService"] }
];
ActivitiesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-activities-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./activities-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/widgets/activities/activities-list/activities-list.component.html")).default
    })
], ActivitiesListComponent);



/***/ }),

/***/ "./src/widgets/activities/activities.module.ts":
/*!*****************************************************!*\
  !*** ./src/widgets/activities/activities.module.ts ***!
  \*****************************************************/
/*! exports provided: ActivitiesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitiesModule", function() { return ActivitiesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _activities_list_activities_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./activities-list/activities-list.component */ "./src/widgets/activities/activities-list/activities-list.component.ts");
/* harmony import */ var _activity_widget_activity_widget_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./activity-widget/activity-widget.component */ "./src/widgets/activities/activity-widget/activity-widget.component.ts");
/* harmony import */ var _activities_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./activities.service */ "./src/widgets/activities/activities.service.ts");
/* harmony import */ var _activity_activity_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./activity/activity.component */ "./src/widgets/activities/activity/activity.component.ts");







let ActivitiesModule = class ActivitiesModule {
};
ActivitiesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_activities_list_activities_list_component__WEBPACK_IMPORTED_MODULE_3__["ActivitiesListComponent"], _activity_widget_activity_widget_component__WEBPACK_IMPORTED_MODULE_4__["ActivityWidgetComponent"], _activity_activity_component__WEBPACK_IMPORTED_MODULE_6__["ActivityComponent"]],
        exports: [_activities_list_activities_list_component__WEBPACK_IMPORTED_MODULE_3__["ActivitiesListComponent"]],
        entryComponents: [_activities_list_activities_list_component__WEBPACK_IMPORTED_MODULE_3__["ActivitiesListComponent"], _activity_widget_activity_widget_component__WEBPACK_IMPORTED_MODULE_4__["ActivityWidgetComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        providers: [
            {
                multi: true,
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
                useFactory: (activitiesService) => {
                    return () => activitiesService.startFetching();
                },
                deps: [_activities_service__WEBPACK_IMPORTED_MODULE_5__["ActivitiesService"]]
            }
        ]
    })
], ActivitiesModule);



/***/ }),

/***/ "./src/widgets/activities/activities.service.ts":
/*!******************************************************!*\
  !*** ./src/widgets/activities/activities.service.ts ***!
  \******************************************************/
/*! exports provided: ActivitiesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitiesService", function() { return ActivitiesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _http_http_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http/http-client.service */ "./src/widgets/activities/http/http-client.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let ActivitiesService = class ActivitiesService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.activities$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"]();
    }
    startFetching() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(2000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.httpClient.get('')))
            .subscribe(activities => {
            this.activities$.next(activities);
        });
    }
    get() {
        return this.activities$.asObservable();
    }
};
ActivitiesService.ctorParameters = () => [
    { type: _http_http_client_service__WEBPACK_IMPORTED_MODULE_3__["ActivitiesHttpClient"] }
];
ActivitiesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ActivitiesService);



/***/ }),

/***/ "./src/widgets/activities/activity-widget/activity-widget.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/widgets/activities/activity-widget/activity-widget.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ActivityWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityWidgetComponent", function() { return ActivityWidgetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ActivityWidgetComponent = class ActivityWidgetComponent {
};
ActivityWidgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-widget',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./activity-widget.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/widgets/activities/activity-widget/activity-widget.component.html")).default
    })
], ActivityWidgetComponent);



/***/ }),

/***/ "./src/widgets/activities/activity/activity.component.ts":
/*!***************************************************************!*\
  !*** ./src/widgets/activities/activity/activity.component.ts ***!
  \***************************************************************/
/*! exports provided: ActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityComponent", function() { return ActivityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ActivityComponent = class ActivityComponent {
    constructor() {
        this.active = false;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ActivityComponent.prototype, "activity", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ActivityComponent.prototype, "active", void 0);
ActivityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-activity',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./activity.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/widgets/activities/activity/activity.component.html")).default
    })
], ActivityComponent);



/***/ }),

/***/ "./src/widgets/activities/http/http-client.service.ts":
/*!************************************************************!*\
  !*** ./src/widgets/activities/http/http-client.service.ts ***!
  \************************************************************/
/*! exports provided: ActivitiesHttpClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitiesHttpClient", function() { return ActivitiesHttpClient; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let ActivitiesHttpClient = class ActivitiesHttpClient {
    get(url) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([{
                date: new Date('2019-11-10'),
                header: 'Deployment date',
                text: 'Deployment date has changed',
                subtext: 'Author of change: John Doe'
            }, {
                date: new Date('2019-11-12'),
                header: 'Production release',
                text: 'Production release is prepared to deploy',
                subtext: 'Author of change: Alex Smith'
            }, {
                date: new Date('2019-11-14'),
                header: 'Hotfix in progress',
                text: 'Hotfix to version 1.1.1 has started',
                subtext: 'Author of change: John Doe'
            }, {
                date: new Date('2019-11-16'),
                header: 'Hotfix done',
                text: 'Hotfix to version 1.1.1 done',
                subtext: 'Author of change: John Doe'
            }, {
                date: new Date('2019-11-16'),
                header: 'Customer feedback report',
                text: 'New customer feedback report available',
                subtext: 'Author of change: John Doe'
            }]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(1000));
    }
};
ActivitiesHttpClient = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ActivitiesHttpClient);



/***/ }),

/***/ "./src/widgets/news/http/http-client.service.ts":
/*!******************************************************!*\
  !*** ./src/widgets/news/http/http-client.service.ts ***!
  \******************************************************/
/*! exports provided: NewsHttpClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsHttpClient", function() { return NewsHttpClient; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let NewsHttpClient = class NewsHttpClient {
    constructor() { }
    get(url) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([{
                header: 'New Employees!',
                text: 'Please welcome new employees: Anna and John. ' +
                    'They will join us as developers in frontend team'
            }, {
                header: 'Beer fridays - next friday',
                text: 'Beer for everybody this friday in our kitchen. We will start at 16:00.'
            }, {
                header: 'Task board app update',
                text: 'Task board was updated this night. Check out new features. If you find any bug or performance issue please contact us ASAP.',
                important: true
            }, {
                header: 'Phone found',
                text: `I've found phone in bathroom. Golden Samsung S7. Alex Smith`
            }, {
                header: 'New version of news widget',
                text: `Version 1.3 was deployed last night`
            }, {
                header: 'Ready for party?',
                text: 'Join us at company party next friday'
            }
        ]);
    }
};
NewsHttpClient = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NewsHttpClient);



/***/ }),

/***/ "./src/widgets/news/news-list/news-list.component.ts":
/*!***********************************************************!*\
  !*** ./src/widgets/news/news-list/news-list.component.ts ***!
  \***********************************************************/
/*! exports provided: NewsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsListComponent", function() { return NewsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../news.service */ "./src/widgets/news/news.service.ts");



let NewsListComponent = class NewsListComponent {
    constructor(service) {
        this.service = service;
        this.news = [];
        this.fetchDate = new Date();
    }
    ngOnInit() {
        this.service.get()
            .subscribe(news => {
            this.news = news;
            this.fetchDate = new Date();
        });
    }
};
NewsListComponent.ctorParameters = () => [
    { type: _news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"] }
];
NewsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-news-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./news-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/widgets/news/news-list/news-list.component.html")).default
    })
], NewsListComponent);



/***/ }),

/***/ "./src/widgets/news/news-widget/news-widget.component.ts":
/*!***************************************************************!*\
  !*** ./src/widgets/news/news-widget/news-widget.component.ts ***!
  \***************************************************************/
/*! exports provided: NewsWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsWidgetComponent", function() { return NewsWidgetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NewsWidgetComponent = class NewsWidgetComponent {
};
NewsWidgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-widget',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./news-widget.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/widgets/news/news-widget/news-widget.component.html")).default
    })
], NewsWidgetComponent);



/***/ }),

/***/ "./src/widgets/news/news.module.ts":
/*!*****************************************!*\
  !*** ./src/widgets/news/news.module.ts ***!
  \*****************************************/
/*! exports provided: NewsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsModule", function() { return NewsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news/news.component */ "./src/widgets/news/news/news.component.ts");
/* harmony import */ var _news_list_news_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./news-list/news-list.component */ "./src/widgets/news/news-list/news-list.component.ts");
/* harmony import */ var _news_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./news.service */ "./src/widgets/news/news.service.ts");
/* harmony import */ var _news_widget_news_widget_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./news-widget/news-widget.component */ "./src/widgets/news/news-widget/news-widget.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");








let NewsModule = class NewsModule {
};
NewsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_news_news_component__WEBPACK_IMPORTED_MODULE_3__["NewsComponent"], _news_list_news_list_component__WEBPACK_IMPORTED_MODULE_4__["NewsListComponent"], _news_widget_news_widget_component__WEBPACK_IMPORTED_MODULE_6__["NewsWidgetComponent"]],
        exports: [_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_4__["NewsListComponent"]],
        entryComponents: [_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_4__["NewsListComponent"], _news_widget_news_widget_component__WEBPACK_IMPORTED_MODULE_6__["NewsWidgetComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        providers: [
            // CODE EXAMPLE BELOW
            {
                multi: true,
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
                useFactory: (service) => {
                    return () => {
                        service.startFetching();
                        return service.get()
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1))
                            .toPromise();
                    };
                },
                deps: [_news_service__WEBPACK_IMPORTED_MODULE_5__["NewsService"]]
            }
            // CODE EXAMPLE ABOVE
        ]
    })
], NewsModule);



/***/ }),

/***/ "./src/widgets/news/news.service.ts":
/*!******************************************!*\
  !*** ./src/widgets/news/news.service.ts ***!
  \******************************************/
/*! exports provided: NewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsService", function() { return NewsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_http_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http/http-client.service */ "./src/widgets/news/http/http-client.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let NewsService = class NewsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.news$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"]();
    }
    startFetching() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(2000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.httpClient.get('')))
            .subscribe(news => {
            this.news$.next(news);
        });
    }
    get() {
        return this.news$.asObservable();
    }
};
NewsService.ctorParameters = () => [
    { type: _http_http_client_service__WEBPACK_IMPORTED_MODULE_2__["NewsHttpClient"] }
];
NewsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NewsService);



/***/ }),

/***/ "./src/widgets/news/news/news.component.ts":
/*!*************************************************!*\
  !*** ./src/widgets/news/news/news.component.ts ***!
  \*************************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NewsComponent = class NewsComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NewsComponent.prototype, "news", void 0);
NewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-news',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./news.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/widgets/news/news/news.component.html")).default
    })
], NewsComponent);



/***/ }),

/***/ "./src/widgets/widgets.module.ts":
/*!***************************************!*\
  !*** ./src/widgets/widgets.module.ts ***!
  \***************************************/
/*! exports provided: WidgetsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsModule", function() { return WidgetsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _activities_activity_widget_activity_widget_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./activities/activity-widget/activity-widget.component */ "./src/widgets/activities/activity-widget/activity-widget.component.ts");
/* harmony import */ var _news_news_widget_news_widget_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news/news-widget/news-widget.component */ "./src/widgets/news/news-widget/news-widget.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _news_news_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./news/news.module */ "./src/widgets/news/news.module.ts");
/* harmony import */ var _activities_activities_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./activities/activities.module */ "./src/widgets/activities/activities.module.ts");
/* harmony import */ var _platform_user_settings_store_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../platform/user-settings-store.service */ "./src/platform/user-settings-store.service.ts");
/* harmony import */ var _platform_widget__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../platform/widget */ "./src/platform/widget.ts");









let WidgetsModule = class WidgetsModule {
    constructor(storeService) {
        this.storeService = storeService;
    }
    // CODE EXAMPLE BELOW
    ngDoBootstrap(appRef) {
        const widget = this.storeService.getWidget();
        if (widget === _platform_widget__WEBPACK_IMPORTED_MODULE_8__["Widget"].NEWS) {
            appRef.bootstrap(_news_news_widget_news_widget_component__WEBPACK_IMPORTED_MODULE_3__["NewsWidgetComponent"]);
        }
        else if (widget === _platform_widget__WEBPACK_IMPORTED_MODULE_8__["Widget"].ACTIVITIES) {
            appRef.bootstrap(_activities_activity_widget_activity_widget_component__WEBPACK_IMPORTED_MODULE_2__["ActivityWidgetComponent"]);
        }
    }
};
WidgetsModule.ctorParameters = () => [
    { type: _platform_user_settings_store_service__WEBPACK_IMPORTED_MODULE_7__["UserSettingsStoreService"] }
];
WidgetsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _news_news_module__WEBPACK_IMPORTED_MODULE_5__["NewsModule"],
            _activities_activities_module__WEBPACK_IMPORTED_MODULE_6__["ActivitiesModule"]
        ]
    })
], WidgetsModule);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/galczo5/ngpoland2019/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map