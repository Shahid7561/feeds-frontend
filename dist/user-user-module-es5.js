function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"], {
  /***/
  "./node_modules/ngx-input-file/__ivy_ngcc__/fesm2015/ngx-input-file.js":
  /*!*****************************************************************************!*\
    !*** ./node_modules/ngx-input-file/__ivy_ngcc__/fesm2015/ngx-input-file.js ***!
    \*****************************************************************************/

  /*! exports provided: InputFileComponent, InputFileModule, InputFileService, ɵa */

  /***/
  function node_modulesNgxInputFile__ivy_ngcc__Fesm2015NgxInputFileJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InputFileComponent", function () {
      return InputFileComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InputFileModule", function () {
      return InputFileModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InputFileService", function () {
      return InputFileService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return DropZoneDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/@agm/core/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");

    var _c0 = ["fileInput"];

    function InputFileComponent_label_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "label", 8);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r0.files == null ? null : ctx_r0.files.length);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", ctx_r0.id)("innerHtml", ctx_r0.placeholder, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
      }
    }

    function InputFileComponent_ng_container_3_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
      }
    }

    var _c1 = function _c1(a0, a1) {
      return {
        $implicit: a0,
        index: a1
      };
    };

    function InputFileComponent_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, InputFileComponent_ng_container_3_ng_container_2_Template, 1, 0, "ng-container", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var file_r9 = ctx.$implicit;
        var i_r10 = ctx.index;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r1.classAnimation);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c1, file_r9, i_r10));
      }
    }

    function InputFileComponent_ng_container_4_ng_container_2_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
      }
    }

    function InputFileComponent_ng_container_4_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, InputFileComponent_ng_container_4_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r3);
      }
    }

    function InputFileComponent_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, InputFileComponent_ng_container_4_ng_container_2_Template, 2, 1, "ng-container", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.addLink)("ngIfElse", _r7);
      }
    }

    function InputFileComponent_ng_template_5_button_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InputFileComponent_ng_template_5_button_4_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r17.onLink();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r15.disabled);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r15.iconLink);
      }
    }

    function InputFileComponent_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 14, 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InputFileComponent_ng_template_5_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);

          return _r16.click();
        })("itemDrop", function InputFileComponent_ng_template_5_Template_button_itemDrop_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r21.onSelectFile($event, _r14);
        })("itemDragOver", function InputFileComponent_ng_template_5_Template_button_itemDragOver_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r22.onDragOver(_r14);
        })("itemDragLeave", function InputFileComponent_ng_template_5_Template_button_itemDragLeave_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r23.onDragLeave(_r14);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, InputFileComponent_ng_template_5_button_4_Template, 3, 2, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 18, 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function InputFileComponent_ng_template_5_Template_input_change_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r24.onSelectFile($event.target.files, _r14);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r4.disabled);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.iconAdd);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.linkEnabled);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx_r4.id)("accept", ctx_r4.fileAccept);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("multiple", ctx_r4.fileLimit > 1 ? true : null);
      }
    }

    function InputFileComponent_ng_template_7_img_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 26);
      }

      if (rf & 2) {
        var file_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", file_r25.preview, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    function InputFileComponent_ng_template_7_ng_container_3_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 28);
      }

      if (rf & 2) {
        var file_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", file_r25.file.name, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
      }
    }

    function InputFileComponent_ng_template_7_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, InputFileComponent_ng_template_7_ng_container_3_div_3_Template, 1, 1, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var file_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r29.iconFile);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", file_r25.file);
      }
    }

    function InputFileComponent_ng_template_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, InputFileComponent_ng_template_7_img_0_Template, 1, 1, "img", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 22, 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InputFileComponent_ng_template_7_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36);

          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);

          return _r30.click();
        })("itemDrop", function InputFileComponent_ng_template_7_Template_button_itemDrop_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36);

          var index_r26 = ctx.index;

          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r37.onReplaceFile($event, index_r26, _r28);
        })("itemDragOver", function InputFileComponent_ng_template_7_Template_button_itemDragOver_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36);

          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r38.onDragOver(_r28);
        })("itemDragLeave", function InputFileComponent_ng_template_7_Template_button_itemDragLeave_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36);

          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r39.onDragLeave(_r28);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, InputFileComponent_ng_template_7_ng_container_3_Template, 4, 2, "ng-container", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InputFileComponent_ng_template_7_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36);

          var index_r26 = ctx.index;

          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r40.onDeleteFile(index_r26);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 24, 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function InputFileComponent_ng_template_7_Template_input_change_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36);

          var index_r26 = ctx.index;

          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);

          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r41.onReplaceFile($event.target.files, index_r26, _r28, _r30);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var file_r25 = ctx.$implicit;

        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", file_r25.preview);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r6.disabled);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !file_r25.preview);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r6.disabled);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.iconDelete);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("accept", ctx_r6.fileAccept);
      }
    }

    function InputFileComponent_ng_template_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function InputFileComponent_ng_template_9_Template_form_ngSubmit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43);

          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r42.onSubmitLink();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InputFileComponent_ng_template_9_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43);

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r44.onLink();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "arrow_back");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "check");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r8.form);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", ctx_r8.placeholderLink);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r8.disabled);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r8.disabled);
      }
    }

    var defaultSettings = {
      classAnimation: 'bounce-in',
      fileAccept: '*',
      fileLimit: 1,
      iconAdd: 'add',
      iconDelete: 'delete',
      iconFile: 'insert_drive_file',
      iconLink: 'link',
      linkEnabled: false,
      placeholderLink: 'Link',
      sizeLimit: null
    };
    var InputFileRejectedReason;

    (function (InputFileRejectedReason) {
      InputFileRejectedReason[InputFileRejectedReason["badFile"] = 0] = "badFile";
      InputFileRejectedReason[InputFileRejectedReason["limitReached"] = 1] = "limitReached";
      InputFileRejectedReason[InputFileRejectedReason["sizeReached"] = 2] = "sizeReached";
    })(InputFileRejectedReason || (InputFileRejectedReason = {}));

    var InputFileService = /*#__PURE__*/function () {
      function InputFileService(_config) {
        _classCallCheck(this, InputFileService);

        this._config = _config;
      }

      _createClass(InputFileService, [{
        key: "limitGuard",

        /**
         * Whether the limit is not reached.
         * @param files
         */
        value: function limitGuard(files, fileLimit) {
          return files.length < fileLimit;
        }
        /**
         * Whether the file size is not bigger than the limit.
         * @param file
         * @param sizeLimit
         */

      }, {
        key: "sizeGuard",
        value: function sizeGuard(file, sizeLimit) {
          return !sizeLimit || file.size < sizeLimit * 1024 * 1024; // TODO : improve
        }
        /**
         * Whether the type of the file is enabled.
         * @param file
         * @param fileAccept
         */

      }, {
        key: "typeGuard",
        value: function typeGuard(file, fileAccept) {
          var enabled = fileAccept == null;

          if (fileAccept) {
            var accept = fileAccept.replace('*', '');
            var types = accept.split(',');

            var _iterator = _createForOfIteratorHelper(types),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var type = _step.value;

                if (file.type.startsWith(type) || type.charAt(0) === '.' && file.name != null && file.name.endsWith(type)) {
                  enabled = true;
                  break;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }

          return enabled;
        }
      }, {
        key: "config",
        get: function get() {
          return this._config;
        }
      }]);

      return InputFileService;
    }();

    InputFileService.ɵfac = function InputFileService_Factory(t) {
      return new (t || InputFileService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"]('config'));
    };

    InputFileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: InputFileService,
      factory: function factory(t) {
        return InputFileService.ɵfac(t);
      },
      providedIn: 'root'
    });
    InputFileService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function InputFileService_Factory() {
        return new InputFileService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])("config"));
      },
      token: InputFileService,
      providedIn: "root"
    });
    InputFileService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('config')), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])], InputFileService);

    function urlValidator(control) {
      if (_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control) != null) {
        return null;
      }

      var v = control.value;
      /* tslint:disable */

      return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(v) ? null : {
        'url': true
      };
      /* tslint:enable */
    }

    var InputFileComponent_1;

    var InputFileComponent = InputFileComponent_1 = /*#__PURE__*/function () {
      function InputFileComponent(formBuilder, inputFileService) {
        _classCallCheck(this, InputFileComponent);

        this.formBuilder = formBuilder;
        this.inputFileService = inputFileService;
        this.acceptedFile = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.deletedFile = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.rejectedFile = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.files = new Array();
        this.id = "ngx-input-file-".concat(InputFileComponent_1.nextId++);

        this.onChange = function (files) {};

        this.onTouched = function () {};
      }

      _createClass(InputFileComponent, [{
        key: "ngOnInit",

        /**
         * Angular lifecyle OnInit implementation.
         */
        value: function ngOnInit() {
          this.setForm();
        }
        /**
         * On delete a file event handler.
         * @param index
         */

      }, {
        key: "onDeleteFile",
        value: function onDeleteFile(index) {
          if (!this.disabled) {
            var files = this.files.slice();
            this.deletedFile.emit(files[index]);
            files.splice(index, 1);
            this.writeValue(files);
          }
        }
        /**
         * On drag over event handler.
         * Adds a ripple effect on the button.
         */

      }, {
        key: "onDragOver",
        value: function onDragOver(button) {
          button.ripple.launch({
            centered: true,
            persistent: true
          });
        }
        /**
         * On drag leave event handler.
         * Fades the ripple effect of the button.
         */

      }, {
        key: "onDragLeave",
        value: function onDragLeave(button) {
          button.ripple.fadeOutAll();
        }
        /**
         * On adds a link.
         */

      }, {
        key: "onLink",
        value: function onLink() {
          this.addLink = !this.addLink;
        }
        /**
         * On replace one file event handler.
         * Writes the value.
         * @param fileList
         * @param index
         * @param fileInput
         */

      }, {
        key: "onReplaceFile",
        value: function onReplaceFile(fileList, index, button, fileInput) {
          if (!this.disabled) {
            // Copies the array without reference.
            var files = this.files.slice(); // Assumes that a single file can be replaced by a single file.

            var inputFile = {
              file: fileList.item(0)
            };
            button.ripple.fadeOutAll();

            if (this.fileGuard(files, inputFile, true)) {
              files[index] = inputFile;
              this.acceptedFile.emit(inputFile);
            }

            this.writeValue(files);

            if (fileInput) {
              fileInput.value = '';
            }
          }
        }
        /**
         * On select one or more files event handler.
         * Writes the value.
         * @param fileList
         */

      }, {
        key: "onSelectFile",
        value: function onSelectFile(fileList, button) {
          var _this = this;

          if (!this.disabled) {
            button.ripple.fadeOutAll(); // Copies the array without reference.

            var files = this.files.slice();
            Array.from(fileList).forEach(function (file) {
              var inputFile = {
                file: file
              };

              if (_this.fileGuard(files, inputFile)) {
                files.push(inputFile);

                _this.acceptedFile.emit(inputFile);
              }
            });
            this.writeValue(files);
            this.fileInput.nativeElement.value = '';
          }
        }
        /**
         * On submit the link form event handler.
         */

      }, {
        key: "onSubmitLink",
        value: function onSubmitLink() {
          if (!this.disabled && this.form.valid) {
            var files = this.files.slice();
            var inputFile = {
              link: this.form.value.link,
              preview: this.form.value.link
            };
            files.push(inputFile);
            this.acceptedFile.emit(inputFile);
            this.onLink();
            this.form.reset();
            this.writeValue(files);
          }
        }
        /**
         * Implementation of ControlValueAccessor.
         * @param fn
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange = fn;
        }
        /**
         * Implementation of ControlValueAccessor.
         * @param fn
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * Implementation of ControlValueAccessor.
         * @param isDisabled
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this.disabled = isDisabled;
        }
        /**
         * Implementation of ControlValueAccessor.
         * @param files
         */

      }, {
        key: "writeValue",
        value: function writeValue(files) {
          if (!files) {
            files = new Array();
          }

          this.files = files;
          this.setFilePreview();
          this.onChange(this.files);
        }
        /**
         * Whether the file can be added to the model.
         * @param files
         * @param file,
         * @param bypassLimit
         */

      }, {
        key: "fileGuard",
        value: function fileGuard(files, file, bypassLimit) {
          if (!bypassLimit && !this.inputFileService.limitGuard(files, this.fileLimit)) {
            this.rejectedFile.emit({
              reason: InputFileRejectedReason.limitReached,
              file: file
            });
            return false;
          }

          if (!this.inputFileService.sizeGuard(file.file, this.sizeLimit)) {
            this.rejectedFile.emit({
              reason: InputFileRejectedReason.sizeReached,
              file: file
            });
            return false;
          }

          if (!this.inputFileService.typeGuard(file.file, this.fileAccept)) {
            this.rejectedFile.emit({
              reason: InputFileRejectedReason.badFile,
              file: file
            });
            return false;
          }

          return true;
        }
        /**
         * Sets the file preview with FileReader.
         */

      }, {
        key: "setFilePreview",
        value: function setFilePreview() {
          var _this2 = this;

          var _loop = function _loop(index) {
            if (_this2.files[index].file != null && _this2.inputFileService.typeGuard(_this2.files[index].file, 'image/*')) {
              var fr = new FileReader();

              fr.onload = function () {
                _this2.files[index].preview = fr.result;
              };

              fr.readAsDataURL(_this2.files[index].file);
            }
          };

          for (var index in this.files) {
            _loop(index);
          }
        }
        /**
         * Sets the reactive form to insert a link.
         */

      }, {
        key: "setForm",
        value: function setForm() {
          this.form = this.formBuilder.group({
            link: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, urlValidator]]
          });
        }
      }, {
        key: "classAnimation",
        set: function set(classAnimation) {
          this._classAnimation = classAnimation;
        },
        get: function get() {
          return this._classAnimation || this.inputFileService.config.classAnimation || defaultSettings.classAnimation;
        }
      }, {
        key: "fileAccept",
        set: function set(fileAccept) {
          this._fileAccept = fileAccept;
        },
        get: function get() {
          return this._fileAccept || this.inputFileService.config.fileAccept || defaultSettings.fileAccept;
        }
      }, {
        key: "fileLimit",
        set: function set(fileLimit) {
          this._fileLimit = fileLimit;
        },
        get: function get() {
          return this._fileLimit || this.inputFileService.config.fileLimit || defaultSettings.fileLimit;
        }
      }, {
        key: "iconAdd",
        set: function set(iconAdd) {
          this._iconAdd = iconAdd;
        },
        get: function get() {
          return this._iconAdd || this.inputFileService.config.iconAdd || defaultSettings.iconAdd;
        }
      }, {
        key: "iconDelete",
        set: function set(iconDelete) {
          this._iconDelete = iconDelete;
        },
        get: function get() {
          return this._iconDelete || this.inputFileService.config.iconDelete || defaultSettings.iconDelete;
        }
      }, {
        key: "iconFile",
        set: function set(iconFile) {
          this._iconFile = iconFile;
        },
        get: function get() {
          return this._iconFile || this.inputFileService.config.iconFile || defaultSettings.iconFile;
        }
      }, {
        key: "iconLink",
        set: function set(iconLink) {
          this._iconLink = iconLink;
        },
        get: function get() {
          return this._iconLink || this.inputFileService.config.iconLink || defaultSettings.iconLink;
        }
      }, {
        key: "linkEnabled",
        set: function set(linkEnabled) {
          this._linkEnabled = linkEnabled;
        },
        get: function get() {
          return this._linkEnabled || this.inputFileService.config.linkEnabled || defaultSettings.linkEnabled;
        }
      }, {
        key: "placeholderLink",
        set: function set(placeholderLink) {
          this._placeholderLink = placeholderLink;
        },
        get: function get() {
          return this._placeholderLink || this.inputFileService.config.placeholderLink || defaultSettings.placeholderLink;
        }
      }, {
        key: "sizeLimit",
        set: function set(sizeLimit) {
          this._sizeLimit = sizeLimit;
        },
        get: function get() {
          return this._sizeLimit || this.inputFileService.config.sizeLimit || defaultSettings.sizeLimit;
        }
      }, {
        key: "canAddFile",
        get: function get() {
          return this.files && this.files.length < this.fileLimit;
        }
      }]);

      return InputFileComponent;
    }();

    InputFileComponent.ɵfac = function InputFileComponent_Factory(t) {
      return new (t || InputFileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](InputFileService));
    };

    InputFileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: InputFileComponent,
      selectors: [["input-file"]],
      viewQuery: function InputFileComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.fileInput = _t.first);
        }
      },
      inputs: {
        classAnimation: "classAnimation",
        fileAccept: "fileAccept",
        fileLimit: "fileLimit",
        iconAdd: "iconAdd",
        iconDelete: "iconDelete",
        iconFile: "iconFile",
        iconLink: "iconLink",
        linkEnabled: "linkEnabled",
        placeholderLink: "placeholderLink",
        sizeLimit: "sizeLimit",
        disabled: "disabled",
        placeholder: "placeholder"
      },
      outputs: {
        acceptedFile: "acceptedFile",
        deletedFile: "deletedFile",
        rejectedFile: "rejectedFile"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return InputFileComponent_1;
        }),
        multi: true
      }])],
      decls: 11,
      vars: 3,
      consts: [[1, "input-file-container"], ["class", "mat-orphan-label", 3, "for", "active", "innerHtml", 4, "ngIf"], [1, "files-container"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["addTemplate", ""], ["fileTemplate", ""], ["linkTemplate", ""], [1, "mat-orphan-label", 3, "for", "innerHtml"], [1, "file-container", 3, "ngClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "file-container"], [4, "ngIf", "ngIfElse"], [4, "ngTemplateOutlet"], ["mat-button", "", "inputFileDropZone", "", "type", "button", 1, "file-button", 3, "disabled", "click", "itemDrop", "itemDragOver", "itemDragLeave"], ["selectButton", ""], [1, "input-icon"], ["mat-button", "", "class", "secondary-button", "type", "button", 3, "disabled", "click", 4, "ngIf"], ["hidden", "", "type", "file", 3, "id", "accept", "change"], ["fileInput", ""], ["mat-button", "", "type", "button", 1, "secondary-button", 3, "disabled", "click"], ["class", "image-preview", 3, "src", 4, "ngIf"], ["mat-button", "", "inputFileDropZone", "", "type", "button", 1, "replace-button", 3, "disabled", "click", "itemDrop", "itemDragOver", "itemDragLeave"], ["replaceButton", ""], ["hidden", "", "type", "file", 3, "accept", "change"], ["fileReplace", ""], [1, "image-preview", 3, "src"], ["class", "file-name text-truncate", 3, "innerHtml", 4, "ngIf"], [1, "file-name", "text-truncate", 3, "innerHtml"], ["novalidate", "", 1, "form-link", "slide-in-up", 3, "formGroup", "ngSubmit"], [1, "input-link"], ["matInput", "", "formControlName", "link", 3, "placeholder"], [1, "form-link-button"], ["mat-button", "", "type", "button", 3, "disabled", "click"], ["mat-button", "", "type", "submit", 3, "disabled"]],
      template: function InputFileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, InputFileComponent_label_1_Template, 1, 4, "label", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, InputFileComponent_ng_container_3_Template, 3, 6, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, InputFileComponent_ng_container_4_Template, 3, 2, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, InputFileComponent_ng_template_5_Template, 7, 6, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, InputFileComponent_ng_template_7_Template, 9, 6, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, InputFileComponent_ng_template_9_Template, 10, 4, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.placeholder);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.files);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.canAddFile);
        }
      },
      directives: function directives() {
        return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], DropZoneDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]];
      },
      styles: [".input-file-container[_ngcontent-%COMP%]{position:relative}.input-file-container[_ngcontent-%COMP%]   .files-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;padding-top:1.25rem}.input-file-container[_ngcontent-%COMP%]   .file-button[_ngcontent-%COMP%], .input-file-container[_ngcontent-%COMP%]   .file-container[_ngcontent-%COMP%]{align-items:center;display:flex;height:10rem;justify-content:center;width:10rem}.input-file-container[_ngcontent-%COMP%]   .secondary-button[_ngcontent-%COMP%]{width:10rem}.input-file-container[_ngcontent-%COMP%]   .file-button[_ngcontent-%COMP%]{flex:1}.input-file-container[_ngcontent-%COMP%]   .file-container[_ngcontent-%COMP%]{flex-direction:column;margin-right:1rem;overflow:hidden}.input-file-container[_ngcontent-%COMP%]   .replace-button[_ngcontent-%COMP%]{flex:1;width:10rem}.input-file-container[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%]:focus{outline:0}.input-file-container[_ngcontent-%COMP%]   .file-name[_ngcontent-%COMP%]{width:calc(10rem - 2.5rem)}.input-file-container[_ngcontent-%COMP%]   .image-preview[_ngcontent-%COMP%]{position:absolute;height:10rem;-o-object-fit:contain;object-fit:contain;width:10rem}.input-file-container[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%]{font-size:calc(10rem / 4);height:calc(10rem / 4);width:calc(10rem / 4)}.input-file-container[_ngcontent-%COMP%]   .form-link[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:10rem}.input-file-container[_ngcontent-%COMP%]   .input-link[_ngcontent-%COMP%]{width:10rem}.input-file-container[_ngcontent-%COMP%]   .form-link-button[_ngcontent-%COMP%]{display:flex;flex-direction:row}.input-file-container[_ngcontent-%COMP%]   .form-link-button[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%]{min-width:calc(10rem / 2);width:calc(10rem / 2)}.input-file-container[_ngcontent-%COMP%]   .mat-orphan-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.54);display:block;font-size:1rem;left:0;margin:0;position:absolute;top:0;transform-origin:0;transition:.4s cubic-bezier(.25,.8,.25,1),width .4s cubic-bezier(.25,.8,.25,1)}.input-file-container[_ngcontent-%COMP%]   .mat-orphan-label.active[_ngcontent-%COMP%]{transform:scale(.75)}@-webkit-keyframes bounceIn{20%,40%,60%,80%,from,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:scale3d(.3,.3,.3)}20%{transform:scale3d(1.1,1.1,1.1)}40%{transform:scale3d(.9,.9,.9)}60%{opacity:1;transform:scale3d(1.03,1.03,1.03)}80%{transform:scale3d(.97,.97,.97)}to{opacity:1;transform:scale3d(1,1,1)}}@keyframes bounceIn{20%,40%,60%,80%,from,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:scale3d(.3,.3,.3)}20%{transform:scale3d(1.1,1.1,1.1)}40%{transform:scale3d(.9,.9,.9)}60%{opacity:1;transform:scale3d(1.03,1.03,1.03)}80%{transform:scale3d(.97,.97,.97)}to{opacity:1;transform:scale3d(1,1,1)}}.bounce-in[_ngcontent-%COMP%]{-webkit-animation-duration:.75s;animation-duration:.75s;-webkit-animation-name:bounceIn;animation-name:bounceIn}@-webkit-keyframes slideInUp{from{opacity:0;transform:translate3d(0,100%,0)}to{opacity:1;transform:translate3d(0,0,0)}}@keyframes slideInUp{from{opacity:0;transform:translate3d(0,100%,0)}to{opacity:1;transform:translate3d(0,0,0)}}.slide-in-up[_ngcontent-%COMP%]{-webkit-animation-duration:.25s;animation-duration:.25s;-webkit-animation-name:slideInUp;animation-name:slideInUp}"]
    });
    InputFileComponent.nextId = 0;
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], InputFileComponent.prototype, "disabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], InputFileComponent.prototype, "placeholder", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])], InputFileComponent.prototype, "classAnimation", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])], InputFileComponent.prototype, "fileAccept", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Number])], InputFileComponent.prototype, "fileLimit", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])], InputFileComponent.prototype, "iconAdd", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])], InputFileComponent.prototype, "iconDelete", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])], InputFileComponent.prototype, "iconFile", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])], InputFileComponent.prototype, "iconLink", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Boolean])], InputFileComponent.prototype, "linkEnabled", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])], InputFileComponent.prototype, "placeholderLink", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Number])], InputFileComponent.prototype, "sizeLimit", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], InputFileComponent.prototype, "acceptedFile", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], InputFileComponent.prototype, "deletedFile", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], InputFileComponent.prototype, "rejectedFile", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileInput', {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], InputFileComponent.prototype, "fileInput", void 0);
    InputFileComponent = InputFileComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], InputFileService])], InputFileComponent);

    var DropZoneDirective = /*#__PURE__*/function () {
      function DropZoneDirective() {
        _classCallCheck(this, DropZoneDirective);

        this.disabled = false;
        this.itemDragOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.itemDragLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.itemDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // Prevent dragleave on children, could be better but it's cheap for better performance

        this.whiteListClasses = ['file-button', 'mat-button-wrapper', 'input-icon'];
      }
      /**
       * Drag Over event handler.
       * @param event
       */


      _createClass(DropZoneDirective, [{
        key: "onDragOver",
        value: function onDragOver(event) {
          this.preventAndStopEventPropagation(event);

          if (!this.isOver && !this.disabled) {
            this.isOver = true;
            this.itemDragOver.emit();
          }
        }
        /**
         * Drag Leave event handler.
         * @param event
         */

      }, {
        key: "onDragLeave",
        value: function onDragLeave(event) {
          this.preventAndStopEventPropagation(event);

          if (this.isOver && this.isTrueLeave(event) && !this.disabled) {
            this.isOver = false;
            this.itemDragLeave.emit();
          }
        }
        /**
         * Drop event handler.
         * @param event
         */

      }, {
        key: "onDrop",
        value: function onDrop(event) {
          if (!this.disabled) {
            this.preventAndStopEventPropagation(event);
            this.isOver = false;

            try {
              this.itemDrop.emit(event.dataTransfer.files);
            } catch (e) {
              console.error(e);
            }
          }
        }
        /**
         * Prevents and stops event propagration.
         * @param event
         */

      }, {
        key: "preventAndStopEventPropagation",
        value: function preventAndStopEventPropagation(event) {
          event.preventDefault();
          event.stopPropagation();
        }
        /**
         * Checks if the leave is not trigger by a children.
         * @param event
         */

      }, {
        key: "isTrueLeave",
        value: function isTrueLeave(event) {
          var _iterator2 = _createForOfIteratorHelper(this.whiteListClasses),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var c = _step2.value;

              if (event.fromElement != null && event.fromElement.className.indexOf(c) >= 0) {
                return false;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          return true;
        }
      }]);

      return DropZoneDirective;
    }();

    DropZoneDirective.ɵfac = function DropZoneDirective_Factory(t) {
      return new (t || DropZoneDirective)();
    };

    DropZoneDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: DropZoneDirective,
      selectors: [["", "inputFileDropZone", ""]],
      hostBindings: function DropZoneDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dragover", function DropZoneDirective_dragover_HostBindingHandler($event) {
            return ctx.onDragOver($event);
          })("dragleave", function DropZoneDirective_dragleave_HostBindingHandler($event) {
            return ctx.onDragLeave($event);
          })("drop", function DropZoneDirective_drop_HostBindingHandler($event) {
            return ctx.onDrop($event);
          });
        }
      },
      inputs: {
        disabled: "disabled"
      },
      outputs: {
        itemDragOver: "itemDragOver",
        itemDragLeave: "itemDragLeave",
        itemDrop: "itemDrop"
      }
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], DropZoneDirective.prototype, "disabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], DropZoneDirective.prototype, "itemDragOver", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], DropZoneDirective.prototype, "itemDragLeave", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], DropZoneDirective.prototype, "itemDrop", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragover', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], DropZoneDirective.prototype, "onDragOver", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragleave', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], DropZoneDirective.prototype, "onDragLeave", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('drop', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], DropZoneDirective.prototype, "onDrop", null);
    var InputFileModule_1;

    var InputFileModule = InputFileModule_1 = /*#__PURE__*/function () {
      function InputFileModule() {
        _classCallCheck(this, InputFileModule);
      }

      _createClass(InputFileModule, null, [{
        key: "forRoot",
        value: function forRoot(config) {
          return {
            ngModule: InputFileModule_1,
            providers: [InputFileService, {
              provide: 'config',
              useValue: config
            }]
          };
        }
      }]);

      return InputFileModule;
    }();

    InputFileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: InputFileModule
    });
    InputFileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function InputFileModule_Factory(t) {
        return new (t || InputFileModule)();
      },
      providers: [InputFileService],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InputFileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: ['config']
          }]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InputFileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'input-file',
          template: "<div class=\"input-file-container\">\n    <label class=\"mat-orphan-label\" [for]=\"id\" [class.active]=\"files?.length\" [innerHtml]=\"placeholder\" *ngIf=\"placeholder\"></label>\n    <div class=\"files-container\">\n\n        <ng-container *ngFor=\"let file of files; let i = index\">\n            <div class=\"file-container\" [ngClass]=\"classAnimation\">\n                <ng-container *ngTemplateOutlet=\"fileTemplate; context: { $implicit: file, index: i }\"></ng-container>\n            </div>\n        </ng-container>\n\n        <ng-container *ngIf=\"canAddFile\">\n            <div class=\"file-container\">\n                <ng-container *ngIf=\"!addLink; else linkTemplate\">\n                    <ng-container *ngTemplateOutlet=\"addTemplate\"></ng-container>\n                </ng-container>\n            </div>\n        </ng-container>\n    </div>\n\n</div>\n\n<ng-template #addTemplate>\n    <button mat-button inputFileDropZone class=\"file-button\" type=\"button\" (click)=\"fileInput.click()\" (itemDrop)=\"onSelectFile($event, selectButton)\"\n        (itemDragOver)=\"onDragOver(selectButton)\" (itemDragLeave)=\"onDragLeave(selectButton)\" [disabled]=\"disabled\" #selectButton>\n        <mat-icon class=\"input-icon\">{{ iconAdd }}</mat-icon>\n    </button>\n    <button mat-button class=\"secondary-button\" type=\"button\" [disabled]=\"disabled\" (click)=\"onLink()\" *ngIf=\"linkEnabled\">\n        <mat-icon>{{ iconLink }}</mat-icon>\n    </button>\n    <input [id]=\"id\" [accept]=\"fileAccept\" hidden type=\"file\" [attr.multiple]=\"fileLimit > 1 ? true : null\" #fileInput (change)=\"onSelectFile($event.target.files, selectButton)\">\n</ng-template>\n\n<ng-template #fileTemplate let-file let-index=\"index\">\n    <img class=\"image-preview\" [src]=\"file.preview\" *ngIf=\"file.preview\">\n    <button mat-button inputFileDropZone class=\"replace-button\" type=\"button\" (click)=\"fileReplace.click()\" (itemDrop)=\"onReplaceFile($event, index, replaceButton)\"\n        [disabled]=\"disabled\" (itemDragOver)=\"onDragOver(replaceButton)\" (itemDragLeave)=\"onDragLeave(replaceButton)\" #replaceButton>\n        <ng-container *ngIf=\"!file.preview\">\n            <mat-icon class=\"input-icon\">{{ iconFile }}</mat-icon>\n            <div class=\"file-name text-truncate\" [innerHtml]=\"file.file.name\" *ngIf=\"file.file\"></div>\n        </ng-container>\n    </button>\n    <button mat-button class=\"secondary-button\" type=\"button\" (click)=\"onDeleteFile(index)\" [disabled]=\"disabled\">\n        <mat-icon>{{ iconDelete }}</mat-icon>\n    </button>\n    <input [accept]=\"fileAccept\" hidden type=\"file\" #fileReplace (change)=\"onReplaceFile($event.target.files, index, replaceButton, fileReplace)\">\n</ng-template>\n\n<ng-template #linkTemplate>\n    <form class=\"form-link slide-in-up\" [formGroup]=\"form\" (ngSubmit)=\"onSubmitLink()\" novalidate>\n        <mat-form-field class=\"input-link\">\n            <input matInput formControlName=\"link\" [placeholder]=\"placeholderLink\">\n        </mat-form-field>\n        <div class=\"form-link-button\">\n            <button mat-button type=\"button\" (click)=\"onLink()\" [disabled]=\"disabled\">\n                <mat-icon>arrow_back</mat-icon>\n            </button>\n            <button mat-button type=\"submit\" [disabled]=\"disabled\">\n                <mat-icon>check</mat-icon>\n            </button>\n        </div>\n    </form>\n</ng-template>",
          providers: [{
            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
              return InputFileComponent_1;
            }),
            multi: true
          }],
          styles: [".input-file-container{position:relative}.input-file-container .files-container{display:flex;flex-direction:row;flex-wrap:wrap;padding-top:1.25rem}.input-file-container .file-button,.input-file-container .file-container{align-items:center;display:flex;height:10rem;justify-content:center;width:10rem}.input-file-container .secondary-button{width:10rem}.input-file-container .file-button{flex:1}.input-file-container .file-container{flex-direction:column;margin-right:1rem;overflow:hidden}.input-file-container .replace-button{flex:1;width:10rem}.input-file-container .mat-button:focus{outline:0}.input-file-container .file-name{width:calc(10rem - 2.5rem)}.input-file-container .image-preview{position:absolute;height:10rem;-o-object-fit:contain;object-fit:contain;width:10rem}.input-file-container .input-icon{font-size:calc(10rem / 4);height:calc(10rem / 4);width:calc(10rem / 4)}.input-file-container .form-link{display:flex;flex-direction:column;width:10rem}.input-file-container .input-link{width:10rem}.input-file-container .form-link-button{display:flex;flex-direction:row}.input-file-container .form-link-button .mat-button{min-width:calc(10rem / 2);width:calc(10rem / 2)}.input-file-container .mat-orphan-label{color:rgba(0,0,0,.54);display:block;font-size:1rem;left:0;margin:0;position:absolute;top:0;transform-origin:0;transition:.4s cubic-bezier(.25,.8,.25,1),width .4s cubic-bezier(.25,.8,.25,1)}.input-file-container .mat-orphan-label.active{transform:scale(.75)}@-webkit-keyframes bounceIn{20%,40%,60%,80%,from,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:scale3d(.3,.3,.3)}20%{transform:scale3d(1.1,1.1,1.1)}40%{transform:scale3d(.9,.9,.9)}60%{opacity:1;transform:scale3d(1.03,1.03,1.03)}80%{transform:scale3d(.97,.97,.97)}to{opacity:1;transform:scale3d(1,1,1)}}@keyframes bounceIn{20%,40%,60%,80%,from,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:scale3d(.3,.3,.3)}20%{transform:scale3d(1.1,1.1,1.1)}40%{transform:scale3d(.9,.9,.9)}60%{opacity:1;transform:scale3d(1.03,1.03,1.03)}80%{transform:scale3d(.97,.97,.97)}to{opacity:1;transform:scale3d(1,1,1)}}.bounce-in{-webkit-animation-duration:.75s;animation-duration:.75s;-webkit-animation-name:bounceIn;animation-name:bounceIn}@-webkit-keyframes slideInUp{from{opacity:0;transform:translate3d(0,100%,0)}to{opacity:1;transform:translate3d(0,0,0)}}@keyframes slideInUp{from{opacity:0;transform:translate3d(0,100%,0)}to{opacity:1;transform:translate3d(0,0,0)}}.slide-in-up{-webkit-animation-duration:.25s;animation-duration:.25s;-webkit-animation-name:slideInUp;animation-name:slideInUp}"]
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: InputFileService
        }];
      }, {
        acceptedFile: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        deletedFile: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        rejectedFile: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        classAnimation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fileAccept: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fileLimit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        iconAdd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        iconDelete: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        iconFile: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        iconLink: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        linkEnabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        placeholderLink: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        sizeLimit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fileInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['fileInput', {
            "static": false
          }]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DropZoneDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[inputFileDropZone]'
        }]
      }], function () {
        return [];
      }, {
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        itemDragOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        itemDragLeave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        itemDrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        onDragOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['dragover', ['$event']]
        }],
        onDragLeave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['dragleave', ['$event']]
        }],
        onDrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['drop', ['$event']]
        }]
      });
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](InputFileModule, {
        declarations: function declarations() {
          return [DropZoneDirective, InputFileComponent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]];
        },
        exports: function exports() {
          return [InputFileComponent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InputFileModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [DropZoneDirective, InputFileComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]],
          exports: [InputFileComponent],
          providers: [InputFileService],
          entryComponents: [InputFileComponent]
        }]
      }], null, null);
    })(); //# sourceMappingURL=ngx-input-file.js.map

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/chats/chats.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/chats/chats.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserChatsChatsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/components/breadcrumb/breadcrumb.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/components/breadcrumb/breadcrumb.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserComponentsBreadcrumbBreadcrumbComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div fxLayout=\"row wrap\" *ngIf=\"router.url != '/admin'\">\n    <div fxFlex=\"100\" class=\"p-1\">\n        <mat-card fxLayout=\"row\" class=\"breadcrumb\">\n            <a *ngIf=\"router.url != '/admin'\" routerLink=\"/admin\" class=\"breadcrumb-item\" fxLayout=\"row\" fxLayoutAlign=\"start center\" (click)=\"closeSubMenus()\">\n                <mat-icon>dashboard</mat-icon>\n                <span class=\"breadcrumb-title\">Dashboard</span>\n            </a>\n            <div *ngFor=\"let breadcrumb of breadcrumbs; let i = index;\" class=\"breadcrumb-item\" fxLayout=\"row\" fxLayoutAlign=\"start center\">                 \n                <a [hidden]=\"i == (breadcrumbs.length - 1)\" [routerLink]=\"[breadcrumb.url]\">{{breadcrumb.name}}</a>   \n                <span [hidden]=\"i != (breadcrumbs.length - 1)\" class=\"breadcrumb-title active\">{{breadcrumb.name}}</span>\n            </div> \n        </mat-card>\n    </div> \n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/components/menu/menu.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/components/menu/menu.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserComponentsMenuMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngFor=\"let menu of parentMenu\" class=\"menu-item\">\n    <a *ngIf=\"menu.routerLink && !menu.hasSubMenu\" mat-button \n        fxLayout=\"row\" fxLayoutAlign=\"start center\"\n        [routerLink]=\"[menu.routerLink]\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"(menu.parentId != 0) ? { exact:false } : {exact:true}\"\n        (click)=\"onClick(menu.id)\" [id]=\"'menu-item-'+menu.id\">\n        <mat-icon class=\"menu-icon\">{{menu.icon}}</mat-icon>\n        <span class=\"menu-title\">{{menu.title}}</span>\n    </a>\n    <a *ngIf=\"menu.href && !menu.subMenu\" mat-button \n        fxLayout=\"row\" fxLayoutAlign=\"start center\"\n        [attr.href]=\"menu.href || ''\" [attr.target]=\"menu.target || ''\"\n        (click)=\"onClick(menu.id)\" [id]=\"'menu-item-'+menu.id\">\n        <mat-icon class=\"menu-icon\">{{menu.icon}}</mat-icon>\n        <span class=\"menu-title\">{{menu.title}}</span>\n    </a>\n    <a *ngIf=\"menu.hasSubMenu\" mat-button \n        fxLayout=\"row\" fxLayoutAlign=\"start center\"\n        (click)=\"onClick(menu.id)\" [id]=\"'menu-item-'+menu.id\">\n        <mat-icon class=\"menu-icon\">{{menu.icon}}</mat-icon>\n        <span class=\"menu-title\">{{menu.title}}</span>\n        <mat-icon class=\"menu-expand-icon transition-2\">arrow_drop_down</mat-icon>\n    </a>\n\n    <div *ngIf=\"menu.hasSubMenu\" class=\"sub-menu\" [id]=\"'sub-menu-'+menu.id\">\n        <app-admin-menu [menuItems]=\"menuItems\" [menuParentId]=\"menu.id\"></app-admin-menu>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/components/messages/messages.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/components/messages/messages.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserComponentsMessagesMessagesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button mat-icon-button [matMenuTriggerFor]=\"messagesMenu\" (click)=\"openMessagesMenu()\" #messagesMenuTrigger=\"matMenuTrigger\">\r\n    <mat-icon>notifications</mat-icon>\r\n</button>\r\n<mat-menu #messagesMenu=\"matMenu\" [overlapTrigger]=\"false\" class=\"toolbar-dropdown-menu messages\">\r\n    <span (mouseleave)=\"messagesMenuTrigger.closeMenu()\">\r\n        <mat-tab-group backgroundColor=\"primary\" (click)=\"stopClickPropagate($event)\" [selectedIndex]=\"selectedTab\">\r\n            <mat-tab>\r\n                <ng-template mat-tab-label>\r\n                    <mat-icon>message</mat-icon>\r\n                </ng-template>\r\n                <mat-card class=\"content\" perfectScrollbar>\r\n                  <div fxLayout=\"column\" fxLayoutAlign=\"none\">\r\n                      <button mat-button *ngFor=\"let message of messages\">\r\n                          <img src=\"{{ ( message.image || (message.name | profilePicture)) }}\" width=\"50\">   \r\n                          <div fxLayout=\"column\" fxLayoutAlign=\"none\" class=\"w-100\">\r\n                              <div fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\r\n                                  <span class=\"name\">{{message.name}}</span>\r\n                                  <span class=\"info\"><mat-icon>access_time</mat-icon> {{message.time}}</span>\r\n                              </div>\r\n                              <span class=\"text text-muted\">{{message.text}}</span>\r\n                          </div>\r\n                      </button>\r\n                    </div>             \r\n                </mat-card>\r\n            </mat-tab>\r\n            <mat-tab>\r\n                <ng-template mat-tab-label>\r\n                    <mat-icon>description</mat-icon>\r\n                </ng-template>\r\n                <mat-card class=\"content\" perfectScrollbar>\r\n                  <div fxLayout=\"column\" fxLayoutAlign=\"none\">\r\n                      <button mat-button *ngFor=\"let file of files\">\r\n                          <div fxLayout=\"column\" fxLayoutAlign=\"none\" class=\"w-100\">\r\n                              <div fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\r\n                                  <span class=\"name\">{{file.text}}</span>\r\n                                  <span class=\"info\">{{file.size}}</span>\r\n                              </div>\r\n                              <mat-progress-bar\r\n                                  class=\"example-margin\"\r\n                                  [color]=\"file.color\"\r\n                                  mode=\"indeterminate\"\r\n                                  [value]=\"file.value\">\r\n                              </mat-progress-bar>\r\n                          </div>\r\n                      </button>\r\n                    </div>             \r\n                </mat-card>\r\n            </mat-tab>\r\n            <mat-tab>\r\n                <ng-template mat-tab-label>\r\n                    <mat-icon>event</mat-icon>\r\n                </ng-template>\r\n                <mat-card class=\"content\" perfectScrollbar>\r\n                  <div fxLayout=\"column\" fxLayoutAlign=\"none\">\r\n                      <button mat-button *ngFor=\"let meeting of meetings\">  \r\n                          <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"row-1\">\r\n                              <span class=\"name\">{{meeting.day}}</span>\r\n                              <span class=\"name\">{{meeting.month}}</span>\r\n                          </div>\r\n                          <div fxLayout=\"column\" fxLayoutAlign=\"none\">\r\n                              <span class=\"name\">{{meeting.title}}</span>\r\n                              <span class=\"text text-muted\">{{meeting.text}}</span>\r\n                          </div>\r\n                      </button>\r\n                    </div>             \r\n                </mat-card>\r\n            </mat-tab>\r\n        </mat-tab-group>\r\n    </span>\r\n</mat-menu>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/components/user-menu/user-menu.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/components/user-menu/user-menu.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserComponentsUserMenuUserMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button mat-icon-button [matMenuTriggerFor]=\"userMenu\" #userMenuTrigger=\"matMenuTrigger\" >\n    <mat-icon>account_circle</mat-icon>\n</button>\n\n<mat-menu #userMenu=\"matMenu\" [overlapTrigger]=\"false\" class=\"toolbar-dropdown-menu user-menu\">\n    <span (mouseleave)=\"userMenuTrigger.closeMenu()\">\n        <mat-toolbar color=\"primary\">\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" class=\"user-info\">\n                <img [src]=\"userImage\" alt=\"user-image\" width=\"80\" class=\"mat-elevation-z6\">\n                <p>Emilio Verdines <br> <small>General Manager</small></p>\n            </div>  \n        </mat-toolbar>\n        <a mat-menu-item routerLink=\"/admin\"> \n            <mat-icon>person</mat-icon>\n            <span>Profile</span> \n        </a>\n        <a mat-menu-item routerLink=\"/admin\"> \n            <mat-icon>edit</mat-icon>\n            <span>Edit Profile</span> \n        </a>\n        <a mat-menu-item routerLink=\"/admin\"> \n            <mat-icon>settings</mat-icon>\n            <span>Settings</span> \n        </a>\n        <a mat-menu-item routerLink=\"/admin\"> \n            <mat-icon>lock</mat-icon>\n            <span>Lock screen</span> \n        </a>\n        <a mat-menu-item routerLink=\"/admin\"> \n            <mat-icon>help</mat-icon>\n            <span>Help</span> \n        </a>\n        <div class=\"divider\"></div>\n        <!-- <a (click)=\"logOut()\"> \n            <mat-icon>power_settings_new</mat-icon>\n            <span>Log out</span> \n        </a> -->\n    </span>\n</mat-menu>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/feeds/feeds.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/feeds/feeds.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserFeedsFeedsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  <mat-tab-group>\n    <mat-tab label=\"Make a publication\">\n      <mat-card class=\"card-start btn-radius\">\n        <!-- <mat-card-header>\n            <mat-card-title>Card Data</mat-card-title>\n        </mat-card-header> -->\n        <mat-card-content>\n            <div fxFlex=\"100\" class=\"px-1\">\n              <!-- <form [formGroup]=\"feedsForm\"> -->\n                <mat-form-field appearance=\"outline\" class=\"w-100\">\n                    <input matInput   [(ngModel)]=\"postData\"   placeholder=\"What are you thinking?\">\n                </mat-form-field>\n\n                <div class=\"\">\n                    <button (click)=\"newPost()\" mat-raised-button color=\"primary\" class=\"btn-radius\">Post</button>\n                    <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"\" class=\"post-option\">\n                        <mat-icon>public</mat-icon>\n                      </button>\n                      <mat-menu #menu=\"matMenu\">\n                        <button mat-menu-item>\n                          <mat-icon>public</mat-icon>\n                          <span>Public</span>\n                        </button>\n                        <button mat-menu-item>\n                          <mat-icon>group</mat-icon>\n                          <span>Friends</span>\n                        </button>\n                        <button mat-menu-item>\n                          <mat-icon>notifications_off</mat-icon>\n                          <span>Just me</span>\n                        </button>\n                      </mat-menu>\n                </div>    \n              <!-- </form> -->\n            </div> \n         \n        </mat-card-content>\n      </mat-card>\n\n      <mat-card class=\"card-start btn-radius\" *ngFor=\"let post of postList; let i = index\">\n        <mat-card-header class=\"card-header\">\n          <div mat-card-avatar class=\"example-header-image\"></div>\n          <mat-card-title>{{post.user.name}} {{post.user.lastName}}</mat-card-title>\n          <mat-card-subtitle>@{{post.user.userName}}</mat-card-subtitle>\n\n          <div class=\"post-option\">\n            <button mat-icon-button [matMenuTriggerFor]=\"menu1\" aria-label=\"\" >\n              <mat-icon>more_vert</mat-icon>\n            </button>\n            <mat-menu #menu1=\"matMenu\">\n              <button mat-menu-item>\n                <span>Save</span>\n              </button>\n              <button mat-menu-item disabled>\n                <span>Hide</span>\n              </button>\n              <button mat-menu-item>\n                <span>Report</span>\n              </button>\n            </mat-menu>\n          </div>\n\n        </mat-card-header>\n        <!-- <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\"> -->\n        <mat-card-content>\n          <p>\n            {{post.text}}.\n          </p>\n        </mat-card-content>\n        <mat-card-actions class=\"card-action\"> \n              <button mat-icon-button color=\"warn\" class=\"action-btn\"><mat-icon>favorite</mat-icon>LIKE</button>\n              <button mat-icon-button color=\"basic\" class=\"action-btn\"><mat-icon>share</mat-icon>SHARE</button>\n              \n                <div class=\"comment-section\">\n                  <!-- <div class=\"comment-text\"> -->\n                    <mat-form-field appearance=\"legacy\" class=\"w-100 \">\n                      <mat-label>Write a comment...</mat-label>\n                      <input matInput #myComment>\n                      </mat-form-field>\n                  <!-- </div> -->\n                 <button mat-raised-button color=\"primary\" (click)=\"postComment(i,post._id,myComment)\" class=\"comment-btn btn-radius\">Post</button>\n                </div>\n\n\n                <mat-card class=\"card-start btn-radius\">\n                  <!-- <mat-card-content> -->\n                    <!-- <mat-card class=\"card-start\"> -->\n\n                 <a mat-flat-button  (click)=\"toggleShow(i,post._id)\" class=\"btn-radius\" >Load comments...</a>\n\n                      <!-- <button (click)=\"toggleShow()\" type=\"checkbox\" >Load more comments...</button> -->\n\n                      <div *ngIf=\"post.isLoadComment\" class=\"row container-fluid\"  id=\"divshow\" >\n                       <div *ngFor=\"let commentsLoop of post.commentData\">\n\n                      \n                      <mat-card-header class=\"card-header\" >\n                        <div mat-card-avatar class=\"example-header-image\"></div>\n                        <!-- <mat-card-title>Poly Gon</mat-card-title> -->\n                        <mat-card-subtitle>@{{commentsLoop.user.userName}}</mat-card-subtitle>            \n                      </mat-card-header>\n                      <mat-card-content>\n                        <p>\n                          {{commentsLoop.comment}}\n                       \n                        </p>\n                      </mat-card-content>\n                      \n                    </div>\n                      </div>\n                     \n                      \n                    <!-- </mat-card> -->\n                  <!-- </mat-card-content> -->\n                </mat-card>\n                \n                \n        </mat-card-actions>\n      </mat-card>\n\n    </mat-tab>\n\n    \n\n\n    <mat-tab label=\"Image\">\n      <mat-card class=\"card-start btn-radius\">\n        <!-- <mat-card-header>\n            <mat-card-title>Card Data</mat-card-title>\n        </mat-card-header> -->\n        <mat-card-content>\n            <div fxFlex=\"100\" class=\"px-1\">\n\n              <mat-form-field appearance=\"outline\" class=\"w-100 \">\n                <div>\n                  <mat-toolbar>\n                    <!-- Display files names -->\n                    <input matInput [(ngModel)]=\"fileAttr\" readonly name=\"name\" />\n              \n                    <!-- Browse Button -->\n                    <button mat-flat-button color=\"primary\" class=\"btn-radius\">\n                      Upload Image\n                    </button>\n                  </mat-toolbar>\n              \n                  <!-- Fetch selected filed on change -->\n                  <input type=\"file\" #fileInput id=\"uploadFile\" (change)=\"uploadFileEvt($event)\" name=\"uploadFile\" multiple=\"multiple\"\n                    accept=\"image/*\" />\n                </div>\n              </mat-form-field>\n\n                <div class=\"\">\n                    <button mat-raised-button color=\"primary\" class=\"btn-radius\">Post</button>\n                    <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"\" class=\"post-option\">\n                        <mat-icon>public</mat-icon>\n                      </button>\n                      <mat-menu #menu=\"matMenu\">\n                        <button mat-menu-item>\n                          <mat-icon>public</mat-icon>\n                          <span>Public</span>\n                        </button>\n                        <button mat-menu-item>\n                          <mat-icon>group</mat-icon>\n                          <span>Friends</span>\n                        </button>\n                        <button mat-menu-item>\n                          <mat-icon>notifications_off</mat-icon>\n                          <span>Just me</span>\n                        </button>\n                      </mat-menu>\n                </div>    \n            </div> \n        </mat-card-content>\n      </mat-card>\n\n      <mat-card class=\"example-card btn-radius\">\n        <mat-card-header>\n          <div mat-card-avatar class=\"example-header-image\"></div>\n          <mat-card-title>Shiba Inu</mat-card-title>\n          <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n        </mat-card-header>\n        <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\n        <mat-card-content>\n          <p>\n            The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n            bred for hunting.\n          </p>\n        </mat-card-content>\n          <mat-card-actions class=\"card-action\">\n            <button mat-icon-button color=\"warn\" class=\"action-btn\"><mat-icon>favorite</mat-icon>LIKE</button>\n            <button mat-icon-button color=\"basic\" class=\"action-btn\"><mat-icon>share</mat-icon>SHARE</button>\n        </mat-card-actions>\n\n      </mat-card>\n\n      <mat-card class=\"example-card\">\n        <mat-card-header>\n          <div mat-card-avatar class=\"example-header-image\"></div>\n          <mat-card-title>Shiba Inu</mat-card-title>\n          <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n        </mat-card-header>\n        <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\n        <mat-card-content>\n          <p>\n            The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n            bred for hunting.\n          </p>\n        </mat-card-content>\n          <mat-card-actions class=\"card-action\">\n            <button mat-icon-button color=\"warn\" class=\"action-btn\"><mat-icon>favorite</mat-icon>LIKE</button>\n            <button mat-icon-button color=\"basic\" class=\"action-btn\"><mat-icon>share</mat-icon>SHARE</button>\n        </mat-card-actions>\n    </mat-card>\n\n      <mat-card class=\"example-card\">\n        <mat-card-header>\n          <div mat-card-avatar class=\"example-header-image\"></div>\n          <mat-card-title>Shiba Inu</mat-card-title>\n          <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n        </mat-card-header>\n        <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\n        <mat-card-content>\n          <p>\n            The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n            bred for hunting.\n          </p>\n        </mat-card-content>\n        <mat-card-actions class=\"card-action\">\n          <button mat-icon-button color=\"warn\" class=\"action-btn\"><mat-icon>favorite</mat-icon>LIKE</button>\n          <button mat-icon-button color=\"basic\" class=\"action-btn\"><mat-icon>share</mat-icon>SHARE</button>\n      </mat-card-actions>\n    </mat-card>\n\n    \n    </mat-tab>\n  </mat-tab-group>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/profile/profile.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/profile/profile.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div fxLayout=\"row wrap\">\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"p-2\">\n        <h2 class=\"text-muted text-center\">Account details</h2>\n        <form [formGroup]=\"infoForm\" (ngSubmit)=\"onInfoFormSubmit(infoForm.value)\">\n            <mat-form-field class=\"w-100 mt-2\">\n                <input matInput placeholder=\"First Name\" formControlName=\"firstName\" required>\n                <mat-error *ngIf=\"infoForm.controls.firstName.errors?.required\">First Name is required</mat-error>\n                <mat-error *ngIf=\"infoForm.controls.firstName.hasError('minlength')\">First Name isn't long enough, minimum of 3 characters</mat-error>\n            </mat-form-field>\n            <mat-form-field class=\"w-100 mt-1\">\n                <input matInput placeholder=\"Last Name\" formControlName=\"lastName\" required>\n                <mat-error *ngIf=\"infoForm.controls.lastName.errors?.required\">Last Name is required</mat-error>\n                <mat-error *ngIf=\"infoForm.controls.lastName.hasError('minlength')\">Last Name isn't long enough, minimum of 3 characters</mat-error>\n            </mat-form-field>\n            <mat-form-field class=\"w-100 mt-1\">\n                <input matInput placeholder=\"Email\" formControlName=\"email\" required>\n                <mat-error *ngIf=\"infoForm.controls.email.errors?.required\">Email is required</mat-error>\n                <mat-error *ngIf=\"infoForm.controls.email.hasError('invalidEmail')\">Invalid email address</mat-error>\n            </mat-form-field>\n            <div class=\"text-center mt-2\">\n                <button mat-raised-button color=\"primary\" (click)=\"onInfoFormSubmit(infoForm.value)\">Save</button>\n            </div> \n        </form>\n    </div>\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"p-2\" ngClass.sm=\"mt-2\" ngClass.xs=\"mt-2\">\n        <h2 class=\"text-muted text-center\">Password change</h2>\n        <form [formGroup]=\"passwordForm\" (ngSubmit)=\"onPasswordFormSubmit(passwordForm.value)\">            \n            <mat-form-field class=\"w-100 mt-2\">\n                <input matInput placeholder=\"Current Password\" formControlName=\"currentPassword\" type=\"password\" minlength=\"6\" required>\n                <mat-error *ngIf=\"passwordForm.controls.currentPassword.errors?.required\">Current Password is required</mat-error>\n                <mat-error *ngIf=\"passwordForm.controls.currentPassword.hasError('minlength')\">Current Password isn't long enough, minimum of 6 characters</mat-error>\n            </mat-form-field>\n            <mat-form-field class=\"w-100 mt-1\">\n                <input matInput placeholder=\"New Password\" formControlName=\"newPassword\" type=\"password\" minlength=\"6\" required>\n                <mat-error *ngIf=\"passwordForm.controls.newPassword.errors?.required\">New Password is required</mat-error>\n                <mat-error *ngIf=\"passwordForm.controls.newPassword.hasError('minlength')\">New Password isn't long enough, minimum of 6 characters</mat-error>\n            </mat-form-field> \n            <mat-form-field class=\"w-100 mt-1\">\n              <input matInput placeholder=\"Confirm New Password\" formControlName=\"confirmNewPassword\" type=\"password\" required>\n              <mat-error *ngIf=\"passwordForm.controls.confirmNewPassword.errors?.required\">Confirm New Password is required</mat-error>\n              <mat-error *ngIf=\"passwordForm.controls.confirmNewPassword.hasError('mismatchedPasswords')\">Passwords do not match</mat-error>\n            </mat-form-field>\n            <div class=\"text-center mt-2\">\n                <button mat-raised-button color=\"primary\" (click)=\"onPasswordFormSubmit(passwordForm.value)\">Change</button>\n            </div>\n        </form>\n    </div>\n</div> \n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar color=\"primary\" class=\"admin-toolbar mat-elevation-z2\">\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"w-100\">  \r\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\"> \r\n            <div class=\"logo-section\" fxShow=\"false\" fxShow.gt-xs> \r\n                <a routerLink=\"/admin\" fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"logo\"> \r\n                    <span>User Feeds</span> \r\n                </a>\r\n            </div>                    \r\n            <button mat-icon-button (click)=\"toggleSidenav()\">\r\n                <mat-icon>menu</mat-icon>\r\n            </button>  \r\n            <button mat-icon-button (click)=\"settings.adminSidenavIsPinned = !settings.adminSidenavIsPinned\" fxShow=\"false\" fxShow.gt-xs>\r\n                <svg class=\"pin\">\r\n                    <path *ngIf=\"!settings.adminSidenavIsPinned\" d=\"M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z\" />\r\n                    <path *ngIf=\"settings.adminSidenavIsPinned\" d=\"M2,5.27L3.28,4L20,20.72L18.73,22L12.8,16.07V22H11.2V16H6V14L8,12V11.27L2,5.27M16,12L18,14V16H17.82L8,6.18V4H7V2H17V4H16V12Z\" />\r\n                </svg> \r\n            </button> \r\n            <button fxShow=\"false\" fxShow.gt-xs mat-icon-button (click)=\"settings.adminSidenavUserBlock = !settings.adminSidenavUserBlock\">\r\n                <mat-icon>person</mat-icon>\r\n            </button>    \r\n            <button mat-icon-button (click)=\"settings.rtl = !settings.rtl\" matTooltip=\"LTR / RTL\">\r\n                <mat-icon>swap_horiz</mat-icon>\r\n            </button> \r\n            <a mat-icon-button routerLink=\"/\"><mat-icon>home</mat-icon></a>                 \r\n        </div>            \r\n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\">   \r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxShow=\"false\" fxShow.gt-xs class=\"search-bar\">\r\n                <form method=\"get\">\r\n                    <input type=\"text\" placeholder=\"Type to search...\" class=\"mat-elevation-z3\"  [class.show]=\"toggleSearchBar\">\r\n                    <button mat-icon-button (click)=\"toggleSearchBar = !toggleSearchBar\" type=\"button\">\r\n                        <mat-icon>search</mat-icon>\r\n                    </button> \r\n                </form>\r\n            </div>             \r\n            <!-- <app-flags-menu fxShow=\"false\" fxShow.gt-sm></app-flags-menu> -->\r\n            <app-fullscreen></app-fullscreen>  \r\n            <app-messages fxShow=\"false\" fxShow.gt-xs></app-messages>\r\n            <app-user-menu></app-user-menu> \r\n        </div>\r\n    </div>\r\n</mat-toolbar>\r\n<mat-drawer-container class=\"admin-container\"> \r\n    <mat-drawer #sidenav [opened]=\"settings.adminSidenavIsOpened\" [mode]=\"(settings.adminSidenavIsPinned) ? 'side' : 'over'\" class=\"admin-sidenav mat-elevation-z6\" autoFocus=\"false\">\r\n        <perfect-scrollbar>\r\n            <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"user-block transition-2\" [class.show]=\"settings.adminSidenavUserBlock\"> \r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" class=\"user-info-wrapper\">\r\n                    <img [src]=\"userImage\" alt=\"user-image\">\r\n                    <div class=\"user-info\">\r\n                        <p class=\"name\">Emilio Verdines</p>\r\n                        <p class=\"position\">General Manager <br> <small class=\"muted-text\">Member since May. 2016</small></p>\r\n                    </div>\r\n                </div>\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" class=\"w-100 muted-text\">\r\n                    <button mat-icon-button><mat-icon>person_outline</mat-icon></button>\r\n                    <button mat-icon-button><mat-icon>mail_outline</mat-icon></button> \r\n                    <button mat-icon-button (click)=\"logOut()\"><mat-icon>power_settings_new</mat-icon></button> \r\n                    <!-- <a mat-icon-button routerLink=\"/sign-in\">\r\n                        <mat-icon>power_settings_new</mat-icon>\r\n                    </a> -->\r\n                </div>\r\n            </div> \r\n            <app-admin-menu [menuItems]=\"menuItems\" [menuParentId]=\"0\"></app-admin-menu>\r\n        </perfect-scrollbar>\r\n    </mat-drawer> \r\n    <mat-drawer-content>  \r\n        <!-- <app-breadcrumb></app-breadcrumb>   -->\r\n        <router-outlet></router-outlet>  \r\n    </mat-drawer-content>    \r\n</mat-drawer-container>";
    /***/
  },

  /***/
  "./src/app/user/chats/chats.component.scss":
  /*!*************************************************!*\
    !*** ./src/app/user/chats/chats.component.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserChatsChatsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvY2hhdHMvY2hhdHMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/user/chats/chats.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/user/chats/chats.component.ts ***!
    \***********************************************/

  /*! exports provided: ChatsComponent */

  /***/
  function srcAppUserChatsChatsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatsComponent", function () {
      return ChatsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

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
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ChatsComponent = /*#__PURE__*/function () {
      function ChatsComponent() {
        _classCallCheck(this, ChatsComponent);
      }

      _createClass(ChatsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ChatsComponent;
    }();

    ChatsComponent.ctorParameters = function () {
      return [];
    };

    ChatsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-chats',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./chats.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/chats/chats.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./chats.component.scss */
      "./src/app/user/chats/chats.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [])], ChatsComponent);
    /***/
  },

  /***/
  "./src/app/user/components/breadcrumb/breadcrumb.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/user/components/breadcrumb/breadcrumb.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserComponentsBreadcrumbBreadcrumbComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".breadcrumb {\n  padding: 8px;\n}\n.breadcrumb a {\n  text-decoration: none;\n}\n.breadcrumb .mat-icon {\n  font-size: 20px;\n  height: 20px;\n  width: 20px;\n  padding: 0 6px;\n}\n.breadcrumb .breadcrumb-title.active {\n  text-transform: uppercase;\n  font-weight: 500;\n}\n.breadcrumb .breadcrumb-item + .breadcrumb-item:before {\n  display: inline-block;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n  content: \"/\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9jb21wb25lbnRzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjtBQUFJO0VBQ0kscUJBQUE7QUFFUjtBQUNJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQUNSO0FBQ0k7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0FBQ1I7QUFDSTtFQUNJLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUFDUiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvY29tcG9uZW50cy9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnJlYWRjcnVtYntcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGF7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIC8vIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgfVxyXG4gICAgLm1hdC1pY29ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMCA2cHg7XHJcbiAgICB9XHJcbiAgICAuYnJlYWRjcnVtYi10aXRsZS5hY3RpdmV7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgLmJyZWFkY3J1bWItaXRlbSsuYnJlYWRjcnVtYi1pdGVtOmJlZm9yZXtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogLjVyZW07XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAuNXJlbTtcclxuICAgICAgICBjb250ZW50OiBcIi9cIjtcclxuICAgIH1cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/user/components/breadcrumb/breadcrumb.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/user/components/breadcrumb/breadcrumb.component.ts ***!
    \********************************************************************/

  /*! exports provided: BreadcrumbComponent */

  /***/
  function srcAppUserComponentsBreadcrumbBreadcrumbComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function () {
      return BreadcrumbComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _menu_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../menu/menu.service */
    "./src/app/user/components/menu/menu.service.ts");
    /* harmony import */


    var src_app_app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/app.settings */
    "./src/app/app.settings.ts");

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
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var BreadcrumbComponent = /*#__PURE__*/function () {
      function BreadcrumbComponent(appSettings, router, activatedRoute, title, menuService) {
        var _this3 = this;

        _classCallCheck(this, BreadcrumbComponent);

        this.appSettings = appSettings;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.title = title;
        this.menuService = menuService;
        this.breadcrumbs = [];
        this.settings = this.appSettings.settings;
        this.router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
            _this3.breadcrumbs = [];

            _this3.parseRoute(_this3.router.routerState.snapshot.root);

            _this3.pageTitle = "";

            _this3.breadcrumbs.forEach(function (breadcrumb) {
              _this3.pageTitle += ' > ' + breadcrumb.name;
            });

            _this3.title.setTitle(_this3.settings.name + _this3.pageTitle);
          }
        });
      }

      _createClass(BreadcrumbComponent, [{
        key: "parseRoute",
        value: function parseRoute(node) {
          if (node.data['breadcrumb']) {
            if (node.url.length) {
              var urlSegments = [];
              node.pathFromRoot.forEach(function (routerState) {
                urlSegments = urlSegments.concat(routerState.url);
              });
              var url = urlSegments.map(function (urlSegment) {
                return urlSegment.path;
              }).join('/');
              this.breadcrumbs.push({
                name: node.data['breadcrumb'],
                url: '/' + url
              });
            }
          }

          if (node.firstChild) {
            this.parseRoute(node.firstChild);
          }
        }
      }, {
        key: "closeSubMenus",
        value: function closeSubMenus() {
          this.menuService.closeAllSubMenus();
        }
      }]);

      return BreadcrumbComponent;
    }();

    BreadcrumbComponent.ctorParameters = function () {
      return [{
        type: src_app_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]
      }, {
        type: _menu_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"]
      }];
    };

    BreadcrumbComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-breadcrumb',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./breadcrumb.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/components/breadcrumb/breadcrumb.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./breadcrumb.component.scss */
      "./src/app/user/components/breadcrumb/breadcrumb.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [src_app_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"], _menu_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"]])], BreadcrumbComponent);
    /***/
  },

  /***/
  "./src/app/user/components/fullscreen/fullscreen.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/user/components/fullscreen/fullscreen.component.ts ***!
    \********************************************************************/

  /*! exports provided: FullScreenComponent */

  /***/
  function srcAppUserComponentsFullscreenFullscreenComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FullScreenComponent", function () {
      return FullScreenComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var document = window.document;

    var FullScreenComponent = /*#__PURE__*/function () {
      function FullScreenComponent() {
        _classCallCheck(this, FullScreenComponent);

        this.toggle = false;
      }

      _createClass(FullScreenComponent, [{
        key: "requestFullscreen",
        value: function requestFullscreen(elem) {
          if (elem.requestFullscreen) {
            elem.requestFullscreen();
          } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
          } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
          } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
          } else {
            console.log('Fullscreen API is not supported.');
          }
        }
      }, {
        key: "exitFullscreen",
        value: function exitFullscreen() {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          } else {
            console.log('Fullscreen API is not supported.');
          }
        }
      }, {
        key: "getFullscreen",
        value: function getFullscreen() {
          if (this.expand) {
            this.requestFullscreen(document.documentElement);
          }

          if (this.compress) {
            this.exitFullscreen();
          }
        }
      }, {
        key: "onFullScreenChange",
        value: function onFullScreenChange() {
          var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;

          if (fullscreenElement != null) {
            this.toggle = true;
          } else {
            this.toggle = false;
          }
        }
      }]);

      return FullScreenComponent;
    }();

    FullScreenComponent.propDecorators = {
      expand: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['expand']
      }],
      compress: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['compress']
      }],
      getFullscreen: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['click']
      }],
      onFullScreenChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['window:resize']
      }]
    };
    FullScreenComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-fullscreen',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
      template: "\n    <button mat-icon-button class=\"full-screen\">\n        <mat-icon *ngIf=\"!toggle\" #expand>fullscreen</mat-icon>\n        <mat-icon *ngIf=\"toggle\" #compress>fullscreen_exit</mat-icon>\n    </button> \n  "
    })], FullScreenComponent);
    /***/
  },

  /***/
  "./src/app/user/components/menu/menu.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/user/components/menu/menu.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserComponentsMenuMenuComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".menu-expand-icon {\n  position: absolute;\n  right: 10px;\n  top: 13px;\n}\n\n.menu-item .mat-button {\n  padding: 0;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  width: 100%;\n  font-weight: 400;\n  border-radius: 0;\n}\n\n.menu-item .mat-button .menu-icon {\n  margin-right: 12px;\n  padding: 7px;\n  border-radius: 50%;\n}\n\n.menu-item .mat-button.expanded .menu-expand-icon {\n  transform: rotate(180deg);\n}\n\n.menu-item .mat-button-wrapper {\n  padding-left: 16px;\n}\n\n.sub-menu {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.25s ease-out;\n}\n\n.sub-menu .sub-menu .mat-button {\n  padding-left: 40px;\n}\n\n.sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 60px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 80px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 100px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 120px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 140px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 160px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 180px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 200px;\n}\n\n.sub-menu .mat-button {\n  padding-left: 20px;\n}\n\n.sub-menu.show {\n  max-height: 900px;\n  transition: max-height 0.25s ease-in;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGhlbWUvc3R5bGVzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFESjs7QUFLSTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFGUjs7QUFHUTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBRFo7O0FBSVk7RUFHSSx5QkFBQTtBQUZoQjs7QUFNSTtFQUNJLGtCQUFBO0FBSlI7O0FBUUE7RUFFSSxhQUFBO0VBQ0EsZ0JBQUE7RUFHQSxxQ0FBQTtBQU5KOztBQ3BCUTtFQUtRLGtCQUFBO0FEa0JoQjs7QUN2QlE7RUFLUSxrQkFBQTtBRHFCaEI7O0FDMUJRO0VBS1Esa0JBQUE7QUR3QmhCOztBQzdCUTtFQUtRLG1CQUFBO0FEMkJoQjs7QUNoQ1E7RUFLUSxtQkFBQTtBRDhCaEI7O0FDbkNRO0VBS1EsbUJBQUE7QURpQ2hCOztBQ3RDUTtFQUtRLG1CQUFBO0FEb0NoQjs7QUN6Q1E7RUFLUSxtQkFBQTtBRHVDaEI7O0FDNUNRO0VBS1EsbUJBQUE7QUQwQ2hCOztBQXBCSTtFQUNJLGtCQUFBO0FBc0JSOztBQXBCSTtFQUNJLGlCQUFBO0VBR0Esb0NBQUE7QUFzQlIiLCJmaWxlIjoic3JjL2FwcC91c2VyL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3RoZW1lL3N0eWxlcy9taXhpbnNcIjtcclxuXHJcbi5tZW51LWV4cGFuZC1pY29ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB0b3A6IDEzcHg7XHJcbn1cclxuXHJcbi5tZW51LWl0ZW17ICAgIFxyXG4gICAgLm1hdC1idXR0b257XHJcbiAgICAgICAgcGFkZGluZzogMDsgICAgXHJcbiAgICAgICAgcGFkZGluZy10b3A6IDZweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNnB4OyBcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgLm1lbnUtaWNvbntcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuZXhwYW5kZWR7XHJcbiAgICAgICAgICAgIC5tZW51LWV4cGFuZC1pY29ue1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5tYXQtYnV0dG9uLXdyYXBwZXJ7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgfSAgICBcclxufVxyXG5cclxuLnN1Yi1tZW51e1xyXG4gICAgQGluY2x1ZGUgYWRtaW4tbWVudS1sZXZlbC1wYWRkaW5nKCdsdHInKTtcclxuICAgIG1heC1oZWlnaHQ6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2Utb3V0OyAgXHJcbiAgICAtbW96LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1vdXQ7ICBcclxuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1vdXQ7ICAgIFxyXG4gICAgLm1hdC1idXR0b257XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4OyAgICAgIFxyXG4gICAgfSBcclxuICAgICYuc2hvd3tcclxuICAgICAgICBtYXgtaGVpZ2h0OiA5MDBweDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1pbjtcclxuICAgICAgICAtbW96LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1pbjtcclxuICAgICAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2UtaW47XHJcbiAgICB9ICAgIFxyXG59IiwiQG1peGluIG1lbnUtbGV2ZWwtcGFkZGluZygpe1xyXG4gICAgJGVsZW06ICcnO1xyXG4gICAgQGZvciAkaSBmcm9tIDIgdGhyb3VnaCAxMCB7XHJcbiAgICAgICAgJGVsZW06IGlmKCRpID09IDIsIFwiLnN1Yi1tZW51XCIsIHNlbGVjdG9yLW5lc3QoJGVsZW0sIFwiLnN1Yi1tZW51XCIpKTsgICAgICBcclxuICAgICAgICAjeyRlbGVtICsgJyAubWF0LWJ1dHRvbid9IHsgXHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTZweCArICgyMHB4ICogJGkpOyBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBhZG1pbi1tZW51LWxldmVsLXBhZGRpbmcoJGRpcmVjdGlvbil7XHJcbiAgICAkZWxlbTogJyc7XHJcbiAgICBAZm9yICRpIGZyb20gMiB0aHJvdWdoIDEwIHtcclxuICAgICAgICAkZWxlbTogaWYoJGkgPT0gMiwgXCIuc3ViLW1lbnVcIiwgc2VsZWN0b3ItbmVzdCgkZWxlbSwgXCIuc3ViLW1lbnVcIikpOyAgICAgIFxyXG4gICAgICAgICN7JGVsZW0gKyAnIC5tYXQtYnV0dG9uJ30geyBcclxuICAgICAgICAgICAgQGlmICRkaXJlY3Rpb24gPT0gXCJydGxcIiB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4ICogJGk7IFxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICBAZWxzZXtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweCAqICRpOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/user/components/menu/menu.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/user/components/menu/menu.component.ts ***!
    \********************************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppUserComponentsMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../app.settings */
    "./src/app/app.settings.ts");
    /* harmony import */


    var _menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./menu.service */
    "./src/app/user/components/menu/menu.service.ts");

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
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var MenuComponent = /*#__PURE__*/function () {
      function MenuComponent(appSettings, menuService) {
        _classCallCheck(this, MenuComponent);

        this.appSettings = appSettings;
        this.menuService = menuService;
        this.settings = this.appSettings.settings;
      }

      _createClass(MenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.parentMenu = this.menuItems.filter(function (item) {
            return item.parentId == _this4.menuParentId;
          });
        }
      }, {
        key: "onClick",
        value: function onClick(menuId) {
          this.menuService.toggleMenuItem(menuId);
          this.menuService.closeOtherSubMenus(this.menuItems, menuId);
        }
      }]);

      return MenuComponent;
    }();

    MenuComponent.ctorParameters = function () {
      return [{
        type: _app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]
      }, {
        type: _menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]
      }];
    };

    MenuComponent.propDecorators = {
      menuItems: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['menuItems']
      }],
      menuParentId: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['menuParentId']
      }]
    };
    MenuComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-admin-menu',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/components/menu/menu.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
      providers: [_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]],
      styles: [__importDefault(__webpack_require__(
      /*! ./menu.component.scss */
      "./src/app/user/components/menu/menu.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"], _menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]])], MenuComponent);
    /***/
  },

  /***/
  "./src/app/user/components/menu/menu.model.ts":
  /*!****************************************************!*\
    !*** ./src/app/user/components/menu/menu.model.ts ***!
    \****************************************************/

  /*! exports provided: Menu */

  /***/
  function srcAppUserComponentsMenuMenuModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Menu", function () {
      return Menu;
    });

    var Menu = function Menu(id, title, routerLink, href, icon, target, hasSubMenu, parentId) {
      _classCallCheck(this, Menu);

      this.id = id;
      this.title = title;
      this.routerLink = routerLink;
      this.href = href;
      this.icon = icon;
      this.target = target;
      this.hasSubMenu = hasSubMenu;
      this.parentId = parentId;
    };
    /***/

  },

  /***/
  "./src/app/user/components/menu/menu.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/user/components/menu/menu.service.ts ***!
    \******************************************************/

  /*! exports provided: MenuService */

  /***/
  function srcAppUserComponentsMenuMenuServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuService", function () {
      return MenuService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./menu */
    "./src/app/user/components/menu/menu.ts");

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
    };

    var MenuService = /*#__PURE__*/function () {
      function MenuService(location, router) {
        _classCallCheck(this, MenuService);

        this.location = location;
        this.router = router;
      }

      _createClass(MenuService, [{
        key: "getMenuItems",
        value: function getMenuItems() {
          return _menu__WEBPACK_IMPORTED_MODULE_3__["menuItems"];
        }
      }, {
        key: "expandActiveSubMenu",
        value: function expandActiveSubMenu(menu) {
          var _this5 = this;

          var url = this.location.path();
          var routerLink = decodeURIComponent(url);
          var activeMenuItem = menu.filter(function (item) {
            return item.routerLink === routerLink;
          });

          if (activeMenuItem[0]) {
            (function () {
              var menuItem = activeMenuItem[0];

              while (menuItem.parentId != 0) {
                var parentMenuItem = menu.filter(function (item) {
                  return item.id == menuItem.parentId;
                })[0];
                menuItem = parentMenuItem;

                _this5.toggleMenuItem(menuItem.id);
              }
            })();
          }
        }
      }, {
        key: "toggleMenuItem",
        value: function toggleMenuItem(menuId) {
          var menuItem = document.getElementById('menu-item-' + menuId);
          var subMenu = document.getElementById('sub-menu-' + menuId);

          if (subMenu) {
            if (subMenu.classList.contains('show')) {
              subMenu.classList.remove('show');
              menuItem.classList.remove('expanded');
            } else {
              subMenu.classList.add('show');
              menuItem.classList.add('expanded');
            }
          }
        }
      }, {
        key: "closeOtherSubMenus",
        value: function closeOtherSubMenus(menu, menuId) {
          var currentMenuItem = menu.filter(function (item) {
            return item.id == menuId;
          })[0];
          menu.forEach(function (item) {
            if (item.id != menuId && item.parentId == currentMenuItem.parentId || currentMenuItem.parentId == 0 && item.id != menuId) {
              var subMenu = document.getElementById('sub-menu-' + item.id);
              var menuItem = document.getElementById('menu-item-' + item.id);

              if (subMenu) {
                if (subMenu.classList.contains('show')) {
                  subMenu.classList.remove('show');
                  menuItem.classList.remove('expanded');
                }
              }
            }
          });
        }
      }, {
        key: "closeAllSubMenus",
        value: function closeAllSubMenus() {
          _menu__WEBPACK_IMPORTED_MODULE_3__["menuItems"].forEach(function (item) {
            var subMenu = document.getElementById('sub-menu-' + item.id);
            var menuItem = document.getElementById('menu-item-' + item.id);

            if (subMenu) {
              if (subMenu.classList.contains('show')) {
                subMenu.classList.remove('show');
                menuItem.classList.remove('expanded');
              }
            }
          });
        }
      }]);

      return MenuService;
    }();

    MenuService.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    MenuService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
      providedIn: 'root'
    }), __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], MenuService);
    /***/
  },

  /***/
  "./src/app/user/components/menu/menu.ts":
  /*!**********************************************!*\
    !*** ./src/app/user/components/menu/menu.ts ***!
    \**********************************************/

  /*! exports provided: menuItems */

  /***/
  function srcAppUserComponentsMenuMenuTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "menuItems", function () {
      return menuItems;
    });
    /* harmony import */


    var _menu_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./menu.model */
    "./src/app/user/components/menu/menu.model.ts");

    var menuItems = [new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](10, 'Feeds', '/users/feeds', null, 'dashboard', null, false, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](70, 'Profile', '/users/profile', null, 'person', null, false, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](120, 'Chats', '/user/chats', null, 'insert_comment', null, false, 0)];
    /***/
  },

  /***/
  "./src/app/user/components/messages/messages.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/user/components/messages/messages.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserComponentsMessagesMessagesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".messages .mat-tab-label {\n  min-width: 93.3px;\n  height: 40px;\n}\n.messages .content {\n  padding: 0;\n  height: 250px;\n}\n.messages img {\n  margin-right: 8px;\n  border-radius: 4px;\n}\n.messages span.name {\n  text-transform: capitalize;\n  font-size: 13px;\n  line-height: 22px;\n}\n.messages span.info {\n  font-size: 12px;\n  opacity: 0.8;\n  line-height: 22px;\n}\n.messages span.text {\n  font-size: 11px;\n  line-height: 14px;\n  white-space: initial;\n  text-align: left;\n}\n.messages .mat-button {\n  padding: 8px;\n}\n.messages .mat-button .mat-button-wrapper {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n}\n.messages .mat-button .mat-icon {\n  height: 16px;\n  font-size: 12px;\n  width: 12px;\n  vertical-align: middle;\n}\n.messages .row-1 {\n  box-shadow: 0 0 5px #ccc;\n  border-radius: 4px;\n  padding: 2px 13px;\n  margin-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9jb21wb25lbnRzL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0FBQVI7QUFFSTtFQUNJLFVBQUE7RUFDQSxhQUFBO0FBQVI7QUFFSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFBUjtBQUVJO0VBQ0ksMEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFBUjtBQUVJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUFSO0FBRUk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBQVI7QUFFSTtFQUNJLFlBQUE7QUFBUjtBQUNRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDWjtBQUNRO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFDWjtBQUVJO0VBQ0ksd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFBUiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvY29tcG9uZW50cy9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZXNzYWdlc3tcclxuICAgIC5tYXQtdGFiLWxhYmVse1xyXG4gICAgICAgIG1pbi13aWR0aDogOTMuM3B4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgIH1cclxuICAgIC5jb250ZW50e1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIH1cclxuICAgIGltZ3tcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB9XHJcbiAgICBzcGFuLm5hbWV7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgfVxyXG4gICAgc3Bhbi5pbmZve1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICB9XHJcbiAgICBzcGFuLnRleHR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBpbml0aWFsO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9ICBcclxuICAgIC5tYXQtYnV0dG9ue1xyXG4gICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAubWF0LWJ1dHRvbi13cmFwcGVye1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1hdC1pY29ue1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnJvdy0xe1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCA1cHggI2NjYztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgcGFkZGluZzogMnB4IDEzcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICB9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/user/components/messages/messages.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/user/components/messages/messages.component.ts ***!
    \****************************************************************/

  /*! exports provided: MessagesComponent */

  /***/
  function srcAppUserComponentsMessagesMessagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessagesComponent", function () {
      return MessagesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./messages.service */
    "./src/app/user/components/messages/messages.service.ts");

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
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var MessagesComponent = /*#__PURE__*/function () {
      function MessagesComponent(messagesService) {
        _classCallCheck(this, MessagesComponent);

        this.messagesService = messagesService;
        this.selectedTab = 1;
        this.messages = messagesService.getMessages();
        this.files = messagesService.getFiles();
        this.meetings = messagesService.getMeetings();
      }

      _createClass(MessagesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openMessagesMenu",
        value: function openMessagesMenu() {
          this.trigger.openMenu();
          this.selectedTab = 0;
        }
      }, {
        key: "onMouseLeave",
        value: function onMouseLeave() {
          this.trigger.closeMenu();
        }
      }, {
        key: "stopClickPropagate",
        value: function stopClickPropagate(event) {
          event.stopPropagation();
          event.preventDefault();
        }
      }]);

      return MessagesComponent;
    }();

    MessagesComponent.ctorParameters = function () {
      return [{
        type: _messages_service__WEBPACK_IMPORTED_MODULE_2__["MessagesService"]
      }];
    };

    MessagesComponent.propDecorators = {
      trigger: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"]]
      }]
    };
    MessagesComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-messages',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./messages.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/components/messages/messages.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
      providers: [_messages_service__WEBPACK_IMPORTED_MODULE_2__["MessagesService"]],
      styles: [__importDefault(__webpack_require__(
      /*! ./messages.component.scss */
      "./src/app/user/components/messages/messages.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_messages_service__WEBPACK_IMPORTED_MODULE_2__["MessagesService"]])], MessagesComponent);
    /***/
  },

  /***/
  "./src/app/user/components/messages/messages.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/user/components/messages/messages.service.ts ***!
    \**************************************************************/

  /*! exports provided: MessagesService */

  /***/
  function srcAppUserComponentsMessagesMessagesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessagesService", function () {
      return MessagesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var MessagesService = /*#__PURE__*/function () {
      function MessagesService() {
        _classCallCheck(this, MessagesService);

        this.messages = [{
          name: 'ashley',
          text: 'After you get up and running, you can place Font Awesome icons just about...',
          time: '1 min ago'
        }, {
          name: 'michael',
          text: 'You asked, Font Awesome delivers with 40 shiny new icons in version 4.2.',
          time: '2 hrs ago'
        }, {
          name: 'julia',
          text: 'Want to request new icons? Here\'s how. Need vectors or want to use on the...',
          time: '10 hrs ago'
        }, {
          name: 'bruno',
          text: 'Explore your passions and discover new ones by getting involved. Stretch your...',
          time: '1 day ago'
        }, {
          name: 'tereza',
          text: 'Get to know who we are - from the inside out. From our history and culture, to the...',
          time: '1 day ago'
        }, {
          name: 'adam',
          text: 'Need some support to reach your goals? Apply for scholarships across...',
          time: '2 days ago'
        }, {
          name: 'michael',
          text: 'Wrap the dropdown\'s trigger and the dropdown menu within .dropdown, or...',
          time: '1 week ago'
        }];
        this.files = [{
          text: 'gradus.zip',
          size: '~6.2 MB',
          value: '47',
          color: 'primary'
        }, {
          text: 'documentation.pdf',
          size: '~14.6 MB',
          value: '33',
          color: 'accent'
        }, {
          text: 'wallpaper.jpg',
          size: '~558 KB',
          value: '60',
          color: 'warn'
        }, {
          text: 'letter.doc',
          size: '~57 KB',
          value: '80',
          color: 'primary'
        }, {
          text: 'azimuth.zip',
          size: '~10.2 MB',
          value: '55',
          color: 'warn'
        }, {
          text: 'contacts.xlsx',
          size: '~96 KB',
          value: '75',
          color: 'accent'
        }];
        this.meetings = [{
          day: '09',
          month: 'May',
          title: 'Meeting with Bruno',
          text: 'Fusce ut condimentum velit, quis egestas eros. Quisque sed condimentum neque.',
          color: 'danger'
        }, {
          day: '15',
          month: 'May',
          title: 'Training course',
          text: 'Fusce arcu tortor, tempor aliquam augue vel, consectetur vehicula lectus.',
          color: 'primary'
        }, {
          day: '12',
          month: 'June',
          title: 'Dinner with Ashley',
          text: 'Curabitur rhoncus facilisis augue sed fringilla.',
          color: 'info'
        }, {
          day: '14',
          month: 'June',
          title: 'Sport time',
          text: 'Vivamus tristique enim eros, ac ultricies sem ultrices vitae.',
          color: 'warning'
        }, {
          day: '29',
          month: 'July',
          title: 'Birthday of Julia',
          text: 'Nam porttitor justo nec elit efficitur vestibulum.',
          color: 'success'
        }];
      }

      _createClass(MessagesService, [{
        key: "getMessages",
        value: function getMessages() {
          return this.messages;
        }
      }, {
        key: "getFiles",
        value: function getFiles() {
          return this.files;
        }
      }, {
        key: "getMeetings",
        value: function getMeetings() {
          return this.meetings;
        }
      }]);

      return MessagesService;
    }();

    MessagesService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()], MessagesService);
    /***/
  },

  /***/
  "./src/app/user/components/user-menu/user-menu.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/user/components/user-menu/user-menu.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserComponentsUserMenuUserMenuComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvY29tcG9uZW50cy91c2VyLW1lbnUvdXNlci1tZW51LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/user/components/user-menu/user-menu.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/user/components/user-menu/user-menu.component.ts ***!
    \******************************************************************/

  /*! exports provided: UserMenuComponent */

  /***/
  function srcAppUserComponentsUserMenuUserMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserMenuComponent", function () {
      return UserMenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

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
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var UserMenuComponent = /*#__PURE__*/function () {
      function UserMenuComponent(router) {
        _classCallCheck(this, UserMenuComponent);

        this.router = router;
        this.userImage = 'assets/images/others/admin.jpg';
      }

      _createClass(UserMenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logOut",
        value: function logOut() {
          console.log("in logout");
          localStorage.removeItem('user');
          localStorage.removeItem('token');
          this.router.navigate(['/sign-in']);
        }
      }]);

      return UserMenuComponent;
    }();

    UserMenuComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    UserMenuComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-user-menu',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./user-menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/components/user-menu/user-menu.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./user-menu.component.scss */
      "./src/app/user/components/user-menu/user-menu.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], UserMenuComponent);
    /***/
  },

  /***/
  "./src/app/user/feeds/feeds.component.scss":
  /*!*************************************************!*\
    !*** ./src/app/user/feeds/feeds.component.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserFeedsFeedsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-start {\n  border: 1px solid #e0e0e5;\n  padding: 10px;\n  margin: 10px;\n  border-radius: 6px;\n}\n\n.card-header {\n  background-color: #fff;\n}\n\n.card-action {\n  background-color: #f5f5f5;\n}\n\n.action-btn {\n  padding: 0px 120px 0px 0px;\n  margin: 0px 15px 0 10px;\n}\n\n.example-card {\n  max-width: 500px;\n  margin: 35px 30px 35px 30px;\n}\n\n.example-header-image {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover;\n}\n\n.post-option {\n  float: right;\n}\n\n::ng-deep .mat-form-field-outline-start {\n  border-radius: 28px 0 0 28px !important;\n  min-width: 28px !important;\n}\n\n::ng-deep .mat-form-field-outline-end {\n  border-radius: 0 28px 28px 0 !important;\n}\n\n.h7 {\n  font-size: 0.8rem;\n}\n\n.gedf-wrapper {\n  margin-top: 0.97rem;\n}\n\n.comment-section {\n  margin: 2px;\n  display: flex;\n}\n\n.comment-btn {\n  align-self: center;\n}\n\n.btn-radius {\n  border-radius: 20px;\n}\n\n@media (min-width: 992px) {\n  .gedf-main {\n    padding-left: 4rem;\n    padding-right: 4rem;\n  }\n\n  .gedf-card {\n    margin-bottom: 2.77rem;\n  }\n}\n\n/**Reset Bootstrap*/\n\n.dropdown-toggle::after {\n  content: none;\n  display: none;\n}\n\n#uploadFile {\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  z-index: 9;\n  opacity: 0;\n  height: 100%;\n  cursor: pointer;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9mZWVkcy9mZWVkcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSwwQkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBR0U7RUFDRSxtRkFBQTtFQUNBLHNCQUFBO0FBQUo7O0FBR0U7RUFDSSxZQUFBO0FBQU47O0FBSUU7RUFDRSx1Q0FBQTtFQUNBLDBCQUFBO0FBREo7O0FBSUU7RUFDRSx1Q0FBQTtBQURKOztBQWNBO0VBQ0ksaUJBQUE7QUFYSjs7QUFlQTtFQUNJLG1CQUFBO0FBWko7O0FBZ0JBO0VBQ0ksV0FBQTtFQUVBLGFBQUE7QUFkSjs7QUFpQkE7RUFFSSxrQkFBQTtBQWZKOztBQW9CQTtFQUVJLG1CQUFBO0FBbEJKOztBQXFCQTtFQUNJO0lBQ0ksa0JBQUE7SUFDQSxtQkFBQTtFQWxCTjs7RUFvQkU7SUFDSSxzQkFBQTtFQWpCTjtBQUNGOztBQW9CQSxtQkFBQTs7QUFDQTtFQUVJLGFBQUE7RUFDQSxhQUFBO0FBbkJKOztBQXlDQTtFQUNJLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQXRDSiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvZmVlZHMvZmVlZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1zdGFydHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uY2FyZC1hY3Rpb257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG59XHJcblxyXG4uYWN0aW9uLWJ0bntcclxuICAgIHBhZGRpbmc6IDBweCAxMjBweCAwcHggMHB4O1xyXG4gICAgbWFyZ2luOiAwcHggMTVweCAwIDEwcHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIG1hcmdpbjogMzVweCAzMHB4IDM1cHggMzBweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcblxyXG4gIC5wb3N0LW9wdGlvbntcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxuXHJcblxyXG4gIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1zdGFydCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyOHB4IDAgMCAyOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4td2lkdGg6IDI4cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWVuZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDI4cHggMjhweCAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4vLyAuZXhhbXBsZS1idXR0b24tcm93IHtcclxuLy8gICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbi8vICAgICB3aWR0aDogNDkwcHg7XHJcbi8vICAgfVxyXG4gIFxyXG5cclxuLy8gLmV4YW1wbGUtYnV0dG9uLXJvdyAubWF0LWJ1dHRvbi1iYXNlIHtcclxuLy8gICAgIG1hcmdpbjogOHB4IDhweCA4cHggMDtcclxuLy8gICB9XHJcbiAgXHJcbi5oNyB7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIFxyXG59XHJcblxyXG4uZ2VkZi13cmFwcGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDAuOTdyZW07XHJcbiAgICBcclxufVxyXG5cclxuLmNvbW1lbnQtc2VjdGlvbntcclxuICAgIG1hcmdpbjogMnB4O1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5jb21tZW50LWJ0bntcclxuICAgIC8vIHBhZGRpbmc6IDJweCA0cHggMHB4IDhweDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbW1lbnQtdGV4dHt9XHJcblxyXG4uYnRuLXJhZGl1c3tcclxuXHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIC5nZWRmLW1haW4ge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNHJlbTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0cmVtO1xyXG4gICAgfVxyXG4gICAgLmdlZGYtY2FyZCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMi43N3JlbTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqUmVzZXQgQm9vdHN0cmFwKi9cclxuLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xyXG4gICAgXHJcbiAgICBjb250ZW50OiBub25lO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuXHJcbi8vIC5tYXQtZm9ybS1maWVsZCB7XHJcbi8vICAgICBtYXJnaW46IDQwcHggMDtcclxuLy8gICAgIHdpZHRoOiA1MDBweCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAubWF0LXRvb2xiYXItc2luZ2xlLXJvdyB7XHJcbi8vICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuLy8gICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4vLyB9XHJcblxyXG4vLyAubWF0LXRvb2xiYXItc2luZ2xlLXJvdyBidXR0b24ge1xyXG4vLyAgICAgd2lkdGg6IDIwMHB4O1xyXG4vLyB9XHJcblxyXG4vLyAubWF0LWZvcm0tZmllbGQge1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vIH1cclxuXHJcbiN1cGxvYWRGaWxlIHtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7ICAgIFxyXG4gICAgei1pbmRleDogOTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/user/feeds/feeds.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/user/feeds/feeds.component.ts ***!
    \***********************************************/

  /*! exports provided: FeedsComponent */

  /***/
  function srcAppUserFeedsFeedsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedsComponent", function () {
      return FeedsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _theme_utils_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../theme/utils/common.service */
    "./src/app/theme/utils/common.service.ts");

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
    };

    var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var FeedsComponent = /*#__PURE__*/function () {
      function FeedsComponent(commonService, formBuilder, snackBar) {
        _classCallCheck(this, FeedsComponent);

        this.commonService = commonService;
        this.formBuilder = formBuilder;
        this.snackBar = snackBar;
        this.postList = [];
      } // feedsForm: FormGroup;


      _createClass(FeedsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // this.feedsForm = this.formBuilder.group({
          //   'post': ['', Validators.compose([Validators.required])] 
          // });
          this.userData = JSON.parse(localStorage.getItem('user'));
          console.log(this.userData);
          this.isShown = false; //hidden every time subscribe detects change

          this.getPostList();
        }
      }, {
        key: "getPostList",
        value: function getPostList() {
          var _this6 = this;

          this.commonService.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["post"].list).subscribe(function (res) {
            return __awaiter(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log(res);
                      this.postList = res.data;
                      this.postList.forEach(function (element) {
                        element["isLoadComment"] = false;
                      }); // this.postList.sort((a,b) => a.dCreatedDate.localeCompare(b.dCreatedDate));

                      this.postList.sort(function (a, b) {
                        return b.dCreatedDate - a.dCreatedDate;
                      });

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "toggleShow",
        value: function toggleShow(i, postId) {
          var _this7 = this;

          this.commonService.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["comment"].byPostId + postId).subscribe(function (res) {
            return __awaiter(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      console.log(res);

                      if (res.data.comments.length) {
                        this.postList[i].commentData = res.data.comments;
                        this.postList.forEach(function (element, index) {
                          if (index == i) {
                            element["isLoadComment"] = true;
                          } else {
                            element["isLoadComment"] = false;
                          }
                        });
                      } else {
                        this.snackBar.open("No Comments found for this post.", '×', {
                          panelClass: 'danger',
                          verticalPosition: 'top',
                          duration: 3000
                        });
                      }

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }, function (err) {
            console.log(err);
          });
          console.log(i);
        }
      }, {
        key: "newPost",
        value: function newPost() {
          var _this8 = this;

          console.log(this.postData);
          var data = {
            text: this.postData,
            postedUser: this.userData._id
          };
          this.commonService.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["post"].create, data).subscribe(function (res) {
            return __awaiter(_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.getPostList();

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }, function (err) {
            _this8.snackBar.open(err.message, '×', {
              panelClass: 'danger',
              verticalPosition: 'top',
              duration: 3000
            });
          }); // console.log(this.feedsForm.value);
        }
      }, {
        key: "postComment",
        value: function postComment(i, postId, myComment) {
          var _this9 = this;

          console.log(myComment.value);
          var data = {
            comment: myComment.value,
            postId: postId,
            userId: this.userData._id
          };
          this.commonService.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["comment"].create, data).subscribe(function (res) {
            return __awaiter(_this9, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.toggleShow(i, postId);
                      myComment.value = '';

                    case 2:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }, function (err) {
            _this9.snackBar.open(err.message, '×', {
              panelClass: 'danger',
              verticalPosition: 'top',
              duration: 3000
            });
          });
        }
      }]);

      return FeedsComponent;
    }();

    FeedsComponent.ctorParameters = function () {
      return [{
        type: _theme_utils_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]
      }];
    };

    FeedsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: "app-feeds",
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./feeds.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/feeds/feeds.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./feeds.component.scss */
      "./src/app/user/feeds/feeds.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_theme_utils_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])], FeedsComponent);
    /***/
  },

  /***/
  "./src/app/user/profile/profile.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/user/profile/profile.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserProfileProfileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/user/profile/profile.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/user/profile/profile.component.ts ***!
    \***************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppUserProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../theme/utils/app-validators */
    "./src/app/theme/utils/app-validators.ts");

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
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ProfileComponent = /*#__PURE__*/function () {
      function ProfileComponent(formBuilder, snackBar) {
        _classCallCheck(this, ProfileComponent);

        this.formBuilder = formBuilder;
        this.snackBar = snackBar;
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.infoForm = this.formBuilder.group({
            'firstName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)])],
            'lastName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)])],
            'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_3__["emailValidator"]])]
          });
          this.passwordForm = this.formBuilder.group({
            'currentPassword': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'newPassword': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'confirmNewPassword': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          }, {
            validator: Object(_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_3__["matchingPasswords"])('newPassword', 'confirmNewPassword')
          });
        }
      }, {
        key: "onInfoFormSubmit",
        value: function onInfoFormSubmit(values) {
          if (this.infoForm.valid) {
            this.snackBar.open('Your account information updated successfully!', '×', {
              panelClass: 'success',
              verticalPosition: 'top',
              duration: 3000
            });
          }
        }
      }, {
        key: "onPasswordFormSubmit",
        value: function onPasswordFormSubmit(values) {
          if (this.passwordForm.valid) {
            this.snackBar.open('Your password changed successfully!', '×', {
              panelClass: 'success',
              verticalPosition: 'top',
              duration: 3000
            });
          }
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
      }];
    };

    ProfileComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-profile',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/profile/profile.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./profile.component.scss */
      "./src/app/user/profile/profile.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/user/user.component.scss":
  /*!******************************************!*\
    !*** ./src/app/user/user.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserUserComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".admin-sidenav {\n  position: fixed;\n  width: 250px;\n  border: none !important;\n  padding-top: 56px;\n  bottom: 0;\n  top: 0;\n}\n.admin-sidenav .close {\n  margin-left: 178px;\n}\n.admin-sidenav .divider {\n  margin: 8px 0;\n}\n.admin-sidenav .vertical-menu-wrapper {\n  height: calc(100% - 122px);\n}\n.admin-toolbar {\n  height: 56px;\n  position: fixed;\n  z-index: 9;\n}\n.admin-toolbar .logo-section {\n  width: 234px;\n}\n.admin-container .mat-drawer-content {\n  padding: 16px;\n  padding-top: 72px;\n  box-sizing: border-box;\n  min-height: 100vh;\n}\n.pin {\n  width: 24px;\n  height: 24px;\n  cursor: pointer;\n  fill: currentColor;\n}\n.search-bar form input {\n  height: 28px;\n  border: none;\n  padding: 0;\n  border-radius: 15px;\n  outline: none;\n  color: #444;\n  width: 0;\n  overflow: hidden;\n  transition: 0.3s;\n}\n.search-bar form input.show {\n  padding: 0 8px;\n  width: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aGVtZS9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQ0htQjtFREluQixTQUFBO0VBQ0EsTUFBQTtBQURKO0FBRUk7RUFDSSxrQkFBQTtBQUFSO0FBRUk7RUFDSSxhQUFBO0FBQVI7QUFFSTtFQUNJLDBCQUFBO0FBQVI7QUFJQTtFQUNJLFlDbEJtQjtFRG1CbkIsZUFBQTtFQUNBLFVBQUE7QUFESjtBQUVJO0VBQ0ksWUFBQTtBQUFSO0FBS0k7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBRlI7QUFNQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBSEo7QUFRUTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUxaO0FBTVk7RUFDRyxjQUFBO0VBQ0EsWUFBQTtBQUpmIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uL3RoZW1lL3N0eWxlcy92YXJpYWJsZXNcIjtcclxuXHJcbi5hZG1pbi1zaWRlbmF2e1xyXG4gICAgcG9zaXRpb246IGZpeGVkOyBcclxuICAgIHdpZHRoOiAkYWRtaW4tc2lkZW5hdi13aWR0aDtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy10b3A6ICRhZG1pbi10b29sYmFyLWhlaWdodDsgXHJcbiAgICBib3R0b206IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICAuY2xvc2V7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE3OHB4O1xyXG4gICAgfVxyXG4gICAgLmRpdmlkZXJ7XHJcbiAgICAgICAgbWFyZ2luOiA4cHggMDtcclxuICAgIH1cclxuICAgIC52ZXJ0aWNhbC1tZW51LXdyYXBwZXJ7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMjJweCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hZG1pbi10b29sYmFye1xyXG4gICAgaGVpZ2h0OiAkYWRtaW4tdG9vbGJhci1oZWlnaHQ7IFxyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogOTtcclxuICAgIC5sb2dvLXNlY3Rpb257XHJcbiAgICAgICAgd2lkdGg6ICRhZG1pbi1zaWRlbmF2LXdpZHRoIC0gMTZweDtcclxuICAgIH1cclxufVxyXG5cclxuLmFkbWluLWNvbnRhaW5lcnsgXHJcbiAgICAubWF0LWRyYXdlci1jb250ZW50e1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6ICRhZG1pbi10b29sYmFyLWhlaWdodCArIDE2cHg7IFxyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5waW57XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcclxufVxyXG5cclxuLnNlYXJjaC1iYXJ7XHJcbiAgICBmb3Jte1xyXG4gICAgICAgIGlucHV0e1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6ICM0NDQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgICAgICAmLnNob3d7XHJcbiAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgOHB4O1xyXG4gICAgICAgICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICAgICAgIFxyXG4gICAgfVxyXG59IiwiJGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XHJcbiR0aGVtZS1tYXgtd2lkdGg6IDEzMDBweDtcclxuXHJcbiRhZG1pbi10b29sYmFyLWhlaWdodDogNTZweDtcclxuJGFkbWluLXNpZGVuYXYtd2lkdGg6IDI1MHB4O1xyXG4kc2lkZW5hdi11c2VyLWJsb2NrLWhlaWdodDogMTU2cHg7Il19 */";
    /***/
  },

  /***/
  "./src/app/user/user.component.ts":
  /*!****************************************!*\
    !*** ./src/app/user/user.component.ts ***!
    \****************************************/

  /*! exports provided: UserComponent */

  /***/
  function srcAppUserUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserComponent", function () {
      return UserComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../app.settings */
    "./src/app/app.settings.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_menu_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/menu/menu.service */
    "./src/app/user/components/menu/menu.service.ts");

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
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var UserComponent = /*#__PURE__*/function () {
      function UserComponent(appSettings, router, menuService) {
        _classCallCheck(this, UserComponent);

        this.appSettings = appSettings;
        this.router = router;
        this.menuService = menuService;
        this.userImage = 'assets/images/others/admin.jpg';
        this.toggleSearchBar = false;
        this.settings = this.appSettings.settings;
      }

      _createClass(UserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          if (window.innerWidth <= 960) {
            this.settings.adminSidenavIsOpened = false;
            this.settings.adminSidenavIsPinned = false;
          }

          ;
          setTimeout(function () {
            _this10.settings.theme = 'blue';
          });
          this.menuItems = this.menuService.getMenuItems();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this11 = this;

          if (document.getElementById('preloader')) {
            document.getElementById('preloader').classList.add('hide');
          }

          this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
              _this11.scrollToTop();
            }

            if (window.innerWidth <= 960) {
              _this11.sidenav.close();
            }
          });
          this.menuService.expandActiveSubMenu(this.menuService.getMenuItems());
        }
      }, {
        key: "toggleSidenav",
        value: function toggleSidenav() {
          this.sidenav.toggle();
        }
      }, {
        key: "scrollToTop",
        value: function scrollToTop() {
          var scrollDuration = 200;
          var scrollStep = -window.pageYOffset / (scrollDuration / 20);
          var scrollInterval = setInterval(function () {
            if (window.pageYOffset != 0) {
              window.scrollBy(0, scrollStep);
            } else {
              clearInterval(scrollInterval);
            }
          }, 10);

          if (window.innerWidth <= 768) {
            setTimeout(function () {
              window.scrollTo(0, 0);
            });
          }
        }
      }, {
        key: "onWindowResize",
        value: function onWindowResize() {
          if (window.innerWidth <= 960) {
            this.settings.adminSidenavIsOpened = false;
            this.settings.adminSidenavIsPinned = false;
          } else {
            this.settings.adminSidenavIsOpened = true;
            this.settings.adminSidenavIsPinned = true;
          }
        }
      }, {
        key: "logOut",
        value: function logOut() {
          console.log("in logout");
          localStorage.removeItem('user');
          localStorage.removeItem('token');
          this.router.navigate(['/sign-in']);
        }
      }]);

      return UserComponent;
    }();

    UserComponent.ctorParameters = function () {
      return [{
        type: _app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _components_menu_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"]
      }];
    };

    UserComponent.propDecorators = {
      sidenav: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['sidenav']
      }],
      onWindowResize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['window:resize']
      }]
    };
    UserComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-user',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./user.component.scss */
      "./src/app/user/user.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _components_menu_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"]])], UserComponent);
    /***/
  },

  /***/
  "./src/app/user/user.module.ts":
  /*!*************************************!*\
    !*** ./src/app/user/user.module.ts ***!
    \*************************************/

  /*! exports provided: routes, UserModule */

  /***/
  function srcAppUserUserModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserModule", function () {
      return UserModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var ngx_input_file__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-input-file */
    "./node_modules/ngx-input-file/__ivy_ngcc__/fesm2015/ngx-input-file.js");
    /* harmony import */


    var _user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user.component */
    "./src/app/user/user.component.ts");
    /* harmony import */


    var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/menu/menu.component */
    "./src/app/user/components/menu/menu.component.ts");
    /* harmony import */


    var _components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/user-menu/user-menu.component */
    "./src/app/user/components/user-menu/user-menu.component.ts");
    /* harmony import */


    var _components_fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/fullscreen/fullscreen.component */
    "./src/app/user/components/fullscreen/fullscreen.component.ts");
    /* harmony import */


    var _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/messages/messages.component */
    "./src/app/user/components/messages/messages.component.ts");
    /* harmony import */


    var _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/breadcrumb/breadcrumb.component */
    "./src/app/user/components/breadcrumb/breadcrumb.component.ts");
    /* harmony import */


    var _feeds_feeds_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./feeds/feeds.component */
    "./src/app/user/feeds/feeds.component.ts");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/user/profile/profile.component.ts");
    /* harmony import */


    var _chats_chats_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./chats/chats.component */
    "./src/app/user/chats/chats.component.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var config = {
      fileAccept: '*'
    };
    var routes = [{
      path: '',
      component: _user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"],
      children: [// { path: '', loadChildren: () => import('./feeds/feeds.module').then(m => m.FeedsModule) }, 
      // { path: 'feeds', loadChildren: () => import('./feeds/feeds.module').then(m => m.FeedsModule) },
      {
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
        pathMatch: 'full'
      }, {
        path: '',
        component: _feeds_feeds_component__WEBPACK_IMPORTED_MODULE_12__["FeedsComponent"],
        pathMatch: 'full'
      }, {
        path: 'chats',
        component: _chats_chats_component__WEBPACK_IMPORTED_MODULE_14__["ChatsComponent"],
        pathMatch: 'full'
      }]
    }];

    var UserModule = function UserModule() {
      _classCallCheck(this, UserModule);
    };

    UserModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      declarations: [_user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"], _components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_8__["UserMenuComponent"], _components_fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_9__["FullScreenComponent"], _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_10__["MessagesComponent"], _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_11__["BreadcrumbComponent"], _feeds_feeds_component__WEBPACK_IMPORTED_MODULE_12__["FeedsComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"], _chats_chats_component__WEBPACK_IMPORTED_MODULE_14__["ChatsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], ngx_input_file__WEBPACK_IMPORTED_MODULE_5__["InputFileModule"].forRoot(config), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]]
    })], UserModule);
    /***/
  }
}]);
//# sourceMappingURL=user-user-module-es5.js.map