const countSmileys = (input) => {

  var smileyCount = 0;

  input.forEach(e => {

    incorrectChars = e.replace(/[:;\)D-]/g,"");

    if (incorrectChars.length == 0 || incorrectChars == "~") {smileyCount += 1};

  })

  return smileyCount;

}

exports.countSmileys = countSmileys;
