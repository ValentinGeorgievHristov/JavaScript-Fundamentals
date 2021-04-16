function name(band, album, song) {
    let countRotates = (album.length * band.length*song.length/2)/2.5;
    console.log(`The plate was rotated ${Math.ceil(countRotates)} times`);

     

}
name('Black Sabbath', 'Paranoid', 'War Pigs');