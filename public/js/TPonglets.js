let onglets = document.querySelectorAll('.tabs li a');
/* function ciblerOnglets(param) {
    if (param.parentNode.classList.contains('active') === false){ 
        document.querySelector('li.active').classList.remove('active');
        document.querySelector('div.tabs__content.active').classList.remove('active');
        param.parentNode.classList.add('active');
        document.querySelector(param.getAttribute('href')).classList.add('active');
        }
} */
function ciblerOnglets(param) {
    if (param.classList.contains('active') === false){
        document.querySelector('li .active').classList.remove('active');
        let paragSelected = document.querySelector('div.tabs__content.active');
        paragSelected.classList.add('fade');
        paragSelected.addEventListener('transitionend', function () {
            this.classList.remove('active','fade');
            param.parentNode.classList.add('active');
            document.querySelector(param.getAttribute('href')).classList.add('active','fade','in');
        })
    } else {
        console.log('marche pas');
    }
}

for (let i = 0; i < onglets.length; i++) {
    onglets[i].addEventListener('click', function () {
        ciblerOnglets(this);
    })    
}

if (window.location.hash != 0) {
    let urlHash = window.location.hash;
    let target = "a[href='" + urlHash + "']";
    let lienUrl = document.querySelector(target);
    ciblerOnglets(lienUrl);
}

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