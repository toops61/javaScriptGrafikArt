/* var i = 0;
while (i < 11) {
    console.log(i);
    if (i == 3) {
        break;
    }
    i = i + 1;
}
console.log('partez !'); */

/* for (let i = 0; i < 11; i++) {
    console.log(i);
} */

/* let eleves = ['Marc','Jean','Sophie'];

for (let i = 0; i < eleves.length; i++) {
    console.log(eleves[i]);
} */

/* est-ce un nombre premier ? : 
let premier = 599;
let rep = 'bravo, ce nombre est un nombre premier';
for (let i = premier - 1; i > 1; i--) {
    if (premier % i === 0) {
        rep = 'ce nombre n\'est pas un nombre premier, il est divisible par ' + i + ' et par ' + premier / i;
        i = 1;
    }
}
console.log(rep);*/

/* correction :*/

/* let nombre = 38;
let estPremier = true;
for (let i = 2; i < nombre; i++) {
    if (nombre % i === 0) {
        estPremier = false;
        console.log('ce nombre n\'est pas un nombre premier');
        let nombreI = nombre / i;
        console.log('le nombre ' + nombre + ' est divisible par ' + i + " et par " + nombreI);
        break;
    }
}

if (estPremier) {
    console.log('Ce nombre est premier');
} */



/*Trouver tous les nombres premiers avant : */
/* let nombre = 600;
for (let ind = nombre - 1; ind > 3; ind--) {
    if (nombre % i === 0)
} */

//test 2
/* let eleves = [{
    nom: 'Marc',
    moyenne: 15
}, {
    nom: 'Marion',
    moyenne: 8
}, {
    nom: 'Antoine',
    moyenne: 4
}];

eleves.unshift({
        nom: 'Billy',
        moyenne: 8
    });
let elevesRecales = [];
for (let i = 0; i < eleves.length; i++) {
    if(eleves[i].moyenne < 10){
        elevesRecales.push(eleves[i].nom);
    }    
}
console.log('Les élèves suivants devront repasser leurs examens: ' + elevesRecales); */

/* Fibonacci */
let nombre = 9;

let fibo = [0, 1];
let somme = 1;
if (nombre === 1) {
    console.log(fibo);
} else if (nombre > 1) {
    for (let i = 0; i < nombre - 1; i++) {
    somme += fibo[i];
    fibo.push(somme);           
    }
    console.log(fibo);
} else {
    console.log(0);
}