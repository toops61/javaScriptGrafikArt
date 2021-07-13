let paragraphes = document.querySelectorAll('main p');
/* for (let i = 0; i < paragraphes.length; i++) {
    let p = paragraphes[i];
    function rougit() {
        this.classList.toggle('red');
    }
    p.addEventListener('click', rougit);
} */
//sur le listener this fait référence à l'élément

for (let i = 0; i < paragraphes.length; i++) {
    let p = paragraphes[i];
    p.addEventListener('mouseover', function () {
        this.classList.add('red');
    })
    p.addEventListener('mouseout', function () {
        this.classList.remove('red');
    })
}

let liens = document.querySelectorAll('a.external');
for (let ind = 0; ind < liens.length; ind++) {
    let lien = liens[ind];
    lien.addEventListener('click', function (event) {
        let reponse = window.confirm('Voulez vous vraiment quitter le site ?');
        console.log(event);
        if (reponse === false) {
            event.preventDefault();
        }
    })
}

//on ne peut taper que des "a"
/* document.querySelector('#a').addEventListener('keydown', function (event) {
    let lettre = String.fromCharCode(event.keyCode);
    if (lettre != "A") {
        event.preventDefault();
    }
}) */

document.querySelector('#form').addEventListener('submit', function (event) {
    let mentionsLegales = document.getElementById('mentions');
    let cp = document.getElementById('code-postal');
    let age = document.getElementById('age');
    if (cp.value.length != 5) {
        alert('le code postal n\'est pas bon !!');
        event.preventDefault();
    } else if (!mentionsLegales.checked) {
        alert('vous devez accepter les conditions pour poursuivre');
        event.preventDefault();
    } else if (age.value != 'majeur') {
        alert('Vous êtes mineur et ne pouvez accéder au site');
        event.preventDefault();
    }
})
//par defaut if verifie si true sauf si ! alors vérifie si false if (raison) revient à if (raison === true)

//focus met le champ en train d'etre rempli en lumiere. L'inverse est blur: .focus() et .blur()

//evenement fin chargement de la page : addEventListener('DOMcontentLoaded', function)