(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-users-users-module"],{

/***/ "./src/app/core/users/users.service.ts":
/*!*********************************************!*\
  !*** ./src/app/core/users/users.service.ts ***!
  \*********************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_configs_api_urls_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/configs/api-urls.config */ "./src/app/configs/api-urls.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var UsersService = /** @class */ (function () {
    function UsersService(http) {
        this.http = http;
    }
    UsersService.prototype.getAll = function (page) {
        return this.http.get(src_app_configs_api_urls_config__WEBPACK_IMPORTED_MODULE_2__["UsersUrls"].listUsers, { params: { page: page } });
    };
    UsersService.prototype.getUserById = function (id) {
        return this.http.get(src_app_configs_api_urls_config__WEBPACK_IMPORTED_MODULE_2__["UsersUrls"].singleUser + id);
    };
    UsersService.prototype.addUser = function (user) {
        return this.http.post(src_app_configs_api_urls_config__WEBPACK_IMPORTED_MODULE_2__["UsersUrls"].createUser, { params: user });
    };
    UsersService.prototype.updateUser = function (id, changes) {
        return this.http.put(src_app_configs_api_urls_config__WEBPACK_IMPORTED_MODULE_2__["UsersUrls"].updateUser + id, { params: changes });
    };
    UsersService.prototype.deleteUser = function (userId) {
        return this.http.delete(src_app_configs_api_urls_config__WEBPACK_IMPORTED_MODULE_2__["UsersUrls"].deleteUser + '/' + userId);
    };
    UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/app/modules/users/add-user/add-user.component.css":
/*!***************************************************************!*\
  !*** ./src/app/modules/users/add-user/add-user.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.example-container > * {\r\n  width: 100%;\r\n}\r\n\r\n.example-right-align {\r\n  text-align: right;\r\n}\r\n\r\n.example-button-row {\r\n  padding-left: 50%;\r\n  background-color: dimgrey;\r\n}\r\n\r\n.example-button-add {\r\n  width: 100%;\r\n  background-color: dimgrey;\r\n}\r\n\r\ninput.example-right-align::-webkit-outer-spin-button,\r\ninput.example-right-align::-webkit-inner-spin-button {\r\n  display: none;\r\n}\r\n\r\ninput.example-right-align {\r\n  -moz-appearance: textfield;\r\n}\r\n\r\n.mat-Card-userAdd {\r\n  width: 30%;\r\n  margin: 0 auto;\r\n  margin-top: 12%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2Vycy9hZGQtdXNlci9hZGQtdXNlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtDQUN4Qjs7QUFFRDtFQUNFLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLGtCQUFrQjtFQUNsQiwwQkFBMEI7Q0FDM0I7O0FBQ0Q7RUFDRSxZQUFZO0VBQ1osMEJBQTBCO0NBQzNCOztBQUVEOztFQUVFLGNBQWM7Q0FDZjs7QUFFRDtFQUNFLDJCQUEyQjtDQUM1Qjs7QUFDRDtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0NBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy91c2Vycy9hZGQtdXNlci9hZGQtdXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5leGFtcGxlLWNvbnRhaW5lciA+ICoge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1yaWdodC1hbGlnbiB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5leGFtcGxlLWJ1dHRvbi1yb3cge1xyXG4gIHBhZGRpbmctbGVmdDogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRpbWdyZXk7XHJcbn1cclxuLmV4YW1wbGUtYnV0dG9uLWFkZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGltZ3JleTtcclxufVxyXG5cclxuaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcclxuaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbiB7XHJcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XHJcbn1cclxuLm1hdC1DYXJkLXVzZXJBZGQge1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMTIlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/users/add-user/add-user.component.html":
/*!****************************************************************!*\
  !*** ./src/app/modules/users/add-user/add-user.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"mat-card-userAdd\">\n  Add User\n  <form [formGroup]=\"userForm\" (ngSubmit)=\"add()\">\n    <div class=\"example-container\">\n      <mat-form-field>\n        <input matInput placeholder=\"first name\" formControlName=\"first_name\" />\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput placeholder=\"last name\" formControlName=\"last_name\" />\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput placeholder=\"avatar\" formControlName=\"avatar\" />\n      </mat-form-field>\n    </div>\n\n    <div class=\"\">\n      <button class=\"example-button-add\" mat-button color=\"\">Add</button>\n    </div>\n  </form>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/modules/users/add-user/add-user.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/users/add-user/add-user.component.ts ***!
  \**************************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_users_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/users/users.service */ "./src/app/core/users/users.service.ts");





