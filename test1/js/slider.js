const slides = document.querySelectorAll('.slides li');
const prevBtn = document.querySelector('.slider-nav a[data-action="prev"]');
const nextBtn = document.querySelector('.slider-nav a[data-action="next"]');
const firstBtn = document.querySelector('.slider-nav a[data-action="first"]');
const lastBtn = document.querySelector('.slider-nav a[data-action="last"]');
const FIRSTSLIDE = 0;
const startSlide = slides[FIRSTSLIDE];

startSlide.classList.add('slide-current');
disableNext(startSlide);
disablePrev(startSlide);
prevBtn.addEventListener('click', goPrev);
nextBtn.addEventListener('click', goNext);
firstBtn.addEventListener('click', goFirst);
lastBtn.addEventListener('click', goLast);

function goPrev() {
    let prevSlide = cleanStatus(getCurrentSlide()).previousElementSibling;
    makeCurrent(prevSlide);
    disablePrev(prevSlide);
    enableBtns(prevSlide);
}

function goNext() {
    let nextSlide = cleanStatus(getCurrentSlide()).nextElementSibling;
    makeCurrent(nextSlide);
    disableNext(nextSlide);
    enableBtns(nextSlide);
}

function goFirst() {
    let current = cleanStatus(getCurrentSlide())
        .parentElement
        .firstElementChild;
    makeCurrent(current);
    disablePrev(current);
    enableBtns(current);

}

function goLast() {
    let current = cleanStatus(getCurrentSlide())
        .parentElement
        .lastElementChild;
    makeCurrent(current);
    disableNext(current);
    enableBtns(current);
}

function getCurrentSlide() {
    return document.querySelector('.slides li.slide-current');
}

function cleanStatus(elem) {
    elem.classList.remove('slide-current');
    return elem;
}

function enableBtns(elem) {
    if (elem.nextElementSibling) {
        lastBtn.classList.remove('disabled');
        nextBtn.classList.remove('disabled');
    }
    if (elem.previousElementSibling) {
        firstBtn.classList.remove('disabled');
        prevBtn.classList.remove('disabled');
    }
}

function makeCurrent(elem) {
    elem.classList.add('slide-current');
}

function disablePrev(elem) {
    if (!elem.previousElementSibling) {
        prevBtn.classList.add('disabled')
        firstBtn.classList.add('disabled')
    }
}

function disableNext(elem) {
    if (!elem.nextElementSibling) {
        nextBtn.classList.add('disabled')
        lastBtn.classList.add('disabled')
    }
}
/**
 * Created by Alla on 7/21/2017.
 */
