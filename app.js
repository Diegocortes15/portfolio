"use strict";

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
      let yRotation = ((layerX - width / 2) / width) * 25;
      let xRotation = ((layerY - height / 2) / height) * 25;

      if (project.classList.contains("project--mobile")) {
        yRotation = ((layerX - width / 2) / width) * 30;
        xRotation = (((layerY - height / 2) / height) * 10) / aspectRatio;
      }

      const transformString = `
        perspective(70rem)
        scale(1.1)
        rotateX(${xRotation}deg)
        rotateY(${yRotation}deg)`;

      project.style.transform = transformString;
    });
  });

  project.addEventListener("mouseout", () => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }

    project.style.transform = "";
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