var AddUserComponent = /** @class */ (function () {
    function AddUserComponent(router, formBuilder, usersServive, route) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.usersServive = usersServive;
        this.route = route;
        this.createForm();
    }
    AddUserComponent.prototype.ngOnInit = function () { };
    AddUserComponent.prototype.createForm = function () {
        this.userForm = this.formBuilder.group({
            first_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            last_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            avatar: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    AddUserComponent.prototype.add = function () {
        var _this = this;
        if (this.userForm.valid) {
            this.usersServive
                .addUser(this.userForm.value)
                .subscribe(function (result) {
                _this.router.navigate(['users']);
                alert('added successfully at' + result.createdAt + 'whith id ' + result.id);
                _this.router.navigate(['users']);
            });
        }
    };
    AddUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-user',
            template: __webpack_require__(/*! ./add-user.component.html */ "./src/app/modules/users/add-user/add-user.component.html"),
            styles: [__webpack_require__(/*! ./add-user.component.css */ "./src/app/modules/users/add-user/add-user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _core_users_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AddUserComponent);
    return AddUserComponent;
}());



/***/ }),

/***/ "./src/app/modules/users/list-users/list-users.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/modules/users/list-users/list-users.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 100%;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n\r\ntd,\r\nth {\r\n  width: 25%;\r\n}\r\n\r\n.example-container {\r\n  display: inline-block;\r\n  flex-direction: column;\r\n  max-height: 750px;\r\n  min-width: 300px;\r\n\r\n  width: 30%;\r\n  margin: 0 auto;\r\n  margin-top: 15%;\r\n}\r\n\r\n.example-header {\r\n  min-height: 64px;\r\n  display: flex;\r\n  align-items: center;\r\n  padding-left: 24px;\r\n  font-size: 20px;\r\n}\r\n\r\n.mat-table {\r\n  overflow: auto;\r\n}\r\n\r\n.mat-header-cell .mat-sort-header-sorted {\r\n  color: black;\r\n}\r\n\r\n.mat-input-container {\r\n  font-size: 14px;\r\n  flex-grow: 1;\r\n  margin-left: 32px;\r\n}\r\n\r\n.mat-table {\r\n  overflow: auto;\r\n}\r\n\r\na {\r\n  color: grey !important;\r\n}\r\n\r\n/* For Sticky Header */\r\n\r\n.mat-header-row {\r\n  top: 0;\r\n  position: sticky;\r\n  position: -webkit-sticky;\r\n  z-index: 1;\r\n  background-color: inherit;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n\r\n.pointer-cursor {\r\n  cursor: pointer;\r\n}\r\n\r\n.add-button {\r\n  background-color: dimgrey;\r\n  margin-top: 5px;\r\n  margin-left: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2Vycy9saXN0LXVzZXJzL2xpc3QtdXNlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0NBQ2I7O0FBRUQ7O0VBRUUsV0FBVztDQUNaOztBQUVEO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsaUJBQWlCOztFQUVqQixXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxlQUFlO0NBQ2hCOztBQUVEO0VBQ0UsYUFBYTtDQUNkOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxlQUFlO0NBQ2hCOztBQUVEO0VBQ0UsdUJBQXVCO0NBQ3hCOztBQUVELHVCQUF1Qjs7QUFDdkI7RUFDRSxPQUFPO0VBQ1AsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsMEJBQTBCO0NBQzNCOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy91c2Vycy9saXN0LXVzZXJzL2xpc3QtdXNlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRkLFxyXG50aCB7XHJcbiAgd2lkdGg6IDI1JTtcclxufVxyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXgtaGVpZ2h0OiA3NTBweDtcclxuICBtaW4td2lkdGg6IDMwMHB4O1xyXG5cclxuICB3aWR0aDogMzAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDE1JTtcclxufVxyXG5cclxuLmV4YW1wbGUtaGVhZGVyIHtcclxuICBtaW4taGVpZ2h0OiA2NHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4ubWF0LXRhYmxlIHtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLm1hdC1oZWFkZXItY2VsbCAubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ubWF0LWlucHV0LWNvbnRhaW5lciB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBtYXJnaW4tbGVmdDogMzJweDtcclxufVxyXG5cclxuLm1hdC10YWJsZSB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiBncmV5ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIEZvciBTdGlja3kgSGVhZGVyICovXHJcbi5tYXQtaGVhZGVyLXJvdyB7XHJcbiAgdG9wOiAwO1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5wb2ludGVyLWN1cnNvciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYWRkLWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGltZ3JleTtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/modules/users/list-users/list-users.component.html":
/*!********************************************************************!*\
  !*** ./src/app/modules/users/list-users/list-users.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <input\n    matInput\n    (keyup)=\"applyFilter($event.target.value)\"\n    placeholder=\"Filter\"\n  />\n</mat-form-field>\n\n<div class=\"mat-elevation-z8\">\n  <button class=\"add-button\" (click)=\"add()\" mat-button>Add user</button>\n  <table mat-table [dataSource]=\"dataSource\" matSort>\n    <!-- ID Column -->\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>ID</th>\n      <td mat-cell *matCellDef=\"let row\">{{ row.id }}</td>\n    </ng-container>\n\n    <!-- first name -->\n    <ng-container matColumnDef=\"first_name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>first_name</th>\n      <td mat-cell *matCellDef=\"let row\">{{ row.first_name }}</td>\n    </ng-container>\n\n    <!-- last name -->\n    <ng-container matColumnDef=\"last_name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>last_name</th>\n      <td mat-cell *matCellDef=\"let row\">{{ row.last_name }}</td>\n    </ng-container>\n\n    <!-- avatar -->\n    <ng-container matColumnDef=\"avatar\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Avatar</th>\n      <td mat-cell *matCellDef=\"let row\"><img src=\"{{ row.avatar }}\" /></td>\n    </ng-container>\n\n    <!-- actions -->\n\n    <ng-container matColumnDef=\"actions\">\n      <mat-header-cell *matHeaderCellDef> actions</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\" style=\"white-space: nowrap\">\n        <a class=\"pointer-cursor\" (click)=\"update(row.id)\">\n          <span matTooltip=\"update\"> <mat-icon>mode_edit</mat-icon> </span>\n        </a>\n\n        <a class=\"pointer-cursor\" (click)=\"delete(row.id)\">\n          <span matTooltip=\"delete\"> <mat-icon>delete</mat-icon> </span>\n        </a>\n\n        <a class=\"pointer-cursor\" (click)=\"goToDetails(row.id)\">details</a>\n      </mat-cell>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n  </table>\n\n  <mat-paginator\n    #paginator\n    [pageIndex]=\"pagingObjs.pageIndex\"\n    [pageSize]=\"pagingObjs.pageSize\"\n    [length]=\"pagingObjs.length\"\n    (page)=\"getNext($event)\"\n  >\n  </mat-paginator>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/users/list-users/list-users.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/users/list-users/list-users.component.ts ***!
  \******************************************************************/
/*! exports provided: ListUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListUsersComponent", function() { return ListUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_core_users_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/users/users.service */ "./src/app/core/users/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ListUsersComponent = /** @class */ (function () {
    function ListUsersComponent(_usersService, router) {
        this._usersService = _usersService;
        this.router = router;
        this.displayedColumns = [
            'id',
            'first_name',
            'last_name',
            'avatar',
            'actions'
        ];
        // to customize data table pagination to wwork with server side pagination
        this.pagingObjs = { pageIndex: 0, pageSize: 0, length: 0 };
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.users);
    }
    ListUsersComponent.prototype.ngOnInit = function () {
        this.listUsers(++this.pagingObjs.pageIndex);
    };
    // Filterring users already loaded to dom only
    ListUsersComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ListUsersComponent.prototype.listUsers = function (page) {
        var _this = this;
        this._usersService.getAll(page).subscribe(function (result) {
            if (!result.data) {
                return null;
            }
            _this.users = result.data;
            _this.refresh();
            if (page === 1) {
                // note : api starts from 1 and DT from 0
                _this.pagingObjs.pageIndex = result.page - 1;
                _this.pagingObjs.pageSize = result.per_page;
                _this.pagingObjs.length = result.total;
            }
        }, function (error) { });
    };
    ListUsersComponent.prototype.add = function () {
        this.router.navigate(['users/add']);
    };
    ListUsersComponent.prototype.update = function (id) {
        this.router.navigate(['users/update', id]);
    };
    // note : delete api returns null !!
    ListUsersComponent.prototype.delete = function (userId) {
        var _this = this;
        this._usersService.deleteUser(userId).subscribe(function (result) {
            if (result === null) {
                _this.users.forEach(function (user, indx) {
                    if (user.id === userId) {
                        _this.users.splice(indx, 1);
                        _this.refresh();
                        _this.pagingObjs.length--;
                        return;
                    }
                });
                alert('deleted successfully!!');
            }
        });
    };
    ListUsersComponent.prototype.goToDetails = function (id) {
        this.router.navigate(['users/details', id]);
    };
    ListUsersComponent.prototype.getNext = function ($event) {
        this.listUsers(++$event.pageIndex);
    };
    ListUsersComponent.prototype.refresh = function () {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.users);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ListUsersComponent.prototype, "paginator", void 0);
    ListUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-users',
            template: __webpack_require__(/*! ./list-users.component.html */ "./src/app/modules/users/list-users/list-users.component.html"),
            styles: [__webpack_require__(/*! ./list-users.component.css */ "./src/app/modules/users/list-users/list-users.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_users_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ListUsersComponent);
    return ListUsersComponent;
}());



