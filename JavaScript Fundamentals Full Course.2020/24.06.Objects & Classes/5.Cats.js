function solve(input) {

    class Cat {  // tul vlizat ot 20 red
        constructor(nameX, ageZ) {
            this.name = nameX;
            this.age = ageZ;
        }

        meaw() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    for (let i = 0; i < input.length; i++) {
         let catArr = input[i].split(' ');    // 15 ти и 16 ред се заместват от 17ти -фенси синтаксис
         let [name, ageText] = catArr;                  // ot tuk vlizat v let cat (20red)
       // let [name, ageText] = input[i].split(' ');    
       
       let cat = new Cat(name, Number(ageText));   // ot tuk vlizat vav classes
      

        cat.meaw();
    };

}
solve(
    ['Mellow 2', 'Tom 5']
)