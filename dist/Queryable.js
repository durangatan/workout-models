"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Queryable = /** @class */ (function () {
    function Queryable() {
    }
    Object.defineProperty(Queryable.prototype, "columns", {
        get: function () {
            var _this = this;
            return Object.keys(this)
                .filter(function (key) {
                var value = _this[key];
                if (value === undefined || value === null) {
                    return false;
                }
                if (typeof key === 'string' && key[0] === '_') {
                    return false;
                }
                return typeof _this[key] !== 'function';
            })
                .map(function (key) { return String(key); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Queryable.prototype, "columnValues", {
        get: function () {
            var _this = this;
            return this.columns.map(function (column) { return _this[column]; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Queryable.prototype, "ownKeys", {
        get: function () {
            var _this = this;
            return Object.keys(this).filter(function (key) {
                var value = _this[key];
                if (value === undefined || value === null) {
                    return false;
                }
                if (typeof key === 'string' && key[0] === '_') {
                    return false;
                }
                return typeof _this[key] !== 'function';
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Queryable.prototype, "upsertKeys", {
        get: function () {
            return this.ownKeys.filter(function (key) { return key !== 'id'; });
        },
        enumerable: true,
        configurable: true
    });
    return Queryable;
}());
exports.default = Queryable;
