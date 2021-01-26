'use strict';

function getResult(a,b,c) {
  let D = (Math.pow(b,2) - 4 * a * c);
  let x = [];
  let x1 = (- b + Math.sqrt(D)) / (2 * a);
        
    if (D === 0) {
      x = [x1];
    }

    else if (D > 0) {
      let x2 = (- b - Math.sqrt(D)) / (2 * a);
        x = [x1, x2];
    }
  return x;
}


function getAverageMark(marks) {
  marks.splice(5);

  if (marks.length == 0) {
    return 0;
  }

  let sum = 0;
    for(let i = 0; i < marks.length; i++) {
      sum += marks[i];
    }
  return sum / marks.length;
}


function askDrink(name,dateOfBirthday){
  let userYear = dateOfBirthday.getFullYear();
  let today = new Date();
  let todayYear = today.getFullYear();
  let age = todayYear - userYear;
  
    if (age > 18) {
      return `Не желаете ли олд-фэшн, ${name}?`;
    } 
    else {
      return `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
    }
}