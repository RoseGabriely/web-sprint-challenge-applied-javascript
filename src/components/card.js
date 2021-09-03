import axios from "axios";

const Card = (article) => {
  // creating a card component that takes in an article object with headline, authorPhoto and authorName properties, and uses the properties to create a card for the article
  let card = document.createElement("div");
  card.className = "card";

  let headline = document.createElement("div");
  headline.className = "headline";
  headline.textContent = `${article.headline}`;

  let author = document.createElement("div");
  author.className = "author";

  let imgContainer = document.createElement("div");
  imgContainer.className = "img-container";

  let authorPic = document.createElement("img");
  authorPic.src = `${article.authorPhoto}`;

  let byAuthor = document.createElement("span");
  byAuthor.textContent = `By ${article.authorName}`;

  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(authorPic);
  author.appendChild(byAuthor);

  return card;
};

const cardAppender = (selector) => {
  // takes in article data and runs it through the card function to create component for each received article
  axios
    .get("http://localhost:5000/api/articles")
    .then((res) => {
      let articlesDictionary = res.data.articles;

      let classSelector = document.querySelector(`${selector}`);
      Object.entries(articlesDictionary).forEach(([key, articleArray]) => {
        articleArray.forEach((article) => {
          classSelector.appendChild(Card(article));
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export { Card, cardAppender };
