// function solve(input) {
//     let count = input.shift();
//     let obj = {} // rarity - index[0]
//     let counter=0;

//     let kinds = input.splice(0, 3);
//     for (let i = 0; i < count; i++) {
//         let [name, rarityText] = kinds[i].split('<->')
//         let rarityObj = Number(rarityText);
//         //console.log(name)
//         if (!obj[name]) {
//             obj[name] = {};
//             obj[name].rarityObj = rarityObj;
//             obj[name].ratingObj = 0;
//         } else {
//             obj[name].rarityObj = rarityObj;
//             obj[name].ratingObj = 0;
//         }

//     }
//     // console.log(obj);

//     let line = input.shift().split(':').join(' -');


//     while (line !== 'Exhibition') {
//         let [command, newName, a] = line.split(' - ')

//         let aNum = Number(a)
//         switch (command) {

//             case 'Rate':
//                 counter++
//                 obj[newName].ratingObj += aNum; //mapIcelands[newTown].populationObject -= one;
//                 break;
//             case 'Update':
//                 obj[newName].rarityObj = aNum;;
//                 break;
//             case 'Reset':
//                 obj[newName].ratingObj = 0;;
//                 break;
//         }

//         line = input.shift().split(':').join(' -');
//     }
//     let entries = Object.entries(obj);


//     console.log(entries);
// }
// solve(
//     [
//         '3', //
//         'Arnoldii<->4', //
//         'Woodii<->7', //
//         'Welwitschia<->2', //
//         'Rate: Woodii - 10', //
//         'Rate: Welwitschia - 7', //
//         'Rate: Arnoldii - 3', //
//         'Rate: Woodii - 5',
//         'Update: Woodii - 5',
//         'Reset: Arnoldii',
//         'Exhibition'
//     ]

// )




function solve(input) {
    let count = input.shift();
    let obj = {} // rarity - index[0]
 

    let kinds = input.splice(0, count);
    for (let i = 0; i < count; i++) {
        let [name, rarityText] = kinds[i].split('<->')
        let rarityObj = Number(rarityText);
        //console.log(name)
        if (!obj[name]) {
            obj[name] = {};
            obj[name].rarityObj = rarityObj;
            obj[name].ratingObj = 0;
            obj[name].count = 0;
        } else {
            obj[name].rarityObj = rarityObj;
            obj[name].ratingObj = 0;
        }

    }
 

    let line = input.shift().split(':').join(' -');


    while (line !== 'Exhibition') {
        let [command, newName, a] = line.split(' - ')

        let aNum = Number(a)
        switch (command) {

            case 'Rate':
                obj[newName].ratingObj += aNum; //mapIcelands[newTown].populationObject -= one;
                obj[newName].count++;
                break;
            case 'Update':
                obj[newName].rarityObj = aNum;;
                break;
            case 'Reset':
                obj[newName].ratingObj = 0;;
                break;
        }

        line = input.shift().split(':').join(' -');
    }
    let entries = Object.entries(obj).sort(compare);;

    console.log('Plants for the exhibition:');
    for (let kvp of entries) {
        if( kvp[1].count == 0) kvp[1].count++;
        let num = kvp[1].ratingObj / kvp[1].count;

          console.log(`- ${kvp[0]}; Rarity: ${kvp[1].rarityObj}; Rating: ${num.toFixed(2)}`) //, 
    }
 
    
    function compare(a, b) {
        //console.log(a[1].like.length, b[1].like.length, a[0], b[0]);
 
        if (a[1].rarityObj > b[1].rarityObj) {
            return -1;
        } else  if (a[1].ratingObj > b[1].ratingObj){
            return -1;
        }
 
    }
}