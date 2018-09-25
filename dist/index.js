/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "QfWi");
/******/ })
/************************************************************************/
/******/ ({

/***/ "9/Ks":
/*!***************!*\
  !*** ./sw.js ***!
  \***************/
/*! no static exports found */
/***/ (function(module, exports) {

self.addEventListener('install', e => {
   e.waitUntil(
       caches.open('video-store').then(function (cache) {
           return cache.addAll([
               '../dist',
               './index.html',
               './index.js',
               './index.css'
           ]);
       })
   ) ;
});

self.addEventListener('fetch', e => {
   console.log(e.request.url);
   e.respondWith(caches.match(e.request).then(function (response) {
       return response || fetch(e.request);
   })
   )
});

/***/ }),

/***/ "QfWi":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "pyAK");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Helpers */ "faM0");
/* harmony import */ var _sw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sw */ "9/Ks");
/* harmony import */ var _sw__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sw__WEBPACK_IMPORTED_MODULE_2__);




const h = new _Helpers__WEBPACK_IMPORTED_MODULE_1__["default"]();

window.onload = () => {
    const section = h.query('section');
    const videos = [
        {'name': 'crystal'},
        {'name': 'elf'},
        // {'name': 'frog'},
        // {'name': 'monster'},
        // {'name': 'pig'},
        // {'name': 'rabbit'}
    ];

    let db;

    const displayVideo = (mp4Blob, webmBlob, title) => {
        let mp4URL = URL.createObjectURL(mp4Blob);
        let webmURL = URL.createObjectURL(webmBlob);
        let article = document.createElement('article');
        let h2 = document.createElement('h2');
        h2.textContent = title;
        let video = document.createElement('video');
        video.controls = true;
        let source1 = document.createElement('source');
        source1.src = mp4URL;
        source1.type = 'video/mp4';
        let source2 = document.createElement('source');
        source2.src = webmURL;
        source2.type = webmURL;

        section.appendChild(article);
        article.appendChild(h2);
        article.appendChild(video);
        video.appendChild(source1);
        video.appendChild(source2);
    };

    let request = window.indexedDB.open('videos', 1);
    request.onerror = () => {
        console.log('Database failed to open');
    };

    request.onsuccess = () => {
        console.log('Database opened successfully');
        db = request.result;
        init();
    };

    request.onupgradeneeded = e => {
        let db = e.target.result;
        let objectStore = db.createObjectStore('videos', {keyPath: name});
        objectStore.createIndex('mp4', 'mp4', {unique: false});
        objectStore.createIndex('webm', 'webm', {unique: false});
        console.log('Database setup complete');
    };

    if ('serviceWorder' in navigator) {
        navigator.serviceWorker
            .register('./sw.js').then(() => console.log('Service Worker Registered'));
    }

    const fetchVideoFromNetwork = (video) => {
        console.log('fetching videos from network');
        let mp4Blob = fetch('./videos/' + video.name + '.mp4').then(response =>
            response.blob()
        );
        let webmBlob = fetch('./videos/' + video.name  + '.webm').then(response => response.blob())
        Promise.all([mp4Blob, webmBlob]).then(function (values) {
            displayVideo(values[0], values[1], video.name);
        });
    };

    const storeVideo = (mp4Blob, webmBlob, name) => {
        let objectStore = db.transaction(['videos'], 'readwrite').objectStore('videos');
        let record = {
            mp4: mp4Blob,
            webm: webmBlob,
            name: name
        };

        let request = objectStore.add(record);
        request.onsuccess = () => {
            console.log('Record addition attemp finished');
        };

        request.onerror = () => {
            console.log(request.onerror);
        }
    };

    const init = () => {
        videos.forEach(item => {
            let objectStore = db.transaction('videos').objectStore('videos');
            let request = objectStore.get(item.name);
            request.onsuccess = () => {
                if (request.result) {
                    console.log('taking videos from IDB');
                    displayVideo(request.result.mp4, request.result.webm, request.result.name);
                } else {
                    fetchVideoFromNetwork(item);
                }
            }
        })
    }

};

/***/ }),

