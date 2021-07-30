
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

    // else if (sausagBox.length != 4) {}
    else {output.push(sausagBox)}
    }

  }

  return output;

}

const truckUnpacker = (input) => {

  output = []

  for (var i = 0; i <= input.length - 1; i++) {

    output = output.concat(sausageUnpacker(input[i]))

  }

  for (var i = 4; i <= output.length - 1; i += 5) {

    output.splice(i,1)

  }

  return output.join("").split("").join(" ");

}


exports.sausageUnpacker = sausageUnpacker;
exports.truckUnpacker = truckUnpacker;
