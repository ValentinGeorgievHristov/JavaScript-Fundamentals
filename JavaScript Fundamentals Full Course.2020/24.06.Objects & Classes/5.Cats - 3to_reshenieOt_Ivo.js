function solve(input) {

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meaw() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    let cats = [];
    for (let i = 0; i < input.length; i++) {
        // let catArr = input[i].split(' ');    // 15 ти и 16 ред се заместват от 17ти -фенси синтаксис
        // let [name, age] = catArr;
        let [name, ageText] = input[i].split(' ');
// console.log(name)        //gotin joker
// console.log(ageText)       //gotin joker
        let cat = new Cat(name, Number(ageText));

        cats.push(cat);
    };
// for(const cat of cats){     24,25,26 ред се заместват от 27ми.
//     cat.meaw()
// }
cats.forEach(x=>x.meaw())    //arrow funkcion;

}

solve(
    ['Mellow 2', 'Tom 5']
)