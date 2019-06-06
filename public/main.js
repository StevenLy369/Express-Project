(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.getItems = function () {
        return this.http.get("/api/cart-items", { responseType: "json" });
    };
    //can make it in one ngForm.
    ApiService.prototype.addItems = function (newItem) {
        return this.http.post("/api/cart-items", newItem, { responseType: "json" });
    };
    ApiService.prototype.deleteItem = function (id) {
        console.log(id);
        return this.http.delete("/api/cart-items/" + id, { responseType: "json" });
    };
    ApiService.prototype.updateItem = function (item) {
        return this.http.put("/api/cart-items/" + item.id, item, { responseType: "json" });
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Indie+Flower&display=swap');\r\n\r\n\r\nbody {\r\n    /* background-color: bisque; */\r\n    background-image: url(http://www.toca-ch.com/data/walls/18/21805265.jpg);\r\n    width: 100%;\r\n    height: 100vh;\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: 'Indie Flower', cursive;\r\n    text-align: center;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n    font-size: 25px;\r\n}\r\n\r\n\r\nh1 {\r\n    text-align: center;\r\n    font-family: 'Indie Flower', cursive;\r\n    \r\n\r\n}\r\n\r\n\r\n.formsContainer {\r\n    background-color: beige;\r\n    border-radius: 20px;\r\n    text-align: center;\r\n    opacity: 0.7;\r\n}\r\n\r\n\r\n.itemsContainer {\r\n    background-color: royalblue;\r\n    width: 500px;\r\n    -webkit-transform: translateX(98%);\r\n            transform: translateX(98%);\r\n    border-radius: 20px;\r\n}\r\n\r\n\r\n.button {\r\n    border-radius: 25px;\r\n    \r\n}\r\n\r\n\r\n.button:hover {\r\n    background-color: red;\r\n    color: aliceblue;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0ZBQWdGOzs7QUFHaEY7SUFDSSw4QkFBOEI7SUFDOUIsd0VBQXdFO0lBQ3hFLFdBQVc7SUFDWCxhQUFhO0lBQ2IsU0FBUztJQUNULFVBQVU7SUFDVixvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsb0NBQW9DOzs7QUFHeEM7OztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLGtDQUEwQjtZQUExQiwwQkFBMEI7SUFDMUIsbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLG1CQUFtQjs7QUFFdkI7OztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1JbmRpZStGbG93ZXImZGlzcGxheT1zd2FwJyk7XHJcblxyXG5cclxuYm9keSB7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cDovL3d3dy50b2NhLWNoLmNvbS9kYXRhL3dhbGxzLzE4LzIxODA1MjY1LmpwZyk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdJbmRpZSBGbG93ZXInLCBjdXJzaXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdJbmRpZSBGbG93ZXInLCBjdXJzaXZlO1xyXG4gICAgXHJcblxyXG59XHJcblxyXG4uZm9ybXNDb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG59XHJcblxyXG4uaXRlbXNDb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcm95YWxibHVlO1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDk4JSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBcclxufVxyXG5cclxuLmJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  \n\n<h1>Shopping Cart List</h1>\n<div class =\"formsContainer\">\n\n<form #itemForm=\"ngForm\" (ngSubmit)=\"addNewItem(itemForm)\">\n  <label for=\"\">Product:</label>\n  <input type=\"text\" ngModel name=\"product\" />\n\n  <label for=\"\">Price:$</label>\n  <input type=\"text\" ngModel name=\"price\" />\n\n  <label for=\"\">Quantity:</label>\n  <input type=\"text\" ngModel name=\"quantity\" />\n  <button class =\"button\">Submit</button>\n</form>\n\n<div *ngFor=\"let item of items; index as i\" class =\"itemsContainer\">\n  <p>Product: {{ item.product }}</p>\n  <p>Price:${{ item.price }}</p>\n  <p>Quantity: {{ item.quantity }}</p>\n  <button (click)=\"deleteAnItem(item.id)\" class=\"button\">Delete</button>\n\n  <button (click)=\"toggleForm(i)\"class=\"button\">Edit</button>\n\n  <form\n    *ngIf=\"item.beingUpdated\"\n    #updateForm=\"ngForm\"\n    (ngSubmit)=\"[updateAnItem(item), toggleForm(i)]\">\n    <label for=\"\">Product:</label>\n    <input type=\"text\" [(ngModel)]=\"item.product\" name=\"product\" />\n\n    <label for=\"\">Price</label>\n    <input type=\"text\" [(ngModel)]=\"item.price\" name=\"price\" />\n\n    <label for=\"\">Quantity</label>\n    <input type=\"text\" [(ngModel)]=\"item.quantity\" name=\"quantity\" />\n\n    <button class=\"button\">Save item</button>\n  </form>\n</div>\n\n</div>\n</body>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(apiService) {
        var _this = this;
        this.apiService = apiService;
        this.title = 'express-project';
        this.shouldBeHidden = true;
        this.apiService.getItems().subscribe(function (response) {
            _this.items = response;
        });
    }
    AppComponent.prototype.toggleForm = function (index) {
        this.items[index].beingUpdated = !this.items[index].beingUpdated;
        console.log(this.items[index]);
    };
    AppComponent.prototype.addNewItem = function (form) {
        var _this = this;
        this.apiService.addItems(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, form.value, { product: form.value.product === "" ? false : form.value.product, price: form.value.price === "" ? false : form.value.price, quantity: form.value.quantity === "" ? false : form.value.quantity })).subscribe(function (response) {
            _this.items = response;
        });
    };
    AppComponent.prototype.deleteAnItem = function (id) {
        var _this = this;
        this.apiService.deleteItem(id).subscribe(function (response) {
            _this.items = response;
        });
        // console.log(id);
    };
    AppComponent.prototype.updateAnItem = function (item) {
        var _this = this;
        this.apiService.updateItem(item).subscribe(function (response) {
            _this.items = response;
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Steven Ly\Documents\Visual Studio\angular\express-project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map