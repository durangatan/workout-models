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
var Exercise = /** @class */ (function (_super) {
    __extends(Exercise, _super);
    function Exercise(args) {
        var _this = _super.call(this, args) || this;
        _this.id = args.id ? Exercise.createId(args.id) : null;
        _this.machineId = args.machineId;
        _this.name = args.name;
        _this.seatSetting = args.seatSetting;
        _this.rangeSetting = args.rangeSetting;
        _this.notes = args.notes;
        return _this;
    }
    Exercise.createId = function (id) {
        return id;
    };
    return Exercise;
}(_1.Queryable));
exports.default = Exercise;
