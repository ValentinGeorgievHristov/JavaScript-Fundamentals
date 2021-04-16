function solve(radius, height) {

let S1 = Math.PI * radius * (radius + Math.sqrt(radius*radius + height*height) );
let v = (1/3)*Math.PI*radius**2*height;
;
console.log(`volume = ${v.toFixed(4)}`);
console.log(`area = ${S1.toFixed(4)}`);   

}
solve(3, 5)