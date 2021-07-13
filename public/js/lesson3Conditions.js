var marc = {
    nom: 'Marc',
    age: 12,
    moyenne: 15
}
marc.adresse = '28 rue Colin';
/* 
if (marc.age === 18) {
    console.log('bravo tu as 18 ans');
} else if (marc.age === 25) {
    console.log('bravo tu as un quart de siècle');
} else if (marc.age === 50) {
    console.log('bravo tu as un demi siècle');
} */

/* switch (marc.age) {
    case 18: 
        console.log('bravo tu as 18 ans');
        break;
    case 25: 
        console.log('bravo tu as un quart de siècle et t\'es étudiant');
        break;
    case 50:
        console.log('bravo tu as un demi-siècle (et t\'es vieux)');
        break;
    default:
        console.log('Joyeux anniversaire !');
} */

/* if (marc.age >= 18) {
    console.log('bravo tu es majeur');
} else {
    console.log('tu es mmineur');
} */

console.log(marc.age >= 18 ? 'tu es majeur' : 'Tu es mineur');