/***/ }),

/***/ "./src/app/modules/users/update-user/update-user.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/modules/users/update-user/update-user.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.example-container > * {\r\n  width: 100%;\r\n}\r\n\r\n.example-right-align {\r\n  text-align: right;\r\n}\r\n\r\n.example-button-row {\r\n  padding-left: 50%;\r\n  background-color: dimgrey;\r\n}\r\n\r\n.example-button-update {\r\n  width: 100%;\r\n  background-color: dimgrey;\r\n  margin-top: 20%;\r\n}\r\n\r\ninput.example-right-align::-webkit-outer-spin-button,\r\ninput.example-right-align::-webkit-inner-spin-button {\r\n  display: none;\r\n}\r\n\r\ninput.example-right-align {\r\n  -moz-appearance: textfield;\r\n}\r\n\r\n.mat-Card-useEdit {\r\n  width: 30%;\r\n  margin: 0 auto;\r\n  margin-top: 12%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2Vycy91cGRhdGUtdXNlci91cGRhdGUtdXNlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtDQUN4Qjs7QUFFRDtFQUNFLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLGtCQUFrQjtFQUNsQiwwQkFBMEI7Q0FDM0I7O0FBQ0Q7RUFDRSxZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLGdCQUFnQjtDQUNqQjs7QUFFRDs7RUFFRSxjQUFjO0NBQ2Y7O0FBRUQ7RUFDRSwyQkFBMkI7Q0FDNUI7O0FBQ0Q7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtDQUNqQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlcnMvdXBkYXRlLXVzZXIvdXBkYXRlLXVzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uZXhhbXBsZS1jb250YWluZXIgPiAqIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmV4YW1wbGUtcmlnaHQtYWxpZ24ge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uZXhhbXBsZS1idXR0b24tcm93IHtcclxuICBwYWRkaW5nLWxlZnQ6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkaW1ncmV5O1xyXG59XHJcbi5leGFtcGxlLWJ1dHRvbi11cGRhdGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRpbWdyZXk7XHJcbiAgbWFyZ2luLXRvcDogMjAlO1xyXG59XHJcblxyXG5pbnB1dC5leGFtcGxlLXJpZ2h0LWFsaWduOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxyXG5pbnB1dC5leGFtcGxlLXJpZ2h0LWFsaWduOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5pbnB1dC5leGFtcGxlLXJpZ2h0LWFsaWduIHtcclxuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcclxufVxyXG4ubWF0LUNhcmQtdXNlRWRpdCB7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXJnaW4tdG9wOiAxMiU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/modules/users/update-user/update-user.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/users/update-user/update-user.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"mat-Card-useEdit\">\n  Update User\n  <form [formGroup]=\"userForm\" (ngSubmit)=\"update()\">\n    <div class=\"example-container\">\n      <mat-form-field>\n        <input matInput placeholder=\"first name\" formControlName=\"first_name\" />\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput placeholder=\"last name\" formControlName=\"last_name\" />\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput placeholder=\"avatar\" formControlName=\"avatar\" />\n      </mat-form-field>\n    </div>\n\n    <div class=\"\">\n      <button class=\"example-button-update\" mat-button color=\"primary\">\n        Update\n      </button>\n    </div>\n  </form>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/modules/users/update-user/update-user.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/users/update-user/update-user.component.ts ***!
  \********************************************************************/
