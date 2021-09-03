const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `titleDiv`, `dateDiv` and `tempDiv` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ dateDiv }</span>
  //    <h1>{ titleDiv }</h1>
  //    <span class="temp">{ tempDiv }</span>
  //  </div>
  //
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

  header.appendChild(dateDiv);
  header.appendChild(titleDiv);
  header.appendChild(tempDiv);

  return header;
};

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
};

export { Header, headerAppender };
