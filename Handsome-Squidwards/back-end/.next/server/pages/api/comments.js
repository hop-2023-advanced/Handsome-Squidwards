"use strict";
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
exports.id = "pages/api/comments";
exports.ids = ["pages/api/comments"];
exports.modules = {

/***/ "../../../api-utils/node":
/*!*****************************************************!*\
  !*** external "next/dist/server/api-utils/node.js" ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = require("next/dist/server/api-utils/node.js");

/***/ }),

/***/ "../route-module":
/*!************************************************************************!*\
  !*** external "next/dist/server/future/route-modules/route-module.js" ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/***/ ((module) => {

module.exports = import("node-fetch");;

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("/**\n * Hoists a name from a module or promised module.\n *\n * @param module the module to hoist the name from\n * @param name the name to hoist\n * @returns the value on the module (or promised module)\n */ \nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"hoist\", ({\n    enumerable: true,\n    get: function() {\n        return hoist;\n    }\n}));\nfunction hoist(module, name) {\n    // If the name is available in the module, return it.\n    if (name in module) {\n        return module[name];\n    }\n    // If a property called `then` exists, assume it's a promise and\n    // return a promise that resolves to the name.\n    if (\"then\" in module && typeof module.then === \"function\") {\n        return module.then((mod)=>hoist(mod, name));\n    }\n    // If we're trying to hoise the default export, and the module is a function,\n    // return the module itself.\n    if (typeof module === \"function\" && name === \"default\") {\n        return module;\n    }\n    // Otherwise, return undefined.\n    return undefined;\n}\n\n//# sourceMappingURL=helpers.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9oZWxwZXJzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQWlCO0FBQ2pCLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLHlDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhY2stZW5kLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1yb3V0ZS1sb2FkZXIvaGVscGVycy5qcz85MDQxIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogSG9pc3RzIGEgbmFtZSBmcm9tIGEgbW9kdWxlIG9yIHByb21pc2VkIG1vZHVsZS5cbiAqXG4gKiBAcGFyYW0gbW9kdWxlIHRoZSBtb2R1bGUgdG8gaG9pc3QgdGhlIG5hbWUgZnJvbVxuICogQHBhcmFtIG5hbWUgdGhlIG5hbWUgdG8gaG9pc3RcbiAqIEByZXR1cm5zIHRoZSB2YWx1ZSBvbiB0aGUgbW9kdWxlIChvciBwcm9taXNlZCBtb2R1bGUpXG4gKi8gXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJob2lzdFwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gaG9pc3Q7XG4gICAgfVxufSk7XG5mdW5jdGlvbiBob2lzdChtb2R1bGUsIG5hbWUpIHtcbiAgICAvLyBJZiB0aGUgbmFtZSBpcyBhdmFpbGFibGUgaW4gdGhlIG1vZHVsZSwgcmV0dXJuIGl0LlxuICAgIGlmIChuYW1lIGluIG1vZHVsZSkge1xuICAgICAgICByZXR1cm4gbW9kdWxlW25hbWVdO1xuICAgIH1cbiAgICAvLyBJZiBhIHByb3BlcnR5IGNhbGxlZCBgdGhlbmAgZXhpc3RzLCBhc3N1bWUgaXQncyBhIHByb21pc2UgYW5kXG4gICAgLy8gcmV0dXJuIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSBuYW1lLlxuICAgIGlmIChcInRoZW5cIiBpbiBtb2R1bGUgJiYgdHlwZW9mIG1vZHVsZS50aGVuID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIG1vZHVsZS50aGVuKChtb2QpPT5ob2lzdChtb2QsIG5hbWUpKTtcbiAgICB9XG4gICAgLy8gSWYgd2UncmUgdHJ5aW5nIHRvIGhvaXNlIHRoZSBkZWZhdWx0IGV4cG9ydCwgYW5kIHRoZSBtb2R1bGUgaXMgYSBmdW5jdGlvbixcbiAgICAvLyByZXR1cm4gdGhlIG1vZHVsZSBpdHNlbGYuXG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgPT09IFwiZnVuY3Rpb25cIiAmJiBuYW1lID09PSBcImRlZmF1bHRcIikge1xuICAgICAgICByZXR1cm4gbW9kdWxlO1xuICAgIH1cbiAgICAvLyBPdGhlcndpc2UsIHJldHVybiB1bmRlZmluZWQuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aGVscGVycy5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js\n");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fcomments&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fcomments%2Findex.ts&middlewareConfigBase64=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fcomments&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fcomments%2Findex.ts&middlewareConfigBase64=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-route-loader/helpers */ \"(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js\");\n/* harmony import */ var _pages_api_comments_index_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/api/comments/index.ts */ \"(api)/./pages/api/comments/index.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_api_comments_index_ts__WEBPACK_IMPORTED_MODULE_3__]);\n_pages_api_comments_index_ts__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// @ts-ignore this need to be imported from next/dist to be external\n\n\n\nconst PagesAPIRouteModule = next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule;\n// Import the userland code.\n// @ts-expect-error - replaced by webpack/turbopack loader\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_comments_index_ts__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_comments_index_ts__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/comments\",\n        pathname: \"/api/comments\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _pages_api_comments_index_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRmNvbW1lbnRzJnByZWZlcnJlZFJlZ2lvbj0mYWJzb2x1dGVQYWdlUGF0aD0uJTJGcGFnZXMlMkZhcGklMkZjb21tZW50cyUyRmluZGV4LnRzJm1pZGRsZXdhcmVDb25maWdCYXNlNjQ9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ2lGO0FBQ2xCO0FBQ21CO0FBQ2xGLDRCQUE0Qix1R0FBMEI7QUFDdEQ7QUFDQTtBQUMwRDtBQUMxRDtBQUNBLGlFQUFlLGdHQUFLLENBQUMseURBQVEsWUFBWSxFQUFDO0FBQzFDO0FBQ08sZUFBZSxnR0FBSyxDQUFDLHlEQUFRO0FBQ3BDO0FBQ087QUFDUDtBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxZQUFZO0FBQ1osQ0FBQzs7QUFFRCxxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhY2stZW5kLz80YjdkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEB0cy1pZ25vcmUgdGhpcyBuZWVkIHRvIGJlIGltcG9ydGVkIGZyb20gbmV4dC9kaXN0IHRvIGJlIGV4dGVybmFsXG5pbXBvcnQgKiBhcyBtb2R1bGUgZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvcGFnZXMtYXBpL21vZHVsZVwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IGhvaXN0IH0gZnJvbSBcIm5leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1yb3V0ZS1sb2FkZXIvaGVscGVyc1wiO1xuY29uc3QgUGFnZXNBUElSb3V0ZU1vZHVsZSA9IG1vZHVsZS5QYWdlc0FQSVJvdXRlTW9kdWxlO1xuLy8gSW1wb3J0IHRoZSB1c2VybGFuZCBjb2RlLlxuLy8gQHRzLWV4cGVjdC1lcnJvciAtIHJlcGxhY2VkIGJ5IHdlYnBhY2svdHVyYm9wYWNrIGxvYWRlclxuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi4vcGFnZXMvYXBpL2NvbW1lbnRzL2luZGV4LnRzXCI7XG4vLyBSZS1leHBvcnQgdGhlIGhhbmRsZXIgKHNob3VsZCBiZSB0aGUgZGVmYXVsdCBleHBvcnQpLlxuZXhwb3J0IGRlZmF1bHQgaG9pc3QodXNlcmxhbmQsIFwiZGVmYXVsdFwiKTtcbi8vIFJlLWV4cG9ydCBjb25maWcuXG5leHBvcnQgY29uc3QgY29uZmlnID0gaG9pc3QodXNlcmxhbmQsIFwiY29uZmlnXCIpO1xuLy8gQ3JlYXRlIGFuZCBleHBvcnQgdGhlIHJvdXRlIG1vZHVsZSB0aGF0IHdpbGwgYmUgY29uc3VtZWQuXG5leHBvcnQgY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgUGFnZXNBUElSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuUEFHRVNfQVBJLFxuICAgICAgICBwYWdlOiBcIi9hcGkvY29tbWVudHNcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9jb21tZW50c1wiLFxuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGFyZW4ndCB1c2VkIGluIHByb2R1Y3Rpb24uXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcIlwiXG4gICAgfSxcbiAgICB1c2VybGFuZFxufSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhZ2VzLWFwaS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fcomments&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fcomments%2Findex.ts&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./pages/api/comments/index.ts":
/*!*************************************!*\
  !*** ./pages/api/comments/index.ts ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/db */ \"(api)/./utils/db.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_db__WEBPACK_IMPORTED_MODULE_0__]);\n_utils_db__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nasync function handler(req, res) {\n    switch(req.method){\n        case \"GET\":\n            const list = await (0,_utils_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"comments\", \"find\", {\n                filter: {\n                    postId: req.query.postId\n                }\n            });\n            res.status(200).json(list);\n            break;\n        case \"POST\":\n            const { text, username, postId } = req.body;\n            console.log(req.body);\n            const create = await (0,_utils_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"comments\", \"insertOne\", {\n                document: {\n                    username: username,\n                    text: text,\n                    postId,\n                    uploadTime: Date.now()\n                }\n            });\n            res.status(200).json(create);\n            break;\n        default:\n            res.status(405).end();\n            return;\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29tbWVudHMvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBbUM7QUFHcEIsZUFBZUMsUUFDNUJDLEdBQW1CLEVBQ25CQyxHQUFvQjtJQUVwQixPQUFRRCxJQUFJRSxNQUFNO1FBQ2hCLEtBQUs7WUFDSCxNQUFNQyxPQUFPLE1BQU1MLHFEQUFFQSxDQUFDLFlBQVksUUFBUTtnQkFDeENNLFFBQVE7b0JBQUVDLFFBQVFMLElBQUlNLEtBQUssQ0FBQ0QsTUFBTTtnQkFBQztZQUNyQztZQUNBSixJQUFJTSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDTDtZQUNyQjtRQUNGLEtBQUs7WUFDSCxNQUFNLEVBQUVNLElBQUksRUFBRUMsUUFBUSxFQUFFTCxNQUFNLEVBQUUsR0FBR0wsSUFBSVcsSUFBSTtZQUMzQ0MsUUFBUUMsR0FBRyxDQUFDYixJQUFJVyxJQUFJO1lBRXBCLE1BQU1HLFNBQVMsTUFBTWhCLHFEQUFFQSxDQUFDLFlBQVksYUFBYTtnQkFDL0NpQixVQUFVO29CQUNSTCxVQUFVQTtvQkFDVkQsTUFBTUE7b0JBQ05KO29CQUNBVyxZQUFZQyxLQUFLQyxHQUFHO2dCQUN0QjtZQUNGO1lBRUFqQixJQUFJTSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDTTtZQUNyQjtRQUVGO1lBQ0ViLElBQUlNLE1BQU0sQ0FBQyxLQUFLWSxHQUFHO1lBQ25CO0lBQ0o7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhY2stZW5kLy4vcGFnZXMvYXBpL2NvbW1lbnRzL2luZGV4LnRzPzMzMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRiIGZyb20gXCIuLi8uLi8uLi91dGlscy9kYlwiO1xuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2Vcbikge1xuICBzd2l0Y2ggKHJlcS5tZXRob2QpIHtcbiAgICBjYXNlIFwiR0VUXCI6XG4gICAgICBjb25zdCBsaXN0ID0gYXdhaXQgZGIoXCJjb21tZW50c1wiLCBcImZpbmRcIiwge1xuICAgICAgICBmaWx0ZXI6IHsgcG9zdElkOiByZXEucXVlcnkucG9zdElkIH0sXG4gICAgICB9KTtcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGxpc3QpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIlBPU1RcIjpcbiAgICAgIGNvbnN0IHsgdGV4dCwgdXNlcm5hbWUsIHBvc3RJZCB9ID0gcmVxLmJvZHk7XG4gICAgICBjb25zb2xlLmxvZyhyZXEuYm9keSk7XG5cbiAgICAgIGNvbnN0IGNyZWF0ZSA9IGF3YWl0IGRiKFwiY29tbWVudHNcIiwgXCJpbnNlcnRPbmVcIiwge1xuICAgICAgICBkb2N1bWVudDoge1xuICAgICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcbiAgICAgICAgICB0ZXh0OiB0ZXh0LFxuICAgICAgICAgIHBvc3RJZCxcbiAgICAgICAgICB1cGxvYWRUaW1lOiBEYXRlLm5vdygpLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGNyZWF0ZSk7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXMuc3RhdHVzKDQwNSkuZW5kKCk7XG4gICAgICByZXR1cm47XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJkYiIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJsaXN0IiwiZmlsdGVyIiwicG9zdElkIiwicXVlcnkiLCJzdGF0dXMiLCJqc29uIiwidGV4dCIsInVzZXJuYW1lIiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGUiLCJkb2N1bWVudCIsInVwbG9hZFRpbWUiLCJEYXRlIiwibm93IiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/comments/index.ts\n");

/***/ }),

