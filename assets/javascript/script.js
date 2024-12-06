// ### JavaScript (Interactivity and Animations)
// javascript;
document.addEventListener("DOMContentLoaded", function () {
  // Show sections with transition on scroll
  const sections = document.querySelectorAll(".section");
  const revealSections = () => {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < window.innerHeight - 50) {
        section.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", revealSections);

  // Show/Hide Extra Information
  const moreInfoBtn = document.getElementById("more-info-btn");
  const extraInfo = document.getElementById("extra-info");

  moreInfoBtn.addEventListener("click", () => {
    if (extraInfo.classList.contains("hidden")) {
      extraInfo.classList.remove("hidden");
      moreInfoBtn.textContent = ">";
    } else {
      extraInfo.classList.add("hidden");
      moreInfoBtn.textContent = "^";
    }
  });

  // Initial check to show sections already in view
  revealSections();
});
const moreInfoBtn = document.getElementById("more");
const extraInfo = document.getElementById("e");

moreInfoBtn.addEventListener("click", () => {
  if (extraInfo.classList.contains("hidden")) {
    extraInfo.classList.remove("hidden");
    moreInfoBtn.textContent = "Get Started";
  } else {
    extraInfo.classList.add("hidden");
    moreInfoBtn.textContent = "More Info";
  }
});

// const ot = document.getElementById("ot");
// const p = document.getElementById("p");

// moreInfoBtn.addEventListener("click", () => {
//   if (extraInfo.classList.contains("hidden")) {
//     extraInfo.classList.remove("hidden");
//     moreInfoBtn.textContent = "Hide Info";
//   } else {
//     extraInfo.classList.add("hidden");
//     moreInfoBtn.textContent = "More Info";
//   }
// });

///contact form
document.getElementById("orderForm");
addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("opp").value;
  const Email = document.getElementById("lll").value;
  const YourMessage = document.getElementById("ppp");

  alert(
    `Thank you, ${name}! for reaching us will we get to your response a soon as possible ${Email} we  have send a message to your email`
  );
});

/// fading section ja
// // javascript;
// document.addEventListener("DOMContentLoaded", () => {
//   const faders = document.querySelectorAll(".fade-in");

//   const appearOptions = {
//     threshold: 0.5, // adjust based on how much should be visible before appearing
//     rootMargin: "0px 0px -50px 0px",
//   };

//   const appearOnScroll = new IntersectionObserver((entries, observer) => {
//     entries.forEach((entry) => {
//       if (!entry.isIntersecting) {
//         return;
//       } else {
//         entry.target.classList.add("show");
//         observer.unobserve(entry.target);
//       }
//     });
//   }, appearOptions);

//   faders.forEach((fader) => {
//     appearOnScroll.observe(fader);
//   });
// });

//contact 2

// // javascript;
// document.getElementById("orderForm").addEventListener("submit", function (e) {
//   e.preventDefault();
//   const name = document.getElementById("name").value;
//   const goods = document.getElementById("goods").value;

//   alert(`Thank you, ${name}! Your order for ${goods} has been placed.`);
// });

//testionamls

function submitTestimonial() {
  alert(
    "Thank you for your interest! Please contact us directly to submit your testimonial."
  );
}

// ### JavaScript (Interactivity and Animations)
// javascript;

//moving text
// const text = document.getElementById("movingText");
// let position = 0;

// function moveText() {
//   position++;
//   text.style.transform = `translateX(${position}px)`;
//   if (position > window.innerWidth) {
//     position = -text.offsetWidth; // Reset position to create a loop
//   }
//   requestAnimationFrame(moveText);
// }

//get strte
document.getElementById("getStartedBtn").addEventListener("click", function () {
  var form = document.getElementById("getStartedForm");
  if (form.style.display === "none" || form.style.display === "") {
    form.style.display = "flex";
  } else {
    form.style.display = "none";
  }
});
document.getElementById(`s`, () => {
  alert(
    "Thank you for your interest! Please contact us directly to submit your testimonial."
  );
});
document.getElementById(`please`).addEventListener(`click`, () => {
  window.location = `ifeanyi.htmlsetting`;
  7;
});
document.getElementById(`link`).addEventListener(`click`, () => {
  window.location = `about.html`;
});
