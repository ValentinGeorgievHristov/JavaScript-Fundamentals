function solve(input) {

    class Cat {
        constructor(nameX, ageX) {
            this.name = nameX;
            this.age = ageX;
        }

        meaw() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    input.map(x => {
        let [name, ageText] = x.split(' ');

        let cat = new Cat(name, Number(ageText))

        return cat;
    }).forEach(x=>x.meaw());

    // for (let i = 0; i < input.length; i++) {
    //     // let catArr = input[i].split(' ');    // 15 ти и 16 ред се заместват от 17ти -фенси синтаксис
    //     // let [name, age] = catArr;
    //     let [name, ageText] = input[i].split(' ');

    //     let cat = new Cat(name, Number(ageText));

    //     cats.push(cat);
    // };
    
// for(const cat of cats){     24,25,26 ред се заместват от 27ми.
//     cat.meaw()
// }
//cats.forEach(x=>x.meaw())    //arrow funkcion;

}

solve(
    ['Mellow 2', 'Tom 5']
)