(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6004:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6695);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(173);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5998);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9693);
/* harmony import */ var _styles_reset_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3116);
/* harmony import */ var _styles_reset_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_reset_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_layout_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7150);
/* harmony import */ var _styles_layout_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9078);
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _styles_signature_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6839);
/* harmony import */ var _styles_signature_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_signature_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _styles_brand_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1969);
/* harmony import */ var _styles_brand_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_brand_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _styles_product_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5403);
/* harmony import */ var _styles_product_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_product_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _styles_gift_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2453);
/* harmony import */ var _styles_gift_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_styles_gift_scss__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _styles_collaborate_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1397);
/* harmony import */ var _styles_collaborate_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_styles_collaborate_scss__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _styles_cs_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(4157);
/* harmony import */ var _styles_cs_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_styles_cs_scss__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _styles_login_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(1505);
/* harmony import */ var _styles_login_scss__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_styles_login_scss__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _styles_signup_scss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(3000);
/* harmony import */ var _styles_signup_scss__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_styles_signup_scss__WEBPACK_IMPORTED_MODULE_19__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([redux_saga__WEBPACK_IMPORTED_MODULE_7__]);
redux_saga__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




















const Layout = ({ Component  })=>{
    const sagaMiddleware = (0,redux_saga__WEBPACK_IMPORTED_MODULE_7__["default"])();
    const store = (0,redux__WEBPACK_IMPORTED_MODULE_5__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,  false ? 0 : (0,redux__WEBPACK_IMPORTED_MODULE_5__.compose)((0,redux__WEBPACK_IMPORTED_MODULE_5__.applyMiddleware)(sagaMiddleware)));
    const login = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const logout = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const loginUIChange = ()=>{
        const user = store.getState();
        console.log(user.user.userInfo);
        if (user.user.userInfo != null) {
            logout.current.style.display = "flex";
            login.current.style.display = "none";
        }
    };
    store.subscribe(loginUIChange);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        logout.current.style.display = "none";
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {
        store: store,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Demeter - 당신의 향수를 추천해드립니다."
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "login-wrap",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                className: "login",
                                ref: login,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            href: "/login",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                children: "LOGIN"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            href: "/signup",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                children: "SIGN UP"
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                className: "logout",
                                ref: logout,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            href: "#",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                children: "LOGOUT"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            href: "#",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                children: "MYPAGE"
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "logo",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: "/",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                        width: "305",
                                        height: "81",
                                        viewBox: "0 0 305 81",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            d: "M37.478 22.704C37.478 27.824 36.4967 32.112 34.534 35.568C32.614 39.024 29.8193 41.6267 26.15 43.376C22.5233 45.1253 18.1287 46 12.966 46H0.101994V0.303997H14.31C19.046 0.303997 23.142 1.15733 26.598 2.864C30.054 4.57067 32.7207 7.088 34.598 10.416C36.518 13.7013 37.478 17.7973 37.478 22.704ZM28.902 22.96C28.902 19.3333 28.3473 16.3467 27.238 14C26.1287 11.6533 24.486 9.92533 22.31 8.816C20.134 7.664 17.4673 7.088 14.31 7.088H8.29399V39.152H13.222C18.5127 39.152 22.438 37.808 24.998 35.12C27.6007 32.3893 28.902 28.336 28.902 22.96ZM76.411 46H50.427V0.303997H76.411V7.152H58.619V18.8H75.259V25.648H58.619V39.088H76.411V46ZM108.962 46L96.4185 8.56H96.1625C96.2052 9.41333 96.2692 10.6293 96.3545 12.208C96.4398 13.744 96.5038 15.4293 96.5465 17.264C96.6318 19.056 96.6745 20.7413 96.6745 22.32V46H89.3145V0.303997H100.706L112.738 36.208H112.994L125.538 0.303997H136.93V46H129.122V21.936C129.122 20.4853 129.144 18.9067 129.186 17.2C129.272 15.4507 129.336 13.808 129.378 12.272C129.464 10.6933 129.528 9.47733 129.57 8.624H129.314L116.258 46H108.962ZM177.936 46H151.952V0.303997H177.936V7.152H160.144V18.8H176.784V25.648H160.144V39.088H177.936V46ZM207.223 46H199.031V7.216H185.911V0.303997H220.343V7.216H207.223V46ZM256.523 46H230.539V0.303997H256.523V7.152H238.731V18.8H255.371V25.648H238.731V39.088H256.523V46ZM282.419 0.303997C286.43 0.303997 289.736 0.794664 292.339 1.776C294.942 2.75733 296.883 4.25066 298.163 6.256C299.443 8.21866 300.083 10.7147 300.083 13.744C300.083 15.9627 299.656 17.8613 298.803 19.44C297.992 21.0187 296.926 22.3413 295.603 23.408C294.28 24.432 292.851 25.264 291.315 25.904L304.435 46H295.219L284.275 27.952H277.619V46H269.427V0.303997H282.419ZM281.907 7.152H277.619V21.232H282.163C284.424 21.232 286.259 20.9547 287.667 20.4C289.075 19.8453 290.099 19.0347 290.739 17.968C291.422 16.9013 291.763 15.5787 291.763 14C291.763 12.336 291.4 11.0133 290.675 10.032C289.95 9.008 288.862 8.28267 287.411 7.856C286.003 7.38666 284.168 7.152 281.907 7.152ZM25.3724 80H23.2124V62.864H32.7884V64.76H25.3724V70.832H32.3324V72.728H25.3724V80ZM41.5857 62.864C43.0097 62.864 44.1777 63.048 45.0897 63.416C46.0177 63.768 46.7057 64.304 47.1537 65.024C47.6017 65.744 47.8257 66.648 47.8257 67.736C47.8257 68.648 47.6577 69.408 47.3217 70.016C46.9857 70.624 46.5537 71.112 46.0257 71.48C45.5137 71.832 44.9697 72.112 44.3937 72.32L49.0977 80H46.5777L42.4257 72.92H39.0177V80H36.8577V62.864H41.5857ZM41.4657 64.736H39.0177V71.096H41.5857C42.5137 71.096 43.2737 70.976 43.8657 70.736C44.4577 70.48 44.8897 70.112 45.1617 69.632C45.4497 69.152 45.5937 68.552 45.5937 67.832C45.5937 67.08 45.4417 66.48 45.1377 66.032C44.8497 65.584 44.4017 65.256 43.7937 65.048C43.1857 64.84 42.4097 64.736 41.4657 64.736ZM63.7394 80L61.6754 74.696H54.8834L52.8434 80H50.6594L57.3554 62.792H59.2994L65.9714 80H63.7394ZM59.1074 67.592C59.0594 67.464 58.9794 67.232 58.8674 66.896C58.7554 66.56 58.6434 66.216 58.5314 65.864C58.4354 65.496 58.3554 65.216 58.2914 65.024C58.2114 65.344 58.1234 65.672 58.0274 66.008C57.9474 66.328 57.8594 66.624 57.7634 66.896C57.6834 67.168 57.6114 67.4 57.5474 67.592L55.6034 72.776H61.0274L59.1074 67.592ZM76.4867 70.952H82.4147V79.352C81.4867 79.656 80.5507 79.88 79.6067 80.024C78.6627 80.168 77.5907 80.24 76.3907 80.24C74.6147 80.24 73.1187 79.888 71.9027 79.184C70.6867 78.464 69.7587 77.448 69.1187 76.136C68.4947 74.808 68.1827 73.24 68.1827 71.432C68.1827 69.64 68.5347 68.088 69.2387 66.776C69.9427 65.464 70.9507 64.448 72.2627 63.728C73.5907 62.992 75.1907 62.624 77.0627 62.624C78.0227 62.624 78.9267 62.712 79.7747 62.888C80.6387 63.064 81.4387 63.312 82.1747 63.632L81.3587 65.504C80.7507 65.232 80.0627 65 79.2947 64.808C78.5427 64.616 77.7587 64.52 76.9427 64.52C75.5827 64.52 74.4147 64.8 73.4387 65.36C72.4627 65.92 71.7187 66.72 71.2067 67.76C70.6947 68.784 70.4387 70.008 70.4387 71.432C70.4387 72.792 70.6547 74 71.0867 75.056C71.5347 76.096 72.2307 76.912 73.1747 77.504C74.1187 78.08 75.3587 78.368 76.8947 78.368C77.4067 78.368 77.8547 78.352 78.2387 78.32C78.6387 78.272 78.9987 78.216 79.3187 78.152C79.6547 78.088 79.9667 78.024 80.2547 77.96V72.872H76.4867V70.952ZM92.4357 62.864C93.8597 62.864 95.0277 63.048 95.9397 63.416C96.8677 63.768 97.5557 64.304 98.0037 65.024C98.4517 65.744 98.6757 66.648 98.6757 67.736C98.6757 68.648 98.5077 69.408 98.1717 70.016C97.8357 70.624 97.4037 71.112 96.8757 71.48C96.3637 71.832 95.8197 72.112 95.2437 72.32L99.9477 80H97.4277L93.2757 72.92H89.8677V80H87.7077V62.864H92.4357ZM92.3157 64.736H89.8677V71.096H92.4357C93.3637 71.096 94.1237 70.976 94.7157 70.736C95.3077 70.48 95.7397 70.112 96.0117 69.632C96.2997 69.152 96.4437 68.552 96.4437 67.832C96.4437 67.08 96.2917 66.48 95.9877 66.032C95.6997 65.584 95.2517 65.256 94.6437 65.048C94.0357 64.84 93.2597 64.736 92.3157 64.736ZM114.589 80L112.525 74.696H105.733L103.693 80H101.509L108.205 62.792H110.149L116.821 80H114.589ZM109.957 67.592C109.909 67.464 109.829 67.232 109.717 66.896C109.605 66.56 109.493 66.216 109.381 65.864C109.285 65.496 109.205 65.216 109.141 65.024C109.061 65.344 108.973 65.672 108.877 66.008C108.797 66.328 108.709 66.624 108.613 66.896C108.533 67.168 108.461 67.4 108.397 67.592L106.453 72.776H111.877L109.957 67.592ZM133.949 80H131.429L122.261 65.768H122.165C122.181 66.056 122.197 66.376 122.213 66.728C122.245 67.08 122.269 67.464 122.285 67.88C122.301 68.28 122.317 68.696 122.333 69.128C122.349 69.56 122.357 69.992 122.357 70.424V80H120.365V62.864H122.861L132.005 77.048H132.101C132.085 76.856 132.069 76.592 132.053 76.256C132.037 75.904 132.021 75.52 132.005 75.104C131.989 74.672 131.973 74.232 131.957 73.784C131.941 73.336 131.933 72.92 131.933 72.536V62.864H133.949V80ZM147.144 64.52C146.232 64.52 145.408 64.68 144.672 65C143.936 65.304 143.312 65.76 142.8 66.368C142.288 66.96 141.896 67.688 141.624 68.552C141.352 69.4 141.216 70.36 141.216 71.432C141.216 72.84 141.432 74.064 141.864 75.104C142.312 76.144 142.968 76.944 143.832 77.504C144.712 78.064 145.808 78.344 147.12 78.344C147.872 78.344 148.584 78.28 149.256 78.152C149.928 78.024 150.584 77.864 151.224 77.672V79.544C150.584 79.784 149.92 79.96 149.232 80.072C148.56 80.184 147.752 80.24 146.808 80.24C145.064 80.24 143.608 79.88 142.44 79.16C141.272 78.44 140.392 77.416 139.8 76.088C139.224 74.76 138.936 73.2 138.936 71.408C138.936 70.112 139.112 68.928 139.464 67.856C139.832 66.784 140.36 65.856 141.048 65.072C141.752 64.288 142.616 63.688 143.64 63.272C144.664 62.84 145.84 62.624 147.168 62.624C148.048 62.624 148.896 62.712 149.712 62.888C150.528 63.064 151.256 63.312 151.896 63.632L151.032 65.456C150.504 65.216 149.912 65 149.256 64.808C148.616 64.616 147.912 64.52 147.144 64.52ZM165.74 80H156.164V62.864H165.74V64.76H158.324V70.112H165.308V71.984H158.324V78.104H165.74V80ZM178.134 80V62.864H180.294V78.08H187.782V80H178.134ZM196.744 80H190.552V78.752L192.568 78.296V64.592L190.552 64.112V62.864H196.744V64.112L194.728 64.592V78.296L196.744 78.752V80ZM206.149 62.864C207.573 62.864 208.765 63 209.725 63.272C210.701 63.544 211.429 63.992 211.909 64.616C212.405 65.24 212.653 66.072 212.653 67.112C212.653 67.784 212.525 68.384 212.269 68.912C212.029 69.424 211.661 69.856 211.165 70.208C210.685 70.544 210.093 70.776 209.389 70.904V71.024C210.109 71.136 210.757 71.344 211.333 71.648C211.925 71.952 212.389 72.384 212.725 72.944C213.061 73.504 213.229 74.232 213.229 75.128C213.229 76.168 212.989 77.056 212.509 77.792C212.029 78.512 211.341 79.064 210.445 79.448C209.565 79.816 208.509 80 207.277 80H201.253V62.864H206.149ZM206.581 70.16C208.053 70.16 209.061 69.928 209.605 69.464C210.149 68.984 210.421 68.28 210.421 67.352C210.421 66.408 210.085 65.736 209.413 65.336C208.757 64.92 207.701 64.712 206.245 64.712H203.413V70.16H206.581ZM203.413 71.96V78.176H206.869C208.389 78.176 209.445 77.88 210.037 77.288C210.629 76.696 210.925 75.92 210.925 74.96C210.925 74.352 210.789 73.824 210.517 73.376C210.261 72.928 209.821 72.584 209.197 72.344C208.589 72.088 207.757 71.96 206.701 71.96H203.413ZM222.79 62.864C224.214 62.864 225.382 63.048 226.294 63.416C227.222 63.768 227.91 64.304 228.358 65.024C228.806 65.744 229.03 66.648 229.03 67.736C229.03 68.648 228.862 69.408 228.526 70.016C228.19 70.624 227.758 71.112 227.23 71.48C226.718 71.832 226.174 72.112 225.598 72.32L230.302 80H227.782L223.63 72.92H220.222V80H218.062V62.864H222.79ZM222.67 64.736H220.222V71.096H222.79C223.718 71.096 224.478 70.976 225.07 70.736C225.662 70.48 226.094 70.112 226.366 69.632C226.654 69.152 226.798 68.552 226.798 67.832C226.798 67.08 226.646 66.48 226.342 66.032C226.054 65.584 225.606 65.256 224.998 65.048C224.39 64.84 223.614 64.736 222.67 64.736ZM244.944 80L242.88 74.696H236.088L234.048 80H231.864L238.56 62.792H240.504L247.176 80H244.944ZM240.312 67.592C240.264 67.464 240.184 67.232 240.072 66.896C239.96 66.56 239.848 66.216 239.736 65.864C239.64 65.496 239.56 65.216 239.496 65.024C239.416 65.344 239.328 65.672 239.232 66.008C239.152 66.328 239.064 66.624 238.968 66.896C238.888 67.168 238.816 67.4 238.752 67.592L236.808 72.776H242.232L240.312 67.592ZM255.448 62.864C256.872 62.864 258.04 63.048 258.952 63.416C259.88 63.768 260.568 64.304 261.016 65.024C261.464 65.744 261.688 66.648 261.688 67.736C261.688 68.648 261.52 69.408 261.184 70.016C260.848 70.624 260.416 71.112 259.888 71.48C259.376 71.832 258.832 72.112 258.256 72.32L262.96 80H260.44L256.288 72.92H252.88V80H250.72V62.864H255.448ZM255.328 64.736H252.88V71.096H255.448C256.376 71.096 257.136 70.976 257.728 70.736C258.32 70.48 258.752 70.112 259.024 69.632C259.312 69.152 259.456 68.552 259.456 67.832C259.456 67.08 259.304 66.48 259 66.032C258.712 65.584 258.264 65.256 257.656 65.048C257.048 64.84 256.272 64.736 255.328 64.736ZM271.314 71.288L275.778 62.864H278.106L272.394 73.352V80H270.234V73.448L264.522 62.864H266.874L271.314 71.288Z",
                                            fill: "#221815"
                                        })
                                    })
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        href: "/signature",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            children: "Signature"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        href: "/brand",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            children: "Brand"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        href: "/product",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            children: "Products"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        href: "/gift",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            children: "Gift/Edition"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        href: "/collaborate",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            children: "Collaborate"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        href: "/cs",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            children: "CS"
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "main",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {})
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "footer-up",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: "/",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/img/footer_logo.png",
                                        alt: ""
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "C/S CENTER 070-4900-4390 Mon-Friday am10:00-pm5:00 / Lunch pm12:30-pm1:30 / Sat.Sun.Holiday"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "footer-down",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "COMPANY : 주식회사포시즌라보라토리 REPRESENTATION : 김태희 BUSINESS LICENSE : [137-86-46113] ONLINE MARKETING NO : 제2020-서울종로-0232호[사업자정보확인] PHONE : 02-323-0356"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "ADDRESS : 03054 서울특별시 종로구 팔판길 38 (팔판동) 2층"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "PRIVACY OFFICER : 김태희 (sam1@prestizine.com) Contact sam1@prestizine.com for more information."
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9693:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ reducers)
});

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(6695);
;// CONCATENATED MODULE: ./reducers/user.js
const initialState = {
    userInfo: []
};
const reducer = (state = initialState, action)=>{
    switch(action.type){
        case "SIGN_UP":
            {
                return {
                    userInfo: action.user
                };
            }
        default:
            {
                return {
                    ...state
                };
            }
    }
};
/* harmony default export */ const user = (reducer);

;// CONCATENATED MODULE: ./reducers/index.js


const rootReducer = (0,external_redux_.combineReducers)({
    user: user
});
/* harmony default export */ const reducers = (rootReducer);


/***/ }),

/***/ 1969:
/***/ (() => {



/***/ }),

/***/ 1397:
/***/ (() => {



/***/ }),

/***/ 4157:
/***/ (() => {



/***/ }),

/***/ 2453:
/***/ (() => {



/***/ }),

/***/ 7150:
/***/ (() => {



/***/ }),

/***/ 1505:
/***/ (() => {



/***/ }),

/***/ 5403:
/***/ (() => {



/***/ }),

/***/ 3116:
/***/ (() => {



/***/ }),

/***/ 6839:
/***/ (() => {



/***/ }),

/***/ 3000:
/***/ (() => {



/***/ }),

/***/ 9078:
/***/ (() => {



/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6695:
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ 173:
/***/ ((module) => {

"use strict";
module.exports = require("redux-devtools-extension");

/***/ }),

/***/ 5998:
/***/ ((module) => {

"use strict";
module.exports = import("redux-saga");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664], () => (__webpack_exec__(6004)));
module.exports = __webpack_exports__;

})();