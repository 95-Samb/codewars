const countSmileys = (input) => {

  var smileyCount = 0;

  input.forEach(e => {

    isSmiley = e.match(/;|:/) != null && e.match(/\)|D/) != null

    incorrectChars = e.replace(/[:;\)D-]/g,"");

    if (isSmiley && incorrectChars.length == 0 || incorrectChars.match("~") != null ){
      smileyCount += 1
    };

  })

  return smileyCount;

}

exports.countSmileys = countSmileys;
