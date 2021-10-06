let header = document.querySelector('.header');
let site = document.querySelector('.site');
let more = document.querySelector('.more');

const text = document.querySelector('.prm');

let links = Array.from(document.querySelectorAll('.link'));


function animate() {
    setTimeout(() => {
        header.classList.add('active');
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


const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";
for(let i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 15);

function onTick(){
  const span = text.querySelectorAll('span')[char];
  span.classList.add('prm');
  char++ 
  if(char === splitText.length){
    complete();
    return;
  }
}

function complete(){
  clearInterval(timer);
  timer = null;
}
