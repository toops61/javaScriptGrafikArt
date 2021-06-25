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


//exercice moyenne classe
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


//exercice : decoupe phrase
let phrase = 'Une phrase sans ponctuation c\'est très difficile à lire car on ne s\'arrête jamais de respirer et on finit par s\'étouffer à un moment ou l\'autre et ça peut devenir très compliqué d\'ailleurs j\'ai la tête qui tourne et je vaiiiiis ...'

function compteMots(phrase){
let mots = phrase.toLowerCase().split(' ');
let compteur = {};
for (let ind = 0; ind < mots.length; ind++) {
    let mot = mots[ind];
    if (compteur[mot] === undefined){
        compteur[mot] = 1;
    }else{
        compteur[mot]++;
    }
}
return compteur;
}


//exercice 
let eleve1 = {
    nom : 'John',
    notes : [14, 15, 16, 18, 4, 12]
}

let eleve2 = {
    nom : 'Marc',
    notes : [5, 20, 18, 12, 7, 16]
}

function calculMoyenne(peuImporte){
    let somme = 0;
    for (let i = 0; i < peuImporte.length; i++){
            somme += peuImporte[i];
        }
    return somme / peuImporte.length;
}

function estMeilleur(eleve1, eleve2){
    if(calculMoyenne(eleve1) > calculMoyenne(eleve2)){
        console.log(eleve1.nom + ' est meilleur que ' + eleve2.nom);
    }else if(calculMoyenne(eleve1) === calculMoyenne(eleve2)){
        console.log(eleve1.nom + ' et ' + eleve2.nom + ' sont à égalité');
    }else{
        console.log(eleve2.nom + ' est meilleur que ' + eleve1.nom);
    }
}
