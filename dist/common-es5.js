function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/theme/utils/app-validators.ts":
  /*!***********************************************!*\
    !*** ./src/app/theme/utils/app-validators.ts ***!
    \***********************************************/

  /*! exports provided: emailValidator, matchingPasswords */

  /***/
  function srcAppThemeUtilsAppValidatorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "emailValidator", function () {
      return emailValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "matchingPasswords", function () {
      return matchingPasswords;
    });

    function emailValidator(control) {
      var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;

      if (control.value && !emailRegexp.test(control.value)) {
        return {
          invalidEmail: true
        };
      }
    }

    function matchingPasswords(passwordKey, passwordConfirmationKey) {
      return function (group) {
        var password = group.controls[passwordKey];
        var passwordConfirmation = group.controls[passwordConfirmationKey];

        if (password.value !== passwordConfirmation.value) {
          return passwordConfirmation.setErrors({
            mismatchedPasswords: true
          });
        }
      };
    }
    /***/

  },

  /***/
  "./src/app/theme/utils/common.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/theme/utils/common.service.ts ***!
    \***********************************************/

  /*! exports provided: CommonService */

  /***/
  function srcAppThemeUtilsCommonServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonService", function () {
      return CommonService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    }; // angular packages


    var CommonService = /*#__PURE__*/function () {
      function CommonService(http) {
        _classCallCheck(this, CommonService);

        this.http = http;
      }

      _createClass(CommonService, [{
        key: "get",
        value: function get(apiPath) {
          return this.http.get(apiPath);
        }
      }, {
        key: "post",
        value: function post(apiPath, data) {
          return this.http.post(apiPath, data);
        }
      }]);

      return CommonService;
    }();

    CommonService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    CommonService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
      providedIn: 'root'
    }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], CommonService);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map