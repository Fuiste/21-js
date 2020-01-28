/**
 * Shuffles an array, with types!
 *
 * @param input the array to shuffle
 */
export const shuffle = <T>(input: T[]): T[] => {
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
