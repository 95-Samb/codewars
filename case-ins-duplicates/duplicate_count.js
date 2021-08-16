const duplicateCount = (input) => {

  sortedInput = input.split("").sort().join("")

  duplicates = 0

  while (sortedInput.length != 0) {

    first = sortedInput.indexOf(sortedInput[0])

    last = sortedInput.lastIndexOf(sortedInput[0])

    if(first != last ) { duplicates += 1}

    sortedInput = sortedInput.substr(last + 1)
  }

  return duplicates

}

exports.duplicateCount = duplicateCount
