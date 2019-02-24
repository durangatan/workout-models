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
var RoutineSet = /** @class */ (function (_super) {
    __extends(RoutineSet, _super);
    function RoutineSet(args) {
        var _this = _super.call(this, args) || this;
        _this.id = args.id ? RoutineSet.createId(args.id) : null;
        _this.routineId = args.routineId;
        _this.exerciseSetId = args.exerciseSetId;
        _this.ordering = args.ordering;
        _this._exerciseSet = args.exerciseSet;
        return _this;
    }
    Object.defineProperty(RoutineSet.prototype, "exerciseSet", {
        get: function () {
            return this._exerciseSet;
        },
        set: function (exerciseSet) {
            this._exerciseSet = exerciseSet;
        },
        enumerable: true,
        configurable: true
    });
    RoutineSet.createId = function (id) {
        return id;
    };
    return RoutineSet;
}(_1.Queryable));
exports.default = RoutineSet;
