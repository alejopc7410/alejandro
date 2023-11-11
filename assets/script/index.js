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
const searchInput = select('.search-input')
const loupe = select('.search-box .fa-solid')
const xMenu = select('.x')
const xLine1 = select('.x span:nth-child(1)')
const xLine2 = select('.x span:nth-child(2)')
const xLine3 = select('.x span:nth-child(3)')
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


onEvent(window, 'resize', () => {
    if (window.innerWidth < 717) {
        searchInput.style.display = 'none'
        loupe.style.display= 'block';
    } else {
        loupe.style.display= 'none';
        searchInput.style.display = 'block'
    }
})

onEvent(window, 'resize', () => {
    if (window.innerWidth < 630) {
        return true
    } else {
        
    }
})

onEvent(xMenu, 'click', () => {
    if (xMenu.classList.contains('.x')) {
        xMenu.classList.remove('.x');
        xLine1.style.transform = 'translate(-46%, 50%)'
        xLine1.style.rotate = '-45deg'
        xLine2.style.display = 'none'
        xLine3.style.transform = 'translate(-46%, -50%)'
        xLine3.style.rotate = '45deg'
    } else {
        xMenu.classList.add('.x');
        xLine1.removeAttribute('style')
        xLine1.removeAttribute('style')
        xLine2.removeAttribute('style')
        xLine3.removeAttribute('style')
        xLine3.removeAttribute('style')
    }
   
})