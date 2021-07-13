document.querySelector('p').className = 'article__paragraph blue';
//première manière :
document.querySelector('section p').className = 'section__p red';
//deuxième manière (tagname renvoie un tableau) :
document.getElementsByTagName('p')[1].className = 'section__p green';
//troisième manière (pareil que tagname) mais on selectionne le deuxieme element p de tous les p:
document.querySelectorAll('p')[1].className = 'section__p blue';

//JAVASCRIPT "SHIM" (morceau de code à recopier avant le js) pour les navigateurs qui ne supportent pas.

// pour enlever :

/* document.querySelectorAll('p')[1].classList.remove('blue'); */

// innerText = textContent (version officielle)

//effet clignotant :
/* let leParag = document.querySelectorAll('p')[1];
window.setInterval(function () {
    leParag.classList.toggle('blue');
}, 1000); */

// et ils se décalent et ça rend fou :
/* let parags = document.querySelectorAll('p');
for (let i = 0; i < parags.length; i++) {
    var p = parags[i];
    (function (p) {
        window.setInterval(function () {
            p.classList.toggle('red');
        }, 1000 * i);
    }) (p);
}*/

let laListe = document.querySelector('ul');
let elListe = laListe.querySelector('li:nth-child(3)');
let elListe2 = elListe.previousElementSibling;
let elListe4 = elListe.nextElementSibling;
elListe2.textContent += ' j\'suis le 2';
laListe.innerHTML += '<li>7</li><li>8</li><li>9</li><li>10</li>';
elListe4.textContent = 'et moi le 4';
let elListe10 = laListe.lastChild;
document.body.appendChild(elListe2);
let elListe11 = elListe4.cloneNode();
let elListe13 = document.createElement('li');
elListe13.textContent = 'j suis nouveau';