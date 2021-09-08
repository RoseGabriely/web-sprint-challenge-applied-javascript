const Header = (title, date, temp) => {
  //creating header elements
  const header = document.createElement("div");
  header.setAttribute("class", "header");

  const dateDiv = document.createElement("span");
  dateDiv.setAttribute("class", "date");
  dateDiv.textContent = `${date}`;

  const titleDiv = document.createElement("h1");
  titleDiv.textContent = `${title}`;

  const tempDiv = document.createElement("span");
  tempDiv.className = "temp";
  tempDiv.textContent = `${temp}`;

  //appending elements to the header element
  header.appendChild(dateDiv);
  header.appendChild(titleDiv);
  header.appendChild(tempDiv);

  return header;
};

const headerAppender = (selector) => {
  //returning a selector with a header component appended to it
  return document
    .querySelector(`${selector}`)
    .appendChild(Header("Lambda Times", "January 6, 2021", "26°"));
};

export { Header, headerAppender };
