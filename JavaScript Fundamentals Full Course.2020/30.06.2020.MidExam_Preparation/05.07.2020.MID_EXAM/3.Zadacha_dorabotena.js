function solve(input) { //нещо ми убягва

    let num = input.split(' ').map(Number);
    //console.log(typeof num);
    
    let sum = 0;
    let avarageSum = 0;
    let result = '';
    let sorted = num.sort((a, b)=>b-a);
//console.log(sorted);

    for (let i = 0; i < num.length; i++) {
        sum += num[i]
    }

    avarageSum = sum / num.length;   //avarageSum

     for (let j = 0; j <5; j++) {
        // console.log(sorted[j]);
         
         if (num[j] > avarageSum) {
             result += num[j] + ' ';

        }

    }
    if(num.length>=5){
    console.log(result);
}else{
    console.log('No');
    
}

}
solve('5 2 3 4 -10 30 40 50 20 50 60 60 51' );