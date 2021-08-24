class RomanNumerals {
  
  toRoman(integer) {
    if(integer < 5) {return "I".repeat(integer)}

    if(integer < 10) {return "V" + "I".repeat(integer - 5)}

    return "X" + "I".repeat(integer - 10)


  }
}

let helper = new RomanNumerals;
exports.toRoman = helper.toRoman
