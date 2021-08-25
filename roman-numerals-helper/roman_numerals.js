class RomanNumerals {
  
  toRoman(integer) {

    var output = ""

    let associativeLetters = [
      ["M",1000],["D",500],["C",100],["L",50],
      ["X",10],["V",5],["I",1]
      ];

    var i = 0

    while (i < associativeLetters.length) {

      if (integer >= associativeLetters[i][1]) {
        output += associativeLetters[i][0]
        integer -= associativeLetters[i][1]
      }

      else {i++}
    }

    output = output.replace("IIII","IV")
    output = output.replace("XXXX","XL")
    output = output.replace("CCCC","CD")


    return output

  }

  fromRoman(input) {

    let associativeLetters = new Map([
      ["M",1000],["D",500],["C",100],["L",50],
      ["X",10],["V",5],["I",1]
      ]);

    return associativeLetters.get(input)
  }
}

let helper = new RomanNumerals;
exports.toRoman = helper.toRoman
exports.fromRoman = helper.fromRoman
