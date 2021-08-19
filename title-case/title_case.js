const titleCase = (title,minorWords) => {

  if (title == "") {return "";}

  output = title.split(" ").map((word) => {

    if(minorWords === undefined){
      return word[0].toUpperCase() + word.slice(1)
    }

    else if(title.indexOf(word) == 0 || minorWords.includes(word) == false){

      return word[0].toUpperCase() + word.slice(1)

    }

    else {return word}

    }).join(" ")

  return output

}

exports.titleCase = titleCase
