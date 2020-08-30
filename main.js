//variables


const quote = document.getElementById('quote');
const author = document.getElementById('author');

(function () { setInterval(getQuote, 10000) })();

getQuote();

function getQuote(){
    fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // console.log(data);
    let index = Math.floor(Math.random() * data.length);
    // console.log(index);
    quote.textContent = data[index].text;
    author.textContent = data[index].author;
    
  });
}








  
