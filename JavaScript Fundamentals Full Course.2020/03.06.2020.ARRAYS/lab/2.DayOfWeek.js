function solve(dayNum) {
    let arrWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    if (dayNum < 1 || dayNum > 7) {
        console.log('Invalid day!')
    } else {
        console.log(arrWeek[dayNum - 1]);
    }

}

solve(21)