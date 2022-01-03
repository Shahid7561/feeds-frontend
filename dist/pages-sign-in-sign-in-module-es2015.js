(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sign-in-sign-in-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sign-in/sign-in.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sign-in/sign-in.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\r\n    <div fxLayout=\"row wrap\">\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"p-2\">\r\n            <h2 class=\"text-muted text-center\">Sign In</h2>\r\n            <form [formGroup]=\"loginForm\" (ngSubmit)=\"onLoginFormSubmit(loginForm.value)\">\r\n                <mat-form-field appearance=\"outline\" class=\"w-100 mt-2\">\r\n                    <!-- <mat-label>Email</mat-label> -->\r\n                    <input matInput placeholder=\"Email\" formControlName=\"email\" required>\r\n                    <mat-error *ngIf=\"loginForm.controls.email.errors?.required\">Email is required</mat-error>\r\n                    <mat-error *ngIf=\"loginForm.controls.email.hasError('invalidEmail')\">Invalid email address</mat-error>\r\n                </mat-form-field>\r\n                <mat-form-field appearance=\"outline\" class=\"w-100 mt-1\">\r\n                    <!-- <mat-label>Password</mat-label> -->\r\n                    <input matInput placeholder=\"Password\" formControlName=\"password\" type=\"password\" required>\r\n                    <mat-error *ngIf=\"loginForm.controls.password.errors?.required\">Password is required</mat-error>\r\n                    <mat-error *ngIf=\"loginForm.controls.password.hasError('minlength')\">Password isn't long enough, minimum of 6 characters</mat-error>\r\n                </mat-form-field> \r\n                <div class=\"text-center mt-2\">\r\n                    <button mat-fab color=\"primary\" class=\"mat-elevation-z6\" (click)=\"onLoginFormSubmit(loginForm.value)\">\r\n                        <mat-icon>exit_to_app</mat-icon>\r\n                    </button>\r\n                </div> \r\n\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mt-3\">\r\n                    <div class=\"divider w-100\"></div>\r\n                    <h3 class=\"text-muted auth\">or Sign in with one click</h3>\r\n                    <div class=\"divider w-100\"></div>\r\n                </div>               \r\n                \r\n                <div class=\"text-center py-2\">                   \r\n                    <svg class=\"social-icon\" viewBox=\"0 0 24 24\" matTooltip=\"Facebook\">\r\n                        <path d=\"M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z\" />\r\n                    </svg>\r\n                    <svg class=\"social-icon\" viewBox=\"0 0 24 24\" matTooltip=\"Twitter\">\r\n                        <path d=\"M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M17.71,9.33C18.19,8.93 18.75,8.45 19,7.92C18.59,8.13 18.1,8.26 17.56,8.33C18.06,7.97 18.47,7.5 18.68,6.86C18.16,7.14 17.63,7.38 16.97,7.5C15.42,5.63 11.71,7.15 12.37,9.95C9.76,9.79 8.17,8.61 6.85,7.16C6.1,8.38 6.75,10.23 7.64,10.74C7.18,10.71 6.83,10.57 6.5,10.41C6.54,11.95 7.39,12.69 8.58,13.09C8.22,13.16 7.82,13.18 7.44,13.12C7.81,14.19 8.58,14.86 9.9,15C9,15.76 7.34,16.29 6,16.08C7.15,16.81 8.46,17.39 10.28,17.31C14.69,17.11 17.64,13.95 17.71,9.33Z\" />\r\n                    </svg>\r\n                    <svg class=\"social-icon\" viewBox=\"0 0 24 24\" matTooltip=\"Google\">\r\n                        <path d=\"M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M19.5,12H18V10.5H17V12H15.5V13H17V14.5H18V13H19.5V12M9.65,11.36V12.9H12.22C12.09,13.54 11.45,14.83 9.65,14.83C8.11,14.83 6.89,13.54 6.89,12C6.89,10.46 8.11,9.17 9.65,9.17C10.55,9.17 11.13,9.56 11.45,9.88L12.67,8.72C11.9,7.95 10.87,7.5 9.65,7.5C7.14,7.5 5.15,9.5 5.15,12C5.15,14.5 7.14,16.5 9.65,16.5C12.22,16.5 13.96,14.7 13.96,12.13C13.96,11.81 13.96,11.61 13.89,11.36H9.65Z\" />\r\n                    </svg>\r\n                </div> \r\n\r\n            </form>\r\n        </div>\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"p-2\" ngClass.sm=\"mt-2\" ngClass.xs=\"mt-2\">\r\n            <h2 class=\"text-muted text-center\">Don't have an account? Sign up now!</h2>\r\n            <form [formGroup]=\"registerForm\" (ngSubmit)=\"onRegisterFormSubmit(registerForm.value)\">\r\n                <mat-form-field  appearance=\"outline\" class=\"w-100 mt-2\">\r\n                    <!-- <mat-label>First Name</mat-label> -->\r\n                    <input matInput placeholder=\"First Name\" formControlName=\"name\" required>\r\n                    <mat-error *ngIf=\"registerForm.controls.name.errors?.required\">First Name is required</mat-error>\r\n                    <mat-error *ngIf=\"registerForm.controls.name.hasError('minlength')\">First Name isn't long enough, minimum of 3 characters</mat-error>\r\n                </mat-form-field>\r\n                <mat-form-field  appearance=\"outline\" class=\"w-100 mt-2\">\r\n                    <!-- <mat-label>Last Name</mat-label> -->\r\n                    <input matInput placeholder=\"Last Name\" formControlName=\"lastName\" required>\r\n                    <mat-error *ngIf=\"registerForm.controls.lastName.errors?.required\">Last Name is required</mat-error>\r\n                    <mat-error *ngIf=\"registerForm.controls.lastName.hasError('minlength')\">Last Name isn't long enough, minimum of 3 characters</mat-error>\r\n                </mat-form-field>\r\n                <mat-form-field  appearance=\"outline\" class=\"w-100 mt-1\">\r\n                    <!-- <mat-label>Email</mat-label> -->\r\n                    <input matInput placeholder=\"Email\" formControlName=\"email\" required>\r\n                    <mat-error *ngIf=\"registerForm.controls.email.errors?.required\">Email is required</mat-error>\r\n                    <mat-error *ngIf=\"registerForm.controls.email.hasError('invalidEmail')\">Invalid email address</mat-error>\r\n                </mat-form-field>\r\n                <mat-form-field  appearance=\"outline\" class=\"w-100 mt-2\">\r\n                    <!-- <mat-label>User Name</mat-label> -->\r\n                    <input matInput placeholder=\"User Name\" formControlName=\"userName\" required>\r\n                    <mat-error *ngIf=\"registerForm.controls.userName.errors?.required\">User Name is required</mat-error>\r\n                    <mat-error *ngIf=\"registerForm.controls.userName.hasError('minlength')\">User Name isn't long enough, minimum of 3 characters</mat-error>\r\n                </mat-form-field>\r\n                <mat-form-field  appearance=\"outline\" class=\"w-100 mt-2\">\r\n                    <!-- <mat-label>Company Name</mat-label> -->\r\n                    <input matInput placeholder=\"Company Name\" formControlName=\"companyName\" >\r\n                    <!-- <mat-error *ngIf=\"registerForm.controls.lastName.errors?.required\">Last Name is required</mat-error>\r\n                    <mat-error *ngIf=\"registerForm.controls.lastName.hasError('minlength')\">Last Name isn't long enough, minimum of 3 characters</mat-error> -->\r\n                </mat-form-field>\r\n                <mat-form-field  appearance=\"outline\" class=\"w-100 mt-1\">\r\n                    <!-- <mat-label>Password</mat-label> -->\r\n                    <input matInput placeholder=\"Password\" formControlName=\"password\" type=\"password\" minlength=\"6\" required>\r\n                    <mat-error *ngIf=\"registerForm.controls.password.errors?.required\">Password is required</mat-error>\r\n                    <mat-error *ngIf=\"registerForm.controls.password.hasError('minlength')\">Password isn't long enough, minimum of 6 characters</mat-error>\r\n                </mat-form-field> \r\n                <mat-form-field  appearance=\"outline\" class=\"w-100 mt-1\">\r\n                    <!-- <mat-label>Confirm Password</mat-label> -->\r\n                    <input matInput placeholder=\"Confirm Password\" formControlName=\"confirmPassword\" type=\"password\" required>\r\n                    <mat-error *ngIf=\"registerForm.controls.confirmPassword.errors?.required\">Confirm Password is required</mat-error>\r\n                    <mat-error *ngIf=\"registerForm.controls.confirmPassword.hasError('mismatchedPasswords')\">Passwords do not match</mat-error>\r\n                </mat-form-field>\r\n                <div class=\"text-center mt-2\">\r\n                    <button mat-fab color=\"primary\" class=\"mat-elevation-z6\" (click)=\"onRegisterFormSubmit(registerForm.value)\">\r\n                        <mat-icon>person_add</mat-icon>\r\n                    </button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div> \r\n</mat-card>");

