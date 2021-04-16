function solve(arr1) {    //DA SE PRERE6i ZADA$ATA
   let info = arr1.slice().map(Number)

    let perHour = info[0] + info[1] + info[2];
    let people = info[3];
    let hours = 0;

    //let costumersPerHour = countCosrumers/capacity;

   while(people>0){
       hours++;
       if(hours%4==0){
           continue
       }
       people -=perHour;
   }
 
   
    console.log(`Time needed: ${hours}h.`);
    
}
solve([ '5', '6', '4', '20' ]);