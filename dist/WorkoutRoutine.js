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
var WorkoutRoutine = /** @class */ (function (_super) {
    __extends(WorkoutRoutine, _super);
    function WorkoutRoutine(args) {
        var _this = _super.call(this, args) || this;
        _this.id = args.id ? WorkoutRoutine.createId(args.id) : null;
        _this.workoutId = args.workoutId;
        _this.routineId = args.routineId;
        return _this;
    }
    WorkoutRoutine.createId = function (id) {
        return id;
    };
    return WorkoutRoutine;
}(_1.Queryable));
exports.default = WorkoutRoutine;
