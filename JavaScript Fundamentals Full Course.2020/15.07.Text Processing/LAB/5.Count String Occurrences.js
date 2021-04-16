function solve(text, word) {
    let counter=0;
    let arr = text.split(' ');
     for(const key of arr) {
        // console.log(key);
        if(key==word){
            counter++;
        }
     };
    console.log(counter);


}
solve("This is a word and it also is a sentence",
    "is")