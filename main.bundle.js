webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  max-width: 730px;\n  text-align: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class='navbar'\n     role='navigation'>\n  <div class='container'>\n    <a class='navbar-brand'\n       href='https://github.com/makepost/minesweeper'>Minesweeper</a>\n  </div>\n</nav>\n\n<div class='container'>\n  <router-outlet></router-outlet>\n\n  <hr />\n\n  <p>&copy; 2016, <a href='https://github.com/makepost'>makepost</a></p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        template: __webpack_require__("../../../../../src/app/app.component.html"),
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mobx_angular__ = __webpack_require__("../../../../mobx-angular/dist/mobx-angular.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_inline_svg__ = __webpack_require__("../../../../ng-inline-svg/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_inline_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng_inline_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_carousel__ = __webpack_require__("../../../../ngx-bootstrap/carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__index_index_component__ = __webpack_require__("../../../../../src/app/index/index.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__index_index_component__["a" /* IndexComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__index_index_component__["a" /* IndexComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4_mobx_angular__["a" /* MobxAngularModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5_ng_inline_svg__["InlineSVGModule"],
            __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_carousel__["a" /* CarouselModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_modal__["a" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
        ],
        providers: [],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return alphabet; });
var alphabet = 'abcdefghijklmnopqrstuvwxyz';
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "../../../../../src/app/index/index.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-control {\n  margin-left: auto;\n  margin-right: auto;\n  width: auto;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='minesweeper'>\n  <pre [innerText]='game.toString()'></pre>\n\n  <form (submit)='go()'>\n    <input class='form-control'\n           placeholder='Coords (\"cd\") or \"reset\"'\n           [(ngModel)]='coords'\n           name='coords'\n           autocomplete='off'\n           autofocus />\n  </form>\n\n  <p *ngIf='game.isWon'\n     class='mt-2 mb-0 text-success'>You win.</p>\n\n  <p *ngIf='game.isLost'\n     class='mt-2 mb-0 text-danger'>Game over.</p>\n\n  <p *ngIf='warning'\n     class='mt-2 mb-0 text-warning'\n     [innerText]='warning'></p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/index/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_constants__ = __webpack_require__("../../../../../src/app/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_solver__ = __webpack_require__("../../../../../src/app/solver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_domain_Game__ = __webpack_require__("../../../../../src/domain/Game.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IndexComponent = (function () {
    function IndexComponent() {
        this.coords = '';
        this.game = new __WEBPACK_IMPORTED_MODULE_3_domain_Game__["a" /* Game */]();
        this.output = '';
        this.warning = '';
        while (true) {
            var solver = new __WEBPACK_IMPORTED_MODULE_2_app_solver__["a" /* Solver */](this.game);
            if (solver.solve()) {
                break;
            }
            this.reset();
        }
    }
    IndexComponent.prototype.go = function () {
        if (this.coords === 'reset') {
            this.reset();
            return;
        }
        if (!/^[a-z]{2}$/.test(this.coords)) {
            return;
        }
        try {
            this.game.openCell(__WEBPACK_IMPORTED_MODULE_1_app_constants__["a" /* alphabet */].indexOf(this.coords[0]), __WEBPACK_IMPORTED_MODULE_1_app_constants__["a" /* alphabet */].indexOf(this.coords[1]));
        }
        catch (error) {
            console.error(error);
            this.say(error.message);
            return;
        }
        this.coords = '';
    };
    IndexComponent.prototype.reset = function () {
        this.game.reset();
        this.coords = '';
    };
    IndexComponent.prototype.say = function (message) {
        var _this = this;
        this.warning = message;
        setTimeout(function () {
            _this.warning = '';
        }, 3000);
    };
    return IndexComponent;
}());
IndexComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-index',
        styles: [__webpack_require__("../../../../../src/app/index/index.component.css")],
        template: __webpack_require__("../../../../../src/app/index/index.component.html"),
    }),
    __metadata("design:paramtypes", [])
], IndexComponent);

