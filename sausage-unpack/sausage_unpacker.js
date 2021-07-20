
const sausageUnpacker = (input) => {

  if (input.constructor !== Array) {
    return ""
  }

  output = ""

  for (var i = 0; i <= input.length - 1; i++) {
    if (input[i][0] != "[" || input[i][input[i].length - 1] != "]") {
      output += ""
    }
    else {

    var sausagBox = input[i].slice(1,-1)

    var uniqueBoxItems = [...new Set(sausagBox.split(""))]

    if (uniqueBoxItems.length != 1) {
      output += ""
    }
    else {output += sausagBox}
    }


  }

  return output;

}

exports.truckUnpacker = (input) => {

  return sausageUnpacker(input[0])


  }


exports.sausageUnpacker = sausageUnpacker;
