/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/contact";
exports.ids = ["pages/contact"];
exports.modules = {

/***/ "./src/styles/pages/contact.module.sass":
/*!**********************************************!*\
  !*** ./src/styles/pages/contact.module.sass ***!
  \**********************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"contact\": \"contact_contact__GsiCU\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3BhZ2VzL2NvbnRhY3QubW9kdWxlLnNhc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SRUNQLy4vc3JjL3N0eWxlcy9wYWdlcy9jb250YWN0Lm1vZHVsZS5zYXNzP2RhNjYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFjdFwiOiBcImNvbnRhY3RfY29udGFjdF9fR3NpQ1VcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/pages/contact.module.sass\n");

/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Page)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_slices_notifs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/slices/notifs */ \"./store/slices/notifs.js\");\n/* harmony import */ var _styles_pages_contact_module_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/pages/contact.module.sass */ \"./src/styles/pages/contact.module.sass\");\n/* harmony import */ var _styles_pages_contact_module_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_contact_module_sass__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Page() {\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n    const send = (e)=>{\n        e.preventDefault();\n        dispatch((0,_store_slices_notifs__WEBPACK_IMPORTED_MODULE_2__.addNotif)({\n            msg: \"Message sent\"\n        }));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_pages_contact_module_sass__WEBPACK_IMPORTED_MODULE_3___default().contact),\n        id: \"contact\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Contact Us\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\life\\\\Desktop\\\\Real Estate\\\\website\\\\SmartProperty\\\\src\\\\pages\\\\contact.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                placeholder: \"First Name\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\life\\\\Desktop\\\\Real Estate\\\\website\\\\SmartProperty\\\\src\\\\pages\\\\contact.js\",\n                                lineNumber: 18,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                placeholder: \"Last Name\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\life\\\\Desktop\\\\Real Estate\\\\website\\\\SmartProperty\\\\src\\\\pages\\\\contact.js\",\n                                lineNumber: 19,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\life\\\\Desktop\\\\Real Estate\\\\website\\\\SmartProperty\\\\src\\\\pages\\\\contact.js\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        placeholder: \"Email\",\n                        style: {\n                            width: \"100%\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\life\\\\Desktop\\\\Real Estate\\\\website\\\\SmartProperty\\\\src\\\\pages\\\\contact.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        placeholder: \"Message...\",\n                        style: {\n                            width: \"100%\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\life\\\\Desktop\\\\Real Estate\\\\website\\\\SmartProperty\\\\src\\\\pages\\\\contact.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn\",\n                        onClick: send,\n                        children: \"SEND\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\life\\\\Desktop\\\\Real Estate\\\\website\\\\SmartProperty\\\\src\\\\pages\\\\contact.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\life\\\\Desktop\\\\Real Estate\\\\website\\\\SmartProperty\\\\src\\\\pages\\\\contact.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\life\\\\Desktop\\\\Real Estate\\\\website\\\\SmartProperty\\\\src\\\\pages\\\\contact.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29udGFjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBMEM7QUFDVztBQUNJO0FBRTFDLFNBQVNHLE9BQU87SUFDN0IsTUFBTUMsV0FBV0osd0RBQVdBO0lBRTVCLE1BQU1LLE9BQU8sQ0FBQ0MsSUFBTTtRQUNsQkEsRUFBRUMsY0FBYztRQUNoQkgsU0FBU0gsOERBQVFBLENBQUM7WUFBRU8sS0FBSztRQUFlO0lBQzFDO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVdSLGtGQUFjO1FBQUVVLElBQUc7OzBCQUNqQyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7O2tDQUNDLDhEQUFDTDs7MENBQ0MsOERBQUNNO2dDQUFNQyxhQUFZOzs7Ozs7MENBQ25CLDhEQUFDRDtnQ0FBTUMsYUFBWTs7Ozs7Ozs7Ozs7O2tDQUVyQiw4REFBQ0Q7d0JBQU1DLGFBQVk7d0JBQVFDLE9BQU87NEJBQUVDLE9BQU87d0JBQU87Ozs7OztrQ0FDbEQsOERBQUNDO3dCQUFTSCxhQUFZO3dCQUFhQyxPQUFPOzRCQUFFQyxPQUFPO3dCQUFPOzs7Ozs7a0NBQzFELDhEQUFDRTt3QkFBT1YsV0FBVTt3QkFBTVcsU0FBU2hCO2tDQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJL0MsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL1JFQ1AvLi9zcmMvcGFnZXMvY29udGFjdC5qcz9hNWRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBhZGROb3RpZiB9IGZyb20gJy4uLy4uL3N0b3JlL3NsaWNlcy9ub3RpZnMnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9wYWdlcy9jb250YWN0Lm1vZHVsZS5zYXNzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBjb25zdCBzZW5kID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGRpc3BhdGNoKGFkZE5vdGlmKHsgbXNnOiBcIk1lc3NhZ2Ugc2VudFwiIH0pKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFjdH0gaWQ9XCJjb250YWN0XCI+XHJcbiAgICAgIDxoMT5Db250YWN0IFVzPC9oMT5cclxuICAgICAgPGZvcm0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj0nRmlyc3QgTmFtZScgLz5cclxuICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj0nTGFzdCBOYW1lJyAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj0nRW1haWwnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0gLz5cclxuICAgICAgICA8dGV4dGFyZWEgcGxhY2Vob2xkZXI9J01lc3NhZ2UuLi4nIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0gPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIiBvbkNsaWNrPXtzZW5kfT5TRU5EPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufSJdLCJuYW1lcyI6WyJ1c2VEaXNwYXRjaCIsImFkZE5vdGlmIiwic3R5bGVzIiwiUGFnZSIsImRpc3BhdGNoIiwic2VuZCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm1zZyIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhY3QiLCJpZCIsImgxIiwiZm9ybSIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJzdHlsZSIsIndpZHRoIiwidGV4dGFyZWEiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/contact.js\n");

