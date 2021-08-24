class RomanNumerals {
  
  toRoman(integer) {

    var output = ""

    while(integer != 0) {

      if(integer < 5) {
        output += "I"
        integer -= 1}

      if(integer < 10 && integer >= 5) {
        output += "V"
        integer -= 5}

      if(integer >= 10){
        output += "X"
        integer -= 10}
    }

    return output

  }
}

let helper = new RomanNumerals;
exports.toRoman = helper.toRoman
