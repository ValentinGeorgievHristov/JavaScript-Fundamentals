function solve(n1, n2, n3) {
    minNum = 0;
    if (n1 > n2 && n1 > n3){
        minNum = n1;
    }else if( n2>n1 && n2>n3){
        minNum=n2;
    }else{
        minNum= n3
    }
console.log(minNum);


}
solve(-2, 7, 3);