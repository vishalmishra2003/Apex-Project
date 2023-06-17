//Topper Section
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slidesSSC = document.getElementsByClassName("ssc");
  const slidesHSC = document.getElementsByClassName("hsc");

  for (i = 0; i < slidesSSC.length; i++) {
    slidesSSC[i].style.transform = "translateX(-" + slideIndex + "00%)";
  }
  for (i = 0; i < slidesHSC.length; i++) {
    slidesHSC[i].style.transform = "translateX(-" + slideIndex + "00%)";
  }
  slideIndex++;

  if (slideIndex >= slidesSSC.length || slideIndex >= slidesHSC.length) {
    slideIndex = 0;
  }
  setTimeout(showSlides, 3000);
}

//Typing slides

const words = [
  "Welcome To Apextron Tutorial",
  "No. 1 Classess Of Sangharsh Nagar",
  "Specialist Of English Medium",
  "Improve your English speaking skills with our coaching class!",
];
let i = 0;
let timer;

function typingEffect() {
  let word = words[i].split("");
  var loopTyping = function () {
    if (word.length > 0) {
      document.getElementById("typing-effect").innerHTML += word.shift();
    } else {
      deletingEffect();
      return false;
    }
    timer = setTimeout(loopTyping, 200);
  };
  loopTyping();
}

function deletingEffect() {
  let word = words[i].split("");
  var loopDeleting = function () {
    if (word.length > 0) {
      word.pop();
      document.getElementById("typing-effect").innerHTML = word.join("");
    } else {
      if (words.length > i + 1) {
        i++;
      } else {
        i = 0;
      }
      typingEffect();
      return false;
    }
    timer = setTimeout(loopDeleting, 100);
  };
  loopDeleting();
}

typingEffect();

//Hero Slideshow

const images = document.querySelectorAll(".slider img");
const intervalTime = 0; //5000
let slideIndexHome = 0;

function nextSlide() {
  images[slideIndexHome].classList.remove("active");
  slideIndexHome++;
  if (slideIndexHome === images.length) {
    slideIndexHome = 0;
  }
  images[slideIndexHome].classList.add("active");
}

setInterval(nextSlide, intervalTime);

