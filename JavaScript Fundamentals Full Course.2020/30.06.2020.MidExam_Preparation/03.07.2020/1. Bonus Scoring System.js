function solve(arr) {  // грешен отговор някъде
    let copy = arr.slice();
    let countStudents = Number(copy.shift());
    let countLectures = Number(copy.shift());
    let firstBonus = Number(copy.shift())
    let max = Number.MIN_SAFE_INTEGER;  

    for (let i = 0; i < copy.length; i++) {
        let currentLectores = Number(copy[i]);
        if (currentLectores > max) {
            max = currentLectores;
            //console.log(currentLectores);

        }

        //console.log(max);

    }
    let totalBonus = Math.ceil((max / countLectures) * (5 + firstBonus))
    //console.log(max);
    // console.log(countLectures);
    // console.log(firstBonus);

    console.log(`Max Bonus: ${totalBonus}.`);
    console.log(`The student has attended ${max} lectures.`);

}
solve(
        [
            '5',  '25', '30',
            '12', '19', '24',
            '16', '20'
          ]
)
// бр студенти
// бр лекции
// първоначален бонус
// посещения на всеки ученик.