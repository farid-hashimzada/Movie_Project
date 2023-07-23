//language Dropdown start

const lang = document.querySelector('#lang')
const langDrop = document.querySelector('#langDrop')

lang.addEventListener('click', () => {
    if (langDrop.style.display === 'none') {
        langDrop.style.display = 'flex';
    } else {
        langDrop.style.display = 'none';
    }
});









//OWL.JS

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})