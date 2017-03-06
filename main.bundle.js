webpackJsonp([1,4],{

/***/ 373:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 373;


/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(493);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=d:/Attempts/angular2/Angular2-CRUD-app/src/main.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(63);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTodoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddTodoComponent = (function () {
    function AddTodoComponent(store) {
        this.store = store;
    }
    AddTodoComponent.prototype.ngOnInit = function () {
    };
    AddTodoComponent.prototype.addTodo = function (input) {
        var inputValue = input.value;
        inputValue && this.store.dispatch({
            type: 'ADD_TODO',
            payload: {
                id: (new Date()).getTime(),
                text: inputValue,
                completed: false
            }
        });
        input.value = null;
    };
    AddTodoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-add-todo',
            template: __webpack_require__(654),
            styles: [__webpack_require__(650)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["g" /* Store */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["g" /* Store */]) === 'function' && _a) || Object])
    ], AddTodoComponent);
    return AddTodoComponent;
    var _a;
}());
//# sourceMappingURL=d:/Attempts/angular2/Angular2-CRUD-app/src/add-todo.component.js.map

/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_combineLatest__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_combineLatest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_combineLatest__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_interval__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_interval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_interval__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = (function () {
    function AppComponent(store) {
        var _this = this;
        this.store = store;
        var todos = store.select('todos');
        var filter = store.select('filter');
        this.listSubscription = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].combineLatest(todos, filter, function (todos, filter) {
            _this.currentFilter = filter.type;
            return todos.filter(filter.func);
        });
        this.listSubscription.subscribe(function (filteredList) { return _this.list = filteredList; }, function (error) { return console.log("Error occured: " + error.name); });
    }
    AppComponent.prototype.setVisibilityFilter = function (event, filter) {
        event.preventDefault();
        this.store.dispatch({
            type: filter
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.listSubscription.unsubscribe();
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(655),
            styles: [__webpack_require__(651)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["g" /* Store */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["g" /* Store */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=d:/Attempts/angular2/Angular2-CRUD-app/src/app.component.js.map

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store_devtools__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__todo_item_todo_item_component__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__add_todo_add_todo_component__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__reducers_todos__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__reducers_filter__ = __webpack_require__(495);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__todo_item_todo_item_component__["a" /* TodoItemComponent */],
                __WEBPACK_IMPORTED_MODULE_8__add_todo_add_todo_component__["a" /* AddTodoComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["a" /* StoreModule */].provideStore({
                    todos: __WEBPACK_IMPORTED_MODULE_9__reducers_todos__["a" /* todos */],
                    filter: __WEBPACK_IMPORTED_MODULE_10__reducers_filter__["a" /* filter */]
                }),
                __WEBPACK_IMPORTED_MODULE_5__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrumentOnlyWithExtension({
                    maxAge: 5
                })
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=d:/Attempts/angular2/Angular2-CRUD-app/src/app.module.js.map

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoItem; });
var TodoItem = (function () {
    function TodoItem() {
    }
    return TodoItem;
}());
//# sourceMappingURL=d:/Attempts/angular2/Angular2-CRUD-app/src/todo.js.map

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return filter; });
var defaultState = {
    func: function (todo) { return todo; },
    type: 'ALL'
};
var filter = function (state, action) {
    if (state === void 0) { state = defaultState; }
    switch (action.type) {
        case 'ALL':
            return {
                func: function (todo) { return todo; },
                type: 'ALL'
            };
        case 'ACTIVE':
            return {
                func: function (todo) { return !todo.completed; },
                type: 'ACTIVE'
            };
        case 'COMPLETED':
            return {
                func: function (todo) { return todo.completed; },
                type: 'COMPLETED'
            };
        default:
            return state;
    }
};
//# sourceMappingURL=d:/Attempts/angular2/Angular2-CRUD-app/src/filter.js.map

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return todos; });
var todos = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([
                action.payload
            ]);
        case 'UPDATE_TODO':
            return state.map(function (todo) {
                if (todo.id !== action.payload.id) {
                    return todo;
                }
                return Object.assign({}, todo, { text: action.payload.text });
            });
        case 'DELETE_TODO':
            return state.filter(function (todo) { return todo.id !== action.payload.id; });
        case 'TOGGLE_TODO':
            return state.map(function (todo) {
                if (todo.id !== action.payload.id) {
                    return todo;
                }
                return Object.assign({}, todo, { completed: action.payload.completed });
            });
        default:
            return state;
    }
};
//# sourceMappingURL=d:/Attempts/angular2/Angular2-CRUD-app/src/todos.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_todo__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(63);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoItemComponent = (function () {
    function TodoItemComponent(store) {
        this.store = store;
        this.onEdited = false;
        this.delay = 200;
        this.prevent = false;
    }
    TodoItemComponent.prototype.ngOnInit = function () {
    };
    TodoItemComponent.prototype.removeTodo = function () {
        this.store.dispatch({
            type: 'DELETE_TODO',
            payload: {
                id: this.todo.id
            }
        });
    };
    TodoItemComponent.prototype.toggleTodo = function () {
        clearTimeout(this.timer);
        this.prevent = true;
        this.onEdited = !this.onEdited;
    };
    TodoItemComponent.prototype.updateTodo = function (input) {
        this.store.dispatch({
            type: 'UPDATE_TODO',
            payload: {
                id: this.todo.id,
                text: input.value
            }
        });
        this.toggleTodo();
    };
    TodoItemComponent.prototype.checkTodo = function () {
        var _this = this;
        this.timer = setTimeout(function () {
            if (!_this.prevent) {
                // this.todoChecked.emit({
                //   todo: this.todo,
                //   checked: !this.todo.completed
                // });
                _this.store.dispatch({
                    type: 'TOGGLE_TODO',
                    payload: {
                        id: _this.todo.id,
                        completed: !_this.todo.completed
                    }
                });
            }
            _this.prevent = false;
        }, this.delay);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_todo__["a" /* TodoItem */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__models_todo__["a" /* TodoItem */]) === 'function' && _a) || Object)
    ], TodoItemComponent.prototype, "todo", void 0);
    TodoItemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-todo-item',
            template: __webpack_require__(656),
            styles: [__webpack_require__(652)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["g" /* Store */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["g" /* Store */]) === 'function' && _b) || Object])
    ], TodoItemComponent);
    return TodoItemComponent;
    var _a, _b;
}());
//# sourceMappingURL=d:/Attempts/angular2/Angular2-CRUD-app/src/todo-item.component.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=d:/Attempts/angular2/Angular2-CRUD-app/src/environment.js.map

