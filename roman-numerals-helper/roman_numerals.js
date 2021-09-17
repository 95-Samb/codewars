class RomanNumerals {
  
  toRoman(integer) {

    var output = ""

    var decimalLetters = ["IVX","XLC","CDM","M"]

    var j = 0

    for (var i = integer.toString().length - 1; i >= 0; i--) {

      output = decimalLetters[j][0].repeat(parseInt(integer.toString()[i])) + output
      output = output.replace(decimalLetters[j][0].repeat(9),decimalLetters[j][0] + decimalLetters[j][2])
      .replace(decimalLetters[j][0].repeat(5),decimalLetters[j][1])
      .replace(decimalLetters[j][0].repeat(4),decimalLetters[j][0] + decimalLetters[j][1])

      j += 1

    }

    return output

  }

  fromRoman(input) {

    let associativeLetters = new Map([
      ["M",1000],["D",500],["C",100],["L",50],
      ["X",10],["V",5],["I",1]
      ]);

    var output = 0

    for (var i = 0; i < input.length; i++) {

      if(["IV","IX","XL","XC","CD","CM"].some((x) => x == input.substr(i,2))) {

        output -= associativeLetters.get(input[i])
      }

      else {output += associativeLetters.get(input[i])}

    }

    return output

  }
}

let helper = new RomanNumerals;
exports.toRoman = helper.toRoman
exports.fromRoman = helper.fromRoman
