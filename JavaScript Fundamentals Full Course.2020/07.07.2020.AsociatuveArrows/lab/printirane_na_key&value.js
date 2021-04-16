let arr = {
'one': 1,
'two' : 2,
'three' : 3

};

Object.keys(arr).forEach(element => {
    console.log(`${element} -> ${arr[element]}`)
})