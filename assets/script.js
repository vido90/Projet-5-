const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const imagePath = "assets/images/slideshow/" /*pour montrer le chemin vers les slides*/

/*on recupère les elements*/
let banner = document.querySelector("#banner"); /*recherche dans un élément pour retourner dans le premier élément*/
let position = 0  /*index de la diapositive*/
let dotsElements = document.querySelector(".dots"); /*classe dots*/


const image = document.createElement("img")
image.src = imagePath+slides[0].image 
image.classList.add("banner-img") /*pour ajouter une class*/
image.alt = slides[0].tagLine
banner.appendChild(image) /*je prends le parent bannière et je lui intègre l'enfant image*/
console.log(image)

const p = document.createElement("p")
p.innerHTML = slides[0].tagLine /*mettre du html dans une balise*/
banner.appendChild(p)

let arrow_left = document.querySelector(".arrow_left");

arrow_left.addEventListener("click", () => {
	position --
	if (position < 0) {
		position = slides.length -1
	}
	image.src = imagePath+slides[position].image
	const tagLine = document.createElement("tagline")
	tagline.innerHTML = slides[position].tagLine
	displayDots (position)
	console.log("click gauche")
})
console.log(arrow_left)

let arrow_right = document.querySelector(".arrow_right");
arrow_right.addEventListener("click", () => {
	position ++
	if (position >= slides.length) {
		position = 0
	}
	image.src = imagePath+slides[position].image
	const tagLine = document.createElement("tagline")
	tagLine.innerHTML = slides[position].tagLine
	displayDots (position)
	console.log("click droit")
})
console.log(arrow_right)

let displayDots = (index) => {
	dotsElements.innerHTML = ""; /*Cela permet de réinitialiser les points à chaque fois que la fonction displayDots est appelée.*/

	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement("div");
		dot.setAttribute("class", "dot");

		if (index === i) {
			dot.classList.add("dot_selected"); /*utilisée pour styliser le point actif dans le carrousel*/
		  }
	  
		  dotsElements.appendChild(dot); /*conteneur de points*/
}
}

displayDots (position) /*mettre à jour les points à chaque changement d'image*/