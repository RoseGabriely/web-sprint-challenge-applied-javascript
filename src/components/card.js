const Card = (article) => {
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
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
};

export { Card, cardAppender };
