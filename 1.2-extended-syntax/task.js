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
    
    // let quantityEstimation = (marks.lenght);
     
    // if (quantityEstimation == undefined) {
    //   return 0;
    // } 
    
    if (marks.lenght == []) {
       return 0;
     } 
    else if (marks.lenght > 5) {
        return 'Оценок больше 5!';
      } 

    //return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}