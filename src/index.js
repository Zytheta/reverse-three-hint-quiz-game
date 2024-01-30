import "./style.css";

const reverseThreeHintQuiz = (function () {
  let hintsData; // Variable to store the loaded JSON data

  const fetchData = async () => {
    try {
      const response = await fetch("/src/hints.json");
      hintsData = await response.json();
      return hintsData;
    } catch (error) {
      console.error("Error loading hints.json:", error);
    }
  };

  const hintBoard = {
    init: function () {
      this.cacheDom();
      //   this.render();
      this.setUpEventListeners();
      fetchData();
    },

    cacheDom: function () {
      this.hint1Text = document.getElementById("hint1-text");
      this.hint2Text = document.getElementById("hint2-text");
      this.hint3Text = document.getElementById("hint3-text");

      console.log("This hint1Text test:" + this.hint1Text);
    },

    setUpEventListeners: function () {
      this.newGameBtn = document.getElementById("new-game-btn");
      this.newGameBtn.addEventListener("click", this.newGame.bind(this));

      console.log("This newGameBtn test:" + this.newGameBtn);

      //   this.resetBtn = document.getElementById("reset-btn");
      //   this.resetBtn.addEventListener("click", this.resetHints.bind(this));
    },

    newGame: function () {
      // Clone the original themes array to avoid modifying the original data
      const themes = JSON.parse(JSON.stringify(hintsData.themes));

      // Initialize an array to store the selected hints
      const selectedHints = [];

      // Function to get a random index from an array
      const getRandomIndex = (array) =>
        Math.floor(Math.random() * array.length);

      // Loop three times to select three themes
      for (let i = 0; i < 3; i++) {
        // If there are no more themes, break out of the loop
        if (themes.length === 0) break;

        // Get a random index for the themes array
        const randomThemeIndex = getRandomIndex(themes);

        // Get the selected theme
        const selectedTheme = themes[randomThemeIndex];

        // Get a random index for the hints array within the selected theme
        const randomHintIndex = getRandomIndex(selectedTheme.hints);

        // Get the selected hint from the theme
        const selectedHint = selectedTheme.hints[randomHintIndex];

        // Add the selected hint to the array
        selectedHints.push(selectedHint);

        // Remove the selected theme from the pool
        themes.splice(randomThemeIndex, 1);
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

      // You can similarly update hint2Text and hint3Text
    },

    // render: function () {},
  };

  return {
    hintBoard: hintBoard,
  };
})();

reverseThreeHintQuiz.hintBoard.init();
