function addingStop(text, indexText, word) {

    let index = Number(indexText)


    sindexCharacter = text.charAt(index);
    let first = text.slice(0,index)
    let second = text.slice(index)
    //text = text.replace(sindexCharacter, word)
     text = first.concat(word).concat(second);
    //console.log(text);

    return text;
}
console.log(addingStop('Hawai::RomeCyprys-Greece','11','16'))