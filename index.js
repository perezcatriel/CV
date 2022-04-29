function toggle() {
	let $menu = document.querySelector(".contactos");

	switch ($menu.style.display) {
		case "none":
			mostrar($menu);
			break;
		default:
			ocultar($menu);
			break;
	}
}

function mostrar($menu) {
	$menu.style.display = "block";
}

function ocultar($menu) {
	$menu.style.display = "none";
}

function sLeft() {
	const $cardsProject = document.querySelector("div.proyectos-container");

	$cardsProject.scroll(0, 0);
}

function sRight() {
	const $cardsProject = document.querySelector("div.proyectos-container");

	let now = window.scrollX;
	console.log(now)
	/* let next = 250;

	let click = now + next;

	$cardsProject.scroll(click, 0);


	 */

	$cardsProject.scroll(1000, 0);
}

function sLeftE() {
	const $cardsProject = document.querySelector("div.education-container");

	$cardsProject.scroll(0, 0);
}

function sRightE() {
	const $cardsProject = document.querySelector("div.education-container");

	$cardsProject.scroll(1000, 0);
}

function clickMe() {
	console.log("Click!");
}
