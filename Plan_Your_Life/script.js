// Prevendefault:

const links = document.querySelectorAll('a[href = "#"]');
links.forEach(element => {
    element.addEventListener("click", (e) => e.preventDefault());
});

// Scroling:

const anchors = document.querySelectorAll('a.scroll-to');
for (let anchor of anchors) {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}

// Slider - Our Resources:

const sliderRow = document.querySelector('.section-4_slider__row');
let parameterLeft = window.getComputedStyle(sliderRow, null).getPropertyValue('left').split('').slice(0, -2).join('');

const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');
const slides = document.querySelectorAll('.section-4_slider__row .slide');
const dots = document.querySelectorAll('.section-4_slider__dots span');

let activeDot = 0;
dots[activeDot].style.backgroundColor = '#5283ff';

arrowRight.addEventListener('click', () => {
    if (parameterLeft > (slides.length - 1) * -960) {
        parameterLeft -= 960;
        dots[activeDot].style.backgroundColor = '#d1d6e3';
        activeDot += 1;
        sliderRow.style.left = parameterLeft + 'px';
        dots[activeDot].style.backgroundColor = '#5283ff';
    }
});

arrowLeft.addEventListener('click', () => {
    if (parameterLeft < 0) {
        parameterLeft += 960;
        dots[activeDot].style.backgroundColor = '#d1d6e3';
        activeDot -= 1;
        sliderRow.style.left = parameterLeft + 'px';
        dots[activeDot].style.backgroundColor = '#5283ff';
    }
});

for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', () => {
        dots[activeDot].style.backgroundColor = '#d1d6e3';
        activeDot = i;
        dots[activeDot].style.backgroundColor = '#5283ff';
        parameterLeft = i * -960;
        sliderRow.style.left = parameterLeft + 'px';
    });
}

// Slider - Testimonials:

const sliderRowTest = document.querySelector('.section-5_slider__row');

const dotsTestimonials = document.querySelectorAll('.section-5_slider__dots span');

let activeDotTest = 0;
dotsTestimonials[activeDotTest].style.backgroundColor = '#5283ff';

for (let i = 0; i < dotsTestimonials.length; i++) {
    dotsTestimonials[i].addEventListener('click', () => {
        dotsTestimonials[activeDotTest].style.backgroundColor = '#d1d6e3';
        activeDotTest = i;
        dotsTestimonials[activeDotTest].style.backgroundColor = '#5283ff';
        sliderRowTest.style.left = activeDotTest * -480 + 'px';
    });
}

// Accordion:

const itemsHeader = document.querySelectorAll('.accordion_item__header');

itemsHeader.forEach(element => {
    element.addEventListener('click', function () {
        let content = this.nextElementSibling;
        content.classList.toggle('accordion_item__content-hidden');
        element.classList.toggle('show');
    });
});
