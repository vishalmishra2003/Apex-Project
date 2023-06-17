// nav code

const navSlide = () => {
        const burger = document.querySelector(".burger");
        const nav = document.querySelector(".nav-links");
        const navLinks = document.querySelectorAll(".nav-links li");
      
        // Toggle Nav
        burger.addEventListener("click", () => {
          nav.classList.toggle("nav-active");
      
          // Animate Links
          navLinks.forEach((link, index) => {
            if (link.style.animation) {
              link.style.animation = "";
            } else {
              link.style.animation = `navLinkFade 0.5s ease forwards ${
                index / 7 + 0.3
              }s`;
            }
          });
      
          // Burger Animation
          burger.classList.toggle("toggle");
        });
      };
      
navSlide();



//SMS Sending Feature

document.getElementById("smsForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Get form value
  var name = "Name :" + document.getElementById("name").value;
  var number = "\nMobile No.:" + document.getElementById("number").value;
  var message =
    "\nMessage :" +
    document.getElementById("message").value +
    "\n\n If you don't recieve any update within day, please contact on following information. \n Name: Chandrakant Mishra \n Contact No.: +91 8082005377";

  // Open messaging app with pre-filled message
  var recipientNumber = "8454993967";
  var encodedMessage = encodeURIComponent(name + number + message);
  var smsUrl = "sms:" + recipientNumber + "?body=" + encodedMessage;
  window.location.href = smsUrl;
});
