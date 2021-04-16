function solve(arr) {   // ЗАДАЧА ЗА АНАЛИЗ//
  let result = arr.filter(getDistinctElements);  // функция, създадена на ред 6//

  console.log(result.join(' '));

  function getDistinctElements(element, index, arr){
      return arr.indexOf(element)===index;
  }
}
solve([7, 8, 9, 7, 2, 3, 4, 1, 2])