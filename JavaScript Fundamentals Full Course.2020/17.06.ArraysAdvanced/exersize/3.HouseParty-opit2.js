function solution(input) {  //отново е на  миро

    let guests = [];

    for (let infoLine of input) {
        let info = infoLine.split(' ');
        let name = info[0];

        if (!info.includes(`not`)) {
            if (!guests.includes(name)) {
                guests.push(name);
            } else {
                console.log(`${name} is already in the list!`);
            }
        }else{
if(guests.includes(name)){
guests = guests.filter((guestName)=>guestName!==name);
}else{
    console.log(`${name} is not in the list!`);
}

        }
    }

console.log(guests.join('\n'));
}

solution(['Allie is going!',
    'Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'
]);