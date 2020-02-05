"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
//FizzBuzz.test.ts
/// <reference types="jest" />
var card_1 = require("../card");
var baseCard = { name: "2", suit: "Clubs" };
describe("cardValue", function () {
    it("calculates a value", function () {
        expect(card_1.cardValue(baseCard)).toBeDefined();
    });
    it("calculates the correct value for integer named cards", function () {
        expect(card_1.cardValue(__assign(__assign({}, baseCard), { name: "4" }))).toEqual(4);
    });
    it("calculates the correct value for character named cards", function () {
        expect(card_1.cardValue(__assign(__assign({}, baseCard), { name: "K" }))).toEqual(10);
    });
    it("calculates the correct value for aces", function () {
        expect(card_1.cardValue(__assign(__assign({}, baseCard), { name: "A" }))).toEqual(11);
    });
});
//# sourceMappingURL=scoring.test.js.map