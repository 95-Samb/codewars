const countSmileys = (input) => {

  var smileyCount = 0;

  input.forEach(e => {

    incorrectChars = e.replace(/[:;]/,"").replace(/[\)D]/,"").replace(/[-~]/,"");

    if (incorrectChars.length == 0 ){
      smileyCount += 1
    };

  })

  return smileyCount;

}

exports.countSmileys = countSmileys;
