let hero = document.getElementById('hero');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let thumbnail = document.getElementsByClassName('thumbnail');


let backgroundImg = new Array(
    'img/environmental-protection.jpg',
    'img/flower.jpg',
    'img/forest.jpg',
    'img/moon.jpg',
    'img/nature.jpg'
);


let i = 0;

next.addEventListener('click', () => {
    if ( i < thumbnail.length - 1 ) {
        console.log(i)
        hero.style.backgroundImage = `url(${backgroundImg[i+1]})`;
        thumbnail[i+1].classList.add('active');
        thumbnail[i].classList.remove('active');
        i++;
        console.log(i)
    } else if ( i === thumbnail.length - 1 ) {
        hero.style.backgroundImage = `url(${backgroundImg[i = 0]})`;
        thumbnail[i = 0].classList.add('active');
        thumbnail[thumbnail.length - 1].classList.remove('active');
    }
})

prev.addEventListener('click', () => {
    if ( i > 0 ) {
        hero.style.backgroundImage = `url(${backgroundImg[i-1]})`;
        thumbnail[i-1].classList.add('active');
        thumbnail[i].classList.remove('active');
        i--;
    } else if (i === 0 ) {
        hero.style.backgroundImage = `url(${backgroundImg[i = thumbnail.length - 1]})`;
        thumbnail[i = thumbnail.length - 1].classList.add('active');
        thumbnail[0].classList.remove('active');
    }
})
