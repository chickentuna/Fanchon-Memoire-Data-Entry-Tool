	var app = angular.module('app', []);

	var reponses = [
		["Contraception", "Visite de contrôle", "Règles douloureuses"],
		["Aucune", "Préservatif", "Pilule", "Implant", "Stérilet", "Patch", "Anneau vaginal", "Méthode de retrait"],
		["Jamais", "Grossesse accidentelle", "Grossesse planifiée"],
		["Une pilule que l'on prend en une fois", "Une pilule que l'on prend en plusieurs fois", "Une méthode d'avortement", "Je ne sais pas"],
		["24h pour les deux pilules", "48h pour les deux pilules", "3 jours pour les deux pilules", "3 jours pour Norlevo®", "5 jours pour Ellaone®", "Je ne sais pas."],
		["Il faut obligatoirement une ordonnance", "l’une des deux pilules est délivrée sans ordonnance", "il faut le consentement des parents pour les mineures", "l’infirmier scolaire peut me délivrer une pilule de contraception d’urgence", "un centre de planification familiale peut me délivrer une pilule de contraception d’urgence.", "Une pharmacie peut me délivrer une pilule de contraception d’urgence.", "Je ne sais pas"],
		["Elles sont gratuites pour toutes les femmes", "Norlevo® est gratuite seulement pour les mineures", "Ellaone® est gratuite seulement pour les mineures", "Norlevo® coûte plus de 10€", "Je ne sais pas"],
		["si le rapport sexuel a eu lieu pendant les règles", "en cas de rapports sexuels non protégés", "en cas d’oubli de pilule de plus de 12h", "si j’ai vomi une première pilule du lendemain 3h après sa prise.", "jamais plus de 3 par mois", "jamais plus de 3 par an", "jamais plus de 3 fois dans ma vie", "Je ne sais pas."],
		["Elle est efficace à 100%.", "Elle est efficace à 50%.", "Plus elle est prise tôt plus elle est efficace.", "Elle protège contre les Infections Sexuellement Transmissibles (IST)", "Il est conseillé de faire un test de grossesse 10-15 jours après les rapports en cas de retard de règles.", "Elle est efficace jusqu’au cycle prochain, il ne faut donc pas continuer la contraception habituelle."],
	    ["des nausées et vomissements", "une modification de la date des règles", "une diminution de la fertilité", "des malformations chez l’enfant si la pilule ne marche pas", "Je ne sais pas"],
        ["Vous attendez vos prochaines règles pour voir si vous êtes enceinte.", "Vous faites tout de suite un test de grossesse.", "Vous prenez la pilule de contraception d’urgence.", "Vous faites une prise de sang à la recherche d’infections sexuellement transmissibles (IST)", "Je ne sais pas."],
	    ["Elle n’est pas nécessaire", "Peur des effets secondaires", "Peur du regard des autres (en allant la chercher)", "Pas d’endroit pour se la procurer à proximité", "Pas de risque de grossesse", "Contre ma religion ou ma philosophie"],
	    ["médecin ou sage-femme", "cours de S.V.T.", "infirmier scolaire, dans le cadre de séances d’accompagnement personnalisé", "infirmier scolaire, lors d’une visite individuelle", "médias (TV, radio, magazines)", "sites internet","pharmacien", "interventions du centreéé de planification familiale", "famille"],
        ["très utiles", "utiles", "peu utiles", "inutiles"],        
        ["trop fréquentes", "suffisamment fréquentes", "pas assez fréquentes"]
    ];

	app.controller('MainController', function() {
		this.lycees = ["", "Chamalières"];
		this.filieres = ["", "Esthétique"];
		this.reponses = reponses;
	});

function submit() {
		console.log("Submit pressed");
	};