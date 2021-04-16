function conv(name, lastName, hairColor) {
    let obj = {
        name,
        lastName,
        hairColor
    }
    let convertObj = JSON.stringify(obj);
    console.log(convertObj);
    console.log(obj);
    


}
conv(
    'George',
    'Jones',
    'Brown'

)