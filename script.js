//language Dropdown 
const lang = document.querySelector('#lang')
const langDrop = document.querySelector('#langDrop')

//watch list dropdown
const watchList = document.querySelector('#watchList')
const watchDrop = document.querySelector('#watchDrop')
const watchDropClose = document.querySelector('#watchDropClose')
const moviesDelete = document.querySelector('#moviesDelete')
const movieDiv = document.querySelector('#movieDiv')

//movieslərin hər birinin silinməsi üçün
const moviesDelete2 = document.querySelector('#moviesDelete2');
const movieDivSecond = document.querySelector('#movieDivSecond');
const movieDivThird = document.querySelector('#movieDivThird');
const moviesDelete3 = document.querySelector('#moviesDelete3');
const movieDivFivth = document.querySelector('#movieDivFivth');
const moviesDelete4 = document.querySelector('#moviesDelete4')

//hamburger menu
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const body = document.querySelector('body')

//sign in close
const signInClose = document.querySelector('#signInClose');
const signInPopup = document.querySelector('#signInPopup');
const signInBox = document.querySelector('#signInBox');





//language click fucntion

lang.addEventListener('click', () => {
    if (langDrop.style.display === 'none') {
        langDrop.style.display = 'flex';
    } else {
        langDrop.style.display = 'none';
    }
});




//watch liste click etdikde popup-ın açılmağı üçün
watchList.addEventListener('click', () => {
    if (watchDrop.style.display === 'none') {
        watchDrop.style.display = 'flex'
    } else {
        watchDrop.style.display = 'none'
    }
})

//ümumi popup-ı bağlamaq üçün
watchDropClose.addEventListener('click', () => {
    watchDrop.style.display = 'none'
})

//movieslərin hər birinin silinməsi üçün
moviesDelete.addEventListener('click', () => {
    movieDiv.style.display = 'none'
})


moviesDelete2.addEventListener('click', () => {
    movieDivSecond.style.display = 'none'
})

moviesDelete3.addEventListener('click', () => {
    movieDivThird.style.display = 'none';
});

moviesDelete4.addEventListener('click', () => {
    movieDivFivth.style.display = 'none'
})


//sign in close

signInBox.addEventListener('click', () => {
    if (getComputedStyle(signInPopup).display === 'none') {
        signInPopup.style.display = 'flex';
    } else {
        signInPopup.style.display = 'none';
    }
});


signInClose.addEventListener('click', () => {
    signInPopup.style.display = 'none'
})




//hamburger menu

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('is-active')
    mobileNav.classList.toggle('is-active')
})




//OWL.JS

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        410: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        },

    }
})