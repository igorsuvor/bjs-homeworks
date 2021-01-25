'use strict';

function getResult(a,b,c) {
  let D = (Math.pow(b,2) - 4 * a * c);
  let x1 = (- b + Math.sqrt(D)) / (2 * a);
  let x2 = (- b - Math.sqrt(D)) / (2 * a);

    if (D < 0) {
      let x = [];
        return x;
    } 
     
    else if (D === 0) {
      let x = [x1];
        return x;
    }

    else if (D > 0) {
      let x = [x1, x2];
        return x;
    }
}

function getAverageMark(marks) {
  let marksLength = Object.keys(marks).length;

    let sum = 0;
    for(let i = 0; i < marks.length; i++) {
      sum += marks[i];
    }

    if (marksLength == 0) {
      return 0;
    } 
    
    else if (marksLength <= 5) {
      return sum / marks.length;
    } 
    
    else if (marksLength > 5) {
      marks.splice(5, 5);
        return sum / marks.length + ' Оценок больше 5!';
      } 
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}