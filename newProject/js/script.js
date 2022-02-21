window.addEventListener('DOMContentLoaded', () => {
    //Tabs
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item =>{
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach( item =>{
            item.classList.remove('tabheader__item_active');
        }); 
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) =>{
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if(target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    //Timer

    const deadline = '2022-02-22';

    function getTimeRemaining(endtime) {
        const t  = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor((t / (1000 * 60 * 60)) % 24),
              minutes = Math.floor((t / 1000 / 60) % 60),
              seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds

        };      
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);
        
        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                days.innerHTML = 0;
                hours.innerHTML = 0;
                minutes.innerHTML = 0;
                seconds.innerHTML = 0;
            }
        }      
    }    

    setClock('.timer', deadline);

    // Modal

    const openModal = document.querySelectorAll('[data-modal]'),
          closesModal = document.querySelector('[data-closes]'),
          elemtsModal = document.querySelector('.modal');
     
    function openModals() {
        elemtsModal.classList.add('show');
            elemtsModal.classList.remove('hide');
            document.body.style.overflow = 'hidden';
            clearInterval(modalTimet);
    }
    
    function closeModal() {
            elemtsModal.classList.add('hide');
            elemtsModal.classList.remove('show');
            document.body.style.overflow = '';
    }

    openModal.forEach( e => {
        e.addEventListener('click', openModals);
    });

    closesModal.addEventListener('click', closeModal);

    elemtsModal.addEventListener('click', (e) => {
        if (e.target === elemtsModal){
            closeModal();
        }  
    });

    document.addEventListener('keydown', (e) => {
        if(e.key === 'Escape' && elemtsModal.classList.contains('show')){
            closeModal();
        }
    });

    const modalTimet = setTimeout(openModals, 15000);

    function callModalEnd () {
        if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModals();
            window.removeEventListener('scroll', callModalEnd);
        }
    }
    window.addEventListener('scroll', callModalEnd);
});


