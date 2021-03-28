// Задача № 1.
String.prototype.isPalindrome = function () {
  return this.toLowerCase().split(' ').join('').split('').reverse().join('') === this.toLowerCase().split(' ').join('').split('').join('') ? true : false;
}


// Задача № 2.
function getAverageMark(marks) {
    if (marks.length == 0) {
      return 0;
    }
    let sum = 0;
      for(let i = 0; i < marks.length; i++) {
        sum += marks[i];
      }
    let average = sum / marks.length;
    let roundedAverage = Math.round(average);
    return roundedAverage;
}


// Задача № 3.
function checkBirthday(birthday) {
  let now = Date.now();
  birthday = Date.parse(birthday);
  let diff = now - birthday;
  let age = diff / (1000 * 60 * 60 * 24 * 365.25);
  let verdict = age >= 18 ? true : false;

  return verdict;
}