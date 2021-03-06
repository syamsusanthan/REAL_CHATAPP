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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _sign_sign_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sign/sign.component */ "./src/app/sign/sign.component.ts");
/* harmony import */ var _chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chatroom/chatroom.component */ "./src/app/chatroom/chatroom.component.ts");
/* harmony import */ var _useredit_useredit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useredit/useredit.component */ "./src/app/useredit/useredit.component.ts");
/* harmony import */ var _verify_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./verify.guard */ "./src/app/verify.guard.ts");










const routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'home', canActivate: [_verify_guard__WEBPACK_IMPORTED_MODULE_7__["VerifyGuard"]], component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'signup', component: _sign_sign_component__WEBPACK_IMPORTED_MODULE_4__["SignComponent"] },
    { path: 'chatroom', canActivate: [_verify_guard__WEBPACK_IMPORTED_MODULE_7__["VerifyGuard"]], component: _chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_5__["ChatroomComponent"] },
    { path: 'edit', canActivate: [_verify_guard__WEBPACK_IMPORTED_MODULE_7__["VerifyGuard"]], component: _useredit_useredit_component__WEBPACK_IMPORTED_MODULE_6__["UsereditComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _get_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get.service */ "./src/app/get.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor(get, router) {
        this.get = get;
        this.router = router;
    }
    ngOnInit() { }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_get_service__WEBPACK_IMPORTED_MODULE_1__["GetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _get_service__WEBPACK_IMPORTED_MODULE_1__["GetService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _sign_sign_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sign/sign.component */ "./src/app/sign/sign.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chatroom/chatroom.component */ "./src/app/chatroom/chatroom.component.ts");
/* harmony import */ var _useredit_useredit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./useredit/useredit.component */ "./src/app/useredit/useredit.component.ts");













class AppModule {
}
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _sign_sign_component__WEBPACK_IMPORTED_MODULE_8__["SignComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
        _chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_10__["ChatroomComponent"],
        _useredit_useredit_component__WEBPACK_IMPORTED_MODULE_11__["UsereditComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                    _sign_sign_component__WEBPACK_IMPORTED_MODULE_8__["SignComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                    _chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_10__["ChatroomComponent"],
                    _useredit_useredit_component__WEBPACK_IMPORTED_MODULE_11__["UsereditComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/chatroom/chatroom.component.ts":
/*!************************************************!*\
  !*** ./src/app/chatroom/chatroom.component.ts ***!
  \************************************************/
/*! exports provided: ChatroomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatroomComponent", function() { return ChatroomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _home_chat_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home/chat/chat.service */ "./src/app/home/chat/chat.service.ts");
/* harmony import */ var _get_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../get.service */ "./src/app/get.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








function ChatroomComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ChatroomComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r3.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ChatroomComponent_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ChatroomComponent_div_13_div_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9); const user_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r7.selectUserHandler(user_r5 == null ? null : user_r5.phone); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const user_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", user_r5.phone === ctx_r6.roomUserList.phone && "show");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](user_r5 == null ? null : user_r5.name);
} }
function ChatroomComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ChatroomComponent_div_13_div_1_Template, 5, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const user_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", (user_r5 == null ? null : user_r5.phone) === (ctx_r1.selectedUser == null ? null : ctx_r1.selectedUser.phone) && "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.roomAdmin[0].userId == ctx_r1.userId);
} }
function ChatroomComponent_ng_container_24_div_5_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const name_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", name_r13 == null ? null : name_r13.selectedName, ",");
} }
function ChatroomComponent_ng_container_24_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ChatroomComponent_ng_container_24_div_5_p_1_Template, 2, 1, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const name_r13 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", name_r13.selectedRoom == ctx_r11.roomId);
} }
function ChatroomComponent_ng_container_24_div_7_label_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r16 == null ? null : item_r16.userName);
} }
function ChatroomComponent_ng_container_24_div_7_label_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "You");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ChatroomComponent_ng_container_24_div_7_label_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "muted");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ChatroomComponent_ng_container_24_div_7_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r16 == null ? null : item_r16.message);
} }
function ChatroomComponent_ng_container_24_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, ChatroomComponent_ng_container_24_div_7_label_3_Template, 2, 1, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, ChatroomComponent_ng_container_24_div_7_label_4_Template, 2, 0, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, ChatroomComponent_ng_container_24_div_7_label_5_Template, 2, 0, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, ChatroomComponent_ng_container_24_div_7_p_6_Template, 2, 1, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", (item_r16 == null ? null : item_r16.user) !== ctx_r12.currentPhone && "same-user");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", item_r16.user != ctx_r12.userId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", item_r16.user == ctx_r12.userId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r12.mutedUser != "" && item_r16.user != ctx_r12.userId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r12.mutedUser == "" || item_r16.user == ctx_r12.userId);
} }
function ChatroomComponent_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h6", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "USERS IN THIS CHAT ROOM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, ChatroomComponent_ng_container_24_div_5_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, ChatroomComponent_ng_container_24_div_7_Template, 8, 5, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ChatroomComponent_ng_container_24_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r23.messageText = $event; })("keyup", function ChatroomComponent_ng_container_24_Template_input_keyup_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return $event.keyCode === 13 && ctx_r25.sendMessage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ChatroomComponent_ng_container_24_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r24); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r26.sendMessage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Send ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r2.roomUserList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r2.messageArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r2.messageText);
} }
class ChatroomComponent {
    constructor(modalService, chatService, get, router) {
        this.modalService = modalService;
        this.chatService = chatService;
        this.get = get;
        this.router = router;
        this.messageArray = [];
        this.storageArray = [];
    }
    ngOnInit() {
        this.get.getdata().subscribe((data) => {
            this.allData = JSON.parse(JSON.stringify(data));
            this.userList = this.allData.uList;
            this.roomsList = this.allData.rList;
            this.roomUserList = this.allData.chatUserList;
            this.signUserList = this.allData.signList;
            this.userId = localStorage.getItem('userId');
            this.roomId = localStorage.getItem('currentRoom');
            this.currentUser = this.userList.filter((p) => p.phone === this.userId);
            this.userList = this.userList.filter((p) => p.phone !== this.userId);
            this.roomUser = this.roomUserList.filter((p) => p.selectedRoom === this.roomId);
            this.blockList = this.roomUser.filter((p) => p.block === true);
            this.mutedUsers = this.roomUser.filter((p) => p.mute === true);
            this.roomAdmin = this.roomsList.filter((p) => p.room === this.roomId);
            this.currentPhone = this.currentUser[0].phone;
            this.currentName = this.currentUser[0].name;
        });
        this.chatService.getMessage()
            .subscribe((data) => {
            this.mutedUser = this.mutedUsers.filter((p) => p.selectedPhone === data.user);
            if (this.roomUser != '' || this.userId == data.user) {
                this.messageArray.push(data);
                this.messageArray.reverse();
            }
            if (this.userId) {
                setTimeout(() => {
                    this.storageArray = this.chatService.getStorage();
                    const storeIndex = this.storageArray
                        .findIndex((storage) => storage.phone === this.userId);
                    // this.messageArray = this.storageArray[storeIndex].chats;
                }, 500);
            }
        });
    }
    logout() {
        localStorage.clear();
        this.router.navigate(['']);
    }
    selectUserHandler(phone) {
        this.selectedUser = this.userList.find(user => user.phone === phone);
        this.phoneId = this.selectedUser.phone;
        localStorage.setItem('selectedName', this.selectedUser.name);
        localStorage.setItem('selectedPhone', this.selectedUser.phone);
        this.selectedroom = this.roomUserList.find(user => user.selectedPhone === this.phoneId);
        if (this.roomAdmin[0].userId == this.userId) {
            this.router.navigate(['/edit']);
        }
        this.join(this.currentUser, this.userId);
    }
    join(username, userId) {
        this.chatService.joinRoom({ user: username, userId: userId });
    }
    deleteRoom() {
        alert('You are going to delete this chatroom');
        this.chatService.deleteRoom({ roomId: this.roomId });
        this.router.navigate(['home']);
    }
    sendMessage() {
        this.blockedSender = this.blockList.find(user => user.selectedPhone === this.userId);
        if (this.blockedSender) {
            console.log('no');
            alert('You are blocked by admin');
            this.messageText = '';
        }
        else {
            this.chatService.sendRoomMessage({
                user: this.userId,
                toUser: this.phoneId,
                message: this.messageText,
                userName: this.currentName
            });
            this.messageText = "";
        }
        this.storageArray = this.chatService.getStorage();
        const storeIndex = this.storageArray
            .findIndex((storage) => storage.phone === this.userId);
        if (storeIndex > -1) {
            this.storageArray[storeIndex].chats.push({
                user: this.currentUser,
                message: this.messageText
            });
        }
        else {
            const updateStorage = {
                roomId: this.userId,
                chats: [{
                        user: this.currentUser,
                        message: this.messageText
                    }]
            };
            this.storageArray.push(updateStorage);
        }
        this.chatService.setStorage(this.storageArray);
        this.messageText = '';
    }
}
ChatroomComponent.??fac = function ChatroomComponent_Factory(t) { return new (t || ChatroomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_home_chat_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_get_service__WEBPACK_IMPORTED_MODULE_3__["GetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
ChatroomComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ChatroomComponent, selectors: [["app-chatroom"]], decls: 25, vars: 5, consts: [[2, "display", "flex"], [2, "font-family", "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif", "font-size", "65px", "color", "rgb(14, 11, 11)", "margin-top", "2%", "margin-left", "7%"], ["style", "border-radius: 5px;background-color: rgb(1, 221, 250); height: 40px; padding: 10px; margin-left: 40%;margin-top: 40px;font-weight: bold;", "type", "button", 3, "click", 4, "ngIf"], [1, "container-fluid"], [1, "row"], [1, "col-md-4"], [1, "user-list-card", 2, "width", "80%"], [2, "font-family", "Verdana, Geneva, Tahoma, sans-serif", "background-color", "rgba(6, 7, 7, 0.699)", "height", "50px", "border-radius", "5px", "padding", "5px"], [2, "color", "rgb(248, 230, 230)", "font-size", "20px", "padding", "5px"], ["class", "user-card", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "col-md-8"], [2, "border", "2px solid black", "display", "flex", "background-color", "rgb(16, 180, 153)", "border-radius", "4px", "padding", "2px"], [2, "margin-top", "10px", "margin-left", "20px", "color", "white", "font-weight", "bold"], [2, "font-size", "30px", "margin-top", "10px", "margin-left", "60px", "font-family", "Verdana, Geneva, Tahoma, sans-serif", "color", "white"], [2, "border-radius", "5px", "border-style", "ridge", "padding", "5px", "font-size", "12px", "font-weight", "bold", "background-color", "rgb(142, 142, 143)", "color", "white", "height", "30px", "margin-top", "20px", "margin-left", "35%", 3, "click"], [1, "chat-container"], [4, "ngIf"], ["type", "button", 2, "border-radius", "5px", "background-color", "rgb(1, 221, 250)", "height", "40px", "padding", "10px", "margin-left", "40%", "margin-top", "40px", "font-weight", "bold", 3, "click"], [1, "user-card", 3, "ngClass"], ["style", "width: 100%;", 4, "ngIf"], [2, "width", "100%"], [2, "display", "flex", "background-color", "rgb(99, 135, 252)", "cursor", "pointer", "width", "100%", "border-radius", "5px", "padding", "10px", 3, "click"], [1, "selected", 3, "ngClass"], [1, "username", 2, "font-size", "14px"], [1, "chat-header"], [2, "color", "white", "background-color", "rgb(39, 85, 211)", "margin-left", "25px", "margin-top", "10px", "border-radius", "5px", "padding", "6px"], [2, "margin-left", "20px"], ["style", "display: inline-flex;", 4, "ngFor", "ngForOf"], [1, "chat-body"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "chat-footer"], [1, "col-md-10"], [1, "form-group", "mb-0"], ["type", "text", "placeholder", "Type a message", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], [1, "col-md-2", "text-center", "align-self-center"], [1, "btn", "btn-primary", "btn-sm", "px-3", 3, "click"], [2, "display", "inline-flex"], ["style", "font-size: 15px;color: black;margin-left: 7px;", "class", "username", 4, "ngIf"], [1, "username", 2, "font-size", "15px", "color", "black", "margin-left", "7px"], [3, "ngClass"], [1, "message-container"], ["style", "color: rgba(0, 0, 0, 0.431);font-size: 12px;justify-content: right;font-weight: bold;", 4, "ngIf"], ["style", "color: rgba(0, 0, 0, 0.452);font-size: 12px;justify-content: right;font-weight: bold;", 4, "ngIf"], ["style", "font-size: 12px;font-style: italic;", 4, "ngIf"], [2, "color", "rgba(0, 0, 0, 0.431)", "font-size", "12px", "justify-content", "right", "font-weight", "bold"], [2, "color", "rgba(0, 0, 0, 0.452)", "font-size", "12px", "justify-content", "right", "font-weight", "bold"], [2, "font-size", "12px", "font-style", "italic"]], template: function ChatroomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "REAL TIME CHAT APP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, ChatroomComponent_button_3_Template, 2, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, ChatroomComponent_div_13_Template, 2, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "h2", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "ROOM NAME :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ChatroomComponent_Template_button_click_20_listener() { return ctx.deleteRoom(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "DeleteRoom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, ChatroomComponent_ng_container_24_Template, 16, 3, "ng-container", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.get.getToken());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.currentName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.userList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.roomId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.roomUserList != "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXRyb29tL2NoYXRyb29tLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ChatroomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chatroom',
                templateUrl: './chatroom.component.html',
                styleUrls: ['./chatroom.component.scss']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }, { type: _home_chat_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"] }, { type: _get_service__WEBPACK_IMPORTED_MODULE_3__["GetService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/get.service.ts":
/*!********************************!*\
  !*** ./src/app/get.service.ts ***!
  \********************************/
/*! exports provided: GetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetService", function() { return GetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class GetService {
    constructor(http) {
        this.http = http;
        this.server_address = 'api';
    }
    sign(data) {
        return this.http.post(`${this.server_address}/sin`, data);
    }
    log(data) {
        return this.http.post(`${this.server_address}/log`, data);
    }
    getdata() {
        return this.http.get(`${this.server_address}/get`);
    }
    sendRoom(data) {
        return this.http.post(`${this.server_address}/room`, data);
    }
    getToken() {
        return !!localStorage.getItem('token');
    }
}
GetService.??fac = function GetService_Factory(t) { return new (t || GetService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
GetService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: GetService, factory: GetService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](GetService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/chat/chat.service.ts":
/*!*******************************************!*\
  !*** ./src/app/home/chat/chat.service.ts ***!
  \*******************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/build/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);




class ChatService {
    constructor() {
        this.server_address = 'api';
        this.url = `${this.server_address}`; // your server local path
        this.socket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_2__["io"])(this.url, { transports: ['websocket', 'polling', 'flashsocket'] });
    }
    joinRoom(data) {
        this.socket.emit('join', data);
    }
    sendMessage(data) {
        this.socket.emit('message', data);
    }
    sendRoomMessage(data) {
        this.socket.emit('room message', data);
    }
    select(data) {
        this.socket.emit('selection', data);
    }
    deselect(data) {
        this.socket.emit('deselection', data);
    }
    block(data) {
        this.socket.emit('block', data);
    }
    unblock(data) {
        this.socket.emit('unblock', data);
    }
    mute(data) {
        this.socket.emit('mute', data);
    }
    unmute(data) {
        console.log(data);
        this.socket.emit('unmute', data);
    }
    deleteUser(data) {
        this.socket.emit('deleteUser', data);
    }
    deleteRoom(data) {
        this.socket.emit('deleteRoom', data);
    }
    getMessage() {
        this.userId = localStorage.getItem('userId');
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](observer => {
            this.socket.on('new message', (data) => {
                observer.next(data);
            });
            this.socket.on('new room message', (data) => {
                observer.next(data);
            });
            this.socket.on('already', (data) => {
                observer.next(data);
                if (data.blockedno == this.userId) {
                    window.location.reload();
                }
            });
            return () => {
                this.socket.disconnect();
            };
        });
    }
    getStorage() {
        const storage = localStorage.getItem('chats');
        return storage ? JSON.parse(storage) : [];
    }
    setStorage(data) {
        localStorage.setItem('chats', JSON.stringify(data));
    }
}
ChatService.??fac = function ChatService_Factory(t) { return new (t || ChatService)(); };
ChatService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: ChatService, factory: ChatService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ChatService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _chat_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat/chat.service */ "./src/app/home/chat/chat.service.ts");
/* harmony import */ var _get_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../get.service */ "./src/app/get.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








function HomeComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r5.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function HomeComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_div_15_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9); const user_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r8.selectUserHandler(user_r7 == null ? null : user_r7.phone); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const user_r7 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", (user_r7 == null ? null : user_r7.phone) === (ctx_r1.selectedUser == null ? null : ctx_r1.selectedUser.phone) && "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](user_r7 == null ? null : user_r7.name);
} }
function HomeComponent_li_34_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_li_34_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r12); const rooms_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r11.roomStore(rooms_r10.room); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const rooms_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](rooms_r10 == null ? null : rooms_r10.room);
} }
function HomeComponent_ng_container_37_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", (item_r14 == null ? null : item_r14.user) !== ctx_r13.currentPhone && "same-user");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r14 == null ? null : item_r14.message);
} }
function HomeComponent_ng_container_37_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, HomeComponent_ng_container_37_div_5_Template, 3, 2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function HomeComponent_ng_container_37_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r15.messageText = $event; })("keyup", function HomeComponent_ng_container_37_Template_input_keyup_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return $event.keyCode === 13 && ctx_r17.sendMessage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_ng_container_37_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r16); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r18.sendMessage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Send ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r4.selectedUser == null ? null : ctx_r4.selectedUser.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r4.messageArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r4.messageText);
} }
class HomeComponent {
    constructor(modalService, chatService, get, router) {
        this.modalService = modalService;
        this.chatService = chatService;
        this.get = get;
        this.router = router;
        this.messageArray = [];
        this.storageArray = [];
    }
    ngOnInit() {
        this.get.getdata().subscribe((data) => {
            this.allData = JSON.parse(JSON.stringify(data));
            this.userList = this.allData.uList;
            this.roomsList = this.allData.rList;
            this.userId = localStorage.getItem('userId');
            this.currentUser = this.userList.filter((p) => p.phone === this.userId);
            this.userList = this.userList.filter((p) => p.phone !== this.userId);
            this.currentPhone = this.currentUser[0].phone;
            this.currentName = this.currentUser[0].name;
        });
        this.chatService.getMessage()
            .subscribe((data) => {
            if (this.userId == data.toUser || this.userId == data.user) {
                this.messageArray.push(data);
                this.messageArray.reverse();
            }
            if (this.userId) {
                setTimeout(() => {
                    this.storageArray = this.chatService.getStorage();
                    const storeIndex = this.storageArray
                        .findIndex((storage) => storage.phone === this.userId);
                    // this.messageArray = this.storageArray[storeIndex].chats;
                }, 500);
            }
        });
    }
    logout() {
        localStorage.clear();
        this.router.navigate(['']);
    }
    delete() {
        alert('You going to delete your account');
        this.chatService.deleteUser({ userId: this.userId });
        this.router.navigate(['']);
    }
    create() {
        this.get.sendRoom({ room: this.roomId, senderId: this.currentPhone, name: this.currentName }).subscribe((data) => {
            if (data.msg1 == 'exist') {
                alert('Chatroom with this name already exist');
            }
            if (data.msg1 == "created") {
                alert('Chatroom created successfully');
                window.location.reload();
            }
        });
        this.roomId = "";
    }
    roomStore(data) {
        localStorage.setItem('currentRoom', data);
    }
    selectUserHandler(phone) {
        this.selectedUser = this.userList.find(user => user.phone === phone);
        this.phoneId = this.selectedUser.phone[this.currentUser];
        this.messageArray = [];
        this.storageArray = this.chatService.getStorage();
        const storeIndex = this.storageArray
            .findIndex((storage) => storage.phone === this.userId);
        if (storeIndex > -1) {
            this.messageArray = this.storageArray[storeIndex].chats;
        }
        this.join(this.currentUser, this.userId);
    }
    join(username, userId) {
        this.chatService.joinRoom({ user: username, userId: userId });
    }
    sendMessage() {
        this.chatService.sendMessage({
            user: this.userId,
            toUser: this.selectedUser.phone,
            message: this.messageText
        });
        this.storageArray = this.chatService.getStorage();
        const storeIndex = this.storageArray
            .findIndex((storage) => storage.phone === this.userId);
        if (storeIndex > -1) {
            this.storageArray[storeIndex].chats.push({
                user: this.currentUser,
                message: this.messageText
            });
        }
        else {
            const updateStorage = {
                roomId: this.userId,
                chats: [{
                        user: this.currentUser,
                        message: this.messageText
                    }]
            };
            this.storageArray.push(updateStorage);
        }
        this.chatService.setStorage(this.storageArray);
        this.messageText = '';
    }
}
HomeComponent.??fac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_chat_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_get_service__WEBPACK_IMPORTED_MODULE_3__["GetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
HomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 38, vars: 7, consts: [[2, "display", "flex"], [2, "font-family", "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif", "font-size", "65px", "color", "rgb(14, 11, 11)", "margin-top", "2%", "margin-left", "7%"], ["style", "border-radius: 5px;background-color: rgb(1, 221, 250); height: 40px; padding: 10px; margin-left: 40%;margin-top: 40px;font-weight: bold;", "type", "button", 3, "click", 4, "ngIf"], [1, "container-fluid"], [1, "row"], [1, "col-md-4"], [1, "user-list-card", 2, "width", "80%"], [2, "font-family", "Verdana, Geneva, Tahoma, sans-serif", "background-color", "rgba(6, 7, 7, 0.699)", "height", "auto", "border-radius", "5px", "padding", "5px"], [2, "color", "rgb(248, 230, 230)", "font-size", "20px", "padding", "5px"], [2, "border-radius", "5px", "border-style", "ridge", "padding", "3px", "font-size", "12px", "font-weight", "bold", "background-color", "rgb(142, 142, 143)", "color", "white", 3, "click"], ["class", "user-card", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "col-md-8"], [2, "border", "2px solid black", "display", "flex", "background-color", "rgb(16, 180, 153)", "border-radius", "4px", "padding", "2px"], [2, "padding", "5px", "border-radius", "5px"], [2, "font-size", "16px", "color", "white"], ["roomForm", "ngForm"], ["name", "room", "required", "", "type", "text", "placeholder", "Chatroom name", 2, "border-radius", "5px", 3, "ngModel", "ngModelChange"], ["type", "submit", 2, "margin-left", "5%", "border-radius", "5px", "color", "white", "background-color", "rgb(25, 127, 158)", "padding", "4px", 3, "disabled", "click"], [1, "dropdown", 2, "margin-left", "35%", "margin-top", "5px"], ["type", "button", "id", "dropdownMenuButton1", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle", 2, "background-color", "rgba(0, 0, 0, 0.74)", "width", "158px"], ["aria-labelledby", "dropdownMenuButton1", 1, "dropdown-menu", 2, "border-radius", "4px", "background-color", "rgba(0, 0, 0, 0.459)"], ["style", "border: 1px solid rgba(255, 255, 255, 0.582);background-color: rgba(163, 237, 255, 0.705);", 4, "ngFor", "ngForOf"], [1, "chat-container"], [4, "ngIf"], ["type", "button", 2, "border-radius", "5px", "background-color", "rgb(1, 221, 250)", "height", "40px", "padding", "10px", "margin-left", "40%", "margin-top", "40px", "font-weight", "bold", 3, "click"], [1, "user-card", 3, "ngClass"], [2, "width", "100%"], [2, "display", "flex", "cursor", "pointer", "background-color", "rgb(99, 135, 252)", "width", "100%", "border-radius", "5px", "padding", "10px", 3, "click"], [1, "username", 2, "font-size", "14px"], [2, "border", "1px solid rgba(255, 255, 255, 0.582)", "background-color", "rgba(163, 237, 255, 0.705)"], ["routerLink", "/chatroom", 1, "dropdown-item", 2, "color", "rgb(12, 11, 11)", "font-weight", "bold", 3, "click"], [1, "chat-header"], [1, "username", 2, "font-size", "18px"], [1, "chat-body"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "chat-footer"], [1, "col-md-10"], [1, "form-group", "mb-0"], ["type", "text", "placeholder", "Type a message", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], [1, "col-md-2", "text-center", "align-self-center"], [1, "btn", "btn-primary", "btn-sm", "px-3", 3, "click"], [3, "ngClass"], [1, "message-container"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "REAL TIME CHAT APP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, HomeComponent_button_3_Template, 2, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_Template_button_click_11_listener() { return ctx.delete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Delete Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, HomeComponent_div_15_Template, 5, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "create a chatroom ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "form", 0, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_24_listener($event) { return ctx.roomId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_Template_button_click_25_listener() { return ctx.create(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "CREATE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "choose a chatroom ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, " Chatrooms ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](34, HomeComponent_li_34_Template, 3, 1, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](37, HomeComponent_ng_container_37_Template, 14, 3, "ng-container", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.get.getToken());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.currentName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.userList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.roomId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", _r2.form.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.roomsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.selectedUser);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }, { type: _chat_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"] }, { type: _get_service__WEBPACK_IMPORTED_MODULE_3__["GetService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _get_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../get.service */ "./src/app/get.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function LoginComponent_label_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Enter a valid mobile number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function LoginComponent_label_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Enter correct password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
class LoginComponent {
    constructor(get, router, fb) {
        this.get = get;
        this.router = router;
        this.fb = fb;
        this.user = {
            phone: '',
            password: ''
        };
        this.logForm = this.fb.group({
            phone: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9 ]{10}')]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    }
    ngOnInit() {
    }
    login() {
        this.userId = this.user.phone;
        localStorage.setItem('userId', this.userId);
        this.get.log(this.user).subscribe((item) => {
            if (item.msg == 'yes') {
                localStorage.setItem('token', item.token);
                this.router.navigate(['home']);
            }
            else if (item.msg == 'invalid') {
                alert('wrong password');
            }
            else {
                alert('No user found with this phone number sign up first');
            }
        });
    }
}
LoginComponent.??fac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_get_service__WEBPACK_IMPORTED_MODULE_2__["GetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
LoginComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 31, vars: 6, consts: [[2, "display", "flex"], [2, "font-family", "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif", "font-size", "65px", "color", "rgb(14, 11, 11)", "margin-top", "2%", "margin-left", "7%"], [2, "width", "35%", "margin-top", "8%", "margin-left", "31%", "border", "2px solid blue", "background-color", "rgba(255, 255, 255, 0.575)", "padding", "20px", 3, "formGroup", "ngSubmit"], [2, "font-family", "'Times New Roman', Times, serif", "font-weight", "bold"], [2, "margin-left", "35%", "display", "flex"], ["routerLink", "signup"], [1, "row"], [1, "col-md-12"], [1, "form-group"], ["type", "text", "name", "phone", "formControlName", "phone", "placeholder", "Enter your phone number", 1, "form-control", 3, "ngModel", "ngModelChange"], ["style", "color: red; font-size: 13px;", 4, "ngIf"], ["type", "password", "name", "password", "formControlName", "password", "placeholder", "Enter your password", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "m-footer"], ["type", "submit", 1, "btn", "btn-sm", "btn-primary", 3, "disabled"], [2, "color", "red", "font-size", "13px"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "REAL TIME CHAT APP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_3_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Not have an account? .");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "SignUp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_20_listener($event) { return ctx.user.phone = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, LoginComponent_label_22_Template, 2, 0, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_24_listener($event) { return ctx.user.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](26, LoginComponent_label_26_Template, 2, 0, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.logForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.user.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.logForm.controls["phone"].invalid && ctx.logForm.controls["phone"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.user.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.logForm.controls["password"].invalid && ctx.logForm.controls["password"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx.logForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _get_service__WEBPACK_IMPORTED_MODULE_2__["GetService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sign/sign.component.ts":
/*!****************************************!*\
  !*** ./src/app/sign/sign.component.ts ***!
  \****************************************/
/*! exports provided: SignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignComponent", function() { return SignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _get_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../get.service */ "./src/app/get.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function SignComponent_label_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Enter your name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function SignComponent_label_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Enter a valid mobile number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function SignComponent_label_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Enter a password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function SignComponent_label_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Re-enter password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
class SignComponent {
    constructor(fb, get, router) {
        this.fb = fb;
        this.get = get;
        this.router = router;
        this.selectedFile = null;
        this.user = {
            name: '',
            phone: '',
            password: '',
            repassword: '',
            block: false,
            mute: false
        };
        this.signupForm = this.fb.group({
            name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            phone: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9 ]{10}')]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])[a-zA-Z0-9]{8,}')]],
            repassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            check: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    }
    onFileSelect(event) {
        this.selectedFile = event.target.files[0];
        const fd = new FormData();
        fd.append('image', this.selectedFile, this.selectedFile.name);
        localStorage.setItem('image', fd);
    }
    ngOnInit() {
    }
    verify() {
        if (this.check == true) {
            if (this.user.password == this.user.repassword) {
                this.get.sign(this.user).subscribe((item) => {
                    if (item.msg == 'success') {
                        alert('Account created successfully');
                        this.router.navigate(['']);
                    }
                    if (item.msg == 'fail') {
                        alert('This phone number is already registered');
                    }
                });
            }
            else {
                alert('Re-enter the password correctly');
            }
        }
        else {
            alert('Please accept the terms and conditions');
        }
    }
}
SignComponent.??fac = function SignComponent_Factory(t) { return new (t || SignComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_get_service__WEBPACK_IMPORTED_MODULE_2__["GetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SignComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: SignComponent, selectors: [["app-sign"]], decls: 45, vars: 11, consts: [[2, "display", "flex"], [2, "font-family", "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif", "font-size", "65px", "color", "rgb(14, 11, 11)", "margin-top", "2%", "margin-left", "7%"], [2, "width", "52%", "border", "2px solid blue", "background-color", "#ece8e898", "margin-top", "6%", "margin-left", "22%", "padding", "20px", 3, "formGroup", "ngSubmit"], [2, "font-family", "'Times New Roman', Times, serif"], [2, "margin-left", "45%", "display", "flex", "margin-top", "8px"], ["routerLink", "", 2, "font-weight", "bold"], [1, "mb-3", 2, "width", "80%"], ["for", "exampleInputEmail1", 1, "form-label"], ["formControlName", "name", "name", "nam", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["style", "color: red;", 4, "ngIf"], ["formControlName", "phone", "name", "phon", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "emailHelp", 1, "form-text", 2, "color", "blue"], [1, "mb-3"], ["for", "exampleInputPassword1", 1, "form-label"], ["formControlName", "password", "name", "passwor", "type", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["formControlName", "repassword", "name", "repassword", "type", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], [2, "color", "blue"], [1, "mb-3", "form-check"], ["type", "checkbox", "id", "Check", "formControlName", "check", "name", "check", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "exampleCheck1", 1, "form-check-label"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [2, "color", "red"]], template: function SignComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "REAL TIME CHAT APP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function SignComponent_Template_form_ngSubmit_3_listener() { return ctx.verify(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "SignUp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Have an account? .");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function SignComponent_Template_input_ngModelChange_17_listener($event) { return ctx.user.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, SignComponent_label_18_Template, 2, 0, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function SignComponent_Template_input_ngModelChange_23_listener($event) { return ctx.user.phone = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, SignComponent_label_24_Template, 2, 0, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "We'll never share your phone number with anyone else.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function SignComponent_Template_input_ngModelChange_30_listener($event) { return ctx.user.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](31, SignComponent_label_31_Template, 2, 0, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Re-enter Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function SignComponent_Template_input_ngModelChange_35_listener($event) { return ctx.user.repassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Password must contain 8 charecters (atleast one number one uppercase and one lowercase)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](38, SignComponent_label_38_Template, 2, 0, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function SignComponent_Template_input_ngModelChange_40_listener($event) { return ctx.check = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Agree with Terms and conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.signupForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.signupForm.controls["name"].invalid && ctx.signupForm.controls["name"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.user.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.signupForm.controls["phone"].invalid && ctx.signupForm.controls["phone"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.user.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.signupForm.controls["password"].invalid && ctx.signupForm.controls["password"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.user.repassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.signupForm.controls["repassword"].invalid && ctx.signupForm.controls["repassword"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.check);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx.signupForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ24vc2lnbi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SignComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sign',
                templateUrl: './sign.component.html',
                styleUrls: ['./sign.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _get_service__WEBPACK_IMPORTED_MODULE_2__["GetService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/useredit/useredit.component.ts":
/*!************************************************!*\
  !*** ./src/app/useredit/useredit.component.ts ***!
  \************************************************/
/*! exports provided: UsereditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsereditComponent", function() { return UsereditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _get_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../get.service */ "./src/app/get.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_chat_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home/chat/chat.service */ "./src/app/home/chat/chat.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







function UsereditComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UsereditComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r1.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
class UsereditComponent {
    constructor(post, router, chatService) {
        this.post = post;
        this.router = router;
        this.chatService = chatService;
    }
    ngOnInit() {
        this.post.getdata().subscribe((data) => {
            this.roomId = localStorage.getItem('currentRoom');
            this.phoneId = localStorage.getItem('selectedPhone');
            this.selectedName = localStorage.getItem('selectedName');
            this.roomId = localStorage.getItem('currentRoom');
            this.allData = JSON.parse(JSON.stringify(data));
            this.roomUserList = this.allData.chatUserList;
            this.roomUser = this.roomUserList.filter((p) => p.selectedRoom === this.roomId);
            this.blockList = this.roomUser.filter((p) => p.block === true);
            this.mutedUsers = this.roomUser.filter((p) => p.mute === true);
            this.blockedUser = this.blockList.filter((user) => user.selectedPhone === this.phoneId);
            this.muteUser = this.mutedUsers.filter((user) => user.selectedPhone === this.phoneId);
            this.Room = this.roomUser.filter((user) => user.selectedPhone === this.phoneId);
            if (this.Room.length == 0) {
                console.log('emtty');
                this.checkdata = false;
            }
            if (this.Room.length != 0) {
                console.log('full');
                this.checkdata = true;
                localStorage.setItem('check', 'true');
            }
            if (this.blockedUser.length == 0) {
                this.blockvalue = false;
                localStorage.setItem('check', 'false');
            }
            if (this.blockedUser.length != 0) {
                this.blockvalue = true;
            }
            if (this.muteUser.length == 0) {
                this.mutevalue = false;
            }
            if (this.muteUser.length != 0) {
                this.mutevalue = true;
            }
        });
    }
    logout() {
        localStorage.clear();
        this.router.navigate(['']);
    }
    check() {
        this.checkvalue = localStorage.getItem('check');
        if (this.checkdata == true) {
            if (this.checkvalue == 'true') {
                console.log('already');
                alert('This user already in this room');
            }
            else if (this.checkvalue == 'false') {
                this.chatService.select({ selectedName: this.selectedName, selectedPhone: this.phoneId, roomId: this.roomId });
            }
        }
        if (this.checkdata == false) {
            console.log('deleting');
            this.chatService.deselect({ selectedPhone: this.phoneId, roomId: this.roomId });
        }
    }
    mute() {
        if (this.mutevalue == true) {
            this.chatService.mute({ selectedphone: this.phoneId, mutedata: this.mutevalue });
        }
        else if (this.mutevalue == false) {
            this.chatService.unmute({ selectedphone: this.phoneId, mutedata: this.mutevalue });
        }
    }
    block() {
        if (this.blockvalue == true) {
            this.chatService.block({ selectedphone: this.phoneId, blockdata: this.blockvalue });
        }
        else if (this.blockvalue == false) {
            this.chatService.unblock({ selectedphone: this.phoneId, blockdata: this.blockvalue });
        }
    }
}
UsereditComponent.??fac = function UsereditComponent_Factory(t) { return new (t || UsereditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_get_service__WEBPACK_IMPORTED_MODULE_1__["GetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_home_chat_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"])); };
UsereditComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: UsereditComponent, selectors: [["app-useredit"]], decls: 22, vars: 5, consts: [[2, "display", "flex"], [2, "font-family", "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif", "font-size", "65px", "color", "rgb(14, 11, 11)", "margin-top", "2%", "margin-left", "7%"], ["style", "border-radius: 5px;background-color: rgb(1, 221, 250); height: 40px; padding: 10px; margin-left: 40%;margin-top: 40px;font-weight: bold;", "type", "button", 3, "click", 4, "ngIf"], [2, "float", "inline-end", "margin-left", "40px"], [2, "font-family", "Verdana, Geneva, Tahoma, sans-serif", "font-size", "40px", "color", "white", "background-color", "rgba(0, 0, 0, 0.623)", "padding", "5px"], [2, "margin-left", "6%", "margin-top", "4%"], [1, "form-check", "form-switch"], ["type", "checkbox", "role", "switch", "id", "add", 1, "form-check-input", 3, "ngModel", "change", "ngModelChange"], ["for", "flexSwitchCheckDefault", 1, "form-check-label", 2, "color", "white"], ["type", "checkbox", "role", "switch", "id", "Block", 1, "form-check-input", 3, "ngModel", "change", "ngModelChange"], ["type", "checkbox", "role", "switch", "id", "Mute", 1, "form-check-input", 3, "ngModel", "change", "ngModelChange"], ["type", "button", 2, "border-radius", "5px", "background-color", "rgb(1, 221, 250)", "height", "40px", "padding", "10px", "margin-left", "40%", "margin-top", "40px", "font-weight", "bold", 3, "click"]], template: function UsereditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "REAL TIME CHAT APP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, UsereditComponent_button_3_Template, 2, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function UsereditComponent_Template_input_change_9_listener() { return ctx.check(); })("ngModelChange", function UsereditComponent_Template_input_ngModelChange_9_listener($event) { return ctx.checkdata = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Add to room");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function UsereditComponent_Template_input_change_14_listener() { return ctx.block(); })("ngModelChange", function UsereditComponent_Template_input_ngModelChange_14_listener($event) { return ctx.blockvalue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Block");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function UsereditComponent_Template_input_change_19_listener() { return ctx.mute(); })("ngModelChange", function UsereditComponent_Template_input_ngModelChange_19_listener($event) { return ctx.mutevalue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Mute");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.post.getToken());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.selectedName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.checkdata);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.blockvalue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.mutevalue);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJlZGl0L3VzZXJlZGl0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UsereditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-useredit',
                templateUrl: './useredit.component.html',
                styleUrls: ['./useredit.component.scss']
            }]
    }], function () { return [{ type: _get_service__WEBPACK_IMPORTED_MODULE_1__["GetService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _home_chat_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/verify.guard.ts":
/*!*********************************!*\
  !*** ./src/app/verify.guard.ts ***!
  \*********************************/
/*! exports provided: VerifyGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyGuard", function() { return VerifyGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _get_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get.service */ "./src/app/get.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class VerifyGuard {
    constructor(get, router) {
        this.get = get;
        this.router = router;
    }
    canActivate() {
        if (this.get.getToken()) {
            return true;
        }
        else {
            this.router.navigate(['']);
            return false;
        }
    }
}
VerifyGuard.??fac = function VerifyGuard_Factory(t) { return new (t || VerifyGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_get_service__WEBPACK_IMPORTED_MODULE_1__["GetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
VerifyGuard.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: VerifyGuard, factory: VerifyGuard.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](VerifyGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _get_service__WEBPACK_IMPORTED_MODULE_1__["GetService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\SSSS\Desktop\chat-application-angular-socket\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map