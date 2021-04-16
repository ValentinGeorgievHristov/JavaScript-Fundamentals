function solve(arr) {

    let students = new Map();
    for (let el of arr) {
        let tokensText = el.split(' ');
        let name = tokensText.shift();
        let grades = tokensText.map(Number);

        if (students.has(name)) {
            let oldGrades = students.get(name);
            let allGrades = oldGrades.concat(grades);

            students.set(name, allGrades)
        } else {
            students.set(name, grades);
        }
    }
    let studentsEntries = Array.from(students.entries());
    let sortedStudentsEntries = studentsEntries.sort((a, b) => {
        let studentNameA = a[0];
        let studentGradesA = a[1]; // 
        let studentNameB = b[0];
        let studentGradesB = b[1]; //

        let averageGradeA = getAvarageGrade(studentGradesA)
        let averageGradeB = getAvarageGrade(studentGradesB)   

        return averageGradeA - averageGradeB;
        //console.log(studentEntries)
        
    });
    function getAvarageGrade(grades) {
        let gradesSum = 0;

        for (const grade of grades) {
            gradesSum += grade;
        }

        return gradesSum / grades.length;
    }
    for (const kvp of sortedStudentsEntries) { //sortedStudents
        console.log(`${kvp[0]}: ${kvp[1].join(', ')}`)
    }
   // console.log(sortedStudentsEntries)
}
solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'
])