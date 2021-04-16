function getGames() {
    let games = ["Monopoly", "Game of Thrones", "Scrabble"];

    function getMyGames(user) {             // function
        if (user === "mamma") {
            return games[0]
        }
        return games;
    };
    return getMyGames

}
let p = getGames();
console.log(p("mamma1"));
