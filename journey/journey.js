"use strict";

export function initializeSlider(images) {
  // Read more button
  const showInfo = document.getElementById("more"); //Info <div>
  const btn = document.getElementById("read"); // Button

  btn.addEventListener("click", function () {
    // Show Message
    if (showInfo.style.display === "none" || showInfo.style.display === "") {
      showInfo.style.display = "block";
      btn.innerHTML = "Hide <i class='arrow up'></i>";
    } else {
      //Hide Message
      showInfo.style.display = "none";
      btn.innerHTML = "Read more <i class='arrow down'></i>";
    }
  });

  // Index for current image
  let currentIndex = 0;
  let intervalId;

  function changeImage() {
    document.getElementById("slideshow").src = images[currentIndex].src;
    document.getElementById("caption").innerText = images[currentIndex].caption;

    // Update the indicators
    const indicators = document.querySelectorAll(".indicator");
    indicators.forEach((indicator, index) => {
      indicator.classList.remove("active-indicator");
      if (index === currentIndex) {
        indicator.classList.add("active-indicator");
      }
    });
  }

  // Move to the next image
  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    changeImage();
    resetInterval();
  }

  // Move to the previous image
  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    changeImage();
    resetInterval();
  }

  function currentSlide(index) {
    currentIndex = index; // Set the current index based on the indicator clicked
    changeImage();
    resetInterval();
  }

  // Clear the existing interval and start again
  function resetInterval() {
    clearInterval(intervalId);
    intervalId = setInterval(nextImage, 3000);
  }

  // Event listeners for navigation buttons
  document.querySelector(".left-arrow").addEventListener("click", prevImage);
  document.querySelector(".right-arrow").addEventListener("click", nextImage);

  // Add click listeners to indicators
  document.querySelectorAll(".indicator").forEach((indicator, index) => {
    indicator.addEventListener("click", () => currentSlide(index));
  });

  changeImage();
  resetInterval();
}
