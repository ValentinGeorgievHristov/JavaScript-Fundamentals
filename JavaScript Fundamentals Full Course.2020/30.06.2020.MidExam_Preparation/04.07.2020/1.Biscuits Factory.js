function solve(arr) {
    let employeeBiscuitsPerDay = Number(arr[0])
    let countEmployees = Number(arr[1])
    let concurentResult = Number(arr[2])
    let dayResultSlow = 0;
    let dayResult = 0;
    let myTotalResult = 0;
    let difference = 0;
    // let monthResult = employeeBiscuitsPerDay * countEmployees * 30;
    for (let i = 1; i <= 30; i++) {
        if (i % 3 == 0) {
            dayResultSlow += employeeBiscuitsPerDay * 0.75 * countEmployees;
        } else {
            dayResult += employeeBiscuitsPerDay * countEmployees;
        }

    }
    myTotalResult = dayResult + dayResultSlow;

    //console.log(myTotalResult);
    difference = Math.abs(myTotalResult - concurentResult);
    let perceint = (difference / concurentResult * 100).toFixed(2);
    console.log(`You have produced ${myTotalResult} biscuits for the past month.`)
if(myTotalResult>=concurentResult){
   console.log(`You produce ${perceint} percent more biscuits.`);
}else{
    console.log(`You produce ${perceint} percent less biscuits.`);
}


}
solve(['65', '12', '26000'])
// бисквити за деня за работник
// брой работници
// брой бисквити за 30 дни на Конкурент! 


// колко бисквити правимм ние за 30 дни???
// какъв е %та

// сравнявам 30 дневните резултати % -но

// "You have produced {countBiscuits} biscuits for the past month."
// You produce {percentage} percent more biscuits."
// или
// You produce {percentage} percent less biscuits."