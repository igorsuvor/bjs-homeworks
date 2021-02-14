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
  let result = getSolutions;
  let D = (Math.pow(b, 2) - 4 * a * c);
  let x1 = (- b + Math.sqrt(D)) / (2 * a);
  let x2 = (- b - Math.sqrt(D)) / (2 * a);
  
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}\nЗначение дискриминанта: ${D}`);
  
    if (D < 0) {
      console.log('Уравнение не имеет вещественных корней');
    }
    else if (D === 0) {
      console.log(`Уравнение имеет один корень X₁ = ${x1}`);
    }
    else if (D > 0) {
      console.log(`Уравнение имеет два корня. X₁ = ${x1}, X₂ = ${x2}`);
    }
}


function getAverageScore(...data) {
 
  function getAverageMark(marks) {
    marks = data[i];
      if (marks.length == 0) {
        return 0;
      }
  
      let sum = 0;
        for(let i = 0; i < marks.length; i++) {
          sum += marks[i];
      }
      return sum / marks.length;
  }
}
