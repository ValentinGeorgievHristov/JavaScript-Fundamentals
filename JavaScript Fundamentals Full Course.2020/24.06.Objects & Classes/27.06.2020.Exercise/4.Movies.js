function solve(input) {   //много тежка задача
    let movies = [];
    for (let command of input) {
        let tokens = command.split(' ');

        if (tokens[0] === 'addMovie') {
            // let filmName = (tokens.slice(1).join(' '));
            // movies.push({
            //     name: filmName
            // });
        } else if (tokens.includes('directedBy')) {

            let directedByIndex = tokens.indexOf('directedBy');
            let filmName = tokens.slice(0, directedByIndex).join(' ');

            const film = movies.find((o) => o.name === filmName); //18

            if (film) { //20
                let directorName = tokens.slice(directedByIndex + 1).join(' ');
                film.director = directorName;
            }

        } else if (tokens.includes('onDate')) { //25

            let onDateIndex = tokens.indexOf('onData');
            let filmName = tokens.slice(0, onDateIndex).join(' ');

            const film = movies.find((o) => o.name === filmName); //30
            if (film) {
                // let directorName = tokens.slice(directedByIndex+1).join(' ');
                // film.director = directorName
                film.date = tokens.slice(onDateIndex + 1).join(' ');
            } //34
        }
    }
  const filteresMovies = movies.filter((movie)=> Object.keys(movie).length===3);

  for(let film of filteresMovies){
    console.log(JSON.stringify(film));
  }
 
}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
])