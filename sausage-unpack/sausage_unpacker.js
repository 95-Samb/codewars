
const sausageUnpacker = (input) => {

  if (input.constructor !== Array) {
    return ""
  }

  output = []

  for (var i = 0; i <= input.length - 1; i++) {

    var sausagBox = input[i].slice(1,-1)

    var uniqueBoxItems = [...new Set(sausagBox.split(""))]

    var passConditions = input[i][0] == "[" && sausagBox.length == 4 &&
      input[i][input[i].length - 1] == "]" && uniqueBoxItems.length == 1

    if (passConditions) {output.push(sausagBox) }

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
