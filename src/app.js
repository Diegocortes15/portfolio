"use strict";

/** Cursor */

const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");
let isHover = false;
let cursorAnimationFrameId = null;

function updateCursorPos(e) {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.transform = `translate(${posX - 2.5}px, ${posY - 2.5}px)`;

  if (!isHover) {
    cursorOutline.style.transform = `translate(${posX - 10}px, ${posY - 10}px)`;
    cursorOutline.classList.remove("screen-cursor-outline--hover");
  } else {
    cursorOutline.style.transform = `translate(${posX - 25}px, ${posY - 25}px)`;
    cursorOutline.classList.add("screen-cursor-outline--hover");
  }
}

document.addEventListener("mousemove", (e) => {
  if (cursorAnimationFrameId) {
    cancelAnimationFrame(cursorAnimationFrameId);
  }
  cursorAnimationFrameId = requestAnimationFrame(() => {
    updateCursorPos(e);
  });
});

document.addEventListener("mouseover", (e) => {
  if (e.target.closest("a") || e.target.closest(".navigation__button")) {
    // The mouse is over an anchor element (link)
    isHover = true;
  }
});

document.addEventListener("mouseout", (e) => {
  if (e.target.closest("a") || e.target.closest(".navigation__button")) {
    // The mouse left an anchor element (link)
    isHover = false;
  }
});

/** Preloader */

const preloader = document.querySelector("#preloader");
window.addEventListener("load", function () {
  setTimeout(() => {
    preloader.style.display = "none";
  }, 1000);
});

/** Words */

const words = document.querySelectorAll(".rol-word");
const wordArray = [];
let currentWord = 0;

words[currentWord].style.opacity = 1;
for (let i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  const cw = wordArray[currentWord];
  const nw =
    currentWord == words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];
  for (let i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }

  for (let i = 0; i < nw.length; i++) {
    nw[i].className = "letter behind";
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }

  currentWord = currentWord == wordArray.length - 1 ? 0 : currentWord + 1;
}

function animateLetterOut(cw, i) {
  setTimeout(function () {
    cw[i].className = "letter out";
  }, i * 80);
}

function animateLetterIn(nw, i) {
  setTimeout(function () {
    nw[i].className = "letter in";
  }, 340 + i * 80);
}

function splitLetters(word) {
  const content = word.innerHTML;
  word.innerHTML = "";
  const letters = [];
  for (let i = 0; i < content.length; i++) {
    const letter = document.createElement("span");
    letter.className = "letter";
    letter.innerHTML = content.charAt(i) === " " ? "&nbsp;" : content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }

  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 6000);

const projects = document.querySelectorAll(".project__box");

projects.forEach((project) => {
  const height = project.clientHeight;
  const width = project.clientWidth;
  const aspectRatio = width / height;
  let animationFrameId = null;

  project.addEventListener("mousemove", ({ layerX, layerY }) => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }

    animationFrameId = requestAnimationFrame(() => {
      let yRotation = ((layerX - width / 2) / width) * 30;
      let xRotation = ((layerY - height / 2) / height) * 30;

      if (project.classList.contains("project--mobile")) {
        yRotation = ((layerX - width / 2) / width) * 30;
        xRotation = (((layerY - height / 2) / height) * 17) / aspectRatio;
      }

      const transformString = `
        perspective(70rem)
        scale3d(1.1, 1.1, 1.1)
        rotateX(${xRotation}deg)
        rotateY(${yRotation}deg)`;

      project.style.transform = transformString;
    });
  });

  project.addEventListener("mouseout", () => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
    project.style.transform = `
        scale3d(1, 1, 1)
        rotateX(0deg)
        rotateY(0deg)`;
  });
});

const projectObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("project-show");
      setTimeout(() => {
        entry.target.classList.remove("project-hidden");
      }, 500);
    } else {
      entry.target.classList.add("project-hidden");
    }
  });
});
const projectsHidden = document.querySelectorAll(".project-hidden");
projectsHidden.forEach((project) => projectObserver.observe(project));

const navigationMobileLinks = document.querySelectorAll(
  ".nav-mobile__list--link"
);
const navigationCheckbox = document.querySelector("#navigation__toggle");

navigationMobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navigationCheckbox.checked = false;
  });
});
