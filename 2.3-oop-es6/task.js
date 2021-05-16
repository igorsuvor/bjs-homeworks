'use strict';

// Задача № 1
class PrintEditionItem {
  constructor (name, releaseDate, pagesCount, state, type) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount; 
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state = this.state * 1.5;
      return this.state;
  }

  set state(state) {
    this._state = state;
      if (state === 0) {
        this._state = 0;
    }
      if (state > 100) {
        this._state = 100;
      }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor (name, releaseDate, pagesCount, state, type) {
    super (state);
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount; 
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor (author, name, releaseDate, pagesCount, state, type) {
    super (state);
    this.author = author;
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount; 
    this.type = 'book';
  }
}

class NovelBook extends Book {
  constructor (author, name, releaseDate, pagesCount, state, type) {
    super (state);
    this.author = author;
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount; 
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor (author, name, releaseDate, pagesCount, state, type) {
    super (state);
    this.author = author;
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount; 
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor (author, name, releaseDate, pagesCount, state, type) {
    super (state);
    this.author = author;
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount; 
    this.type = 'detective';
  }
}


// Задача № 2
class Library {
  constructor (name, books) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }
  
  findBookBy(type, value) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i][type] === value) {
        return this.books[i];
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name === bookName) {
        const foundBook = this.books[i];
		    this.books.splice(i, 1);
		    return foundBook;
      }
    }
    return null;
  }
}


// Задача № 3
class StudentLog {
  constructor (log) {
    this.log = log;
      console.log(log);
  }
  
  getName() {
    return this.log;
  }
  
  addGrade(grade, subject) {
    const _grade = Number(grade);
      
      if (!this[subject]) {
        this[subject] = [];
      }
      
      if (1 > _grade || _grade > 6 || Number.isNaN(_grade)) {
        console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`);
          return this[subject].length;
      }

    this[subject].push(Number(grade));
      
    return this[subject].length;
  }
      
  getAverageBySubject(subject) {
    if (!this[subject]) {
      return 0;
    }
    
    let sum = 0;
        
    for(let i = 0; i < this[subject].length; i++) {
      sum += this[subject][i];
    }
      
    return sum / this[subject].length;
  }
      
  getTotalAverage() {
    const subjects = Object.keys(this);
      if (subjects.length === 1) {
        return 0;
      }
  
    let sum = 0;
      
    for (let i = 1; i < subjects.length; i++) {
      let subject = subjects[i];
      let subjectMarks = this[subject];
      let sumSubject = 0;
      
      for (let j = 0; j < subjectMarks.length; j++) {
        sumSubject += subjectMarks[j];
      }
      
      sum += sumSubject / subjectMarks.length;
    }
      return sum / (subjects.length - 1);
  }
}
  