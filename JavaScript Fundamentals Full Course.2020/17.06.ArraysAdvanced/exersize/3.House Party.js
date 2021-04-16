function solve(arr1) {

    let arr = arr1.slice(0).split('');
    let going = [];
    let doNotGoing = [];

    for (let i = 0; i < arr.length; i++) {
        let separate = arr[i].split('')

        console.log(separate);
    }

}
solve(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'
])