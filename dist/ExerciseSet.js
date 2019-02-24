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
var _1 = require(".");
var ExerciseSet = /** @class */ (function (_super) {
    __extends(ExerciseSet, _super);
    function ExerciseSet(args) {
        var _this = _super.call(this, args) || this;
        _this.id = args.id ? ExerciseSet.createId(args.id) : undefined;
        _this.exerciseId = args.exerciseId;
        _this.weight = args.weight;
        _this.repetitions = args.repetitions;
        _this.notes = args.notes;
        _this.type = args.type || 'Default';
        _this._exercise = args.exercise;
        _this._completed = args.completed || false;
        return _this;
    }
    ExerciseSet.createId = function (id) {
        return id;
    };
    Object.defineProperty(ExerciseSet.prototype, "exercise", {
        get: function () {
            return this._exercise;
        },
        set: function (exercise) {
            this._exercise = exercise;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExerciseSet.prototype, "completed", {
        get: function () {
            return this._completed;
        },
        set: function (completed) {
            this._completed = completed;
        },
        enumerable: true,
        configurable: true
    });
    ExerciseSet.prototype.toJSON = function () {
        return {
            id: this.id,
            exerciseId: this.exerciseId,
            weight: this.weight,
            repetitions: this.repetitions,
            notes: this.notes,
            type: this.type,
            exercise: this.exercise
        };
    };
    return ExerciseSet;
}(_1.Queryable));
exports.default = ExerciseSet;
