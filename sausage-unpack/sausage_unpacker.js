exports.sausageUnpacker = (input) => {

  if (input.constructor !== Array) {
    return ""
  }

  output = ""

  for (var i = 0; i <= input[0].length - 1; i++) {
    if (input[0][i][0] != "[" || input[0][i][input[0][i].length - 1] != "]") {
      output += ""
    }
    else {

    var sausagBox = input[0][i].slice(1,-1)

    var uniqueBoxItems = [...new Set(sausagBox.split(""))]

    if (uniqueBoxItems.length != 1) {
      output += ""
    }
    else {output += sausagBox}
    }


  }

  return output;

}
