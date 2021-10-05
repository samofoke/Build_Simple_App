let header = document.querySelector('.header');
let site = document.querySelector('.site');
let more = document.querySelector('.more');


let imageOverlay = document.querySelector('.imageContainer').children[0];//we selecting on the first child element
let mainImage = document.querySelector('.imageContainer').children[1];

let links = Array.from(document.querySelectorAll('.link'));


function animate() {
    setTimeout(() => {
        header.classList.add('active');
        imageOverlay.style.animation = 'slide 1s forwards';
        mainImage.style.animation = 'slide-perm 1s forwards';
    }, 2000);

    setTimeout(() => {
        site.classList.add('active');
        more.classList.add('active');
        
    }, 3000);

    links.forEach((link, index) => {
        setTimeout(() => {
            link.classList.add('active');
        }, (index * 200) + 2500);
    })
}

animate()