/*! exports provided: UpdateUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserComponent", function() { return UpdateUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_users_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/users/users.service */ "./src/app/core/users/users.service.ts");





var UpdateUserComponent = /** @class */ (function () {
    function UpdateUserComponent(router, formBuilder, usersServive, route) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.usersServive = usersServive;
        this.route = route;
        this.createForm();
    }
    UpdateUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.paramMap.get('id');
        this.usersServive.getUserById(this.id).subscribe(function (result) {
            console.log(result);
            _this.user = result.data;
            _this.setFormValue();
        });
    };
    // bind user data to be ready to be edited
    UpdateUserComponent.prototype.setFormValue = function () {
        this.userForm.setValue({
            first_name: this.user.first_name,
            last_name: this.user.last_name,
            avatar: this.user.avatar
        });
    };
    UpdateUserComponent.prototype.createForm = function () {
        this.userForm = this.formBuilder.group({
            first_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            last_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            avatar: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    UpdateUserComponent.prototype.update = function () {
        var _this = this;
        if (this.userForm.valid) {
            this.usersServive
                .updateUser(this.id, this.userForm.value)
                .subscribe(function (result) {
                _this.router.navigate(['users']);
                alert('updated successfully at' + result.updatedAt);
                _this.router.navigate(['users']);
            });
        }
    };
    UpdateUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-user',
            template: __webpack_require__(/*! ./update-user.component.html */ "./src/app/modules/users/update-user/update-user.component.html"),
            styles: [__webpack_require__(/*! ./update-user.component.css */ "./src/app/modules/users/update-user/update-user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _core_users_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], UpdateUserComponent);
    return UpdateUserComponent;
}());



/***/ }),

/***/ "./src/app/modules/users/user-details/user-details.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/modules/users/user-details/user-details.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.example-container > * {\r\n  width: 100%;\r\n}\r\n\r\n.example-right-align {\r\n  text-align: right;\r\n}\r\n\r\n.example-button-row {\r\n  padding-left: 50%;\r\n  background-color: dimgrey;\r\n}\r\n\r\n.example-button-update {\r\n  width: 100%;\r\n  background-color: dimgrey;\r\n  margin-top: 20%;\r\n}\r\n\r\ninput.example-right-align::-webkit-outer-spin-button,\r\ninput.example-right-align::-webkit-inner-spin-button {\r\n  display: none;\r\n}\r\n\r\ninput.example-right-align {\r\n  -moz-appearance: textfield;\r\n}\r\n\r\n.mat-Card-useDetails {\r\n  width: 30%;\r\n  margin: 0 auto;\r\n  margin-top: 12%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2Vycy91c2VyLWRldGFpbHMvdXNlci1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsdUJBQXVCO0NBQ3hCOztBQUVEO0VBQ0UsWUFBWTtDQUNiOztBQUVEO0VBQ0Usa0JBQWtCO0NBQ25COztBQUVEO0VBQ0Usa0JBQWtCO0VBQ2xCLDBCQUEwQjtDQUMzQjs7QUFDRDtFQUNFLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsZ0JBQWdCO0NBQ2pCOztBQUVEOztFQUVFLGNBQWM7Q0FDZjs7QUFFRDtFQUNFLDJCQUEyQjtDQUM1Qjs7QUFDRDtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0NBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy91c2Vycy91c2VyLWRldGFpbHMvdXNlci1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyID4gKiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLXJpZ2h0LWFsaWduIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmV4YW1wbGUtYnV0dG9uLXJvdyB7XHJcbiAgcGFkZGluZy1sZWZ0OiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGltZ3JleTtcclxufVxyXG4uZXhhbXBsZS1idXR0b24tdXBkYXRlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkaW1ncmV5O1xyXG4gIG1hcmdpbi10b3A6IDIwJTtcclxufVxyXG5cclxuaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcclxuaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbiB7XHJcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XHJcbn1cclxuLm1hdC1DYXJkLXVzZURldGFpbHMge1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMTIlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/users/user-details/user-details.component.html":
/*!************************************************************************!*\
  !*** ./src/app/modules/users/user-details/user-details.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"mat-Card-useDetails\">\n  User Details\n  <form [formGroup]=\"userForm\" (ngSubmit)=\"update()\">\n    <div class=\"example-container\">\n      <mat-form-field>\n        <input\n          [disabled]=\"true\"\n          matInput\n          formControlName=\"first_name\"\n          pattern=\"\"\n        />\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput formControlName=\"last_name\" pattern=\"\" />\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput formControlName=\"avatar\" pattern=\"\" />\n      </mat-form-field>\n    </div>\n  </form>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/modules/users/user-details/user-details.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/users/user-details/user-details.component.ts ***!
  \**********************************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_users_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/users/users.service */ "./src/app/core/users/users.service.ts");





