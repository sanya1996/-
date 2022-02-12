document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Воин",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const spam = document.querySelectorAll('.promo__adv img'),
          promo = document.querySelector('.promo__bg'),
          genre = promo.querySelector('.promo__genre'),
          films = document.querySelector('.promo__interactive-list'),
          remove = document.querySelector('.add'),
          imput = remove.querySelector('.adding__input'),
          checkbox = imput.nextElementSibling.nextElementSibling;
    
    remove.addEventListener ('submit',(e) => {
        e.preventDefault();
        let newFilm = imput.value;
        let fav = checkbox.checked;

        if(newFilm) {

            if (newFilm.length > 21){
                newFilm = `${newFilm.substring(0,22)}...`;
                }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);

            cal(movieDB.movies, films);

            if (fav){
                console.log('Добавляем любимый фильм');
            } 
        }  
        e.target.reset();
    });

    const delArr = (arr) => {
        arr.forEach( (e) => {
            e.remove();
        });
    };
    
    const makeChanges = () => {
        genre.textContent = 'ДРАМА';
        promo.style.backgroundImage = 'url("img/bg.jpg")';
    };
    
    const sortArr = (arr) => {
        arr.sort();
    };

    
    
    
    function cal (movies, parent) {
        parent.innerHTML = "";

        sortArr(movies);

        movies.forEach( (film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i+1}.${film}
                            <div class="delete"></div>
                </li>
        `;
        });

        document.querySelectorAll('.delete').forEach((btn,i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                cal(movies, parent);
            });
        });
    }
    
     
    delArr(spam);
    makeChanges();
    cal(movieDB.movies, films);
    
    
});