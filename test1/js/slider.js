const slides = document.querySelectorAll('.slides li');
const prevBtn = document.querySelector('.slider-nav a[data-action="prev"]');
const nextBtn = document.querySelector('.slider-nav a[data-action="next"]');
const firstBtn = document.querySelector('.slider-nav a[data-action="first"]');
const lastBtn = document.querySelector('.slider-nav a[data-action="last"]');
const FIRST_SLIDE = 0;
const startSlide = slides[FIRST_SLIDE];

startSlide.classList.add('slide-current');
updateUI(startSlide);
prevBtn.addEventListener('click', goPrev);
nextBtn.addEventListener('click', goNext);
firstBtn.addEventListener('click', goFirst);
lastBtn.addEventListener('click', goLast);

function goPrev() {
    let prevSlide = cleanStatus(getCurrentSlide()).previousElementSibling;
    updateUI(prevSlide);
}

function goNext() {
    let nextSlide = cleanStatus(getCurrentSlide()).nextElementSibling;
    updateUI(nextSlide);
}

function goFirst() {
    let current = cleanStatus(getCurrentSlide())
        .parentElement
        .firstElementChild;
    updateUI(current);

}

function goLast() {
    let current = cleanStatus(getCurrentSlide())
        .parentElement
        .lastElementChild;
    updateUI(current);
}

function getCurrentSlide() {
    return document.querySelector('.slides li.slide-current');
}

function cleanStatus(elem) {
    elem.classList.remove('slide-current');
    return elem;
}


function updateUI(elem) {
    elem.classList.add('slide-current');
    if (!elem.previousElementSibling) {
        prevBtn.classList.add('disabled');
        firstBtn.classList.add('disabled');
    }
    else {
        firstBtn.classList.remove('disabled');
        prevBtn.classList.remove('disabled');
    }
    if (!elem.nextElementSibling) {
        nextBtn.classList.add('disabled');
        lastBtn.classList.add('disabled');
    }
    else {
        lastBtn.classList.remove('disabled');
        nextBtn.classList.remove('disabled');
    }
}


/**
 * Created by Alla on 7/21/2017.
 */
