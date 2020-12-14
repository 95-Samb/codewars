exports.sausageUnpacker = (input) => {

  if (input.constructor !== Array) {
    return ""
  }

  if (input[0][0][0] != "[" || input[0][0][input[0][0].length - 1] != "]") {
    return ""
  }

  var sausagBox = input.join().slice(1,-1)

  var uniqueBoxItems = [...new Set(sausagBox.split(""))]

  if (uniqueBoxItems.length != 1) {
    return ""
  }


  return sausagBox;

}
