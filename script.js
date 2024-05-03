const API_KEY = 'AIzaSyC93kQvP8OZ4FHwEb8WLQbXipZxRL9rBH8';

const form = document.getElementById('world-form');
const generatedText = document.getElementById('generated-text');

form.addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  const genre = document.getElementById('genre').value;
  const setting = document.getElementById('setting').value;
  const theme = document.getElementById('theme').value;

  // Assuming Story Forge provides a specific API endpoint for worldbuilding
  //const url = `https://api.storyforge.com/worldbuilding`; // Replace with correct endpoint

  // Prepare the request body with user


})
