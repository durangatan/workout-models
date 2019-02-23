"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
var Routine = /** @class */ (function (_super) {
    __extends(Routine, _super);
    function Routine(args) {
        var _this = _super.call(this) || this;
        _this.id = args.id ? Routine.createId(args.id) : null;
        _this.name = args.name;
        _this._sets = args.sets;
        return _this;
    }
    Routine.createId = function (id) {
        return id;
    };
    Object.defineProperty(Routine.prototype, "sets", {
        get: function () {
            return this._sets;
        },
        set: function (sets) {
            this._sets = sets;
        },
        enumerable: true,
        configurable: true
    });
    Routine.prototype.toJSON = function () {
        return {
            id: this.id,
            name: this.name,
            sets: this.sets
        };
    };
    return Routine;
}(_1.Queryable));
exports.default = Routine;
