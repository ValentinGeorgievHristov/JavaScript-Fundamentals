function solve(input) {
    let count = input.shift();
    let text = input.slice()
    let pattern = /([|])(?<name>[A-Z]{4,})\1:(#)(?<title>[A-Za-z]+ [A-z]+)\3/g;     
   //                /([|])(?<name>[A-Z]+)\1:(#)(?<title>[A-Z][a-z]+ [a-z]+)\3/g;     НЕПЪЛЕН РЕГЕКС ШАБЛОН, РАЗЛИКА 78% В РЕЗУЛТАТА!
    for (let i = 0; i < count; i++) {
        
        let match = pattern.exec(text[i]);  // ITERIRANE NA MATCH S FOR-LOOP

        if(match){
            console.log(`${match.groups.name}, The ${match.groups.title}`);
            console.log(`>> Strength: ${match.groups.name.length}`);
            console.log(`>> Armour: ${match.groups.title.length}`);
            
          
        }else{
            console.log('Access denied!');
        }
     
    
    }

}
solve(
[
    '3',
    '|GEORGI|:#Lead architect#',
    '|Hristo|:#High Overseer#',
    '|STEFAN|:#Assistant Game Developer#'
]
// [
//     '3',
//     '|PETER|:#H1gh Overseer#',
//     '|IVAN|:#Master detective#',
//     '|KARL|: #Marketing lead#'
//   ]
  
)