var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent(router, formBuilder, usersServive, route) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.usersServive = usersServive;
        this.route = route;
        this.createForm();
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.paramMap.get('id');
        this.usersServive.getUserById(this.id).subscribe(function (result) {
            console.log(result);
            _this.user = result.data;
            _this.setFormValue();
        });
    };
    UserDetailsComponent.prototype.setFormValue = function () {
        this.userForm.setValue({
            first_name: this.user.first_name,
            last_name: this.user.last_name,
            avatar: this.user.avatar
        });
    };
    UserDetailsComponent.prototype.createForm = function () {
        this.userForm = this.formBuilder.group({
            first_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            last_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            avatar: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    UserDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-details',
            template: __webpack_require__(/*! ./user-details.component.html */ "./src/app/modules/users/user-details/user-details.component.html"),
            styles: [__webpack_require__(/*! ./user-details.component.css */ "./src/app/modules/users/user-details/user-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _core_users_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());



/***/ }),

/***/ "./src/app/modules/users/users-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/users/users-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: UsersRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRoutingModule", function() { return UsersRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-user/add-user.component */ "./src/app/modules/users/add-user/add-user.component.ts");
/* harmony import */ var _update_user_update_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update-user/update-user.component */ "./src/app/modules/users/update-user/update-user.component.ts");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users.component */ "./src/app/modules/users/users.component.ts");
/* harmony import */ var _list_users_list_users_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-users/list-users.component */ "./src/app/modules/users/list-users/list-users.component.ts");
/* harmony import */ var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-details/user-details.component */ "./src/app/modules/users/user-details/user-details.component.ts");








