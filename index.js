function toggle() {
	let $menu = document.querySelector("nav");

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

window.scroll({
  top: 100,
  left: 100,
  behavior: 'smooth'
});
