const countSmileys = (input) => {
  if (input.length > 0) {

    incorrectChars = input[0].replace(/[:;\)D-]/g,"");

    if (incorrectChars.length == 0 || incorrectChars == "~") {return 1};

  }
  return 0;
}

exports.countSmileys = countSmileys;
