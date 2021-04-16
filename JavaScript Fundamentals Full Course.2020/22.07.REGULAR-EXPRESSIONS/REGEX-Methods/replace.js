// replace Е REGEX - МЕТОД????! Може да замести Regex ШАБЛОН текст!

let text = 'Lorem Ipsum is simply dummy text Ivaylo';

let pattarn = /(?<firstLetter>[A-Z])[a-z]+/g;     //Ако няма 'g' ще изпълни много пъти първото име!

let result = text.replace(pattarn, 'Morem');

    console.log(result);
