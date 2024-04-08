const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];

function loading() {
  quoteContainer.hidden = true;
  loader.hidden = false;
}

function complete() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

function newQuote() {
  loading();
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  if (!quote.author) {
    authorText.textContent = 'Unknown';
  } else {
    authorText.textContent = quote.author;
  }

  if (quote.text.length > 100) {
    quoteText.classList.add('long-quote');
  } else {
    quoteText.classList.remove('long-quote');
  }

  complete();
  quoteText.textContent = quote.text;
}

async function getQuotes() {
  loading();
  const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
  const response = await fetch(apiUrl);
  apiQuotes = await response.json();
  newQuote();
}

function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, '_blank');
}

newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

getQuotes();

  function updateTimestamp() {
    // Get the current date and time
    var currentDate = new Date();
    // Format the date and time as desired
    var formattedDate = currentDate.toLocaleString(); // Example format: "4/5/2024, 12:30:45 PM"
    // Update the content of the element with id "timestamp"
    document.getElementById("timestamp").textContent = formattedDate;
  }

  // Call the updateTimestamp function when the page loads
  window.onload = updateTimestamp;
