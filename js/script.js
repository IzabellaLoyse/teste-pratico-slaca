/*=== Add and remove asset class from sidebar menu === */

const itemMenu = document.querySelectorAll(".c-menu__item");
const readMore = document.querySelector(".c-read-more");


function addAssetClass(item) {
	itemMenu.forEach((item) => {
		item.classList.remove("is-menu__item--active");
	});

	item.classList.add("is-menu__item--active");
}

itemMenu.forEach((item) => {
	item.addEventListener("click", () => {
		addAssetClass(item);
	});
});





const showMore = () => {
	const paragraphs = document.querySelectorAll(
		".is-main-box__text--visibility");
	const spanVisibility = document.querySelector("#js-span-visibility");

	spanVisibility.remove();

	paragraphs.forEach((p) =>
		p.classList.remove("is-main-box__text--visibility")
	);
};

readMore.addEventListener("click", () => {
	showMore();
});