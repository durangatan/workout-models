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
var Workout = /** @class */ (function (_super) {
    __extends(Workout, _super);
    function Workout(args) {
        var _this = _super.call(this, args) || this;
        _this.id = args.id ? Workout.createId(args.id) : undefined;
        _this.startTime = args.startTime;
        _this.endTime = args.endTime;
        _this._completedExerciseSets = args.completedExerciseSets;
        _this._routines = args.routines;
        return _this;
    }
    Workout.createId = function (id) {
        return id;
    };
    Object.defineProperty(Workout.prototype, "completedExerciseSets", {
        get: function () {
            return this._completedExerciseSets;
        },
        set: function (completedExerciseSets) {
            this._completedExerciseSets = completedExerciseSets;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Workout.prototype, "routines", {
        get: function () {
            return this._routines;
        },
        set: function (routines) {
            this._routines = routines;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Workout.prototype, "totalTime", {
        get: function () {
            return this.endTime - this.startTime;
        },
        enumerable: true,
        configurable: true
    });
    Workout.prototype.toJSON = function () {
        return {
            id: this.id,
            completedExerciseSets: this._completedExerciseSets || [],
            routines: this._routines || [],
            startTime: this.startTime,
            endTime: this.endTime
        };
    };
    return Workout;
}(_1.Queryable));
exports.default = Workout;
