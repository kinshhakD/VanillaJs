/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _models_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/data */ "./models/data.js");
/* harmony import */ var _models_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/content */ "./models/content.js");
/* harmony import */ var _models_addModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/addModal */ "./models/addModal.js");
/* harmony import */ var _models_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/filter */ "./models/filter.js");
/* harmony import */ var _models_sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/sidebar */ "./models/sidebar.js");
/* harmony import */ var _models_CategoryButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models/CategoryButton */ "./models/CategoryButton.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}







 // запрос на сервер и рендер базы
// renderWrapper((
//   async () => {
//     const data = await database();
//     return data.map((el) =>
//       document.querySelector(".dish-data").append(blockItem(el))
//     );
//   })()
// );

_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var data;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0,_models_data__WEBPACK_IMPORTED_MODULE_1__.default)();

        case 2:
          data = _context.sent;
          return _context.abrupt("return", data.map(function (el) {
            return document.querySelector(".dish-data").append((0,_models_content__WEBPACK_IMPORTED_MODULE_2__.default)(el));
          }));

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}))();

var renderButton = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var data;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0,_models_data__WEBPACK_IMPORTED_MODULE_1__.default)();

          case 2:
            data = _context2.sent;
            return _context2.abrupt("return", data.map(function (el) {
              return document.querySelector('.container-buttons').append((0,_models_CategoryButton__WEBPACK_IMPORTED_MODULE_6__.default)(el));
            }));

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function renderButton() {
    return _ref2.apply(this, arguments);
  };
}();

renderButton();
document.getElementById('btnHeader').addEventListener('click', _models_addModal__WEBPACK_IMPORTED_MODULE_3__.default);
document.querySelector('.open-aside').addEventListener('click', _models_sidebar__WEBPACK_IMPORTED_MODULE_5__.default); // const filterNew = (category,items) => {
//   const buttons = document.querySelectorAll('.btn-filter');
//   function filter () {
//     items.forEach(item => {
//       const isItemFiltered = !item.classList.contains(category);
//       const isShowAll = category.toLowerCase() === 'all';
//       if (isItemFiltered && !isShowAll){
//         item.classList.add('dnone');
//       } else { 
//         item.classList.remove('dnone');
//       }
//     })
//   }
//    buttons.forEach(button => {
//     button.addEventListener('click', () => {
//        const cards = document.querySelectorAll('.data-item');
//        const currentCategory = button.dataset.filter;
//        filter(currentCategory, cards )
//      })
//    })
// }
// filterNew()

/***/ }),

/***/ "./models/CategoryButton.js":
/*!**********************************!*\
  !*** ./models/CategoryButton.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var file_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-loader */ "../node_modules/file-loader/dist/cjs.js");
/* harmony import */ var file_loader__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_loader__WEBPACK_IMPORTED_MODULE_0__);


var createDiv = function createDiv(classList) {
  var div = document.createElement("div");
  div.classList = "".concat(classList);
  return div;
};

var filterNew = function filterNew(category, items) {
  // const buttons = document.querySelectorAll('.btn-filter');
  items.forEach(function (item) {
    var isItemFiltered = !item.classList.contains(category);
    var isShowAll = category.toLowerCase() === 'all';

    if (isItemFiltered && !isShowAll) {
      item.classList.add('dnone');
    } else {
      item.classList.remove('dnone');
    }
  });
};

var uniqueCategoryButtons = function uniqueCategoryButtons(callback) {};

var CategoryButton = function CategoryButton(data) {
  var buttonBlock = createDiv('btn-category dnone');
  var button = document.createElement('button');
  button.classList = 'btn-filter';
  button.dataset.filter = "".concat(data.category);
  button.textContent = "".concat(data.category);
  button.addEventListener('click', function () {
    var currentCategory = button.dataset.filter;
    filterNew(currentCategory, document.querySelectorAll('.data-item'));
  });
  buttonBlock.appendChild(button);
  return buttonBlock;
};

/* harmony default export */ __webpack_exports__["default"] = (CategoryButton);

/***/ }),

