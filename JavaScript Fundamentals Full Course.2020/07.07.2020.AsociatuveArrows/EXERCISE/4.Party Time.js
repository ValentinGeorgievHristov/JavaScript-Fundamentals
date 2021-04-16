function solve(input) {
    let index = input.indexOf('PARTY')
    let beforeDrink = input.slice(0, index)
    let afterBeginning = input.slice(index + 1)
    let res = [];

    for (let i = 0; i < beforeDrink.length; i++) {
        if (afterBeginning.indexOf(beforeDrink[i]) == -1) {
            res.push(beforeDrink[i]).tolowerCase();
           
        }
    }
    res.sort((a, b) => {
// console.log(a);
// console.log(b);
        return a.toLowerCase().localeCompare(b.toLowerCase());

    })
    console.log(res.length);
    console.log(res.join(`\n`));
}
solve(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
 ])
// ['7IK9Yo0h',
// '9NoBUajQ',
// 'Ce8vwPmE',
// 'SVQXQCbc',
// 'tSzE5t0p',
// 'PARTY',
// '9NoBUajQ',
// 'Ce8vwPmE',
// 'SVQXQCbc'
// ]


//2
//7IK9Yo0h
//tSzE5t0p