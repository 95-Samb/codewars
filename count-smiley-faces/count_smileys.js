const countSmileys = (input) => {
  if (input[0]) {

    if (input[0].includes(':') || input[0].includes(';')){
      if (input[0].includes(')') || input[0].includes('D')) {
        if (input[0].length > 2) {
          if (input[0].includes('-') || input[0].includes('~') && input[0].length == 3) {
            return 1;
          }
        }
        else {return 1;}
      }
    }
  }
  return 0;
}

exports.countSmileys = countSmileys;