var routes = [
    {
        path: '',
        children: [
            {
                path: 'list-users',
                component: _list_users_list_users_component__WEBPACK_IMPORTED_MODULE_6__["ListUsersComponent"]
            },
            {
                path: 'add',
                component: _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_3__["AddUserComponent"]
            },
            {
                path: 'update/:id',
                component: _update_user_update_user_component__WEBPACK_IMPORTED_MODULE_4__["UpdateUserComponent"]
            },
            {
                path: 'details/:id',
                component: _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_7__["UserDetailsComponent"]
            },
            { path: '', redirectTo: 'list-users', pathMatch: 'full' }
        ]
    }
];
var UsersRoutingModule = /** @class */ (function () {
    function UsersRoutingModule() {
    }
    UsersRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], UsersRoutingModule);
    return UsersRoutingModule;
}());

var routedComponents = [_users_component__WEBPACK_IMPORTED_MODULE_5__["UsersComponent"]];


/***/ }),

/***/ "./src/app/modules/users/users.component.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/users/users.component.ts ***!
  \**************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UsersComponent = /** @class */ (function () {
    function UsersComponent() {
    }
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: "\n    <router-outlet></router-outlet>\n  "
        })
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/modules/users/users.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/users/users.module.ts ***!
  \***********************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _list_users_list_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-users/list-users.component */ "./src/app/modules/users/list-users/list-users.component.ts");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-user/add-user.component */ "./src/app/modules/users/add-user/add-user.component.ts");
/* harmony import */ var _update_user_update_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./update-user/update-user.component */ "./src/app/modules/users/update-user/update-user.component.ts");
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users-routing.module */ "./src/app/modules/users/users-routing.module.ts");
/* harmony import */ var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-details/user-details.component */ "./src/app/modules/users/user-details/user-details.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");










var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _list_users_list_users_component__WEBPACK_IMPORTED_MODULE_3__["ListUsersComponent"],
                _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_4__["AddUserComponent"],
                _update_user_update_user_component__WEBPACK_IMPORTED_MODULE_5__["UpdateUserComponent"],
                _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_7__["UserDetailsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _users_routing_module__WEBPACK_IMPORTED_MODULE_6__["UsersRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"]
            ]
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-users-users-module.js.map