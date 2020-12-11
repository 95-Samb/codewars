exports.sausageUnpacker = (input) => {

  if (input.constructor !== Array) {
    return ""
  }

  var sausagBox = input.join().slice(1,-1)

  var uniqueBoxItems = [...new Set(sausagBox.split(""))]

  if (uniqueBoxItems.length != 1) {
    return ""
  }


  return sausagBox;

}
