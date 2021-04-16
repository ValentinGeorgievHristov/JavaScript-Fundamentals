// exec Е REGEX - МЕТОД!

let text = 'Lorem Ipsum is simply dummy text Ivaylo';

let pattarn = /(?<firstLetter>[A-Z])[a-z]+/g;     //Ако няма 'g' ще изпълни много пъти първото име!

let result =pattarn.exec(text);

while(result){
console.log(result[0]);
console.log(result[1]);
result = pattarn.exec(text)

}

//------------------------------------------------------------------------------------------------

// while(result){                 // вади първите групи на Loren Ipsum Ivaylo
//     console.log(result.groups.firstLetter);
//     result = pattarn.exec(text)
    
//     }

