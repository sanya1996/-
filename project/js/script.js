/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */



const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const delAdv = document.querySelectorAll('.promo__adv img'),
      promo = document.querySelector('.promo__bg'),
      genChange = promo.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list');


delAdv.forEach(item => {
    item.remove();
});

genChange.textContent = 'Драма';
promo.style.background = 'url(img/bg.jpg) center center/cover no repeat';

movieDB.movies.sort();

movieList.innerHTML = "";

movieDB.movies.forEach((film, i)=>{
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i+1} ${film}
            <div class="delete"></div>
        </li>
    `;
});