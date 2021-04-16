// replace Е REGEX - МЕТОД????! Може да замести Regex ШАБЛОН текст!

// let text = 'Lorem Ipsum is simply dummy text Ivaylo';

// let pattarn = /(?<firstLetter>[A-Z])[a-z]+/g;     //Ако няма 'g' ще изпълни много пъти първото име!

// let result = text.split('Ipsum');

//     console.log(result);

//-----------------------------------------------------------------------------------------------------


    let text = 'Lorem Ipsum is simply dummy at text Ivaylo';

let pattarn = /(?<firstLetter>[A-Z])[a-z]+/g;     //Ако няма 'g' ще изпълни много пъти първото име!

let result = text.split(/ [a-z]{2} /g);       //в {} се описва броя на символите в думата

    console.log(result);
