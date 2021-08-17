const titleCase = (input) => {

  if (input == "") {return "";}

  output = input.split(" ").map(word => word[0].toUpperCase() + word.slice(1))
  .join(" ")

  //output = input[0].toUpperCase() + input.slice(1)

  return output

}

exports.titleCase = titleCase