/***/ }),

/***/ "./src/app/pages/sign-in/sign-in.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/sign-in/sign-in.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".auth {\n  white-space: nowrap;\n  padding: 7px 14px;\n  font-weight: 500;\n}\n\n::ng-deep .mat-form-field-outline-start {\n  border-radius: 28px 0 0 28px !important;\n  min-width: 28px !important;\n}\n\n::ng-deep .mat-form-field-outline-end {\n  border-radius: 0 28px 28px 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBQ0E7RUFDSSx1Q0FBQTtFQUNBLDBCQUFBO0FBRUo7O0FBQ0U7RUFDRSx1Q0FBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF1dGh7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgcGFkZGluZzogN3B4IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwOyAgICBcclxufVxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtc3RhcnQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjhweCAwIDAgMjhweCAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiAyOHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1lbmQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAyOHB4IDI4cHggMCAhaW1wb3J0YW50O1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/pages/sign-in/sign-in.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/sign-in/sign-in.component.ts ***!
  \****************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../theme/utils/app-validators */ "./src/app/theme/utils/app-validators.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _theme_utils_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../theme/utils/common.service */ "./src/app/theme/utils/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







let SignInComponent = class SignInComponent {
    constructor(formBuilder, commonService, router, snackBar) {
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.router = router;
        this.snackBar = snackBar;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_4__["emailValidator"]])],
            'password': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)])]
        });
        this.registerForm = this.formBuilder.group({
            'name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])],
            'lastName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])],
            'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_4__["emailValidator"]])],
            'userName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])],
            'companyName': [''],
            'password': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'confirmPassword': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }, { validator: Object(_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_4__["matchingPasswords"])('password', 'confirmPassword') });
    }
    onLoginFormSubmit(values) {
        if (this.loginForm.valid) {
            let data = {
                email: this.loginForm.value.email,
                password: this.loginForm.value.password
            };
            this.commonService
                .post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["account"].login, data)
                .subscribe((res) => __awaiter(this, void 0, void 0, function* () {
                console.log(res);
                this.snackBar.open('You logged successfully!', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
                localStorage.setItem('user', JSON.stringify(res.user));
                localStorage.setItem('token', res.token);
                this.router.navigate(['/users']);
            }), err => {
                console.log(err);
                this.snackBar.open(err.message, '×', { panelClass: 'danger', verticalPosition: 'top', duration: 3000 });
            });
        }
    }
    onRegisterFormSubmit(values) {
        console.log(this.registerForm.value);
        this.registerForm.value['phone'] = "1234567890";
        if (this.registerForm.valid) {
            this.commonService
                .post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["account"].register, this.registerForm.value)
                .subscribe((res) => __awaiter(this, void 0, void 0, function* () {
                console.log(res);
                this.snackBar.open('You registered successfully!', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
                let data = {
                    email: this.registerForm.value.email,
                    password: this.registerForm.value.password
                };
                this.commonService
                    .post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["account"].login, data)
                    .subscribe((res) => __awaiter(this, void 0, void 0, function* () {
                    console.log(res);
                    this.snackBar.open('You logged successfully!', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
                    localStorage.setItem('user', JSON.stringify(res.user));
                    localStorage.setItem('token', res.token);
                    this.router.navigate(['/users']);
                }), err => {
                    console.log(err);
                    this.snackBar.open(err.message, '×', { panelClass: 'danger', verticalPosition: 'top', duration: 3000 });
                });
            }), err => {
                console.log(err);
                this.snackBar.open(err.message, '×', { panelClass: 'danger', verticalPosition: 'top', duration: 3000 });
            });
        }
    }
};
SignInComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _theme_utils_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }
];
SignInComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-sign-in',
        template: __importDefault(__webpack_require__(/*! raw-loader!./sign-in.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sign-in/sign-in.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./sign-in.component.scss */ "./src/app/pages/sign-in/sign-in.component.scss")).default]
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _theme_utils_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
], SignInComponent);



/***/ }),

/***/ "./src/app/pages/sign-in/sign-in.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/sign-in/sign-in.module.ts ***!
  \*************************************************/
/*! exports provided: routes, SignInModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInModule", function() { return SignInModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _sign_in_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign-in.component */ "./src/app/pages/sign-in/sign-in.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






const routes = [
    { path: '', component: _sign_in_component__WEBPACK_IMPORTED_MODULE_5__["SignInComponent"], pathMatch: 'full' }
];
let SignInModule = class SignInModule {
};
SignInModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ],
        declarations: [
            _sign_in_component__WEBPACK_IMPORTED_MODULE_5__["SignInComponent"]
        ]
    })
], SignInModule);



/***/ })

}]);
//# sourceMappingURL=pages-sign-in-sign-in-module-es2015.js.map