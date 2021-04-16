function solution(arr, nums) {
    let operationArr = arr.slice()

    let first = nums[0];
    let second = nums[1];
    let third = nums[2];

    let counter = 0;

    let afterFirst1 = operationArr.filter((a, b)=> operationArr<
    let afterFirst = operationArr.splice(0, first);
    let afterSecond = afterFirst.splice(0, second);

    //console.log(afterFirst)
    for (let i = 0; i < afterFirst.length; i++) {

        if (afterFirst[i] === third) {
            counter++;
        }

    }
    //console.log(counter)

    console.log(`Number ${third} occurs ${counter} times.`)
}
solution([5, 2, 3, 4, 1, 6], //"D"
    [5, 2, 3]

)
//5 - показва че ще взема 5 от началото!
//2 - номер на елементи, които ще затрия - от началото!
// - числото кето ще остане