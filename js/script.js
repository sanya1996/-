const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i<2; i++) {
    const a = prompt('Один из последних просморенных фильмов?',''),
          b = prompt('На сколько его оцените?','');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a]=b;
            console.log('done');
        } else {
            console.log('err');
            i--;
        }
}

if (+numberOfFilms < 10){
    alert('Просмотренно довольно мало фильмов');
} else if (+numberOfFilms >= 10 && +numberOfFilms < 30) {
    alert('Вы классический зритель');
} else if (+numberOfFilms >= 30) {
    alert ('Вы киноман!');
} else {
    alert ('Произошла ошибка');
}
   

console.log(personalMovieDB);


(numberOfFilms < 10) ? alert('Просмотренно довольно мало фильмов') :
(numberOfFilms >= 10 && numberOfFilms < 30) ? alert('Вы классический зритель') : 
(numberOfFilms >= 30) ? alert ('Вы киноман!') : console.log('err');