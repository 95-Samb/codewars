const titleCase = (title,minorWords) => {

  if (title == "") {return "";}

  output = title.split(" ").map((word) => {

    captilisedLetter = word[0].toUpperCase()

    lowerCasedWord = word.toLowerCase()

    if(minorWords === undefined ||minorWords.toLowerCase().split(" ").indexOf(lowerCasedWord) == -1){

      return captilisedLetter + lowerCasedWord.slice(1)

    }

    else {return lowerCasedWord}

    }).join(" ")

  return output[0].toUpperCase() + output.slice(1)

}

exports.titleCase = titleCase
