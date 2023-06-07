// Déclaration des variables

let img__slider = document.querySelectorAll('.banner-img')

let suivant = document.querySelector('.arrow_right');

let precedent = document.querySelector('.arrow_left');

let etape = 0;

let nbr__img = img__slider.length;

let dots = document.querySelector('.dots');

let tagLine = [
		"Impressions tous formats <span>en boutique et en ligne</span>",
	
		"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	
		"Grand choix de couleurs <span>de CMJN aux pantones</span>",
	
	
		"Autocollants <span>avec découpe laser sur mesure</span>"
];

let text = document.querySelector('#text-slider')

// Fonction permettant d'ajouter les bullet points du caroussel

function addDots(){
	for (let i = 0; i < img__slider.length; i++){
		let dots = document.querySelector('.dots');

		let dot = document.createElement('div');

		dot.setAttribute('class', 'dot');

		dots.appendChild(dot);
	}

}

// On appelle la fonction qui crée les bullet points

addDots()

// Déclaration de la variable nous permettant d'utiliser les bullets points créés lors de la fonction précédente

let bullets = document.querySelectorAll('.dot')

// On défini le premier bullet point du caroussel comme étant sélectionné

function dotSelected(){
	bullets[0].classList.add('dot_selected');
}

dotSelected()


// Fonction qui enlève la classe active de l'image et la sélection du bullet point au fur et à mesure qu'on avance dans le caroussel

function enleverActiveImage(){
	for(let i = 0 ; i < nbr__img; i ++){
		img__slider[i].classList.remove('active');
		bullets[i].classList.remove('dot_selected');
	}
}

// Au clic sur les flèches du caroussel, on incrémente l'étape et en fonction de la valeur de cette étape, on ajoute à l'image ayant le même index la classe active et de même pour les bullet points

suivant.addEventListener('click', function(){
	etape++;
	if(etape >= nbr__img){
		etape = 0;
	}
	enleverActiveImage();
	img__slider[etape].classList.add('active');
	bullets[etape].classList.add('dot_selected');

	text.innerHTML = tagLine[etape];
})

precedent.addEventListener('click', function(){
	etape--;
	if(etape < 0){
		etape = nbr__img - 1;
	}
	enleverActiveImage();
	img__slider[etape].classList.add('active');
	bullets[etape].classList.add('dot_selected');

	text.innerHTML = tagLine[etape];
});

// On défini ici une intervale par défaut après laquelle les images défileront automatiquement

setInterval(function(){
	etape++;
	if(etape >= nbr__img){
		etape = 0;
	}
	enleverActiveImage();
	img__slider[etape].classList.add('active');
	bullets[etape].classList.add('dot_selected');

	text.innerHTML = tagLine[etape];
}, 3000)



