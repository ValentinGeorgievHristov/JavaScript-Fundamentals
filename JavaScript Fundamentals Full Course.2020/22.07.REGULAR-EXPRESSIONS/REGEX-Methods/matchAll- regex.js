// matchAll Е REGEX - МЕТОД! ИТЕРИРА СЕ С FOR OF LOOP;  ИЛИ РЪЧНО с next()

let text = 'Lorem Ipsum is simply dummy text Ivaylo';

let pattarn = /(?<firstLetter>[A-Z])[a-z]+/g;     //Ако няма 'g' ще изпълни много пъти първото име!

let matches = text.matchAll(pattarn);

for (const match of matches) {
    console.log(match);
}

// nextMatch = matches.next()
// console.log(nextMatch);


// nextMatch = matches.next()
// console.log(nextMatch);    