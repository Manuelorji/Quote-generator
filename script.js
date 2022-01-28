const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const quoteBox = document.getElementById("quote-box");

setInterval(nextQuote, 10000);
const data = [];
let currentIndex = 0;

function loadQuotes() {
  fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((finalResult) => {
      data.push(...finalResult);
      getQuotes();
    })
    .catch((error) => console.log(error));
}

loadQuotes();

function getQuotes(index = 0) {
  quoteBox.innerHTML += `
      <div class="quote">
        <p>${data[index].text}</p>
        <p>${!data[index].author ? "Unknown" : data[index].author}</p>
      <div>
    `;
}
{
  /* <span>Current Index: ${currentIndex}</span> */
}

// disable button for the first quote
if (currentIndex === 0) {
  prevBtn.classList.add("disabled");
}

// disable button for the last quote
if (currentIndex === data.length - 1) {
  nextBtn.classList.add("disabled");
}

//show previous quotes
function prevQuote() {
  //check if it's first quote
  if (currentIndex === 1) {
    prevBtn.classList.add("disabled");
  }

  const newIndex = currentIndex - 1;

  currentIndex = newIndex;

  getQuotes(newIndex);
}

//show next quotes
function nextQuote() {
  //check if it's first quote
  if (currentIndex === 0) {
    prevBtn.classList.remove("disabled");
  }
  //check if it is last quote
  if (currentIndex === data.length - 1) {
    nextBtn.c;
  }

  const newIndex = currentIndex + 1;
  currentIndex = newIndex;

  getQuotes(newIndex);
}

prevBtn.addEventListener("click", prevQuote);
nextBtn.addEventListener("click", nextQuote);
