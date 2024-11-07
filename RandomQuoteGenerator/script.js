const output = document.getElementById("quote");
const getQuote = document.getElementById("getQuote");

async function fetchRandomQuote() {
  const apiUrl = "https://quotes-api-self.vercel.app/quote";

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch quote");
    }

    const data = await response.json();
    output.textContent = `${data.quote} - ${data.author}`;
  } catch (error) {
    console.error(error);
    output.textContent = "Sorry, could not fetch a quote.";
  }
}

getQuote.addEventListener("click", fetchRandomQuote);