//# sourceMappingURL=index.component.js.map

/***/ }),

/***/ "../../../../../src/app/neighbors.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Neighbors; });
var Neighbors = (function () {
    function Neighbors(game, row, column) {
        if (row === void 0) { row = -1; }
        if (column === void 0) { column = -1; }
        this.game = game;
        this.row = row;
        this.column = column;
    }
    Neighbors.prototype.of = function (row, column) {
        this.row = row;
        this.column = column;
        return this;
    };
    Neighbors.prototype.forEach = function (callback) {
        var i = 0;
        var j = 0;
        for (i = this.row - 1; i <= this.row + 1; i++) {
            for (j = this.column - 1; j <= this.column + 1; j++) {
                if (i < 0 || i >= this.game.rows) {
                    continue;
                }
                if (j < 0 || j >= this.game.columns) {
                    continue;
                }
                if (this.row === i && this.column === j) {
                    continue;
                }
                if (callback(i, j) === false) {
                    return;
                }
            }
        }
    };
    Neighbors.prototype.markClear = function () {
        var _this = this;
        this.forEach(function (row, column) {
            if (_this.isClear(row, column)) {
                _this.game.mark(row, column);
            }
        });
    };
    Neighbors.prototype.openFirstClear = function () {
        var _this = this;
        this.forEach(function (row, column) {
            if (!_this.isClear(row, column)) {
                return;
            }
            _this.game.openCell(row, column);
            return false;
        });
    };
    Object.defineProperty(Neighbors.prototype, "clear", {
        get: function () {
            var _this = this;
            var count = 0;
            this.forEach(function (row, column) {
                if (_this.isClear(row, column)) {
                    count++;
                }
            });
            return count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Neighbors.prototype, "marked", {
        get: function () {
            var _this = this;
            var count = 0;
            this.forEach(function (row, column) {
                if (_this.game.isMarked(row, column)) {
                    count++;
                }
            });
            return count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Neighbors.prototype, "nonOpen", {
        get: function () {
            var _this = this;
            var count = 0;
            this.forEach(function (row, column) {
                if (_this.isNonOpen(row, column)) {
                    count++;
                }
            });
            return count;
        },
        enumerable: true,
        configurable: true
    });
    Neighbors.prototype.isClear = function (row, column) {
        return !this.game.isOpen(row, column) && !this.game.isMarked(row, column);
    };
    Neighbors.prototype.isNonOpen = function (row, column) {
        return !this.game.isOpen(row, column);
    };
    return Neighbors;
}());

//# sourceMappingURL=neighbors.js.map

/***/ }),

/***/ "../../../../../src/app/solver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_neighbors__ = __webpack_require__("../../../../../src/app/neighbors.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Solver; });

var Solver = (function () {
    function Solver(game) {
        this.game = game;
    }
    Solver.prototype.solve = function () {
        var _this = this;
        this.game.openCell(Math.floor(Math.random() * this.game.rows), Math.floor(Math.random() * this.game.columns));
        var modified = true;
        var neighbors = new __WEBPACK_IMPORTED_MODULE_0_app_neighbors__["a" /* Neighbors */](this.game);
        while (!this.game.isWon && !this.game.isLost) {
            modified = false;
            (function () {
                for (var row = 0; row < _this.game.rows; row++) {
                    for (var column = 0; column < _this.game.columns; column++) {
                        if (_this.game.isMarked(row, column) ||
                            !_this.game.isOpen(row, column)) {
                            continue;
                        }
                        var value = _this.game.getValue(row, column);
                        if (value === 0) {
                            continue;
                        }
                        neighbors.of(row, column);
                        if (neighbors.clear === 0) {
                            continue;
                        }
                        if (neighbors.clear === value - neighbors.marked) {
                            neighbors.markClear();
                            modified = true;
                            return;
                        }
                        if (neighbors.marked === value) {
                            neighbors.openFirstClear();
                            modified = true;
                            return;
                        }
                    }
                }
            })();
            if (!this.game.isWon && !this.game.isLost && !modified) {
                (function () {
                    for (var row = 0; row < _this.game.rows; row++) {
                        for (var column = 0; column < _this.game.columns; column++) {
                            if (_this.game.isOpen(row, column) ||
                                _this.game.isMarked(row, column) ||
                                Math.random() > 0.5) {
                                continue;
                            }
                            _this.game.openCell(row, column);
                            return;
                        }
                    }
                })();
            }
        }
        return this.game.isWon;
    };
    return Solver;
}());

