interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const student1: Student = {
    firstName: 'Rufus',
    lastName: 'Ezugwu',
    age: 21,
    location: 'LAGOS',
  };
  
  const student2: Student = {
    firstName: 'Dev',
    lastName: 'Softlanding',
    age: 22,
    location: 'NIGERIA',
  };
  
  const studentList: Student[] = [student1, student2];
  const table = document.createElement('table');
  table.innerHTML = studentList.map(student => `
        <tr>
            <td>${student.firstName}</>
            <td>${student.location}</>
        </tr>
        `).join('')
  document.body.appendChild(table);