/***/ "faM0":
/*!********************!*\
  !*** ./Helpers.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Helpers {
    constructor() {
        this.helpers = {}
    }

    /**
     *
     * @param value
     * @returns {Array}
     */

    check(value) {
       return value ? value : [];
    }

    /**
     *
     * @param selector
     * @returns {NodeListOf<HTMLElementTagNameMap[keyof HTMLElementTagNameMap]>}
     */
    queryAll(selector) {
            return document.querySelectorAll(selector);
    };

    /**
     *
     * @param selector
     * @returns {*}
     */

    query(selector) {
        return this.check(document.querySelectorAll(selector)["0"]);
    }

    /**
     *
     */

    static getAllClasses(){
        document.addEventListener('DOMContentLoaded', () => {
            const obj = {};
            const arr = [];
            document.querySelectorAll('*').forEach(item => {
                arr.push(item.classList);
            });
            arr.forEach(it => {
                obj[it] = `.${it}`;
            });
            document.write(JSON.stringify(obj));
            return obj

        });

    }

    /**
     *
     */

    static getAllId() {
        document.addEventListener('DOMContentLoaded', () => {
            const obj ={};
            const arr = [];
            document.querySelectorAll('*').forEach(item => {
                arr.push(item.id);
            });
            arr.forEach(it => {
                obj[it] = `#${it}`;
            });
            document.write(JSON.stringify(obj));
            return obj;
        })
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Helpers);

/***/ }),

