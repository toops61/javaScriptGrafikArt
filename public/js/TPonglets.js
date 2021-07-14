let onglets = document.querySelectorAll('ul li');

for (let i = 0; i < onglets.length; i++) {
    onglets[i].addEventListener('click', function () {
        if (this.classList.contains('active') === false){
        let ongletSelected = document.querySelector('li.active');
        let paragraphSelected = document.querySelector('div.tabs__content.active');
        ongletSelected.classList.remove('active');
        paragraphSelected.classList.remove('active');
        this.classList.add('active');
        document.querySelectorAll('div.tabs div')[i].classList.add('active');
        }
    })    
}

/* let urlHash = window.location.hash;
let ongletUrl = document.querySelector(urlHash);
if (ongletUrl === ongletSelected) {
    ongletSelected.classList.remove('active');
    paragraphSelected.classList.remove('active');
} */