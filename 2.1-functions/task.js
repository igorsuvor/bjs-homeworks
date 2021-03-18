// ЗАДАЧА № 1

function getSolutions(a, b, c) {
  let D = (Math.pow(b, 2) - 4 * a * c);
      
  if (D === 0) {
    let x1 = (-b / 2 * a);
      return { D: D, roots: [x1] };
  }

  else if (D > 0) {
    let x1 = (- b + Math.sqrt(D)) / (2 * a);
    let x2 = (- b - Math.sqrt(D)) / (2 * a);
      return { D: D, roots: [x1, x2] };
  }

  return { D: D, roots: [] };
};
  
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
};


// ЗАДАЧА № 2

function getAverageScore(data) {
  let result = {};
  
  for (let prop in data) {
    let averageScore = getAverageMark(data[prop]);
      result[prop] = averageScore;
  };

  let average = getAverageMark(Object.values(result));
    result.average = average;

  return result;
};

function getAverageMark(marks) {
  if (marks.length == 0) {
    return 0;
  };
  let sum = 0;
  for(let i = 0; i < marks.length; i++) {
    sum += marks[i];
  };
 
  return sum / marks.length;
};

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
 



// ЗАДАЧА № 3

function getPersonData(secretData) {
  decodedName = {
    firstName: getDecodedValue(secretData.aaa),
    lastName: getDecodedValue(secretData.bbb)
  };
  return decodedName;
};

function getDecodedValue(secret) {
  if (secret === 0) {
    decodedValue = 'Родриго';
  }
  else {
    decodedValue = 'Эмильо';
  };
  return decodedValue;
};

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