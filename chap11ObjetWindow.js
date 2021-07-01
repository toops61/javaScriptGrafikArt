/* (function () {
    window.alert('pop up pop up hopopopup ! ALERTE !!!');
    console.log("merci d'avoir cliqué !");
} )() */

/* (function () {
    let userName = window.prompt('Qui va là ?');
    console.log('Bienvenue, ' + userName + ' !!');
} )() */

/* (function () {
    let agree = confirm('are you oki Annie ? Sinon je ferme');
    //va chercher dans l'objet window par defaut (confirm = window.confirm)
    if (agree) {
        console.log('Bienvenue');
    } else {
        window.close();
    }
} )() */

//jeu : deviner chiffre avec indice au dessus / en dessous.
/* (function () {
    let leChiffre = Math.floor(Math.random() * 10);
    let reponseUser = window.prompt('Trouvez le chiffre entre 0 et 10');
    while (reponseUser != leChiffre) { 
        reponseUser = parseInt(reponseUser, 10);
        if (reponseUser > leChiffre) {
            reponseUser = window.prompt('vous êtes au-dessus !');
        } else if (reponseUser < leChiffre) {
            reponseUser = window.prompt('Vous êtes en dessous...');
        } else {
            reponseUser = window.prompt('Il faut un chiffre !');
        }
    }
    window.alert('BRAVO !!!! c\'est ça');
} )() */

// ATTENTION prompt retourne une string ! donc soit parse int soit Number():
/* (function () {
    let leChiffre = Math.floor(Math.random() * 100);
    let reponseUser = Number(window.prompt('Si tu veux accéder à la page : Trouve le code entre 0 et 100, gros malin...'));
    while (reponseUser != leChiffre) { 
        reponseUser = parseInt(reponseUser, 10);
        if (reponseUser > leChiffre) {
            reponseUser = Number(window.prompt('vous êtes au-dessus !'));
        } else if (reponseUser < leChiffre) {
            reponseUser = Number(window.prompt('Vous êtes en dessous...'));
        } else {
            reponseUser = Number(window.prompt('Il faut un chiffre !'));
        }
    }
    window.alert('BRAVO !!!! c\'est ça');
} )() */

//function se repete a l'infini mais avec un retard de 1000ms :
/* (function () {
    let demo = function () {
        console.log('demo');
    }
    window.setInterval(demo, 1000);
    console.log('avant');
}) () */

//avec une callback, se repete indefiniment mais stopper par  :
/* (function () {
    let i = 0;
    let timer = window.setInterval(function () {
        i++;
        console.log(i);
        if (i == 10) {
            window.clearInterval(timer);
            console.log('Booooouuum !');
        }
    }, 1000);
}) () */

(function () {
    for (let i = 0; i < 10; i++) {
        (function (i) {
            window.setTimeout(function () {
            console.log(i);
            }, 1000);
        }) (i);               
    }
}) ()