/***/ "(api)/./utils/db.ts":
/*!*********************!*\
  !*** ./utils/db.ts ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ \"node-fetch\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([node_fetch__WEBPACK_IMPORTED_MODULE_0__]);\nnode_fetch__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nasync function handler(collection, action, options) {\n    const result = await (0,node_fetch__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`https://ap-southeast-1.aws.data.mongodb-api.com/app/data-mophc/endpoint/data/v1/action/${action}`, {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\",\n            \"api-key\": \"ZdjeUWVwjTOjEqdqp35SF0NEI9Da6TxCEtzVi1JkErTSock8PoqsAgo26ZuWLGRo\"\n        },\n        body: JSON.stringify({\n            dataSource: \"Cluster0\",\n            database: \"InstagramDb\",\n            collection: collection,\n            ...options\n        })\n    }).then((res)=>res.json());\n    return result;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9kYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUErQjtBQUVoQixlQUFlQyxRQUM1QkMsVUFBa0IsRUFDbEJDLE1BQVcsRUFDWEMsT0FBWTtJQUVaLE1BQU1DLFNBQVMsTUFBTUwsc0RBQUtBLENBQ3hCLENBQUMsdUZBQXVGLEVBQUVHLE9BQU8sQ0FBQyxFQUNsRztRQUNFRyxRQUFRO1FBQ1JDLFNBQVM7WUFDUCxnQkFBZ0I7WUFDaEIsV0FDRTtRQUNKO1FBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztZQUNuQkMsWUFBWTtZQUNaQyxVQUFVO1lBQ1ZWLFlBQVlBO1lBQ1osR0FBR0UsT0FBTztRQUNaO0lBQ0YsR0FDQVMsSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUk7SUFFeEIsT0FBT1Y7QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL2JhY2stZW5kLy4vdXRpbHMvZGIudHM/Y2Q3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSBcIm5vZGUtZmV0Y2hcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgY29sbGVjdGlvbjogc3RyaW5nLFxuICBhY3Rpb246IGFueSxcbiAgb3B0aW9uczogYW55XG4pIHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vYXAtc291dGhlYXN0LTEuYXdzLmRhdGEubW9uZ29kYi1hcGkuY29tL2FwcC9kYXRhLW1vcGhjL2VuZHBvaW50L2RhdGEvdjEvYWN0aW9uLyR7YWN0aW9ufWAsXG4gICAge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIFwiYXBpLWtleVwiOlxuICAgICAgICAgIFwiWmRqZVVXVndqVE9qRXFkcXAzNVNGME5FSTlEYTZUeENFdHpWaTFKa0VyVFNvY2s4UG9xc0FnbzI2WnVXTEdSb1wiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgZGF0YVNvdXJjZTogXCJDbHVzdGVyMFwiLFxuICAgICAgICBkYXRhYmFzZTogXCJJbnN0YWdyYW1EYlwiLFxuICAgICAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uLFxuICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgfSksXG4gICAgfVxuICApLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiJdLCJuYW1lcyI6WyJmZXRjaCIsImhhbmRsZXIiLCJjb2xsZWN0aW9uIiwiYWN0aW9uIiwib3B0aW9ucyIsInJlc3VsdCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGFTb3VyY2UiLCJkYXRhYmFzZSIsInRoZW4iLCJyZXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./utils/db.ts\n");

/***/ }),

