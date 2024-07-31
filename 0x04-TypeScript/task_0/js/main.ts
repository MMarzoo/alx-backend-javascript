interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

const student1: Student = {
  firstName: 'Mohamed',
  lastName: 'Marozuk',
  age: 24,
  location: 'Egypt'
}

const student2: Student = {
  firstName: 'Ahmed',
  lastName: 'Hassan',
  age: 25,
  location: 'Egypt'
}

const studentsList: Array<Student> = [
  student1,
  student2
]

const table = document.createElement("table");
const tbody = document.createElement("tbody");

studentsList.forEach(student => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  row.appendChild(firstNameCell);

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);


