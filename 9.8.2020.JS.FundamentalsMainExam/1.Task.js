function solve(input) {

    let text = input.shift();

    let commands = input.shift();
    while (commands !== 'Travel') {
        let [command, one, two] = commands.split(':');

        switch (command) {
            case 'Add Stop':
                if (text.length >= Number(one)) {
                    text = addingStop(text, one, two);
                    console.log(text);
                }
                break;
            case 'Remove Stop':
                ones= Number(one);
                twos= Number(two);
        
                    text = slice(text,one,two);
                    console.log(text);
                
                ;
                break;
                    case 'Switch': text = substituteF(text,one, two);
                    console.log(text);
                        ;
                        break;

        }

        commands = input.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${text}`);

    // function addingStop(text, indexText, word) {

    //     let index = Number(indexText)


    //     sindexCharacter = text.charAt(index);
    //     text = text.replace(sindexCharacter, word)

    //     return text;
    // }
    function addingStop(text, indexText, word) {

        let index = Number(indexText)
    
    
        sindexCharacter = text.charAt(index);
        let first = text.slice(0,index)
        let second = text.slice(index)
        //text = text.replace(sindexCharacter, word)
         text = first.concat(word).concat(second);
        //console.log(text);
    
        return text;
    }

    function slice(str, a, b) {                         //SLICE TO INDEX PARSE a, b- to Number!
        a = Number(a)
        b = Number(b)
        
            let first = str.slice(0, a);
            let second = str.slice(b+1, str.length);
            str = first.concat(second)
        
            return str;
        }

        function substituteF(str, a, b) {          // REPLACE-ALL


            while (str.indexOf(a) > -1) {          //indexOf(a) ако а го няма е -1!
                str = str.replace(a, b);
            }
            //let pass = str;
            return str;
        }
}
solve(
    [
        'Hawai::Cyprys-Greece',
        'Add Stop:7:Rome',
        'Remove Stop:11:16',
        'Switch:Hawai:Bulgaria',
        'Travel'
    ]
)