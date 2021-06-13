
/*=== Add and remove asset class from sidebar menu === */


const itemMenu = document.querySelectorAll(".c-menu__item");

function addAssetClass(item) {
	itemMenu.forEach((item) => {
		item.classList.remove("c-menu__item--active");
	});

	item.classList.add("c-menu__item--active");
}

itemMenu.forEach((item) => {
	item.addEventListener("click", () => {
		addAssetClass(item);
	});
});
