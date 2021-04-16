function solve(input) {   // OBJ V OBJ I VATRE ARR   // IMA Q PREPISANA V GOLQMATA TETRADKA!!!

    let line = input.shift();
    let obj = {};
    let counter = 0;

    while (line !== 'Stop') {
        let [feel, name, meal] = line.split('-');

        switch (feel) {
            case 'Like':
                if (!obj[name]) {
                    obj[name] = {};
                    obj[name].like = [meal];
                } else if ((obj[name].like) && !(obj[name].like.includes(meal))) {
                    obj[name].like.push(meal)
                };
                break;
            case 'Unlike':
                if (!obj[name]) {
                    console.log(`${name} is not at the party.`)
                } else if (obj[name] && !obj[name].like.includes(meal)) {
                    console.log(`${name} doesn't have the ${meal} in his/her collection.`)
                } else if (obj[name].like.indexOf(meal) >= 0) {
                    let index = obj[name].like.indexOf(meal)
                    obj[name].like.splice(index, 1)
                    counter++;
                    console.log(`${name} doesn't like the ${meal}.`)
                }
                break;
        }
        line = input.shift();
    }

    let entries = Object.entries(obj).sort(compare);

    for (let kvp of entries) {

        if (kvp[1].like !== undefined) {
            console.log(`${kvp[0]}: ${kvp[1].like.join(', ')}`) //, 
        } else {
            console.log(`${kvp[0]}:`)
        }
    }

    console.log(`Unliked meals: ${counter}`);

    function compare(a, b) {

        if (b[1].like.length > a[1].like.length) {
            return 1;
        } else {
            return a[0].localeCompare(b[0])
        }
    }


}
solve(
    // [ //ОБЕКТА Е СУПЕР!
    //     'Like-Krisi-shrimps', // OK
    //     'Like-Krisi-soup',
    //     'Like-Misho-salad',
    //     'Like-Pena-dessert',
    //     'Stop'
    // ]
    [
        'Like-Mike-frenchFries',
        'Like-Mike-salad',
        'Like-Aike-frenchFries',
        'Like-Aike-salad',
        'Like-Zike-frenchFries',
        'Like-Zike-salad',
        'Like-George-fruit',
        'Like-Steven-salad',
        'Unlike-Steven-salad',
        'Unlike-Steven-fruit',
        'Stop'
    ]
    //   [
    //     'Like-Krisi-shrimps',
    //     'Unlike-Vili-carp',
    //     'Unlike-Krisi-salad',
    //     'Unlike-Krisi-shrimps',
    //     'Stop'
    //   ]
)
//let person = {name:'Krisi', like: ['shrimps', 'soup', 'mekici']};
// person