/** Add any JavaScript you need to this file. */
/**Name: OLUTOYOSI KUTI
STUDENT ID: 102633211
WEB 222
ASSIGNMENT 5 & 6**/
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll('#mySlides');
  let item = document.querySelectorAll('.fade');
  console.log(item.length);

  console.log('Length ' + slides.length);
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex - 1].style.display = 'block';
}

// To retrieve elements faster
function $(id) {
  return document.getElementById(id);
}

function view(obj) {
  let buttonclicked = $(obj).id;
  let cleansers = document.querySelectorAll('#cleansers');
  let serums = document.querySelectorAll('#serums');
  let moist = document.querySelectorAll('#moisturizers');
  let sun = document.querySelectorAll('#sunscreen');
  let slideshow = document.querySelector('#container');

  console.log(buttonclicked);
  if (buttonclicked === '1') {
    slideshow.style.display = 'none';
    cleansers.forEach(elem => {
      elem.style.display = 'block';
    });
    serums.forEach(elem => {
      elem.style.display = 'block';
    });
    moist.forEach(elem => {
      elem.style.display = 'block';
    });
    sun.forEach(elem => {
      elem.style.display = 'block';
    });
  } else if (buttonclicked === '2') {
    slideshow.style.display = 'none';
    cleansers.forEach(elem => {
      elem.style.display = 'block';
    });
    serums.forEach(elem => {
      elem.style.display = 'none';
    });
    moist.forEach(elem => {
      elem.style.display = 'none';
    });
    sun.forEach(elem => {
      elem.style.display = 'none';
    });
  } else if (buttonclicked === '3') {
    slideshow.style.display = 'none';

    cleansers.forEach(elem => {
      elem.style.display = 'none';
    });
    serums.forEach(elem => {
      elem.style.display = 'block';
    });
    moist.forEach(elem => {
      elem.style.display = 'none';
    });
    sun.forEach(elem => {
      elem.style.display = 'none';
    });
  } else if (buttonclicked === '4') {
    slideshow.style.display = 'none';

    cleansers.forEach(elem => {
      elem.style.display = 'none';
    });
    serums.forEach(elem => {
      elem.style.display = 'none';
    });
    moist.forEach(elem => {
      elem.style.display = 'block';
    });
    sun.forEach(elem => {
      elem.style.display = 'none';
    });
  } else if (buttonclicked === '5') {
    slideshow.style.display = 'none';

    cleansers.forEach(elem => {
      elem.style.display = 'none';
    });
    serums.forEach(elem => {
      elem.style.display = 'none';
    });
    moist.forEach(elem => {
      elem.style.display = 'none';
    });
    sun.forEach(elem => {
      elem.style.display = 'block';
    });
  } else {
    slideshow.style.display = 'block';

    cleansers.forEach(elem => {
      elem.style.display = 'none';
    });
    serums.forEach(elem => {
      elem.style.display = 'none';
    });
    moist.forEach(elem => {
      elem.style.display = 'none';
    });
    sun.forEach(elem => {
      elem.style.display = 'none';
    });
  }
}

//Form Validation
function validate() {
  return true;
}

// The checkbox validation
function checking() {
  var form = $('contact-form');
  var RadioChoices = Array.from(form.Option);
  var Hiring = $('problem-option');
  var Order = $('ordernumber');
  RadioChoices.forEach(elem => {
    if (elem.checked) {
      if (elem.value === Hiring.value) {
        //hour.classList.toggle("hidden");
        Order.classList.remove('hidden');
      } else {
        Order.classList.add('hidden');
      }
    }
  });
}

// Ensures a province is provided for the postal code
function Provincechecker() {
  let province = $('province');
  let postalcode = $('postalcode').value;

  if (postalcode[0] === 'A') {
    province.value = 'NL';
  } else if (postalcode[0] === 'B') {
    province.value = 'NS';
  } else if (postalcode[0] === 'C') {
    province.value = 'PE';
  } else if (postalcode[0] === 'E') {
    province.value = 'NB';
  } else if (postalcode[0] === 'G' || postalcode[0] === 'H' || postalcode[0] === 'J') {
    province.value = 'QC';
  } else if (
    postalcode[0] === 'K' ||
    postalcode[0] === 'L' ||
    postalcode[0] === 'M' ||
    postalcode[0] === 'N' ||
    postalcode[0] === 'P'
  ) {
    province.value = 'ON';
  } else if (postalcode[0] === 'R') {
    province.value = 'MB';
  } else if (postalcode[0] === 'S') {
    province.value = 'SK';
  } else if (postalcode[0] === 'T') {
    province.value = 'AB';
  } else if (postalcode[0] === 'V') {
    province.value = 'BC';
  } else if (postalcode[0] === 'X') {
    province.value = 'NT';
  } else if (postalcode[0] === 'Y') {
    province.value = 'YT';
  } else {
    province.value = '';
  }
}
