var fs = require('fs');

//Recuperation du dossier courant 
var dossierCourant = process.cwd();
console.log('Dossier courant : ' + dossierCourant);

//Création du dossier 'monDossier' s'il n'existe pas
if(!fs.existsSync(dossierCourant + '/monDossier')){

	fs.mkdir(dossierCourant+ '/monDossier')

}
