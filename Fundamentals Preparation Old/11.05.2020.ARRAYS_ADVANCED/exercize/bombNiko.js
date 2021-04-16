function solution(masiv, bombInfo) {  
    let bombNumber = bombInfo[0];
    let range = bombInfo[1];
   
    function bombandirane(arr, bombNumber, range)
    {
            let index = arr.indexOf(bombNumber);
 
            if( index >= 0 ){
 
                let leftExplosion = index - range;
       
                arr.splice(leftExplosion,range*2+1)
 
                return true;
            }
            else
            return false;
    }
 
    while ( bombandirane(masiv, bombNumber, range));
 
    console.log(masiv);
}
solution(
    [1, 2, 3, 7, 3, 2, 1, 1, 2, 3, 7, 3, 2, 1],
    [7, 1]
);