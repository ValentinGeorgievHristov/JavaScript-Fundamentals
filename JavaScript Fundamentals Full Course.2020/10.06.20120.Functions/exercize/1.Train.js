function getDistinctElements(element, index, arr){

    return arr.indexOf(element)===index;

}
console.log(getDistinctElements([2,4,5,6,8,9,2,3,1,4]))