/***/ "(api)/./node_modules/next/dist/server/future/route-kind.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/server/future/route-kind.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"RouteKind\", ({\n    enumerable: true,\n    get: function() {\n        return RouteKind;\n    }\n}));\nvar RouteKind;\n(function(RouteKind) {\n    RouteKind[/**\n   * `PAGES` represents all the React pages that are under `pages/`.\n   */ \"PAGES\"] = \"PAGES\";\n    RouteKind[/**\n   * `PAGES_API` represents all the API routes under `pages/api/`.\n   */ \"PAGES_API\"] = \"PAGES_API\";\n    RouteKind[/**\n   * `APP_PAGE` represents all the React pages that are under `app/` with the\n   * filename of `page.{j,t}s{,x}`.\n   */ \"APP_PAGE\"] = \"APP_PAGE\";\n    RouteKind[/**\n   * `APP_ROUTE` represents all the API routes and metadata routes that are under `app/` with the\n   * filename of `route.{j,t}s{,x}`.\n   */ \"APP_ROUTE\"] = \"APP_ROUTE\";\n})(RouteKind || (RouteKind = {}));\n\n//# sourceMappingURL=route-kind.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLDZDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLElBQUksRUFBRSxHQUFHO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixJQUFJLEVBQUUsR0FBRztBQUNsQztBQUNBLENBQUMsOEJBQThCOztBQUUvQiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhY2stZW5kLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmQuanM/ZDU4MiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlJvdXRlS2luZFwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gUm91dGVLaW5kO1xuICAgIH1cbn0pO1xudmFyIFJvdXRlS2luZDtcbihmdW5jdGlvbihSb3V0ZUtpbmQpIHtcbiAgICBSb3V0ZUtpbmRbLyoqXG4gICAqIGBQQUdFU2AgcmVwcmVzZW50cyBhbGwgdGhlIFJlYWN0IHBhZ2VzIHRoYXQgYXJlIHVuZGVyIGBwYWdlcy9gLlxuICAgKi8gXCJQQUdFU1wiXSA9IFwiUEFHRVNcIjtcbiAgICBSb3V0ZUtpbmRbLyoqXG4gICAqIGBQQUdFU19BUElgIHJlcHJlc2VudHMgYWxsIHRoZSBBUEkgcm91dGVzIHVuZGVyIGBwYWdlcy9hcGkvYC5cbiAgICovIFwiUEFHRVNfQVBJXCJdID0gXCJQQUdFU19BUElcIjtcbiAgICBSb3V0ZUtpbmRbLyoqXG4gICAqIGBBUFBfUEFHRWAgcmVwcmVzZW50cyBhbGwgdGhlIFJlYWN0IHBhZ2VzIHRoYXQgYXJlIHVuZGVyIGBhcHAvYCB3aXRoIHRoZVxuICAgKiBmaWxlbmFtZSBvZiBgcGFnZS57aix0fXN7LHh9YC5cbiAgICovIFwiQVBQX1BBR0VcIl0gPSBcIkFQUF9QQUdFXCI7XG4gICAgUm91dGVLaW5kWy8qKlxuICAgKiBgQVBQX1JPVVRFYCByZXByZXNlbnRzIGFsbCB0aGUgQVBJIHJvdXRlcyBhbmQgbWV0YWRhdGEgcm91dGVzIHRoYXQgYXJlIHVuZGVyIGBhcHAvYCB3aXRoIHRoZVxuICAgKiBmaWxlbmFtZSBvZiBgcm91dGUue2osdH1zeyx4fWAuXG4gICAqLyBcIkFQUF9ST1VURVwiXSA9IFwiQVBQX1JPVVRFXCI7XG59KShSb3V0ZUtpbmQgfHwgKFJvdXRlS2luZCA9IHt9KSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLWtpbmQuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/server/future/route-kind.js\n");

