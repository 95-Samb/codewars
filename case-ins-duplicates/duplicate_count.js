const duplicateCount = (input) => {
  
  if(input.length <= 1) {return 0;}

  if(input[0] != input[1]) {return 0;}

  return 1

}

exports.duplicateCount = duplicateCount
