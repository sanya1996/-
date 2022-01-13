let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == ''|| numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyLilms() {
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
}

// rememberMyLilms();

function detectPersinalLevel() {
    if (+numberOfFilms < 10){
        console.log('Просмотренно довольно мало фильмов');
    } else if (+numberOfFilms >= 10 && +numberOfFilms < 30) {
        console.log('Вы классический зритель');
    } else if (+numberOfFilms >= 30) {
        console.log('Вы киноман!');
    } else {
        console.log('Произошла ошибка');
    }
}

// detectPersinalLevel();

function showMyDB() {
    while (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
        break;
    }
}

// showMyDB();

function writeYourgenres() {
    for (let i = 0; i<3; i++) {
        const a = prompt(`Ваш любимый жанр под номером ${personalMovieDB.genres.length +1}?`,'');
        personalMovieDB.genres.push(a);
    }
}

writeYourgenres();

console.log(personalMovieDB);