/***/ "pyAK":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3cuanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vSGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxDQUFDLEU7Ozs7Ozs7Ozs7OztBQ25CRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUI7QUFDVztBQUNsQjs7QUFFZCxjQUFjLGdEQUFPOztBQUVyQjtBQUNBO0FBQ0E7QUFDQSxTQUFTLGtCQUFrQjtBQUMzQixTQUFTLGNBQWM7QUFDdkIsWUFBWSxlQUFlO0FBQzNCLFlBQVksa0JBQWtCO0FBQzlCLFlBQVksY0FBYztBQUMxQixZQUFZO0FBQ1o7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMERBQTBELGNBQWM7QUFDeEUsK0NBQStDLGNBQWM7QUFDN0QsaURBQWlELGNBQWM7QUFDL0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBLEU7Ozs7Ozs7Ozs7OztBQzdHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDhCQUE4QixHQUFHO0FBQ2pDLGFBQWE7QUFDYjtBQUNBOztBQUVBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDhCQUE4QixHQUFHO0FBQ2pDLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRWUsc0VBQU8sRTs7Ozs7Ozs7Ozs7QUMzRXRCLHlDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiUWZXaVwiKTtcbiIsInNlbGYuYWRkRXZlbnRMaXN0ZW5lcignaW5zdGFsbCcsIGUgPT4ge1xyXG4gICBlLndhaXRVbnRpbChcclxuICAgICAgIGNhY2hlcy5vcGVuKCd2aWRlby1zdG9yZScpLnRoZW4oZnVuY3Rpb24gKGNhY2hlKSB7XHJcbiAgICAgICAgICAgcmV0dXJuIGNhY2hlLmFkZEFsbChbXHJcbiAgICAgICAgICAgICAgICcuLi9kaXN0JyxcclxuICAgICAgICAgICAgICAgJy4vaW5kZXguaHRtbCcsXHJcbiAgICAgICAgICAgICAgICcuL2luZGV4LmpzJyxcclxuICAgICAgICAgICAgICAgJy4vaW5kZXguY3NzJ1xyXG4gICAgICAgICAgIF0pO1xyXG4gICAgICAgfSlcclxuICAgKSA7XHJcbn0pO1xyXG5cclxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdmZXRjaCcsIGUgPT4ge1xyXG4gICBjb25zb2xlLmxvZyhlLnJlcXVlc3QudXJsKTtcclxuICAgZS5yZXNwb25kV2l0aChjYWNoZXMubWF0Y2goZS5yZXF1ZXN0KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgcmV0dXJuIHJlc3BvbnNlIHx8IGZldGNoKGUucmVxdWVzdCk7XHJcbiAgIH0pXHJcbiAgIClcclxufSk7IiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XHJcbmltcG9ydCBIZWxwZXJzIGZyb20gJy4vSGVscGVycyc7XHJcbmltcG9ydCAnLi9zdyc7XHJcblxyXG5jb25zdCBoID0gbmV3IEhlbHBlcnMoKTtcclxuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzZWN0aW9uID0gaC5xdWVyeSgnc2VjdGlvbicpO1xyXG4gICAgY29uc3QgdmlkZW9zID0gW1xyXG4gICAgICAgIHsnbmFtZSc6ICdjcnlzdGFsJ30sXHJcbiAgICAgICAgeyduYW1lJzogJ2VsZid9LFxyXG4gICAgICAgIC8vIHsnbmFtZSc6ICdmcm9nJ30sXHJcbiAgICAgICAgLy8geyduYW1lJzogJ21vbnN0ZXInfSxcclxuICAgICAgICAvLyB7J25hbWUnOiAncGlnJ30sXHJcbiAgICAgICAgLy8geyduYW1lJzogJ3JhYmJpdCd9XHJcbiAgICBdO1xyXG5cclxuICAgIGxldCBkYjtcclxuXHJcbiAgICBjb25zdCBkaXNwbGF5VmlkZW8gPSAobXA0QmxvYiwgd2VibUJsb2IsIHRpdGxlKSA9PiB7XHJcbiAgICAgICAgbGV0IG1wNFVSTCA9IFVSTC5jcmVhdGVPYmplY3RVUkwobXA0QmxvYik7XHJcbiAgICAgICAgbGV0IHdlYm1VUkwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHdlYm1CbG9iKTtcclxuICAgICAgICBsZXQgYXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcclxuICAgICAgICBsZXQgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIGgyLnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgICAgICAgbGV0IHZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcclxuICAgICAgICB2aWRlby5jb250cm9scyA9IHRydWU7XHJcbiAgICAgICAgbGV0IHNvdXJjZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzb3VyY2UnKTtcclxuICAgICAgICBzb3VyY2UxLnNyYyA9IG1wNFVSTDtcclxuICAgICAgICBzb3VyY2UxLnR5cGUgPSAndmlkZW8vbXA0JztcclxuICAgICAgICBsZXQgc291cmNlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NvdXJjZScpO1xyXG4gICAgICAgIHNvdXJjZTIuc3JjID0gd2VibVVSTDtcclxuICAgICAgICBzb3VyY2UyLnR5cGUgPSB3ZWJtVVJMO1xyXG5cclxuICAgICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGFydGljbGUpO1xyXG4gICAgICAgIGFydGljbGUuYXBwZW5kQ2hpbGQoaDIpO1xyXG4gICAgICAgIGFydGljbGUuYXBwZW5kQ2hpbGQodmlkZW8pO1xyXG4gICAgICAgIHZpZGVvLmFwcGVuZENoaWxkKHNvdXJjZTEpO1xyXG4gICAgICAgIHZpZGVvLmFwcGVuZENoaWxkKHNvdXJjZTIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgcmVxdWVzdCA9IHdpbmRvdy5pbmRleGVkREIub3BlbigndmlkZW9zJywgMSk7XHJcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0RhdGFiYXNlIGZhaWxlZCB0byBvcGVuJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJlcXVlc3Qub25zdWNjZXNzID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdEYXRhYmFzZSBvcGVuZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgICAgZGIgPSByZXF1ZXN0LnJlc3VsdDtcclxuICAgICAgICBpbml0KCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJlcXVlc3Qub251cGdyYWRlbmVlZGVkID0gZSA9PiB7XHJcbiAgICAgICAgbGV0IGRiID0gZS50YXJnZXQucmVzdWx0O1xyXG4gICAgICAgIGxldCBvYmplY3RTdG9yZSA9IGRiLmNyZWF0ZU9iamVjdFN0b3JlKCd2aWRlb3MnLCB7a2V5UGF0aDogbmFtZX0pO1xyXG4gICAgICAgIG9iamVjdFN0b3JlLmNyZWF0ZUluZGV4KCdtcDQnLCAnbXA0Jywge3VuaXF1ZTogZmFsc2V9KTtcclxuICAgICAgICBvYmplY3RTdG9yZS5jcmVhdGVJbmRleCgnd2VibScsICd3ZWJtJywge3VuaXF1ZTogZmFsc2V9KTtcclxuICAgICAgICBjb25zb2xlLmxvZygnRGF0YWJhc2Ugc2V0dXAgY29tcGxldGUnKTtcclxuICAgIH07XHJcblxyXG4gICAgaWYgKCdzZXJ2aWNlV29yZGVyJyBpbiBuYXZpZ2F0b3IpIHtcclxuICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlclxyXG4gICAgICAgICAgICAucmVnaXN0ZXIoJy4vc3cuanMnKS50aGVuKCgpID0+IGNvbnNvbGUubG9nKCdTZXJ2aWNlIFdvcmtlciBSZWdpc3RlcmVkJykpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZldGNoVmlkZW9Gcm9tTmV0d29yayA9ICh2aWRlbykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdmZXRjaGluZyB2aWRlb3MgZnJvbSBuZXR3b3JrJyk7XHJcbiAgICAgICAgbGV0IG1wNEJsb2IgPSBmZXRjaCgnLi92aWRlb3MvJyArIHZpZGVvLm5hbWUgKyAnLm1wNCcpLnRoZW4ocmVzcG9uc2UgPT5cclxuICAgICAgICAgICAgcmVzcG9uc2UuYmxvYigpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsZXQgd2VibUJsb2IgPSBmZXRjaCgnLi92aWRlb3MvJyArIHZpZGVvLm5hbWUgICsgJy53ZWJtJykudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5ibG9iKCkpXHJcbiAgICAgICAgUHJvbWlzZS5hbGwoW21wNEJsb2IsIHdlYm1CbG9iXSkudGhlbihmdW5jdGlvbiAodmFsdWVzKSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXlWaWRlbyh2YWx1ZXNbMF0sIHZhbHVlc1sxXSwgdmlkZW8ubmFtZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHN0b3JlVmlkZW8gPSAobXA0QmxvYiwgd2VibUJsb2IsIG5hbWUpID0+IHtcclxuICAgICAgICBsZXQgb2JqZWN0U3RvcmUgPSBkYi50cmFuc2FjdGlvbihbJ3ZpZGVvcyddLCAncmVhZHdyaXRlJykub2JqZWN0U3RvcmUoJ3ZpZGVvcycpO1xyXG4gICAgICAgIGxldCByZWNvcmQgPSB7XHJcbiAgICAgICAgICAgIG1wNDogbXA0QmxvYixcclxuICAgICAgICAgICAgd2VibTogd2VibUJsb2IsXHJcbiAgICAgICAgICAgIG5hbWU6IG5hbWVcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBsZXQgcmVxdWVzdCA9IG9iamVjdFN0b3JlLmFkZChyZWNvcmQpO1xyXG4gICAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUmVjb3JkIGFkZGl0aW9uIGF0dGVtcCBmaW5pc2hlZCcpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJlcXVlc3Qub25lcnJvciA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVxdWVzdC5vbmVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGluaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgdmlkZW9zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBvYmplY3RTdG9yZSA9IGRiLnRyYW5zYWN0aW9uKCd2aWRlb3MnKS5vYmplY3RTdG9yZSgndmlkZW9zJyk7XHJcbiAgICAgICAgICAgIGxldCByZXF1ZXN0ID0gb2JqZWN0U3RvcmUuZ2V0KGl0ZW0ubmFtZSk7XHJcbiAgICAgICAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcXVlc3QucmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Rha2luZyB2aWRlb3MgZnJvbSBJREInKTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VmlkZW8ocmVxdWVzdC5yZXN1bHQubXA0LCByZXF1ZXN0LnJlc3VsdC53ZWJtLCByZXF1ZXN0LnJlc3VsdC5uYW1lKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2hWaWRlb0Zyb21OZXR3b3JrKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbn07IiwiY2xhc3MgSGVscGVycyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmhlbHBlcnMgPSB7fVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB2YWx1ZVxyXG4gICAgICogQHJldHVybnMge0FycmF5fVxyXG4gICAgICovXHJcblxyXG4gICAgY2hlY2sodmFsdWUpIHtcclxuICAgICAgIHJldHVybiB2YWx1ZSA/IHZhbHVlIDogW107XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHNlbGVjdG9yXHJcbiAgICAgKiBAcmV0dXJucyB7Tm9kZUxpc3RPZjxIVE1MRWxlbWVudFRhZ05hbWVNYXBba2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwXT59XHJcbiAgICAgKi9cclxuICAgIHF1ZXJ5QWxsKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHNlbGVjdG9yXHJcbiAgICAgKiBAcmV0dXJucyB7Kn1cclxuICAgICAqL1xyXG5cclxuICAgIHF1ZXJ5KHNlbGVjdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2soZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilbXCIwXCJdKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuXHJcbiAgICBzdGF0aWMgZ2V0QWxsQ2xhc3Nlcygpe1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9iaiA9IHt9O1xyXG4gICAgICAgICAgICBjb25zdCBhcnIgPSBbXTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKicpLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhcnIucHVzaChpdGVtLmNsYXNzTGlzdCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBhcnIuZm9yRWFjaChpdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBvYmpbaXRdID0gYC4ke2l0fWA7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBkb2N1bWVudC53cml0ZShKU09OLnN0cmluZ2lmeShvYmopKTtcclxuICAgICAgICAgICAgcmV0dXJuIG9ialxyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcblxyXG4gICAgc3RhdGljIGdldEFsbElkKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9iaiA9e307XHJcbiAgICAgICAgICAgIGNvbnN0IGFyciA9IFtdO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqJykuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGFyci5wdXNoKGl0ZW0uaWQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYXJyLmZvckVhY2goaXQgPT4ge1xyXG4gICAgICAgICAgICAgICAgb2JqW2l0XSA9IGAjJHtpdH1gO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZG9jdW1lbnQud3JpdGUoSlNPTi5zdHJpbmdpZnkob2JqKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBvYmo7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVscGVyczsiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=