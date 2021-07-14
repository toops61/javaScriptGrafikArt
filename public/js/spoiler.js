/* let spoilerContent = document.getElementsByClassName('spoiler-content');
let bouton = document.querySelectorAll('button');
for (let i = 0; i < spoilerContent.length; i++) {
    bouton[i].addEventListener('click', function () {
        this.nextElementSibling.classList.add('visible');
        this.parentNode.removeChild(this);
    })    
} */

let elements = document.querySelectorAll('.spoiler');
for (let i = 0; i < elements.length; i++) {
    let texteSpoil = elements[i].textContent;
    elements[i].innerHTML = '<button class="btn">spoiler</button><span class="spoiler-content">' + texteSpoil + '</span>';
    let bouton = document.querySelectorAll('button');
    bouton[i].addEventListener('click', function () {
        this.nextElementSibling.classList.add('visible');
        this.parentNode.removeChild(this);
    })
}