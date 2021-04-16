function ladyBugs(array) {       // чужд код / 60точки от 100 носи
    let arr = [];
    let arrayBugs = array[1].split(" ")
    for (let n = 0; n < array[0]; n++) {
        arr[n] = 0;
 
    }
    for (let index = 0; index < arrayBugs.length; index++) {
 
        arr[arrayBugs[index]] = 1;
 
    }
    for (let index = 2; index < array.length; index++) {
 
        let commandIndex = array[index].split(" ")
        let num1 = Number(commandIndex[0]);
        let text = commandIndex[1];
        let num2 = Number(commandIndex[2]);
 
        if (text === 'right') {
            for (let y = 1; y <= arr.length; y++) {
                if (arr[num1] === 1) {
                    if (arr[num1 + num2] != 1) {
                       
                        arr[num1 + num2] = 1;
                        arr[num1] = 0;
                        arr.length = array[0];
                        break;
                    } else if (arr[num1 + num2 + y] != 1) {
                       
                        arr[num1 + num2 + y] = 1;
                        arr[num1] = 0;
                        arr.length = array[0];
                        break;
                    }
                }
            }
 
        } else if (text === 'left') {
            for (let y = 1; y <= arr.length; y++) {
                if (arr[num1] === 1) {
                    if (arr[num1 - num2] != 1) {
                        if (num1 - num2 < 0) {
                           
                            arr[num1] = 0;
                            break;
                        }
                       
                        arr[num1 - num2] = 1;
                        arr[num1] = 0;
                        break;
                    } else if (arr[num1 - num2 - y] != 1) {
                        if (num1 - num2 - y < 0) {
                            arr[num1] = 0;
                            break;
                        }
                        arr[num1 - num2 - y] = 1;
                        arr[num1] = 0;
                        break;
                    }
                }
            }
        }
    }
 
    arr.length = array[0];
    console.log(arr.join(' '));
 
}
ladyBugs([ 3, '0 1',
'0 right 1',
'2 right 1' ]
)