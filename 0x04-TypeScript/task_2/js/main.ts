interface DirectorInterface {
  workFromHome(): string,
  getCoffeeBreak(): string,
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string,
  getCoffeeBreak(): string,
  workTeacherTasks(): string;  
}

class Director implements DirectorInterface {
  workFromHome() {
    return 'Working from home';
  }

  getCoffeeBreak() {
    return 'Getting a coffee break';
  }

  workDirectorTasks() {
    return 'Getting to director tasks'
  }
}

class Teacher implements TeacherInterface {
  workFromHome() {
    return 'Cannot work from home';
  }

  getCoffeeBreak() {
    return 'Cannot have a break';
  }

  workTeacherTasks() {
    return 'Getting to work';
  }
}

function createEmployee (salary: any) {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

function isDirector (employee: object) {
  return employee instanceof Director;
}

function executeWork (employee: object) {
  if (isDirector(employee)) {
    return (employee as Director).workDirectorTasks();
  } else {
    return (employee as Teacher).workTeacherTasks();
  }
}

type Subjects = ('Math' | 'History');

function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  }
}
