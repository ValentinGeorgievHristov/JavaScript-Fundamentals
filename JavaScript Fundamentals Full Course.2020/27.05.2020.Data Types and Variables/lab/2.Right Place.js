function name(str1, str2, str3) {
let result ='';

     for(let i=0; i<=str1.length-1; i++){
         if(str1[i] =='_'){
              result += str2;
            //  console.log(result);
         }else{
             result+=str1[i];
         }
        
     }
     //console.log(result);
     if(result===str3){
         console.log("Matched");
     }else{
         console.log("Not Matched");         
     }
}
name('Str_ng', 'I', 'Strong');