//# sourceMappingURL=solver.js.map

/***/ }),

/***/ "../../../../../src/domain/Cell.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cell; });
var Cell = (function () {
    function Cell(row, column) {
        this.row = row;
        this.column = column;
        this.isMarked = false;
        this.isOpen = false;
        this.value = 0;
    }
    return Cell;
}());

//# sourceMappingURL=Cell.js.map

/***/ }),

/***/ "../../../../../src/domain/Game.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_constants__ = __webpack_require__("../../../../../src/app/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_neighbors__ = __webpack_require__("../../../../../src/app/neighbors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_domain_Cell__ = __webpack_require__("../../../../../src/domain/Cell.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Game; });



var Game = (function () {
    function Game() {
        this.cells = [];
        this.columns = 10;
        this.didLose = false;
        this.isStarted = false;
        this.didWin = false;
        this.mineCount = 20;
        this.rows = 10;
        var i = 0;
        var j = 0;
        for (i = 0; i <= this.rows - 1; i++) {
            for (j = 0; j <= this.columns - 1; j++) {
                this.cells.push(new __WEBPACK_IMPORTED_MODULE_2_domain_Cell__["a" /* Cell */](i, j));
            }
        }
        this.reset();
    }
    Object.defineProperty(Game.prototype, "isLost", {
        get: function () {
            return this.didLose;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "isWon", {
        get: function () {
            return this.didWin;
        },
        enumerable: true,
        configurable: true
    });
    Game.prototype.reset = function () {
        this.isStarted = false;
        this.didLose = false;
        this.didWin = false;
        for (var _i = 0, _a = this.cells; _i < _a.length; _i++) {
            var cell = _a[_i];
            cell.value = 0;
            cell.isOpen = false;
            cell.isMarked = false;
        }
    };
    Game.prototype.openCell = function (row, column) {
        if (row < 0 || row >= this.rows || column < 0 || column >= this.columns) {
            throw new Error('Coordinate is out of range.');
        }
        if (this.didLose || this.didWin) {
            throw new Error('Game is over.');
        }
        var cell = this.getCell(row, column);
        if (cell.isOpen) {
            throw new Error('Cell is open.');
        }
        if (cell.isMarked) {
            throw new Error('Cell is marked as a mine.');
        }
        if (!this.isStarted) {
            this.placeMines(cell);
            this.isStarted = true;
        }
        if (cell.value === -1) {
            this.didLose = true;
            this.openField();
            return;
        }
        cell.isOpen = true;
        if (cell.value === 0) {
            this.openNeighbors(row, column);
        }
        if (this.allNumbersOpen()) {
            this.didWin = true;
            this.openField();
        }
    };
    Game.prototype.toString = function () {
        var i = 0;
        var j = 0;
        var cell = null;
        var s = [];
        this.columnLegend(s);
        s.push('\n');
        for (i = 0; i <= this.rows - 1; i++) {
            s.push('\n');
            s.push(this.pad(__WEBPACK_IMPORTED_MODULE_0_app_constants__["a" /* alphabet */][i]));
            s.push(' ');
            for (j = 0; j <= this.columns - 1; j++) {
                cell = this.cells[this.toIndex(i, j)];
                if (cell.isMarked) {
                    s.push(this.pad('!'));
                }
                else if (!cell.isOpen) {
                    s.push(this.pad(''));
                }
                else if (cell.value === -1) {
                    s.push(this.pad('*'));
                }
                else if (cell.value === 0) {
                    s.push(this.pad('-'));
                }
                else {
                    s.push(this.pad(cell.value.toString()));
                }
            }
            s.push(' ');
            s.push(this.pad(__WEBPACK_IMPORTED_MODULE_0_app_constants__["a" /* alphabet */][i]));
            s.push('  ');
        }
        s.push('\n\n');
        this.columnLegend(s);
        return s.join('');
    };
    Game.prototype.isMarked = function (row, column) {
        var cell = this.getCell(row, column);
        return cell.isMarked;
    };
    Game.prototype.isOpen = function (row, column) {
        var cell = this.getCell(row, column);
        return cell.isOpen;
    };
    Game.prototype.getValue = function (row, column) {
        var cell = this.getCell(row, column);
        if (!cell.isOpen) {
            throw new Error('Cell is not open.');
        }
        return cell.value;
    };
    Game.prototype.mark = function (row, column) {
        var cell = this.getCell(row, column);
        cell.isMarked = true;
    };
    Game.prototype.pad = function (input) {
        return ('   ' + input).substring(input.length);
    };
    Game.prototype.columnLegend = function (s) {
        s.push(this.pad(''));
        s.push(' ');
        for (var i = 0; i <= this.columns - 1; i++) {
            s.push(this.pad(__WEBPACK_IMPORTED_MODULE_0_app_constants__["a" /* alphabet */][i]));
        }
        s.push(' ');
        s.push(this.pad(''));
        s.push('  ');
    };
    Game.prototype.openField = function () {
        for (var _i = 0, _a = this.cells; _i < _a.length; _i++) {
            var cell = _a[_i];
            if (cell.value === -1) {
                cell.isMarked = true;
            }
            else {
                cell.isOpen = true;
            }
        }
    };
    Game.prototype.allNumbersOpen = function () {
        var result = true;
        for (var _i = 0, _a = this.cells; _i < _a.length; _i++) {
            var cell = _a[_i];
            if (!cell.isOpen && cell.value > 0) {
                result = false;
                break;
            }
        }
        return result;
    };
    Game.prototype.openNeighbors = function (row, column) {
        var _this = this;
        new __WEBPACK_IMPORTED_MODULE_1_app_neighbors__["a" /* Neighbors */](this, row, column).forEach(function (i, j) {
            var cell = _this.cells[_this.toIndex(i, j)];
            if (cell.isOpen) {
                return;
            }
            if (cell.value >= 0) {
                cell.isOpen = true;
            }
            if (cell.value === 0) {
                _this.openNeighbors(cell.row, cell.column);
            }
        });
    };
    Game.prototype.placeMines = function (firstOpen) {
        var _this = this;
        var i = 0;
        var j = 0;
        for (i = 0; i < this.mineCount; i++) {
            this.cells[i].value = -1;
        }
        this.shuffle();
        var index = this.toIndex(firstOpen.row, firstOpen.column);
        var temp = 0;
        if (firstOpen.value === -1) {
            for (var _i = 0, _a = this.cells; _i < _a.length; _i++) {
                var cell = _a[_i];
                if (cell.value === -1 || this.toIndex(cell.row, cell.column) === index) {
                    continue;
                }
                temp = firstOpen.value;
                firstOpen.value = cell.value;
                cell.value = temp;
            }
        }
        var count = 0;
        var neighbors = new __WEBPACK_IMPORTED_MODULE_1_app_neighbors__["a" /* Neighbors */](this);
        for (i = 0; i <= this.rows - 1; i++) {
            for (j = 0; j <= this.columns - 1; j++) {
                if (count === this.mineCount) {
                    return;
                }
                if (this.cells[this.toIndex(i, j)].value !== -1) {
                    continue;
                }
                neighbors.of(i, j).forEach(function (row, column) {
                    var cell = _this.getCell(row, column);
                    if (cell.value >= 0) {
                        cell.value++;
                    }
                });
                count++;
            }
        }
    };
    Game.prototype.toIndex = function (row, column) {
        return row * this.columns + column;
    };
    Game.prototype.shuffle = function () {
        var k = 0;
        var temp = 0;
        var n = this.cells.length;
        while (n > 1) {
            k = Math.floor(Math.random() * n--);
            temp = this.cells[n].value;
            this.cells[n].value = this.cells[k].value;
            this.cells[k].value = temp;
        }
    };
    Game.prototype.getCell = function (row, column) {
        return this.cells[this.toIndex(row, column)];
    };
    return Game;
}());

//# sourceMappingURL=Game.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modernizr__ = __webpack_require__("../../../../../src/modernizr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modernizr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__modernizr__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/modernizr.js":
/***/ (function(module, exports) {

/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssanimations-csscolumns-customelements-flexbox-history-picture-pointerevents-postmessage-sizes-srcset-webgl-websockets-webworkers-addtest-domprefixes-hasevent-mq-prefixedcssvalue-prefixes-setclasses-testallprops-testprop-teststyles !*/
!function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,i,s,a;for(var l in C)if(C.hasOwnProperty(l)){if(e=[],t=C[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)s=e[i],a=s.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),w.push((o?"":"no-")+a.join("-"))}}function i(e){var t=S.className,n=Modernizr._config.classPrefix||"";if(x&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),x?S.className.baseVal=t:S.className=t)}function s(e,t){if("object"==typeof e)for(var n in e)P(e,n)&&s(n,e[n]);else{e=e.toLowerCase();var r=e.split("."),o=Modernizr[r[0]];if(2==r.length&&(o=o[r[1]]),"undefined"!=typeof o)return Modernizr;t="function"==typeof t?t():t,1==r.length?Modernizr[r[0]]=t:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=t),i([(t&&0!=t?"":"no-")+r.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function a(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):x?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function l(){var e=t.body;return e||(e=a(x?"svg":"body"),e.fake=!0),e}function u(e,n,r,o){var i,s,u,f,d="modernizr",c=a("div"),p=l();if(parseInt(r,10))for(;r--;)u=a("div"),u.id=o?o[r]:d+(r+1),c.appendChild(u);return i=a("style"),i.type="text/css",i.id="s"+d,(p.fake?p:c).appendChild(i),p.appendChild(c),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),c.id=d,p.fake&&(p.style.background="",p.style.overflow="hidden",f=S.style.overflow,S.style.overflow="hidden",S.appendChild(p)),s=n(c,e),p.fake?(p.parentNode.removeChild(p),S.style.overflow=f,S.offsetHeight):c.parentNode.removeChild(c),!!s}function f(e,t){return!!~(""+e).indexOf(t)}function d(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(t,n,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,t,n);var i=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(i){var s=i.error?"error":"log";i[s].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!n&&t.currentStyle&&t.currentStyle[r];return o}function p(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(d(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+d(t[o])+":"+r+")");return i=i.join(" or "),u("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==c(e,null,"position")})}return n}function m(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function h(e,t,o,i){function s(){u&&(delete N.style,delete N.modElem)}if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var l=p(e,o);if(!r(l,"undefined"))return l}for(var u,d,c,h,v,A=["modernizr","tspan","samp"];!N.style&&A.length;)u=!0,N.modElem=a(A.shift()),N.style=N.modElem.style;for(c=e.length,d=0;c>d;d++)if(h=e[d],v=N.style[h],f(h,"-")&&(h=m(h)),N.style[h]!==n){if(i||r(o,"undefined"))return s(),"pfx"==t?h:!0;try{N.style[h]=o}catch(g){}if(N.style[h]!=v)return s(),"pfx"==t?h:!0}return s(),!1}function v(e,t){return function(){return e.apply(t,arguments)}}function A(e,t,n){var o;for(var i in e)if(e[i]in t)return n===!1?e[i]:(o=t[e[i]],r(o,"function")?v(o,n||t):o);return!1}function g(e,t,n,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+O.join(s+" ")+s).split(" ");return r(t,"string")||r(t,"undefined")?h(a,t,o,i):(a=(e+" "+T.join(s+" ")+s).split(" "),A(a,t,n))}function y(e,t,r){return g(e,n,n,t,r)}var C=[],b={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){C.push({name:e,fn:t,options:n})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=b,Modernizr=new Modernizr;var w=[],S=t.documentElement,x="svg"===S.nodeName.toLowerCase(),_="Moz O ms Webkit",T=b._config.usePrefixes?_.toLowerCase().split(" "):[];b._domPrefixes=T;var E=b._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];b._prefixes=E;var P;!function(){var e={}.hasOwnProperty;P=r(e,"undefined")||r(e.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),b._l={},b.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},b._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,r;for(e=0;e<n.length;e++)(r=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){b.addTest=s});var k=function(){function e(e,t){var o;return e?(t&&"string"!=typeof t||(t=a(t||"div")),e="on"+e,o=e in t,!o&&r&&(t.setAttribute||(t=a("div")),t.setAttribute(e,""),o="function"==typeof t[e],t[e]!==n&&(t[e]=n),t.removeAttribute(e)),o):!1}var r=!("onblur"in t.documentElement);return e}();b.hasEvent=k;var z=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return u("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();b.mq=z;var B=function(e,t){var n=!1,r=a("div"),o=r.style;if(e in o){var i=T.length;for(o[e]=t,n=o[e];i--&&!n;)o[e]="-"+T[i]+"-"+t,n=o[e]}return""===n&&(n=!1),n};b.prefixedCSSValue=B;var O=b._config.usePrefixes?_.split(" "):[];b._cssomPrefixes=O;var L={elem:a("modernizr")};Modernizr._q.push(function(){delete L.elem});var N={style:L.elem.style};Modernizr._q.unshift(function(){delete N.style}),b.testAllProps=g,b.testAllProps=y;b.testProp=function(e,t,r){return h([e],n,t,r)},b.testStyles=u;Modernizr.addTest("customelements","customElements"in e),Modernizr.addTest("history",function(){var t=navigator.userAgent;return-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone")||"file:"===location.protocol?e.history&&"pushState"in e.history:!1}),Modernizr.addTest("pointerevents",function(){var e=!1,t=T.length;for(e=Modernizr.hasEvent("pointerdown");t--&&!e;)k(T[t]+"pointerdown")&&(e=!0);return e}),Modernizr.addTest("postmessage","postMessage"in e),Modernizr.addTest("webgl",function(){var t=a("canvas"),n="probablySupportsContext"in t?"probablySupportsContext":"supportsContext";return n in t?t[n]("webgl")||t[n]("experimental-webgl"):"WebGLRenderingContext"in e});var R=!1;try{R="WebSocket"in e&&2===e.WebSocket.CLOSING}catch(j){}Modernizr.addTest("websockets",R),Modernizr.addTest("cssanimations",y("animationName","a",!0)),function(){Modernizr.addTest("csscolumns",function(){var e=!1,t=y("columnCount");try{e=!!t,e&&(e=new Boolean(e))}catch(n){}return e});for(var e,t,n=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],r=0;r<n.length;r++)e=n[r].toLowerCase(),t=y("column"+n[r]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(t=t||y(n[r])),Modernizr.addTest("csscolumns."+e,t)}(),Modernizr.addTest("flexbox",y("flexBasis","1px",!0)),Modernizr.addTest("picture","HTMLPictureElement"in e),Modernizr.addAsyncTest(function(){var e,t,n,r=a("img"),o="sizes"in r;!o&&"srcset"in r?(t="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",n=function(){s("sizes",2==r.width)},r.onload=n,r.onerror=n,r.setAttribute("sizes","9px"),r.srcset=e+" 1w,"+t+" 8w",r.src=e):s("sizes",o)}),Modernizr.addTest("srcset","srcset"in a("img")),Modernizr.addTest("webworkers","Worker"in e),o(),i(w),delete b.addTest,delete b.addAsyncTest;for(var M=0;M<Modernizr._q.length;M++)Modernizr._q[M]();e.Modernizr=Modernizr}(window,document);

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map