
const sausageUnpacker = (input) => {

  if (input.constructor !== Array) {
    return ""
  }

  output = []

  for (var i = 0; i <= input.length - 1; i++) {

    if (input[i][0] != "[" || input[i][input[i].length - 1] != "]") {
    }
    else {

    var sausagBox = input[i].slice(1,-1)

    var uniqueBoxItems = [...new Set(sausagBox.split(""))]

    if (uniqueBoxItems.length != 1) {

    }
    else {output.push(sausagBox)}
    }

  }

  return output;

}

const truckUnpacker = (input) => {

  output = ""

  for (var i = 0; i <= input.length - 1; i++) {

    if (input[i] && i % 5 !== 4) {output += sausageUnpacker(input[i])}

  }

  return output.split("").join(" ");

}


exports.sausageUnpacker = sausageUnpacker;
exports.truckUnpacker = truckUnpacker;
