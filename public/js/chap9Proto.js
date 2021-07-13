let jean = {
    name: 'Jean',
    notes: [12, 15, 8]
}

let machin = {
    name: 'Machin',
    notes: [15, 14, 19, 3, 13]
}

/* let eleve = {
    moyenne: function(notes){
        let somme = 0;
        let moyenneEleve;
        for (let i = 0; i < this.notes.length; i++) {
            somme += this.notes[i];
            moyenneEleve = somme / this.notes.length;
            return moyenneEleve;            
        }
    }
} */

/*ne pas faire :
jean.__proto__ = eleve;
*/

//marion recupere le __proto__ d'eleve lors de sa creation
/* let marion = Object.create(eleve);
marion.notes = [12, 15, 2, 8]; */

//modele d'objet (class)
class Eleve {
    constructor(nom) {
        this.name = nom; 
    }
}

Eleve.prototype.moyenne = function() {
    let somme = 0;
    let moyenneEleve;
    for (let i = 0; i < this.notes.length; i++) {
        somme += this.notes[i];
        moyenneEleve = somme / this.notes.length;
    }
    return moyenneEleve;
}