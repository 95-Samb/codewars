exports.sausageUnpacker = (input) => {

  if (input.constructor !== Array) {
    return ""
  }

  output = ""

  if (input[0][0][0] != "[" || input[0][0][input[0][0].length - 1] != "]") {
    output += ""
  }
  else {

  var sausagBox1 = input[0][0].slice(1,-1)

  var uniqueBoxItems1 = [...new Set(sausagBox1.split(""))]

  if (uniqueBoxItems1.length != 1) {
    output += ""
  }
  else {output += sausagBox1}
  }

  if (input[0][1]) {

    if (input[0][1][0] != "[" || input[0][1][input[0][1].length - 1] != "]") {
      output += ""
    }
    else {

    var sausagBox2 = input[0][1].slice(1,-1)

    var uniqueBoxItems2 = [...new Set(sausagBox2.split(""))]

    if (uniqueBoxItems2.length != 1) {
      output += ""
    }
    else {output += sausagBox2}
    }
  }

  return output;

}
