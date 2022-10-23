const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function complete() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

function newQuote() {
  loading();
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];

  if (quote.text.length > 50) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }

  authorText.textContent = quote.author;
  quoteText.textContent = quote.text;
  complete();
}

function clicked() {
  if (img == 1) {
    document.getElementById("img").style.display = "inline";
    return (img = 0);
  } else {
    document.getElementById("img").style.display = "none";
    return (img = 1);
  }
}

const audio = new Audio();
audio.src = "./assets/audio/gta.mp3";

function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}

newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

newQuote();
