function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsElement = document.querySelector("#user-instructions");
  let apiKey = "60at455d3d23aedc50eab463bf1f843o";
  let context = `Generate a poem about ${instructionsElement.value}`;
  let prompt =
    "You are an amazing and love to write poetry. your mission is to generate a 4 line poem and separate each line with a <br/>, based on the topic the user provides. Make sure to stick to the user topic";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem");

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
