"use-strict";

const projects = document.querySelectorAll(".project__box");

projects.forEach((project) => {
  const height = project.clientHeight;
  const width = project.clientWidth;
  const aspectRatio = width / height;
  let animationFrameId = null;

  project.addEventListener("mousemove", (evt) => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }

    animationFrameId = requestAnimationFrame(() => {
      const { layerX, layerY } = evt;

      let yRotation = ((layerX - width / 2) / width) * 25;
      let xRotation = ((layerY - height / 2) / height) * 25;

      if (project.classList.contains("project--mobile")) {
        yRotation = ((layerX - width / 2) / width) * 30;
        xRotation = (((layerY - height / 2) / height) * 10) / aspectRatio;
      }

      const transformString = `
        perspective(50rem)
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

    project.style.transform = `
      perspective(50rem)
      scale(1)
      rotateX(0)
      rotateY(0)`;
  });
});
