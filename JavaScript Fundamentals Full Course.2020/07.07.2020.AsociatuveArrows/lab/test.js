function solve(arr) {

    let studentsInfo = {};
    for (let el of arr) {
        let tokensText = el.split(' ');
        let name = tokensText.shift();
        let grades = tokensText.map(Number);

        if (!studentsInfo.hasOwnProperty(name)) {
            studentsInfo[name] = grades;
        } else {
            let oldGrades = namе.grades
            studentsInfo[name] = oldGrades.concat(grades) // let oldGrades = students.get(name);
                                                       //let allGrades = oldGrades.concat(grades);
        }
       
    }
    console.log(studentsInfo)
}
solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'
])