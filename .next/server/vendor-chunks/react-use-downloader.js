"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-use-downloader";
exports.ids = ["vendor-chunks/react-use-downloader"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-use-downloader/dist/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-use-downloader/dist/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("Object.defineProperty(exports, \"__esModule\", ({value:!0}));var e=__webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\"),t=function(){return t=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},t.apply(this,arguments)};function n(e,t,n,r){return new(n||(n=Promise))((function(o,a){function u(e){try{l(r.next(e))}catch(e){a(e)}}function c(e){try{l(r.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,c)}l((r=r.apply(e,t||[])).next())}))}function r(e,t){var n,r,o,a,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},\"function\"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(c){return function(l){return function(c){if(n)throw new TypeError(\"Generator is already executing.\");for(;a&&(a=0,c[0]&&(u=0)),u;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return u.label++,{value:c[1],done:!1};case 5:u.label++,r=c[1],c=[0];continue;case 7:c=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){u=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){u.label=c[1];break}if(6===c[0]&&u.label<o[1]){u.label=o[1],o=c;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(c);break}o[2]&&u.ops.pop(),u.trys.pop();continue}c=t.call(e,u)}catch(e){c=[6,e],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,l])}}}var o=function(e){var t=e.setSize,o=e.setControllerCallback,a=e.setPercentageCallback,u=e.setErrorCallback;return function(e){if(!e.ok)throw Error(\"\".concat(e.status,\" \").concat(e.type,\" \").concat(e.statusText));if(!e.body)throw Error(\"ReadableStream not yet supported in this browser.\");var c=e.body,l=e.headers.get(\"content-encoding\"),i=e.headers.get(l?\"x-file-size\":\"content-length\"),s=parseInt(i||\"0\",10);t((function(){return s}));var f=0,d=new ReadableStream({start:function(e){o(e);var t=c.getReader();return function o(){return n(this,void 0,void 0,(function(){return r(this,(function(n){return[2,t.read().then((function(t){var n=t.done,r=t.value;return n?e.close():(f+=(null==r?void 0:r.byteLength)||0,r&&e.enqueue(r),a({loaded:f,total:s}),o())})).catch((function(n){return u(n),t.cancel(\"Cancelled\"),e.error(n)}))]}))}))}()}});return new Response(d)}},a=function(e,t,n){var r=new Blob([e],{type:n||\"application/octet-stream\"});if(void 0!==window.navigator.msSaveBlob)return window.navigator.msSaveBlob(r,t);var o=window.URL&&window.URL.createObjectURL?window.URL.createObjectURL(r):window.webkitURL.createObjectURL(r),a=document.createElement(\"a\");return a.style.display=\"none\",a.href=o,a.setAttribute(\"download\",t),void 0===a.download&&a.setAttribute(\"target\",\"_blank\"),document.body.appendChild(a),a.click(),setTimeout((function(){document.body.removeChild(a),window.URL.revokeObjectURL(o)}),200)};exports[\"default\"]=function(u){var c=this;void 0===u&&(u={});var l=process.env.REACT_APP_DEBUG_MODE,i=e.useState(0),s=i[0],f=i[1],d=e.useState(0),b=d[0],v=d[1],h=e.useState(0),p=h[0],w=h[1],y=e.useState(null),g=y[0],m=y[1],k=e.useState(!1),C=k[0],R=k[1],S=e.useRef(null),x=e.useCallback((function(e){var t=e.loaded,n=e.total,r=Math.round(t/n*100);v((function(){return r}))}),[]),E=e.useCallback((function(e){var t={\"Failed to execute 'enqueue' on 'ReadableStreamDefaultController': Cannot enqueue a chunk into an errored readable stream\":\"Download canceled\",\"The user aborted a request.\":\"Download timed out\"};m((function(){return{errorMessage:t[e.message]?t[e.message]:e.message}}))}),[]),L=e.useCallback((function(e){S.current=e}),[]),U=e.useCallback((function(){S.current&&S.current.error()}),[]),O=e.useCallback((function(){L(null),f((function(){return 0})),v((function(){return 0})),w((function(){return 0})),R((function(){return!1}))}),[L]),j=e.useCallback((function(e,i,s){return void 0===s&&(s=0),n(c,void 0,void 0,(function(){var n,c,d,b;return r(this,(function(r){return C?[2,null]:(O(),m((function(){return null})),R((function(){return!0})),n=setInterval((function(){return f((function(e){return e+1}))}),l?1:1e3),c=o({setSize:w,setControllerCallback:L,setPercentageCallback:x,setErrorCallback:E}),d=new AbortController,b=setTimeout((function(){s>0&&d.abort()}),s),[2,fetch(e,t(t({},u),{method:\"GET\",signal:d.signal})).then(c).then((function(e){return e.blob()})).then((function(e){return a(e,i)})).then((function(){return O(),clearInterval(n)})).catch((function(e){return O(),m((function(t){return\"Failed to fetch\"!==e.message?{errorMessage:e.message}:t})),clearTimeout(b),clearInterval(n)}))])}))}))}),[C,O,l,L,x,E,u]);return e.useMemo((function(){return{elapsed:s,percentage:b,size:p,download:j,cancel:U,error:g,isInProgress:C}}),[s,b,p,j,U,g,C])},exports.jsDownload=a,exports.resolver=o;\n//# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlLWRvd25sb2FkZXIvZGlzdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYSw4Q0FBMkMsQ0FBQyxTQUFTLEVBQUMsQ0FBQyxNQUFNLG1CQUFPLENBQUMsd0dBQU8sZUFBZSxvQ0FBb0MsaUNBQWlDLElBQUksdUZBQXVGLFNBQVMsMEJBQTBCLG9CQUFvQiwwQ0FBMEMsY0FBYyxJQUFJLGFBQWEsU0FBUyxNQUFNLGNBQWMsSUFBSSxjQUFjLFNBQVMsTUFBTSxjQUFjLE1BQU0saUVBQWlFLEtBQUssY0FBYywrQkFBK0IsR0FBRyxnQkFBZ0IsZUFBZSx3QkFBd0IscUJBQXFCLFlBQVksaUJBQWlCLFVBQVUsaUNBQWlDLDJEQUEyRCxZQUFZLElBQUksY0FBYyxtQkFBbUIsbUJBQW1CLDREQUE0RCxLQUFLLHVCQUF1QixLQUFLLGtIQUFrSCx5Q0FBeUMsa0JBQWtCLE1BQU0seUJBQXlCLG9CQUFvQiw4QkFBOEIsU0FBUyxrQ0FBa0MsU0FBUywwRUFBMEUsSUFBSSxTQUFTLHlDQUF5QyxhQUFhLE1BQU0sMkJBQTJCLGlCQUFpQixNQUFNLG9CQUFvQiwyQkFBMkIsTUFBTSwrQkFBK0IsU0FBUyxjQUFjLFNBQVMsWUFBWSxRQUFRLE1BQU0scUJBQXFCLE9BQU8sZ0NBQWdDLFVBQVUsa0JBQWtCLHlGQUF5RixtQkFBbUIsc0ZBQXNGLDRFQUE0RSx5SEFBeUgsY0FBYyxTQUFTLEdBQUcsOEJBQThCLGtCQUFrQixLQUFLLG9CQUFvQixvQkFBb0Isd0NBQXdDLDJCQUEyQixvQ0FBb0MsdUJBQXVCLDJFQUEyRSxpQkFBaUIsT0FBTyxzQkFBc0IsNkNBQTZDLElBQUksR0FBRyxHQUFHLElBQUksRUFBRSx3QkFBd0IsbUJBQW1CLG9CQUFvQixtQ0FBbUMsRUFBRSxnRkFBZ0YsNklBQTZJLHlMQUF5TCwyREFBMkQsUUFBUSxrQkFBZSxhQUFhLFdBQVcsaUJBQWlCLEVBQUUsK09BQStPLCtDQUErQyxjQUFjLFNBQVMsR0FBRyxtQ0FBbUMsT0FBTyxtTUFBbU0sY0FBYyxPQUFPLGtEQUFrRCxHQUFHLG1DQUFtQyxZQUFZLGtDQUFrQyw2QkFBNkIsa0NBQWtDLHNCQUFzQixTQUFTLGlCQUFpQixTQUFTLGlCQUFpQixTQUFTLGlCQUFpQixTQUFTLEdBQUcsd0NBQXdDLHVEQUF1RCxZQUFZLDJCQUEyQixxQ0FBcUMsWUFBWSxpQkFBaUIsU0FBUyw2QkFBNkIsc0JBQXNCLFdBQVcsR0FBRyxnQkFBZ0IsNkVBQTZFLGlEQUFpRCxlQUFlLHNCQUFzQixLQUFLLDZCQUE2Qiw2QkFBNkIsZ0JBQWdCLHFCQUFxQixjQUFjLG9CQUFvQiw0QkFBNEIsc0JBQXNCLDBCQUEwQixxQ0FBcUMsdUJBQXVCLEdBQUcsb0NBQW9DLEtBQUssR0FBRyxHQUFHLG1CQUFtQiw2QkFBNkIsT0FBTywwRUFBMEUsbUJBQW1CLENBQUMsa0JBQWtCLEdBQUcsZ0JBQWdCO0FBQ3AzSiIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2ZpbGVfcmFmYWVsLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXVzZS1kb3dubG9hZGVyL2Rpc3QvaW5kZXguanM/ZmI0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgZT1yZXF1aXJlKFwicmVhY3RcIiksdD1mdW5jdGlvbigpe3JldHVybiB0PU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKGUpe2Zvcih2YXIgdCxuPTEscj1hcmd1bWVudHMubGVuZ3RoO248cjtuKyspZm9yKHZhciBvIGluIHQ9YXJndW1lbnRzW25dKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LG8pJiYoZVtvXT10W29dKTtyZXR1cm4gZX0sdC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9O2Z1bmN0aW9uIG4oZSx0LG4scil7cmV0dXJuIG5ldyhufHwobj1Qcm9taXNlKSkoKGZ1bmN0aW9uKG8sYSl7ZnVuY3Rpb24gdShlKXt0cnl7bChyLm5leHQoZSkpfWNhdGNoKGUpe2EoZSl9fWZ1bmN0aW9uIGMoZSl7dHJ5e2woci50aHJvdyhlKSl9Y2F0Y2goZSl7YShlKX19ZnVuY3Rpb24gbChlKXt2YXIgdDtlLmRvbmU/byhlLnZhbHVlKToodD1lLnZhbHVlLHQgaW5zdGFuY2VvZiBuP3Q6bmV3IG4oKGZ1bmN0aW9uKGUpe2UodCl9KSkpLnRoZW4odSxjKX1sKChyPXIuYXBwbHkoZSx0fHxbXSkpLm5leHQoKSl9KSl9ZnVuY3Rpb24gcihlLHQpe3ZhciBuLHIsbyxhLHU9e2xhYmVsOjAsc2VudDpmdW5jdGlvbigpe2lmKDEmb1swXSl0aHJvdyBvWzFdO3JldHVybiBvWzFdfSx0cnlzOltdLG9wczpbXX07cmV0dXJuIGE9e25leHQ6YygwKSx0aHJvdzpjKDEpLHJldHVybjpjKDIpfSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJihhW1N5bWJvbC5pdGVyYXRvcl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30pLGE7ZnVuY3Rpb24gYyhjKXtyZXR1cm4gZnVuY3Rpb24obCl7cmV0dXJuIGZ1bmN0aW9uKGMpe2lmKG4pdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7Zm9yKDthJiYoYT0wLGNbMF0mJih1PTApKSx1Oyl0cnl7aWYobj0xLHImJihvPTImY1swXT9yLnJldHVybjpjWzBdP3IudGhyb3d8fCgobz1yLnJldHVybikmJm8uY2FsbChyKSwwKTpyLm5leHQpJiYhKG89by5jYWxsKHIsY1sxXSkpLmRvbmUpcmV0dXJuIG87c3dpdGNoKHI9MCxvJiYoYz1bMiZjWzBdLG8udmFsdWVdKSxjWzBdKXtjYXNlIDA6Y2FzZSAxOm89YzticmVhaztjYXNlIDQ6cmV0dXJuIHUubGFiZWwrKyx7dmFsdWU6Y1sxXSxkb25lOiExfTtjYXNlIDU6dS5sYWJlbCsrLHI9Y1sxXSxjPVswXTtjb250aW51ZTtjYXNlIDc6Yz11Lm9wcy5wb3AoKSx1LnRyeXMucG9wKCk7Y29udGludWU7ZGVmYXVsdDppZighKG89dS50cnlzLChvPW8ubGVuZ3RoPjAmJm9bby5sZW5ndGgtMV0pfHw2IT09Y1swXSYmMiE9PWNbMF0pKXt1PTA7Y29udGludWV9aWYoMz09PWNbMF0mJighb3x8Y1sxXT5vWzBdJiZjWzFdPG9bM10pKXt1LmxhYmVsPWNbMV07YnJlYWt9aWYoNj09PWNbMF0mJnUubGFiZWw8b1sxXSl7dS5sYWJlbD1vWzFdLG89YzticmVha31pZihvJiZ1LmxhYmVsPG9bMl0pe3UubGFiZWw9b1syXSx1Lm9wcy5wdXNoKGMpO2JyZWFrfW9bMl0mJnUub3BzLnBvcCgpLHUudHJ5cy5wb3AoKTtjb250aW51ZX1jPXQuY2FsbChlLHUpfWNhdGNoKGUpe2M9WzYsZV0scj0wfWZpbmFsbHl7bj1vPTB9aWYoNSZjWzBdKXRocm93IGNbMV07cmV0dXJue3ZhbHVlOmNbMF0/Y1sxXTp2b2lkIDAsZG9uZTohMH19KFtjLGxdKX19fXZhciBvPWZ1bmN0aW9uKGUpe3ZhciB0PWUuc2V0U2l6ZSxvPWUuc2V0Q29udHJvbGxlckNhbGxiYWNrLGE9ZS5zZXRQZXJjZW50YWdlQ2FsbGJhY2ssdT1lLnNldEVycm9yQ2FsbGJhY2s7cmV0dXJuIGZ1bmN0aW9uKGUpe2lmKCFlLm9rKXRocm93IEVycm9yKFwiXCIuY29uY2F0KGUuc3RhdHVzLFwiIFwiKS5jb25jYXQoZS50eXBlLFwiIFwiKS5jb25jYXQoZS5zdGF0dXNUZXh0KSk7aWYoIWUuYm9keSl0aHJvdyBFcnJvcihcIlJlYWRhYmxlU3RyZWFtIG5vdCB5ZXQgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3Nlci5cIik7dmFyIGM9ZS5ib2R5LGw9ZS5oZWFkZXJzLmdldChcImNvbnRlbnQtZW5jb2RpbmdcIiksaT1lLmhlYWRlcnMuZ2V0KGw/XCJ4LWZpbGUtc2l6ZVwiOlwiY29udGVudC1sZW5ndGhcIikscz1wYXJzZUludChpfHxcIjBcIiwxMCk7dCgoZnVuY3Rpb24oKXtyZXR1cm4gc30pKTt2YXIgZj0wLGQ9bmV3IFJlYWRhYmxlU3RyZWFtKHtzdGFydDpmdW5jdGlvbihlKXtvKGUpO3ZhciB0PWMuZ2V0UmVhZGVyKCk7cmV0dXJuIGZ1bmN0aW9uIG8oKXtyZXR1cm4gbih0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKCl7cmV0dXJuIHIodGhpcywoZnVuY3Rpb24obil7cmV0dXJuWzIsdC5yZWFkKCkudGhlbigoZnVuY3Rpb24odCl7dmFyIG49dC5kb25lLHI9dC52YWx1ZTtyZXR1cm4gbj9lLmNsb3NlKCk6KGYrPShudWxsPT1yP3ZvaWQgMDpyLmJ5dGVMZW5ndGgpfHwwLHImJmUuZW5xdWV1ZShyKSxhKHtsb2FkZWQ6Zix0b3RhbDpzfSksbygpKX0pKS5jYXRjaCgoZnVuY3Rpb24obil7cmV0dXJuIHUobiksdC5jYW5jZWwoXCJDYW5jZWxsZWRcIiksZS5lcnJvcihuKX0pKV19KSl9KSl9KCl9fSk7cmV0dXJuIG5ldyBSZXNwb25zZShkKX19LGE9ZnVuY3Rpb24oZSx0LG4pe3ZhciByPW5ldyBCbG9iKFtlXSx7dHlwZTpufHxcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwifSk7aWYodm9pZCAwIT09d2luZG93Lm5hdmlnYXRvci5tc1NhdmVCbG9iKXJldHVybiB3aW5kb3cubmF2aWdhdG9yLm1zU2F2ZUJsb2Iocix0KTt2YXIgbz13aW5kb3cuVVJMJiZ3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTD93aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChyKTp3aW5kb3cud2Via2l0VVJMLmNyZWF0ZU9iamVjdFVSTChyKSxhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO3JldHVybiBhLnN0eWxlLmRpc3BsYXk9XCJub25lXCIsYS5ocmVmPW8sYS5zZXRBdHRyaWJ1dGUoXCJkb3dubG9hZFwiLHQpLHZvaWQgMD09PWEuZG93bmxvYWQmJmEuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsXCJfYmxhbmtcIiksZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhKSxhLmNsaWNrKCksc2V0VGltZW91dCgoZnVuY3Rpb24oKXtkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGEpLHdpbmRvdy5VUkwucmV2b2tlT2JqZWN0VVJMKG8pfSksMjAwKX07ZXhwb3J0cy5kZWZhdWx0PWZ1bmN0aW9uKHUpe3ZhciBjPXRoaXM7dm9pZCAwPT09dSYmKHU9e30pO3ZhciBsPXByb2Nlc3MuZW52LlJFQUNUX0FQUF9ERUJVR19NT0RFLGk9ZS51c2VTdGF0ZSgwKSxzPWlbMF0sZj1pWzFdLGQ9ZS51c2VTdGF0ZSgwKSxiPWRbMF0sdj1kWzFdLGg9ZS51c2VTdGF0ZSgwKSxwPWhbMF0sdz1oWzFdLHk9ZS51c2VTdGF0ZShudWxsKSxnPXlbMF0sbT15WzFdLGs9ZS51c2VTdGF0ZSghMSksQz1rWzBdLFI9a1sxXSxTPWUudXNlUmVmKG51bGwpLHg9ZS51c2VDYWxsYmFjaygoZnVuY3Rpb24oZSl7dmFyIHQ9ZS5sb2FkZWQsbj1lLnRvdGFsLHI9TWF0aC5yb3VuZCh0L24qMTAwKTt2KChmdW5jdGlvbigpe3JldHVybiByfSkpfSksW10pLEU9ZS51c2VDYWxsYmFjaygoZnVuY3Rpb24oZSl7dmFyIHQ9e1wiRmFpbGVkIHRvIGV4ZWN1dGUgJ2VucXVldWUnIG9uICdSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyJzogQ2Fubm90IGVucXVldWUgYSBjaHVuayBpbnRvIGFuIGVycm9yZWQgcmVhZGFibGUgc3RyZWFtXCI6XCJEb3dubG9hZCBjYW5jZWxlZFwiLFwiVGhlIHVzZXIgYWJvcnRlZCBhIHJlcXVlc3QuXCI6XCJEb3dubG9hZCB0aW1lZCBvdXRcIn07bSgoZnVuY3Rpb24oKXtyZXR1cm57ZXJyb3JNZXNzYWdlOnRbZS5tZXNzYWdlXT90W2UubWVzc2FnZV06ZS5tZXNzYWdlfX0pKX0pLFtdKSxMPWUudXNlQ2FsbGJhY2soKGZ1bmN0aW9uKGUpe1MuY3VycmVudD1lfSksW10pLFU9ZS51c2VDYWxsYmFjaygoZnVuY3Rpb24oKXtTLmN1cnJlbnQmJlMuY3VycmVudC5lcnJvcigpfSksW10pLE89ZS51c2VDYWxsYmFjaygoZnVuY3Rpb24oKXtMKG51bGwpLGYoKGZ1bmN0aW9uKCl7cmV0dXJuIDB9KSksdigoZnVuY3Rpb24oKXtyZXR1cm4gMH0pKSx3KChmdW5jdGlvbigpe3JldHVybiAwfSkpLFIoKGZ1bmN0aW9uKCl7cmV0dXJuITF9KSl9KSxbTF0pLGo9ZS51c2VDYWxsYmFjaygoZnVuY3Rpb24oZSxpLHMpe3JldHVybiB2b2lkIDA9PT1zJiYocz0wKSxuKGMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24oKXt2YXIgbixjLGQsYjtyZXR1cm4gcih0aGlzLChmdW5jdGlvbihyKXtyZXR1cm4gQz9bMixudWxsXTooTygpLG0oKGZ1bmN0aW9uKCl7cmV0dXJuIG51bGx9KSksUigoZnVuY3Rpb24oKXtyZXR1cm4hMH0pKSxuPXNldEludGVydmFsKChmdW5jdGlvbigpe3JldHVybiBmKChmdW5jdGlvbihlKXtyZXR1cm4gZSsxfSkpfSksbD8xOjFlMyksYz1vKHtzZXRTaXplOncsc2V0Q29udHJvbGxlckNhbGxiYWNrOkwsc2V0UGVyY2VudGFnZUNhbGxiYWNrOngsc2V0RXJyb3JDYWxsYmFjazpFfSksZD1uZXcgQWJvcnRDb250cm9sbGVyLGI9c2V0VGltZW91dCgoZnVuY3Rpb24oKXtzPjAmJmQuYWJvcnQoKX0pLHMpLFsyLGZldGNoKGUsdCh0KHt9LHUpLHttZXRob2Q6XCJHRVRcIixzaWduYWw6ZC5zaWduYWx9KSkudGhlbihjKS50aGVuKChmdW5jdGlvbihlKXtyZXR1cm4gZS5ibG9iKCl9KSkudGhlbigoZnVuY3Rpb24oZSl7cmV0dXJuIGEoZSxpKX0pKS50aGVuKChmdW5jdGlvbigpe3JldHVybiBPKCksY2xlYXJJbnRlcnZhbChuKX0pKS5jYXRjaCgoZnVuY3Rpb24oZSl7cmV0dXJuIE8oKSxtKChmdW5jdGlvbih0KXtyZXR1cm5cIkZhaWxlZCB0byBmZXRjaFwiIT09ZS5tZXNzYWdlP3tlcnJvck1lc3NhZ2U6ZS5tZXNzYWdlfTp0fSkpLGNsZWFyVGltZW91dChiKSxjbGVhckludGVydmFsKG4pfSkpXSl9KSl9KSl9KSxbQyxPLGwsTCx4LEUsdV0pO3JldHVybiBlLnVzZU1lbW8oKGZ1bmN0aW9uKCl7cmV0dXJue2VsYXBzZWQ6cyxwZXJjZW50YWdlOmIsc2l6ZTpwLGRvd25sb2FkOmosY2FuY2VsOlUsZXJyb3I6Zyxpc0luUHJvZ3Jlc3M6Q319KSxbcyxiLHAsaixVLGcsQ10pfSxleHBvcnRzLmpzRG93bmxvYWQ9YSxleHBvcnRzLnJlc29sdmVyPW87XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-use-downloader/dist/index.js\n");

/***/ })

};
;