function sumDigits(number) {

 let result = number
  .toString()
  .split("")
  .map(Number)
  .reduce((a,b)=>a+b)

  console.log(result)
}
sumDigits(245678);

////отделям за да не ме бърка. важен ред!!! console.log(number.toString().split(""));
  