/***/ }),

/***/ 650:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(105)();
// imports


// module
exports.push([module.i, "input[type=text] {\r\n  border-radius: 3px;\r\n  outline: none;\r\n  border: 0;\r\n  background-color: rgba(0,0,0,.07);\r\n  padding: 5px;\r\n}\r\n\r\ninput[type=text]:focus {\r\n  background-color: rgba(0,0,0,.09);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 651:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(105)();
// imports


// module
exports.push([module.i, ".todoapp {\r\n  width: 100%;\r\n  margin-left: 20px;\r\n  margin-right: 20px;\r\n}\r\n\r\n.header h1 {\r\n  color: #369;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 250%;\r\n  letter-spacing: 2px;\r\n}\r\n\r\n.header h1::first-letter {\r\n  font-weight: 100;\r\n  font-style: italic;\r\n}\r\n\r\n.footer .filters li {\r\n  display: inline;\r\n}\r\n\r\n.footer .todo-count {\r\n  float: left;\r\n  margin-right: 50px;\r\n}\r\n\r\n.highlighted {\r\n  padding: 5px;\r\n  color: white;\r\n  background-color: lightskyblue;\r\n  text-decoration: none;\r\n}\r\n\r\n.highlighted:hover {\r\n  -webkit-transition: 0.5s;\r\n  transition: 0.5s;\r\n  background-color: #336699;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 652:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(105)();
// imports


// module
exports.push([module.i, "li {\r\n  list-style: none;\r\n  width: 400px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  margin-bottom: 5px;\r\n}\r\n\r\nlabel {\r\n  width: 300px;\r\n}\r\n\r\n.checkbox:checked + label {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.control-todo {\r\n  margin-left: auto;\r\n}\r\n\r\ninput[type=text] {\r\n  width: 300px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 654:
/***/ (function(module, exports) {

module.exports = "<input \r\n  #input type=\"text\" \r\n  (keyup.enter)=\"addTodo(input)\"\r\n  placeholder=\"What needs to be done?\"\r\n  autofocus>\r\n<button class=\"add-button\" (click)=\"addTodo(input)\">add</button>"

/***/ }),

/***/ 655:
/***/ (function(module, exports) {

module.exports = "<section class=\"todoapp\">\r\n  <header class=\"header\">\r\n    <h1>Let's add some tasks!</h1>\r\n    <app-add-todo></app-add-todo>\r\n  </header>\r\n  <section class=\"main\" *ngIf=\"list.length > 0\">\r\n    <ul class=\"list-container\">\r\n      <app-todo-item\r\n        *ngFor=\"let todo of list\"\r\n        [todo]=\"todo\">\r\n      </app-todo-item>\r\n    </ul>\r\n  </section>\r\n  <footer class=\"footer\" *ngIf=\"list.length > 0\">\r\n    <span class=\"todo-count\">{{list.length}} {{list.length === 1 ? 'item' : 'items'}} left</span>\r\n    <ul class=\"filters\">\r\n      <li><a href=\"\" (click)=\"setVisibilityFilter($event, 'ALL')\" [ngClass]=\"{'highlighted': 'ALL' === currentFilter}\">all</a></li>\r\n      <li><a href=\"\" (click)=\"setVisibilityFilter($event, 'ACTIVE')\" [ngClass]=\"{'highlighted': 'ACTIVE' === currentFilter}\">active</a></li>\r\n      <li><a href=\"\" (click)=\"setVisibilityFilter($event, 'COMPLETED')\" [ngClass]=\"{'highlighted': 'COMPLETED' === currentFilter}\">completed</a></li>\r\n    </ul>\r\n  </footer>\r\n</section>\r\n"

/***/ }),

/***/ 656:
/***/ (function(module, exports) {

module.exports = "<li>\r\n  <input [hidden]=\"onEdited\" type=\"checkbox\" class=\"checkbox\" [checked]=\"todo.completed\" (click)=\"onChecked()\">\r\n  <label [hidden]=\"onEdited\" (dblclick)=\"toggleTodo()\" (click)=\"checkTodo()\">{{todo.text}}</label>\r\n  <input #input [hidden]=\"!onEdited\" type=\"text\"  (keyup.enter)=\"updateTodo(input)\" value=\"{{todo.text}}\">\r\n  <button class=\"control-todo\" (click)=\"onEdited ? updateTodo(input) : removeTodo()\">{{onEdited ? 'save' : 'remove'}}</button>\r\n</li>\r\n"

/***/ }),

/***/ 695:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(374);


/***/ })

},[695]);
//# sourceMappingURL=main.bundle.js.map