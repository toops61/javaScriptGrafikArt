/* function ciblerOnglets(param) {
    if (param.parentNode.classList.contains('active') === false){ 
        document.querySelector('li.active').classList.remove('active');
        document.querySelector('div.tabs__content.active').classList.remove('active');
        param.parentNode.classList.add('active');
        document.querySelector(param.getAttribute('href')).classList.add('active');
        }
} */

//fonction arrowUp pour scroll top
let arrow = document.getElementById('arrow-up');
function arrowAppears() {
    arrow.classList.add('appears');
}
function arrowUp() {
    window.scroll(0,0);
}
window.addEventListener('scroll', function () {
    if (this.scrollY > 150) {
        arrowAppears();
    } else {
        arrow.classList.remove('appears');
    }
})
arrow.addEventListener('click', arrowUp);

/* div tab-container -> ul class tabs -> li class active-> a href=#id
div tab-container -> div tabs__content #id active
let onglets = document.querySelectorAll('.tabs li a')
classes : .active .fade .in
URL avec et sans(au début).

Au début classe active sur parent(li) du lien
classes="active fade in" sur paragraphe actif.

Si Lien actif != lien url -> Lance fonction (lien url)

clic sur lien dont père pas classe active -> lance fonction (lien cliqué)

Function (param) :
On retire in sur paragraph actif.
Quand animation finie, on retire classe active sur paragraphe et onglet des éléments ayant la classe active.
Ajoute classe active sur parent de param.
sur paragraphe(id de param) on ajoute classe et in puis active.
 */

//onglets actifs
let onglets = document.querySelectorAll('.tabs li a');

function ciblerOnglets(param, animations) {
    if (animations === undefined) {
        animations = true;
    }
    let paragActif = document.querySelector('.tabs__content.active');
    paragActif.classList.remove('in');
    function transition() {
        let lienActif = document.querySelector('li.active');
        lienActif.classList.remove('active');
        paragActif.classList.remove('active');
        param.parentNode.classList.add('active');
        let idLien = param.getAttribute('href');
        let paragSelected = document.querySelector(idLien);
        paragSelected.classList.add('active');
        paragSelected.offsetWidth;
        paragSelected.classList.add('in');
        paragActif.removeEventListener('transitionend', transition);
    }
    window.addEventListener('transitionend', transition);
}

for (let i = 0; i < onglets.length; i++) {
    onglets[i].addEventListener('click', function (e) {
        if (this.parentNode.classList.contains('active') === false) {
            ciblerOnglets(this);
        }
    })    
}

function hashChange(e) {
    let urlHash = window.location.hash;
    let target = "a[href='" + urlHash + "']";
    let lienUrl = document.querySelector(target);
    if (lienUrl !== null && !document.querySelector(urlHash).classList.contains('active')) {
            ciblerOnglets(lienUrl, e != undefined);
    }
}

window.addEventListener('hashchange', hashChange);
hashChange();

