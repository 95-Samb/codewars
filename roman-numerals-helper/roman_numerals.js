class RomanNumerals {
  
  toRoman(integer) {

    var output = ""

    let associative_letters = [
      [1000,"M"],[500,"D"],[100,"C"],[50,"L"],
      [10,"X"],[5,"V"],[1,"I"]
      ];

    var i = 0

    while (i < associative_letters.length) {

      if (integer >= associative_letters[i][0]) {
        output += associative_letters[i][1]
        integer -= associative_letters[i][0]
      }

      else {i++}
    }

    output = output.replace("IIII","IV")
    output = output.replace("XXXX","XL")
    output = output.replace("CCCC","CD")


    return output

  }
}

let helper = new RomanNumerals;
exports.toRoman = helper.toRoman
