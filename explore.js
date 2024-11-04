"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".introduction button"); // Select the button
  const slideshowContainer = document.getElementById("slideshow-container"); // Select the slideshow container

  button.addEventListener("click", function () {
    slideshowContainer.style.display = "grid"; // Show the images
    // Use requestAnimationFrame to wait for the display change to take effect
    requestAnimationFrame(() => {
      const images = slideshowContainer.querySelectorAll(".img-container");
      images.forEach((img, index) => {
        // Delay each image's appearance based on its index
        img.style.animationDelay = `${index * 1}s`;
        img.classList.add("visible"); // Stagger the animations
      });
    });
  });
});
