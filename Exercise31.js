class Movie{
    constructor(movieName, rating, yearReleased){
        this.movieName = movieName;
        this.rating = rating;
        this.yearReleased = yearReleased;

    }

    printMovie(){
        alert("The name of the movie is: " + this.movieName +
        "\n The rating is: " + this.rating +
        "\n It was released in: " + this.yearReleased);

    }


}

function main() {

    var horrorMovie = new Movie("Babadook", 4, 2017);
    var netflixOriginal = new Movie("Tau",3, 2018);

    horrorMovie.printMovie();
    netflixOriginal.printMovie();


}

main();