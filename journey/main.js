"use strict";

import { initializeSlider } from "./journey.js";

// Configuration for each page
const pageConfigs = {
  japan: {
    images: [
      {
        src: "../Image/japan/japan-image1.jpg",
        caption: "Shinjuku Gyoen National Garden",
      },
      { src: "../Image/japan/japan-image2.jpg", caption: "Tokyo Tower" },
      { src: "../Image/japan/japan-image3.jpg", caption: "Meiji Shrine" },
      {
        src: "../Image/japan/japan-image4.jpg",
        caption: "Akihabara Electric Town",
      },
      {
        src: "../Image/japan/japan-image5.jpg",
        caption: "Tsukiji Outer Market",
      },
      {
        src: "../Image/japan/japan-image6.jpg",
        caption: "Asakusa and Senso-ji Temple",
      },
      { src: "../Image/japan/japan-image7.jpg", caption: "Shibuya Crossing" },
    ],
  },
  hungary: {
    images: [
      {
        src: "../Image/budapest/budapest-image1.jpg",
        caption: "Buda Castle",
      },
      {
        src: "../Image/budapest/budapest-image2.jpg",
        caption: "Fisherman’s Bastion",
      },
      {
        src: "../Image/budapest/budapest-image3.jpg",
        caption: "Parliament Building",
      },
      {
        src: "../Image/budapest/budapest-image4.jpg",
        caption: "St. Stephen’s Basilica",
      },
      {
        src: "../Image/budapest/budapest-image5.jpg",
        caption: "Heroes' Square",
      },
    ],
  },
  austria: {
    images: [
      {
        src: "../Image/vienna/vienna-image1.jpg",
        caption: "Schönbrunn Palace",
      },
      {
        src: "../Image/vienna/vienna-image2.jpg",
        caption: "Belvedere Palace",
      },
      {
        src: "../Image/vienna/vienna-image3.jpg",
        caption: "Vienna State Opera",
      },
      {
        src: "../Image/vienna/vienna-image4.jpg",
        caption: "MuseumsQuartier",
      },
      {
        src: "../Image/vienna/vienna-image5.jpg",
        caption: "Naschmarkt",
      },
      {
        src: "../Image/vienna/vienna-image6.jpg",
        caption: "Hundertwasserhaus",
      },
    ],
  },
  germany: {
    images: [
      {
        src: "../Image/munich/munich-image1.jpg",
        caption: "Marienplatz and the New Town Hall",
      },
      {
        src: "../Image/munich/munich-image2.jpg",
        caption: "Nymphenburg Palace",
      },
      {
        src: "../Image/munich/munich-image3.jpg",
        caption: "English Garden",
      },
      {
        src: "../Image/munich/munich-image4.jpg",
        caption: "Munich Residenz",
      },
      {
        src: "../Image/munich/munich-image5.jpg",
        caption: "Viktualienmarkt",
      },
      {
        src: "../Image/munich/munich-image6.jpg",
        caption: "Deutsches Museum",
      },
    ],
  },
};

// Determine the current page and initialize the slider
const currentPage = window.location.pathname.split("/").pop().split(".")[0]; // Get page name without extension

if (pageConfigs[currentPage]) {
  initializeSlider(pageConfigs[currentPage].images);
}
