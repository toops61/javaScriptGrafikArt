let spoilerContent = document.getElementsByClassName('spoiler-content');
let bouton = document.querySelectorAll('button');
for (let i = 0; i < spoilerContent.length; i++) {
    bouton[i].addEventListener('click', function () {
        spoilerContent[i].classList.toggle('visible');
    })    
}