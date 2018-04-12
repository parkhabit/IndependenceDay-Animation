//function to use the correct date
(function() {
  var currentTime = new Date();
  var year = currentTime.getFullYear();
  var month = currentTime.getMonth()
  var day = currentTime.getDate();
  var dateImg = document.getElementById("date_animated");
  //if the year is before 2018, or if 2018 but before April the 10th
  if (year < 2018 || year === 2018 && month <= 3 && day < 10){
    dateImg.src = "./assets/date.png"
  } else {
    dateImg.src = "./assets/now.png"
  }
})();

//function to add the beam and lightwash on hover
(function () {
  var beam = document.getElementById('beam_animated');
  var lightwash = document.getElementById('lightwash_animated');
  var cta = document.getElementById('cta_animated');

  cta.addEventListener("mouseenter", function(){
    lightwash.classList.add("lightwash_flash");
    beam.classList.add("beam_flash");
  });
  cta.addEventListener("mouseleave", function(){
    lightwash.classList.remove("lightwash_flash");
    beam.classList.remove("beam_flash");
  });
})();

//elements to add animated classes to
var intro_bg = document.getElementById("intro_bg_animated");
var intro_text_1 = document.getElementById("intro_text_1_animated");
var intro_text_2 = document.getElementById("intro_text_2_animated");
var intro_text_3 = document.getElementById("intro_text_3_animated");
var title = document.getElementById("title_animated");
var spaceship = document.getElementById("spaceship_animated");
var earth = document.getElementById("earth_animated");
var cta = document.getElementById("cta_animated");
var date = document.getElementById("date_animated");

(function () {
  window.addEventListener('load', function() {
    setTimeout(part1, 2000);
    setTimeout(part2, 4000);
    setTimeout(part3, 6000);
    setTimeout(part4, 8000);
    setTimeout(part5, 9000);
  });
})();

var part1 = function() {
  intro_bg.classList.add("intro_bg_animated");
  intro_text_1.classList.add("intro_text_1_animated");
}

var part2 = function() {
  intro_text_2.classList.add("intro_text_2_animated");
  spaceship.classList.add("spaceship_animated");
  earth.classList.add("earth_animated");
}
var part3 = function() {
  intro_text_3.classList.add("intro_text_3_animated");
}
var part4 = function() {
  title.classList.add("title_animated");
  title.classList.remove("title_hide");
}
var part5 = function() {
  date.classList.add("date_animated");
  date.classList.remove("date_hide");
  cta.classList.remove("cta_hide");
  cta.classList.add("cta_animated");
}
