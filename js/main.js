const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
	const menuBody = document.querySelector('.header__menu');
	iconMenu.addEventListener("click", function(e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	})
}

const iconFooter = document.querySelector('.menu__footer');
if (iconFooter) {
	const menuFooter = document.querySelector('.footer_list');
	iconFooter.addEventListener("click", function(e) {
		iconFooter.classList.toggle('go');
		menuFooter.classList.toggle('go');
})
}

const iconFooterOne = document.querySelector('.menu__footer1');
if (iconFooterOne) {
	const menuFooterOne = document.querySelector('.footer_list1');
	iconFooterOne.addEventListener("click", function(e) {
		iconFooterOne.classList.toggle('go');
		menuFooterOne.classList.toggle('go');
})
}

const iconFooterTwo= document.querySelector('.menu__footer2');
if (iconFooterTwo) {
	const menuFooterTwo = document.querySelector('.footer_list2');
	iconFooterTwo.addEventListener("click", function(e) {
		iconFooterTwo.classList.toggle('go');
		menuFooterTwo.classList.toggle('go');
})
}

