function getSolutions(a, b, c) {
  let D = (Math.pow(b, 2) - 4 * a * c);
  let x1 = (- b + Math.sqrt(D)) / (2 * a);
    
  if (D === 0) {
    return { D: D, roots: [x1] };
  }

  else if (D > 0) {
    let x2 = (- b - Math.sqrt(D)) / (2 * a);
      return { D: D, roots: [x1, x2] };
  }

  return { D: D, roots: [] };
}
  
function showSolutionsMessage(a, b, c) {
  let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}\nЗначение дискриминанта: ${(result.D)}`);
   
  if ((result.D) < 0) {
    console.log('Уравнение не имеет вещественных корней');
  }

  else if ((result.D) === 0) {
    console.log(`Уравнение имеет один корень X₁ = ${(result.roots[0])}`);
  }

  else if ((result.D) > 0) {
    console.log(`Уравнение имеет два корня. X₁ = ${(result.roots[0])}, X₂ = ${(result.roots[1])}`);
  }
}



function getAverageScore(data) {
  for (let prop in data) {
    let value = data[prop];
    let nSum = 0;
    let average;
    let countElementsObj = Object.keys(data).length;
      nSum += getAverageMark();
      /* Здесь у меня не получается сделать, а именно сложить средние
      значения всех предметов и выести это значение отдельной строкой. 
      Подскажите в каком направлении двигаться, что я не правильно сделал?
      */
      average = nSum / countElementsObj;

  function getAverageMark(marks) {
    marks = value;
  if (marks.length == 0) {
    return 0;
  }
    let sum = 0;
      for(let i = 0; i < marks.length; i++) {
        sum += marks[i];
      }
  return sum / marks.length;
 }
 console.log(`${prop}: ${getAverageMark()}`);
 console.log(`average: ${average}`);
 }
}
console.log(getAverageScore({
  algebra: [ 2, 4, 5, 2, 3, 4 ],
  geometry: [ 2, 4, 5 ],
  russian: [ 3, 3, 4, 5 ],
  physics: [ 5, 5 ], 
  music: [ 2, 2, 6 ], 
  english: [ 4, 4, 3 ],
  poetry: [ 5, 3, 4 ], 
  chemistry: [ 2 ],
  french: [ 4, 4 ]
  }));
  


  function getPersonData(secretData) {
    secretData = getDecodedValue();
    
    function getDecodedValue(secret) {
      secret = {
        firstName: 0,
        lastName: 1
      }
      // for (let prop in secret) {
      //   if (secret[prop] === 0) {
      //   return secret[prop] = 'Родриго';
        
      //   }
      /* В этом задании не могу понять, как 0 и 1 присвоить другие значения.
      Возможно условной конструкцией if else, допустим если secret.firstNamе=0, то 0=“Родриго”.
      Или обойти объект циклом for in и если secret[prop]=0, то то 0="Родриго". Какой способ исполь-
      зовать? Или что-то другое делать?
      */

      return secret;
    }
    return secretData;
  }
  console.log(getPersonData({
  aaa: 0,
  bbb: 0
  }));
  
  console.log(getPersonData({
  aaa: 1,
  bbb: 0
  }));
  
  console.log(getPersonData({
  aaa: 0,
  bbb: 1
  }));
  
  console.log(getPersonData({
  aaa: 1,
  bbb: 1
  }));