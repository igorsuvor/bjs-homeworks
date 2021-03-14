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
  let averageSum = 0;

    for (let prop in data) {
      function getAverageMark(marks) {
        marks = data[prop];

      if (marks.length == 0) {
        return 0;
      }
      let sum = 0;
        for(let i = 0; i < marks.length; i++) {
          sum += marks[i];
        }
      return sum / marks.length;
      }
    averageSum += getAverageMark(Object.values(data));

    console.log(`${prop}: ${getAverageMark()}`);
    }
    
  let average = averageSum / Object.values(data).length;
    if (Object.values(data).length === 0) {
      average = 0;
  }
    console.log(`average: ${average}`);
 
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
  function getDecodedValue(secret) {
    
    if (secret === 0) {
      decodedValue = 'Родриго';
    } 
  
    else {
      decodedValue = 'Эмильо';
    } 
  return decodedValue;
  }
 
  decodedName = {
      firstName: getDecodedValue(secretData.aaa),
      lastName: getDecodedValue(secretData.bbb)
  }
 
  return decodedName;
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