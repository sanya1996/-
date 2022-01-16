const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == ''|| personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyLilms:() => {
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
    },
    detectPersinalLevel:() => {
        if (+numberOfFilms < 10){
            console.log('Просмотренно довольно мало фильмов');
        } else if (+numberOfFilms >= 10 && +numberOfFilms < 30) {
            console.log('Вы классический зритель');
        } else if (+numberOfFilms >= 30) {
            console.log('Вы киноман!');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB:() => {
        while (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
            break;
        }
    },
    writeYourgenres:() => {
        for (let i = 0; i<3; i++) {
            const a = prompt(`Ваш любимый жанр под номером ${personalMovieDB.genres.length +1}?`,'');
            if (a == ''|| a == null) {
                i--;
            }else{
                personalMovieDB.genres.push(a);
            }
            
        }     
        personalMovieDB.genres.forEach((item, i) =>  {
                console.log(`Любимый жанр ${i+1} это ${item}`);
            });
        
    },
    toggleVisiblemyDB:() => {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }

};


console.log(personalMovieDB);


