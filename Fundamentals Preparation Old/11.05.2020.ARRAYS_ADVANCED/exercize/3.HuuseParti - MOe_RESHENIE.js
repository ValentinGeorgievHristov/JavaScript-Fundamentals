function solve(arr) {
    let goingOrNot = [];
    let list = [];
    let areGoing = [];
    let guestName = '';
    
    
    let result = [];
    let lastResult = [];
    let lastResultString = '';

    for (let i = 0; i < arr.length; i++) {
        goingOrNot = arr[i].split(' ');
        guestName = goingOrNot[0]

        if (arr[i].includes('not')) {

            list.push(guestName);
            // console.log(list);  // иманата на тези, които няма да присъстват
        } else {
            areGoing.push(guestName);
            // console.log(areGoing);   

        }
        if (isNotGoing == !'undefined') {
            console.log(`${isNotGoing} is not in the list!`);
            console.log(`${isGoing}`);
        } else {
            result.push(guestName)
            //console.log(result); // важен ред с резултата до тук! Има дублирано име
        }

        function yes(no, yes) {

            for (let i = 0; i < no.length; i++) {
                for (let j = 0; j < yes.length; j++) {
                    if (no[i] === yes[j]) {

                        yes = yes.filter(el => el !== no[i]) // трябва да премажа масива- филтър не е мутиращ.

                        return yes

                    }
                }
            }

        }
    }

    function no(no, yes) {

        for (let i = 0; i < no.length; i++) {
            for (let j = 0; j < yes.length; j++) {
                if (no[i] === yes[j]) {

                    no = no.filter(el => el !== yes[i]) // трябва да премажа масива- филтър не е мутиращ.

                    return no

                }
            }
        }
    }

    function double(yes) {

        for (let i = 0; i < yes.length; i++) {

            for (let j = i + 1; j < yes.length; j++) {
                if (yes[i] === yes[j]) {

                    return (`${yes[i]} is already in the list!`)

                }
            }
        }
    }

    //  console.log(list);
    //  console.log(areGoing);
    let doubling = double(areGoing)

    let isGoing = yes(list, areGoing); // в следствие на горния ред също е Undefinied
    let isNotGoing  = no(list, areGoing); // undefinied

    if (doubling !== undefined) {
        console.log(doubling); // ВАЖЕН РЕД!
    }
    for (let i = 0; i <= result.length-1; i++) {
        if (!lastResult.includes(result[i])) {
            lastResult.push(result[i])
           

        }
        
    }
    for(let namesList of lastResult){
        lastResultString += namesList + ' ';
       
    }
    console.log(lastResultString);

}
solve(
    ['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']
    
    


)