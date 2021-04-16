function reverse(arr) {
    let popped = arr.pop()
    let removed = [];
    let reversed = [];


    for (let i = 0; i < popped; i++) {
        removed = arr.pop();
        arr.unshift(removed)
        


    }
    console.log(arr.join(" "));
    
}
reverse(['1', '2', '3', '4', '2']);