/***/ "./models/addModal.js":
/*!****************************!*\
  !*** ./models/addModal.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

var jsonServer = 'http://localhost:3000/dish';

var createElement = function createElement() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var element = document.createElement(type);
  return Object.keys(params).map(function (key) {
    return element[key] = params[key];
  });
};

var createDiv = function createDiv(classList) {
  var div = document.createElement('div');
  div.classList = "".concat(classList);
  return div;
}; // Modal-window


var addRecipeWindow = function addRecipeWindow() {
  //blocks for content
  var block = createDiv('window'),
      containerWindow = createDiv('container-window'),
      windowHeader = createDiv('window-header'),
      windowBody = createDiv('window-body'),
      windowContent = createDiv('window-content'),
      formContent = windowContent.appendChild(addFormtoModal());
  formContent.after(afterForm());
  windowHeader.innerHTML = "<img src='/src/images/cook.jpg' class='window-img'>"; // block-->(containerWindow(windowHeader-->windowBody(windowContent)))

  block.appendChild(containerWindow);
  containerWindow.appendChild(windowHeader);
  windowHeader.after(windowBody);
  windowBody.appendChild(windowContent);
  return document.body.after(block);
}; //Name and Description form


var addFormtoModal = function addFormtoModal() {
  var form = document.createElement('form'),
      inputName = document.createElement('input');
  form.method = 'POST';
  inputName.name = 'name';
  inputName.classList = 'input-name';
  inputName.placeholder = 'Name Name Name';
  inputName.id = 'jsInputName';
  var areaDescription = document.createElement('textarea');
  areaDescription.name = 'description';
  areaDescription.classList = 'area-desc';
  areaDescription.placeholder = 'desc desc desc';
  areaDescription.id = 'jsAreaDesc';

  areaDescription.oninput = function () {
    areaDescription.style.height = '5px';
    areaDescription.style.height = areaDescription.scrollHeight + "px";
  };

  form.appendChild(inputName);
  inputName.after(areaDescription);
  return form;
}; //Input-to-List


var createInputElement = function createInputElement(inputId) {
  var element = document.createElement('input');
  element.type = 'text';
  element.placeholder = 'type ingredient';
  element.classList = 'input-name';
  element.id = "".concat(inputId);
  return function (parent) {
    var parentElement = document.getElementById("".concat(parent));
    parentElement.before(element);
  };
}; // reading value from input and creating list-item


var addListItem = function addListItem(jsInputId, jsUlList) {
  var textVal = document.getElementById("".concat(jsInputId)).value;

  if (textVal) {
    var ulList = document.getElementById("".concat(jsUlList)),
        listItem = document.createElement('li'),
        txtNode = document.createTextNode(textVal);
    listItem.classList = 'list-ing';
    listItem.appendChild(txtNode);
    ulList.appendChild(listItem);
  }
};

var buttonList = function buttonList(jsInputId, jsUlList) {
  var btnList = document.createElement('button');
  btnList.classList = 'btn';
  btnList.id = 'jsBtnList';
  btnList.innerHTML = "<img src='/src/images/plus.svg'>";

  btnList.onclick = function () {
    if (!btnList.classList.contains('btn-add')) {
      var inputIng = createInputElement("".concat(jsInputId));
      inputIng("".concat(jsUlList));
      btnList.classList.add('btn-add');
    } else {
      addListItem("".concat(jsInputId), "".concat(jsUlList));
      document.getElementById("".concat(jsInputId)).remove();
      btnList.classList.remove('btn-add');
    }
  };

  return btnList;
}; //input and list block  


var afterForm = function afterForm() {
  var block = createDiv('ingredients-block'),
      flexdiv = createDiv('ingredients-flex'),
      flexTitle = createDiv('ingredients-title'),
      flexbtn = createDiv('btn btn-add'),
      ulListBlock = createDiv('list-container'),
      ulList = document.createElement('ul');
  ulList.classList = 'ulList';
  ulList.id = 'jsUlList'; ///Flexbox - "flexdiv"

  flexTitle.innerHTML = "<h3>Ingredients</h3>";
  flexbtn.appendChild(buttonList('jsInputId', 'jsUlList')); ///block-->(flexdiv-->(flextitle(flexbtn))ulListBlock-->(ulList))

  block.appendChild(flexdiv);
  flexdiv.appendChild(flexTitle);
  flexTitle.after(flexbtn);
  flexdiv.after(ulListBlock);
  ulListBlock.appendChild(ulList);
  ulListBlock.after(postButton());
  return block;
};

var postButton = function postButton() {
  var block1 = createDiv('post-block');
  var button = document.createElement('button');
  button.classList = 'btn btn-post';
  button.id = 'jsPostButton';
  button.innerHTML = "<img src='/src/images/post.svg'>"; // button.onclick = () => postDataFunction('jsInputName', 'jsAreaDesc', 'jsUlList');

  button.addEventListener('click', function () {
    return postDataFunction('jsInputName', 'jsAreaDesc', 'jsUlList');
  });
  block1.appendChild(button);
  return block1;
};

var postDataFunction = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dataName, dataDesc, dataList) {
    var dishObj, descObj, listObj, arrayDataList, dataObject;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dishObj = document.getElementById("".concat(dataName)), descObj = document.getElementById("".concat(dataDesc)), listObj = document.getElementById("".concat(dataList)), arrayDataList = _toConsumableArray(listObj.children).map(function (listItem) {
              return listItem.innerHTML;
            });

            if (!(dishObj.value && descObj.value && arrayDataList.length > 0)) {
              _context.next = 8;
              break;
            }

            dataObject = {
              dish: dishObj.value,
              description: descObj.value,
              ingredients: arrayDataList
            };
            _context.next = 5;
            return fetch(jsonServer, {
              method: 'Post',
              headers: {
                'Content-type': 'application/json'
              },
              body: JSON.stringify(dataObject)
            });

          case 5:
            dishObj.value = '';
            descObj.value = '';

            if (listObj) {
              while (listObj.firstChild) {
                listObj.removeChild(listObj.firstChild);
              }
            }

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function postDataFunction(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (addRecipeWindow);

/***/ }),

