function solve(arr) {

    

    for (let i = 0; i < arr.length; i++) {

        let rev = Number(arr[i].toString()
            .split('')
            .reverse()
            .join(''));
        
        if (arr[i] === rev) {
            console.log('true');
        } else {
            console.log('false');
        }

    }
}
solve([123, 323, 421, 121]);