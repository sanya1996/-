/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */


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
      

spam.forEach( (e) => {
    e.remove();
});

genre.textContent = 'ДРАМА';

promo.style.backgroundImage = 'url("img/bg.jpg")';

remove.addEventListener ('submit',(e) => {
    e.preventDefault();
    let newFilm = imput.value;

    if(newFilm) {
        if (newFilm.length > 21){
            newFilm = `${newFilm.substr(0,22)}...`;
        }
        movieDB.movies.push(newFilm);
        movieDB.movies.sort();
        cal();
        imput.value = "";
    }

     
});

function cal () {
    films.innerHTML = "";
    movieDB.movies.forEach( (film, i) => {
        films.innerHTML += `
         <li class="promo__interactive-item">${i+1}.${film}
                        <div class="delete"></div>
        </li>
    `;
    });
    
}
cal(1);
 
checkbox.addEventListener('click', (e)=>{
    e = checkbox.checked;
    if (e == true){
        console.log('Добавляем любимый фильм');
    }
});


