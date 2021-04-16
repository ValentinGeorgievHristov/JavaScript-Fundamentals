function solve(input) {

    let count = input.shift();

    let pattern = /(!)(?<command>[A-Z][a-z]{3,})\1:\[(?<message>[A-z]+)\]/g;

    for (let i = 0; i < count; i++) {

        let match = pattern.exec(input[i]);

        if (match) {
let res = transforming(match.groups.message)
//console.log(res);
           console.log(`${match.groups.command}: ${res}`) // ТОЗИ РЕД!!!${transforming((match.groups.command).split(''))}
        }else{
            console.log('The message is invalid');
        }

    }

    function transforming(str) {
        let result = '';
               for(let i=0; i<str.length; i++){
                   if(str[i]!==','){
                       result += str.charCodeAt(i) + ' ';
                       //console.log(str.charCodeAt(i));
                   }
                  
               }
        
               
               return result
           }

}
solve(
   // ['2', '!Send!:[IvanisHere]', '*Time@:[Itis5amAlready]']

   [
    '3',
    'go:[outside]',
    '!drive!:YourCarToACarWash',
    '!Watch!:[LordofTheRings]'
  ]
  
)