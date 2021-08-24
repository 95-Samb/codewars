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

      if(integer < 50 && integer >= 10){
        output += "X"
        integer -= 10}

      if(integer < 100 && integer >= 50){
        output += "L"
        integer -= 50}

      if(integer < 500 && integer >= 100){
        output += "C"
        integer -= 100}

      if(integer < 1000 && integer >= 500){
        output += "D"
        integer -= 500}

      if(integer >= 1000){
        output += "M"
        integer -= 1000}
    }

    return output

  }
}

let helper = new RomanNumerals;
exports.toRoman = helper.toRoman
