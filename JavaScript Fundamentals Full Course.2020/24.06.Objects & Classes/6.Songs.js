function solve(input) {
    let list = input[input.length-1];
    
    let songs = [];

    class Album {
        constructor(type, song, time) {

            this.typeList = type;
            this.name = song;
            this.time = time;
        }
    }

    for (let i = 1; i < input.length - 1; i++) {
        let musicSplit = input[i].split('_')

        let [typeList, songName, time] = musicSplit;
        console.log(musicSplit);
        

        let song = new Album(typeList, songName, time)

        songs.push(song)
        //console.log(songs);
        
    }
    for (let i = 0; i < songs.length; i++) {
        let listType = songs[i].typeList;

        if ( list=='all' || listType === list ) {
            console.log(songs[i].name);
        }

    }

}
solve(
    [2,
        'like_Replay_3:15',
        'ban_Photoshop_3:48',
        'all']
        )