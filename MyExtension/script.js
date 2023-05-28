var apiKey = 'ecf9b59cc7664685a9d5253f6dcb211f';
var pageNumber = 1;
var pageSize = 50;

function fetchNews() {
  var url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}&pageSize=${pageSize}&page=${pageNumber}`;

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      displayRandomArticle(data.articles);
    })
    .catch(function(error) {
      console.log(error);
    });
}

function displayRandomArticle(articles) {
  var randomIndex = Math.floor(Math.random() * articles.length);
  var randomArticle = articles[randomIndex];

  var newsList = document.getElementById('news-list');
  var li = document.createElement('li');
  li.textContent = randomArticle.title;
  newsList.appendChild(li);
}

document.addEventListener('DOMContentLoaded', function() {
  fetchNews();
});

