
/**
* Fonction qui returne le nombre d'élément dans un tableau 
* dont la longueur est strictement supérieure à 50
* 
* @param array tableau
*
* @return int 
**/
function traitementTableau(tableau){
	var nbrElement=0;

	//Recherche des elements dont la longueur est strictement supérieure à 50
	tableau.forEach(function(item) {
	 	if(item.length > 50)
			nbrElement ++;
	});

	return nbrElement;
}

module.exports = traitementTableau;