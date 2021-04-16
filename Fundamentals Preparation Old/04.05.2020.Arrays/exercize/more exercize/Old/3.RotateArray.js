function reverse(arr) {     // това с remove е тяхна простотия - 100 от 100
    
    let popped = arr.pop()
    let removed = [];
    let reversed = [];


    for (let i = 0; i < popped; i++) {
        removed = arr.pop();
        arr.unshift(removed)
        


    }
    console.log(arr.join(" "));
    
}
reverse(['remove', 'remove', 'remove'])