import "./style.css";
import hintsJson from "./hints.json";

(function initializeHintBoard() {
  const hintBoard = {
    init: function () {
      this.cacheDom();
      this.setUpEventListeners();
    },

    cacheDom: function () {
      this.hint1Text = document.getElementById("hint1-text");
      this.hint1Pic = document.getElementById("hint1-pic");
      this.hint2Text = document.getElementById("hint2-text");
      this.hint2Pic = document.getElementById("hint2-pic");
      this.hint3Text = document.getElementById("hint3-text");
      this.hint3Pic = document.getElementById("hint3-pic");
    },

    setUpEventListeners: function () {
      this.newGameBtn = document.getElementById("new-game-btn");
      this.newGameBtn.addEventListener("click", this.newGame.bind(this));

      // this.resetBtn = document.getElementById("reset-btn");
      // this.resetBtn.addEventListener("click", this.resetHints.bind(this));
    },

    newGame: function () {
      const hintsData = hintsJson;
      console.log("hintsData:", hintsData);
      // Clone the original themes array to avoid modifying the original data
      const themes = JSON.parse(hintsData);
      console.log("themes:", themes);
      // Take the object and put it into an array
      const themesArray = themes.themes;
      console.log("themesArray:", themesArray);

      // Initialize an array to store the selected hints
      const selectedHints = [];

      // Function to get a random index from an array
      const getRandomIndex = (array) =>
        Math.floor(Math.random() * array.length);

      // Loop three times to select three themes
      for (let i = 0; i < 3; i++) {
        // If there are no more themes, break out of the loop
        if (themesArray.length === 0) break;

        // Get a random index for the themes array
        const randomThemeIndex = getRandomIndex(themesArray);
        console.log("randomThemeIndex:", randomThemeIndex);

        // Get the selected theme
        const selectedTheme = themesArray[randomThemeIndex];

        // Get a random index for the hints array within the selected theme
        const randomHintIndex = getRandomIndex(selectedTheme.hints);

        // Get the selected hint from the theme
        const selectedHint = selectedTheme.hints[randomHintIndex];

        // Add the selected hint to the array
        selectedHints.push(selectedHint);

        // Remove the selected theme from the pool
        themesArray.splice(randomThemeIndex, 1);
      }

      // Log the selected hints (you can modify this part based on your needs)
      console.log("Selected Hints:", selectedHints);

      // Render the selected hints on the UI (you can implement the rendering logic here)
      this.renderHints(selectedHints);
    },

    renderHints: function (hints) {
      // Example: Log the selected hints to the hint elements
      this.hint1Text.textContent = `${hints[0].text}`;
      this.hint2Text.textContent = `${hints[1].text}`;
      this.hint3Text.textContent = `${hints[2].text}`;

      // Clear the pictures
      this.hint1Pic.innerHTML = "";
      this.hint2Pic.innerHTML = "";
      this.hint3Pic.innerHTML = "";

      // Set the source of the hint image using require.context
      const context = require.context("../images", true, /\.(png|jpe?g|gif)$/);
      console.log("Context of hint 1 image:", context(`.${hints[0].image}`));

      // Create a new img element
      const hint1Img = document.createElement("img");
      const hint2Img = document.createElement("img");
      const hint3Img = document.createElement("img");

      // Set the source of the hint image
      const hint1ImgPath = context(`./${hints[0].image}`);
      const hint2ImgPath = context(`./${hints[1].image}`);
      const hint3ImgPath = context(`./${hints[2].image}`);

      hint1Img.src = hint1ImgPath.default;
      hint2Img.src = hint2ImgPath.default;
      hint3Img.src = hint3ImgPath.default;

      // Append the image
      this.hint1Pic.appendChild(hint1Img);
      this.hint2Pic.appendChild(hint2Img);
      this.hint3Pic.appendChild(hint3Img);
    },
  };

  hintBoard.init();

  return hintBoard;
})();
