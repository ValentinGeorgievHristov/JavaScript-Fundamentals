function solve(input) {
   let text = input.shift()
   let pattern = /([#@])(?<firstWord>[A-Za-z]{3,})\1{2}(?<secondWord>[A-Za-z]{3,})\1/g;

   let wordPairsCount = 0;
   let match = pattern.exec(text);
   let mirrorWords = [];

   while (match) {
      console.log(match.groups.firstWord);
      wordPairsCount++;
      let firstWord = match.groups.firstWord
      let firstWordReversed = firstWord.split('').reverse().join('');   //SPLIT().REVERSE().JOIN();
      let secondWord = match.groups.secondWord
   
      if (firstWordReversed === secondWord) {
         mirrorWords.push(`${firstWord}<=> ${secondWord}`)

      }
      match = pattern.exec(text);

   }
   if (wordPairsCount < 1) {
      console.log('No word pairs found!');
   } else {
      console.log(`${wordPairsCount} word pairs found`);
   }
   if (mirrorWords.length > 0) {
      console.log('The mirror words are');
      console.log(mirrorWords.join((', ')));
   } else {
      console.log('No mirror words');
   }
 
}
solve(
   ['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']
)