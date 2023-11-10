'use strict';

/*------------ Utility Functions ----------------*/

function select (selector) {
    return document.querySelector(selector);
}

function selectAll (selector) {
    return document.querySelectorAll(selector);
}

function selectById (selector) {
    return document.getElementById(selector);
}

function onEvent (selector, event, callback) {
    return selector.addEventListener(event, callback);
}
/*-----------------------------------------------*/

/*---------------- HTML Elements ----------------*/
const li1 = select('li:nth-child(1)')
const li2 = select('li:nth-child(2)')
const li3 = select('li:nth-child(3)')
const home = select('.banner')
const aboutMe = select('.about-me')
const getInTouch = select('.get-in-touch')
/*-----------------------------------------------*/

onEvent(li1, 'click', () => {
    home.scrollIntoView({ behavior: 'smooth' });
})

onEvent(li2, 'click', () => {
    aboutMe.scrollIntoView({ behavior: 'smooth' });
})

onEvent(li3, 'click', () => {
    getInTouch.scrollIntoView({ behavior: 'smooth' });
})