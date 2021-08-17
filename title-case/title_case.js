const titleCase = (input) => {

  if (input == "") {return "";}

  output = input[0].toUpperCase() + input.slice(1)

  return output

}

exports.titleCase = titleCase
