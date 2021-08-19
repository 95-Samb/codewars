const titleCase = (title,minorWords) => {

  if (title == "") {return "";}

  output = title.split(" ").map((word) => {

    if(minorWords === undefined){
      return word[0].toUpperCase() + word.toLowerCase().slice(1)
    }

    else if(minorWords.toLowerCase().split(" ").indexOf(word.toLowerCase()) == -1){

      return word[0].toUpperCase() + word.toLowerCase().slice(1)

    }

    else {return word.toLowerCase()}

    }).join(" ")

  return output[0].toUpperCase() + output.slice(1)

}

exports.titleCase = titleCase
