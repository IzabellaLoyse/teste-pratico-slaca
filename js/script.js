const itemMenu = document.querySelectorAll(".c-menu__item");
const readMore = document.querySelector(".c-read-more");
const createTopicButton = document.querySelector(".c-discussion-box__button");
const mobileButton = document.querySelector(".c-mobile-button");


/* === Menu Hamburger === */

function toggleMenu(event) {
	if (event.type === "touchstart") event.preventDefault();


	const navigationMenu = document.querySelector(".c-menu");

	navigationMenu.classList.toggle("is-menu--active");

	const activeNavigation = navigationMenu.classList.contains(
		"is-menu--active"
	);
	event.currentTarget.setAttribute("aria-expanded", activeNavigation);


	if (activeNavigation) {
		event.currentTarget.setAttribute("aria-label", "Fechar Menu");
		
	} else {
		event.currentTarget.setAttribute("aria-label", "Abrir Menu");
	}
}

mobileButton.addEventListener("click", toggleMenu);
mobileButton.addEventListener("touchstart", toggleMenu);



/*=== Add and remove asset class from sidebar menu === */
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



/* === Remove the hidden content that is in the paragraph by clicking on see more. === */

const showMore = () => {
	const paragraphs = document.querySelectorAll(
		".is-main-box__text--visibility"
	);
	const spanVisibility = document.querySelector(".js-span-visibility");

	spanVisibility.remove();

	paragraphs.forEach((p) =>
		p.classList.remove("is-main-box__text--visibility")
	);
};

readMore.addEventListener("click", () => {
	showMore();
});




/* === Add the section containing the form === */
const formVisibility = () => {
	const removeFormVisibility = document.querySelector(".js-form-box");
	const createTopic = document.querySelector(".js-discussion-box");

	removeFormVisibility.classList.remove("is-discussion-box--visibility");
	createTopic.classList.add("is-discussion-box--visibility");
};

createTopicButton.addEventListener("click", () => {
	formVisibility();
});
