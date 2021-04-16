function solve(arr, arr1) {                  //4uk
    
    for (let i = 0; i < arr.length; i++) {   
        for (let j = 0; j < arr1.length; j++) {
            if (arr[i] === arr1[j]) {
                console.log(arr[i]);
            }
        }
    }
}
solve(
['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']
)