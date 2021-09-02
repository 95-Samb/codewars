class RomanNumerals {
  
  toRoman(integer) {

    var output = "I".repeat(integer)

    output = output.replace("IIIIIIIII","IX")
    .replace("I".repeat(5),"V").replace("I".repeat(4),"IV")

    return output

  }

  fromRoman(input) {

    let associativeLetters = new Map([
      ["M",1000],["D",500],["C",100],["L",50],
      ["X",10],["V",5],["I",1]
      ]);

    var output = 0

    for (var i = 0; i < input.length; i++) {

      if(["IV"].some((x) => x == input.substr(i,2))) {

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
