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
		this.lycees = ["", "Chamalières","Marie Curie","Ambroise Brugière","Lafayette","Camille Claudel"];
		this.filieres = ["", "Esthétique","Cuisine", "Service", "Agent de Sécurité", "Electro-technique", "Aéronautique"];
		this.reponses = reponses;
	});

function submit() {
	//console.log("Submit pressed");
	var form = $(document.forms[0]);
	//console.log(form);
	var age = form.find("#age")[0].value || null;
	var sex = form.find("#sexeH")[0].checked ? "H" : (form.find("#sexeF")[0].checked ? "F" : null);
	var lycee = form.find('#lycee')[0].children[(form.find('#lycee')[0].value)].label || null;
	var filiere = {};
	
	filiere.type = form.find('#typeLycee')[0].checked ? 'Professionel' : 'Général ou technologique';
	filiere.nom = form.find('#filiere')[0].children[(form.find('#filiere')[0].value)].label || null;
	
	var consult = form.find('#consult')[0].checked;
	var consult_seul = form.find('#consult_seul')[0].checked;
	var consult_accompagne = form.find('#consult_accompagne')[0].checked;
	var combien = null;
	var questions = [];
	var Qs = form.find("[id^='Q']");
	var data = {};

	for (var i = 5, l = 21; i < l; ++i) {
		data[i] = [];
	}

	for (var i = 0, l = Qs.length; i < l; ++i) {
		var Q = Qs[i];
		var num = Q.id.split('.')[0].slice(1);
		var sub = Q.id.split('.')[1];
		if (sub == 'autre') {
			var v = Q.value;
			if (v)
				data[num].push(v);
		} else if (num == 18 && sub == 'combien') {
			combien = Q.value || null;
		} else if (Q.checked) {
			data[num].push(Q.nextSibling.data.trim());
		}
	}

	data[5].consulte = consult;
	data[5].consulte_seule = consult_seul;
	data[5].consulte_accompagne = consult_accompagne;
	var r18 = data[18];
	data[18] = {};
	data[18].combien = combien;
	data[18].intervention = (r18.indexOf("Interventions sur la pilule au cours du parcours scolaire") != -1)
	data[18].neSaisPas = (r18.indexOf("Je ne sais pas") != -1)

	var json = 	'{\n	"age": '+age+',\n	"sex": "'+sex+'",\n	"lycee": "'+lycee+'",\n\n	"filiere": {\n		"type": "'+filiere.type+'",\n		"nom": '+filiere.nom+',\n	},\n\n	"questions": '+JSON.stringify(data)+'\n}';

	function download(filename, text) {
	    var pom = document.createElement('a');
	    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
	    pom.setAttribute('download', filename);
	    pom.click();
	}
	download('data.txt', json);
};