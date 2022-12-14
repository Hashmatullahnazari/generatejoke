
  // Define an array of jokes
  const jokes = [
    "Why couldn't the bicycle stand up by itself? Because it was two-tired!",
    "What's brown and sticky? A stick!",
    "Why was the math book sad? Because it had too many problems!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why couldn't the leopard play hide and seek? Because he was always spotted!"
  ];

  // Function to generate a random joke
  function generateJoke() {
    // Generate a random index between 0 and the length of the jokes array
    const index = Math.floor(Math.random() * jokes.length);

    // Get the joke at the random index
    const joke = jokes[index];

    // Update the text in the <p> tag with the joke
    document.getElementById("joke-output").innerText = joke;
  }