/***/ }),

/***/ "./store/slices/notifs.js":
/*!********************************!*\
  !*** ./store/slices/notifs.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addNotif\": () => (/* binding */ addNotif),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"selectnotifs\": () => (/* binding */ selectnotifs)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst notifsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"notifs\",\n    initialState: {\n        notifs: []\n    },\n    reducers: {\n        addNotif (state, { payload  }) {\n            let { msg , type  } = payload;\n            if (!type) type = \"success\";\n            state.notifs.push({\n                msg,\n                type,\n                date: Date.now()\n            });\n        }\n    }\n});\n// selectors\nconst selectnotifs = (state)=>state.notifs.notifs;\n//actions\nconst { addNotif  } = notifsSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (notifsSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9zbGljZXMvbm90aWZzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQThDO0FBRTlDLE1BQU1DLGNBQWNELDZEQUFXQSxDQUFDO0lBQzlCRSxNQUFNO0lBQ05DLGNBQWM7UUFDWkMsUUFBUSxFQUFFO0lBQ1o7SUFDQUMsVUFBVTtRQUNSQyxVQUFTQyxLQUFLLEVBQUUsRUFBQ0MsUUFBTyxFQUFDLEVBQUU7WUFDekIsSUFBSSxFQUFDQyxJQUFHLEVBQUVDLEtBQUksRUFBQyxHQUFHRjtZQUVsQixJQUFJLENBQUVFLE1BQ0pBLE9BQU87WUFFVEgsTUFBTUgsTUFBTSxDQUFDTyxJQUFJLENBQUM7Z0JBQ2hCRjtnQkFDQUM7Z0JBQ0FFLE1BQU1DLEtBQUtDLEdBQUc7WUFDaEI7UUFDRjtJQUNGO0FBQ0Y7QUFHQSxZQUFZO0FBQ0wsTUFBTUMsZUFBZVIsQ0FBQUEsUUFBU0EsTUFBTUgsTUFBTSxDQUFDQSxNQUFNO0FBRXhELFNBQVM7QUFDRixNQUFNLEVBQUVFLFNBQVEsRUFBRSxHQUFHTCxZQUFZZSxPQUFPO0FBRS9DLGlFQUFlZixZQUFZZ0IsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL1JFQ1AvLi9zdG9yZS9zbGljZXMvbm90aWZzLmpzP2NiOTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiXHJcblxyXG5jb25zdCBub3RpZnNTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiAnbm90aWZzJyxcclxuICBpbml0aWFsU3RhdGU6IHtcclxuICAgIG5vdGlmczogW10sXHJcbiAgfSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgYWRkTm90aWYoc3RhdGUsIHtwYXlsb2FkfSkge1xyXG4gICAgICBsZXQge21zZywgdHlwZX0gPSBwYXlsb2FkXHJcblxyXG4gICAgICBpZiAoISB0eXBlKVxyXG4gICAgICAgIHR5cGUgPSAnc3VjY2VzcydcclxuXHJcbiAgICAgIHN0YXRlLm5vdGlmcy5wdXNoKHsgXHJcbiAgICAgICAgbXNnLCBcclxuICAgICAgICB0eXBlLFxyXG4gICAgICAgIGRhdGU6IERhdGUubm93KClcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG59KVxyXG5cclxuXHJcbi8vIHNlbGVjdG9yc1xyXG5leHBvcnQgY29uc3Qgc2VsZWN0bm90aWZzID0gc3RhdGUgPT4gc3RhdGUubm90aWZzLm5vdGlmc1xyXG5cclxuLy9hY3Rpb25zXHJcbmV4cG9ydCBjb25zdCB7IGFkZE5vdGlmIH0gPSBub3RpZnNTbGljZS5hY3Rpb25zXHJcblxyXG5leHBvcnQgZGVmYXVsdCBub3RpZnNTbGljZS5yZWR1Y2VyIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwibm90aWZzU2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwibm90aWZzIiwicmVkdWNlcnMiLCJhZGROb3RpZiIsInN0YXRlIiwicGF5bG9hZCIsIm1zZyIsInR5cGUiLCJwdXNoIiwiZGF0ZSIsIkRhdGUiLCJub3ciLCJzZWxlY3Rub3RpZnMiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/slices/notifs.js\n");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/contact.js"));
module.exports = __webpack_exports__;

})();