function solve(arr) {

    let students = new Map;

    for (let el of arr) {
        let tokensText = el.split(' ');
        let name = tokensText.shift()
        let grades = tokensText.map(Number);
        //console.log(grades);

        if (students.has(name)) {
            let oldGrades = students.get(name) // get(name) взема стойността на name!!!!//
            let allGrades = oldGrades.concat(grades)

            students.set(name, allGrades);
        } else {
            students.set(name, grades);

        }
    };

    let studentsEntries = Array.from(students.entries()) //конвертиране към това
   // console.log(studentsEntries);
let sortedStudentEntries = studentsEntries.sort((a, b)=>{
    let studentGradesA = a[1];
    let studentGradesB = b[1];
    
    let averageGradeA = getAverageGrade(studentGradesA);
    let averageGradeB = getAverageGrade(studentGradesB);

    return averageGradeA - averageGradeB;
})
 function getAverageGrade(grades){
     let gradesSum=0;

     for(const grade of grades){
         gradesSum +=grade;
     }
     return gradesSum/grades.length;
 }
 for(const kvp of sortedStudentEntries){
     console.log(`${kvp[0]}: ${kvp[1].join(', ')}`)
 }
 console.log(studentsEntries);
}

solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'
])