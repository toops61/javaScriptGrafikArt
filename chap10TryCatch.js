try {
    var o = {};
    o.maMethode();
} catch (e) {
    // Le code ici ne s'éxécutera qu'en cas d'erreur
    console.log('Une erreur a eu lieu : ' + e); 
} finally {
     // Ici le code s'éxécutera qu'il y ai eu une erreur ou non
}