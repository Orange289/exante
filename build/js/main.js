'use strict';

var SETTINGS = {
	activeClass: 'is-active',
	hiddenClass: 'is-hidden'
};

var headerMenu = document.querySelector('.header__menu');
var headerLink = headerMenu.querySelectorAll('.header__link');
var headerLinkLength = headerLink.length;

var onLinkCLick = function (evt) {

	for (var i = 0; i < headerLinkLength; i++) {
		headerLink[i].classList.remove(SETTINGS.activeClass);
	};

	if (evt.target.classList.contains('header__link')) {
		evt.target.classList.add(SETTINGS.activeClass);
	}

};

headerMenu.addEventListener('click', onLinkCLick);

var toggleMenu = document.querySelector('#toggle');
var homePage = document.querySelector('.home');
var contentPage = document.querySelector('.page');

var onToggleClick = function () {
	homePage.classList.toggle(SETTINGS.hiddenClass);
	contentPage.classList.toggle(SETTINGS.hiddenClass);
};

toggleMenu.addEventListener('click', onToggleClick);