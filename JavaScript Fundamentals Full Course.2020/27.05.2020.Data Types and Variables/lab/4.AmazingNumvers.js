function name(num) {
    let stat = num;
    let modificied = num.toString().split('');
    let naiPosle = modificied.map(Number);
        
    let res = 0;

    for (let i = 0; i <= naiPosle.length-1; i++) {
   res+=naiPosle[i];
   
     }
res===9 ? stat += " Amazing? True" : stat += " Amazing? False"  
     console.log(stat);
}
name(1233);