"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Shuffles an array, with types!
 *
 * @param input the array to shuffle
 */
exports.shuffle = function (input) {
    var cIdx = input.length;
    var tempVal, rIdx;
    while (0 !== cIdx) {
        //Get a random index and decrement current
        rIdx = Math.floor(Math.random() * cIdx);
        cIdx -= 1;
        // Swap out current with the random index
        tempVal = input[cIdx];
        input[cIdx] = input[rIdx];
        input[rIdx] = tempVal;
    }
    return input;
};
//# sourceMappingURL=util.js.map