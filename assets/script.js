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

function addDots(){
	for (let i = 0; i < img__slider.length; i++){
		let dots = document.querySelector('.dots');

		let dot = document.createElement('div');

		dot.setAttribute('class', 'dot');

		dots.appendChild(dot);
	}

}

addDots()


let bullets = document.querySelectorAll('.dot')

function dotSelected(){
	bullets[0].classList.add('dot_selected');
}

dotSelected()



function enleverActiveImage(){
	for(let i = 0 ; i < nbr__img; i ++){
		img__slider[i].classList.remove('active');
		bullets[i].classList.remove('dot_selected');
	}
}


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



