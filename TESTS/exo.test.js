//Recuperation de la fonction
const traitementTableau = require('./exo_tests.js');

//La fonction du test
test('retourne 2', () => {
	var tab = ['dfe','fffffffffffffffffffffffffffffffffffffffffffffffffffffff',
					'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb','tt'
			];
	expect(traitementTableau(tab)).toBe(2);
});