/***/ "./models/content.js":
/*!***************************!*\
  !*** ./models/content.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var createDiv = function createDiv(classList) {
  var div = document.createElement("div");
  div.classList = "".concat(classList);
  return div;
};

var listIngredients = function listIngredients(asyncData) {
  var list = asyncData.ingredients.map(function (el) {
    return "<li class='list-ing'>".concat(el, "</li>");
  });
  return list;
};

var openModalDish = function openModalDish(data) {
  var block = createDiv("window");
  var containerWindow = createDiv("container-window"); // After containerWindow

  var windowHeader = createDiv("window-header");
  var imageHeader = document.createElement("img");
  imageHeader.classList = "window-img";
  imageHeader.src = "".concat(data.src);
  windowHeader.appendChild(imageHeader); // After windowHeader

  var windowBody = createDiv("window-body");
  var windowContent = createDiv("window-content");
  windowContent.innerHTML = "\n    <div class='modalW-name'><h2>".concat(data.dish, "</h2></div>\n    <div class='modalW-description'><p>").concat(data.description, "</p></div>\n    <div class='list-description'>\n    <ul>\n    ").concat(listIngredients(data), "\n    </ul>\n    </div>\n    "); // block-->(containerWindow(windowHeader-->windowBody(windowContent)))

  block.appendChild(containerWindow);
  containerWindow.append(windowHeader);
  windowHeader.after(windowBody);
  windowBody.appendChild(windowContent);
  return document.body.after(block);
};

var blockItem = function blockItem(data) {
  var item = createDiv("data-item ".concat(data.category));
  item.addEventListener('click', function () {
    return openModalDish(data);
  });
  var dataImage = document.createElement("img");
  dataImage.className = "img-dish";
  dataImage.id = "ModalImage-".concat(data.id);
  dataImage.src = "".concat(data.src);
  var dataNameDiv = createDiv();
  dataNameDiv.className = "item-dish";
  var dataNameInner = document.createElement("p");
  dataNameInner.className = "dish-handler";
  dataNameInner.innerHTML = "".concat(data.dish);
  item.appendChild(dataImage);
  dataImage.after(dataNameDiv);
  dataNameDiv.appendChild(dataNameInner);
  return item;
};

/* harmony default export */ __webpack_exports__["default"] = (blockItem);

/***/ }),

/***/ "./models/data.js":
/*!************************!*\
  !*** ./models/data.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}


var jsonUrl = "http://localhost:3000/dish";

var database = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var response, data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(jsonUrl);

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();

          case 5:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function database() {
    return _ref.apply(this, arguments);
  };
}();

database().then(function (result) {
  return console.log(result.map(function (el) {
    return el.description;
  }));
});
database().then(function (result) {
  return console.log(result);
});
/* harmony default export */ __webpack_exports__["default"] = (database);

/***/ }),

/***/ "./models/filter.js":
/*!**************************!*\
  !*** ./models/filter.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content */ "./models/content.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./models/data.js");

 // const filter = (data) => {
//   const buttonsCategory = document.querySelectorAll('.btn-filter');
//   buttonsCategory.forEach(button => {
//     // button.addEventListener('click', (e) => {
//     //  if(button.textContent == `${database.category}`){
//     //    console.log(true);
//     //  } else{
//     //    console.log(false);
//     //  }
//     // })
//     button.addEventListener('click', () => {
//       console.log(button.innerHTML);
//     })
//   })
// }
// export default filter;

/***/ }),

/***/ "./models/sidebar.js":
/*!***************************!*\
  !*** ./models/sidebar.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var asideTransition = function asideTransition() {
  var aside = document.querySelector('.aside');
  var btnCategory = document.querySelectorAll('.btn-category');

  if (aside.classList.contains('sidebar-close')) {
    aside.classList = 'aside sidebar-active';
    btnCategory.forEach(function (item) {
      item.classList.remove('dnone');
    });
  } else {
    aside.classList = 'aside sidebar-close';
    btnCategory.forEach(function (item) {
      item.classList.add('dnone');
    });
  }

  return aside;
};

/* harmony default export */ __webpack_exports__["default"] = (asideTransition);

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			__webpack_require__.O();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js-node_modules_file-loader_dist_cjs_js-node_mo-2d91f6"], function() { return __webpack_require__("../node_modules/@babel/polyfill/lib/index.js"); })
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js-node_modules_file-loader_dist_cjs_js-node_mo-2d91f6"], function() { return __webpack_require__("./index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map