/***/ }),

/***/ "(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.js":
/*!********************************************************************************!*\
  !*** ./node_modules/next/dist/server/future/route-modules/pages-api/module.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n0 && (0);\nfunction _export(target, all) {\n    for(var name in all)Object.defineProperty(target, name, {\n        enumerable: true,\n        get: all[name]\n    });\n}\n_export(exports, {\n    PagesAPIRouteModule: function() {\n        return PagesAPIRouteModule;\n    },\n    default: function() {\n        return _default;\n    }\n});\nconst _routemodule = __webpack_require__(/*! ../route-module */ \"../route-module\");\nconst _node = __webpack_require__(/*! ../../../api-utils/node */ \"../../../api-utils/node\");\nclass PagesAPIRouteModule extends _routemodule.RouteModule {\n    /**\n   *\n   * @param req the incoming server request\n   * @param res the outgoing server response\n   * @param context the context for the render\n   */ async render(req, res, context) {\n        await (0, _node.apiResolver)(req, res, context.query, this.userland, {\n            ...context.previewProps,\n            revalidate: context.revalidate,\n            trustHostHeader: context.trustHostHeader,\n            allowedRevalidateHeaderKeys: context.allowedRevalidateHeaderKeys,\n            hostname: context.hostname\n        }, context.minimalMode, context.dev, context.page);\n    }\n}\nconst _default = PagesAPIRouteModule;\n\n//# sourceMappingURL=module.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9wYWdlcy1hcGkvbW9kdWxlLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YsTUFBTSxDQUdMO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELHFCQUFxQixtQkFBTyxDQUFDLHdDQUFpQjtBQUM5QyxjQUFjLG1CQUFPLENBQUMsd0RBQXlCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhY2stZW5kLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvcGFnZXMtYXBpL21vZHVsZS5qcz81MmZkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuMCAmJiAobW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgUGFnZXNBUElSb3V0ZU1vZHVsZTogbnVsbCxcbiAgICBkZWZhdWx0OiBudWxsXG59KTtcbmZ1bmN0aW9uIF9leHBvcnQodGFyZ2V0LCBhbGwpIHtcbiAgICBmb3IodmFyIG5hbWUgaW4gYWxsKU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIG5hbWUsIHtcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBhbGxbbmFtZV1cbiAgICB9KTtcbn1cbl9leHBvcnQoZXhwb3J0cywge1xuICAgIFBhZ2VzQVBJUm91dGVNb2R1bGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gUGFnZXNBUElSb3V0ZU1vZHVsZTtcbiAgICB9LFxuICAgIGRlZmF1bHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX2RlZmF1bHQ7XG4gICAgfVxufSk7XG5jb25zdCBfcm91dGVtb2R1bGUgPSByZXF1aXJlKFwiLi4vcm91dGUtbW9kdWxlXCIpO1xuY29uc3QgX25vZGUgPSByZXF1aXJlKFwiLi4vLi4vLi4vYXBpLXV0aWxzL25vZGVcIik7XG5jbGFzcyBQYWdlc0FQSVJvdXRlTW9kdWxlIGV4dGVuZHMgX3JvdXRlbW9kdWxlLlJvdXRlTW9kdWxlIHtcbiAgICAvKipcbiAgICpcbiAgICogQHBhcmFtIHJlcSB0aGUgaW5jb21pbmcgc2VydmVyIHJlcXVlc3RcbiAgICogQHBhcmFtIHJlcyB0aGUgb3V0Z29pbmcgc2VydmVyIHJlc3BvbnNlXG4gICAqIEBwYXJhbSBjb250ZXh0IHRoZSBjb250ZXh0IGZvciB0aGUgcmVuZGVyXG4gICAqLyBhc3luYyByZW5kZXIocmVxLCByZXMsIGNvbnRleHQpIHtcbiAgICAgICAgYXdhaXQgKDAsIF9ub2RlLmFwaVJlc29sdmVyKShyZXEsIHJlcywgY29udGV4dC5xdWVyeSwgdGhpcy51c2VybGFuZCwge1xuICAgICAgICAgICAgLi4uY29udGV4dC5wcmV2aWV3UHJvcHMsXG4gICAgICAgICAgICByZXZhbGlkYXRlOiBjb250ZXh0LnJldmFsaWRhdGUsXG4gICAgICAgICAgICB0cnVzdEhvc3RIZWFkZXI6IGNvbnRleHQudHJ1c3RIb3N0SGVhZGVyLFxuICAgICAgICAgICAgYWxsb3dlZFJldmFsaWRhdGVIZWFkZXJLZXlzOiBjb250ZXh0LmFsbG93ZWRSZXZhbGlkYXRlSGVhZGVyS2V5cyxcbiAgICAgICAgICAgIGhvc3RuYW1lOiBjb250ZXh0Lmhvc3RuYW1lXG4gICAgICAgIH0sIGNvbnRleHQubWluaW1hbE1vZGUsIGNvbnRleHQuZGV2LCBjb250ZXh0LnBhZ2UpO1xuICAgIH1cbn1cbmNvbnN0IF9kZWZhdWx0ID0gUGFnZXNBUElSb3V0ZU1vZHVsZTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bW9kdWxlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fcomments&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fcomments%2Findex.ts&middlewareConfigBase64=e30%3D!"));
module.exports = __webpack_exports__;

})();