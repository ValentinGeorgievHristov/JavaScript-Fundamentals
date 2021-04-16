function solve(num) { //нещо ми убягва
    let splitted = (num.split(',').map(Number));
    let sum = 0;
    let avarageSum = 0;
    let result = '';
    //let sorted = splitted.sort((a, b) => b - a);

    console.log(splitted);

    for (let i = 0; i < splitted.length; i++) {
        sum += splitted[i]
    }

    avarageSum = sum / num.length;


    for (let j = 0; j < 5; j++) {
        // console.log(sorted[j]);

        if (splitted[j] > avarageSum) {
            result += splitted[j] + ' ';

        }

    }
        if(num.length>=5){
        console.log(result);
    }else{
        console.log('No');

    }
    console.log(result)
}
solve(`5, 2, 3, 4, -10, 30, 40, 50, 20, 50, 60, 60, 51`);
//-1, -2, -3, -4, -5,-6
//10, 20, 30, 40, 50
//5, 2, 3, 4, -10, 30, 40, 50, 20, 50, 60, 60, 51