function solve(arr) {
    for (i = 0; i < arr.length; i++) {
        
            if (arr[i] >= arr[i]+1) {
                console.log(arr[i]);
            }
            
        }
    }

solve([1, 4, 3, 2])