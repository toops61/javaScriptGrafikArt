/* function estPremier(nombre) {
    for (let i = 2; i < nombre; i++){
        if (nombre % i === 0) {
            return false;
        }
    }
    return true;
}

function multiplie(a, b) {
    return a * b;
} */

let classeCm1A = [{
    nom: 'Marc',
    moyenne: 15
}, {
    nom: 'Marion',
    moyenne: 8
}, {
    nom: 'Philippe',
    moyenne: 12
}, {
    nom: 'Gerard',
    moyenne: 17
}, {
    nom: 'Dédé',
    moyenne: 18
}, {
    nom: 'Antoine',
    moyenne: 4
}];

let classeCm1B = [{
    nom: 'Atsuki',
    moyenne: 19
}, {
    nom: 'Trucmuch',
    moyenne: 5
}, {
    nom: 'Noé',
    moyenne: 17
}, {
    nom: 'Skiddy',
    moyenne: 4
}, {
    nom: 'Bidule',
    moyenne: 7
}];

function quiALaMoyenne(eleves) {
    console.log(eleves);
    for (let i = 0; i < eleves.length; i++) {
        const eleve = eleves[i];
        if(eleve.moyenne > 17){
            console.log(eleve.nom + ' a tout pété ! ' + eleve.moyenne + ' de moyenne, blaaaah !!!');
        }else if(eleve.moyenne < 10){
            console.log(eleve.nom + ' devra repasser les examens, désolé');
        }else{
            console.log(eleve.nom + ' a la moyenne, bravo');
        }
    }
}

var phrase = 'Une phrase sans ponctuation c\'est très difficile à lire car on ne s\'arrête jamais de respirer et on finit par s\'étouffer à un moment ou l\'autre et ça peut devenir très compliqué d\'ailleurs j\'ai la tête qui tourne et je vaiiiiis...'