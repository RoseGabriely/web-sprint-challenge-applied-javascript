import axios from "axios";

const Tabs = (topics) => {
  //creating a tabs component that takes in an array of topics and creates tabs for each of them
  const topicsDiv = document.createElement("div");
  topicsDiv.className = "topics";

  topics.forEach((topic) => {
    const tab = document.createElement("div");
    tab.className = "tab";
    tab.textContent = `${topic}`;
    topicsDiv.appendChild(tab);
  });

  return topicsDiv;
};

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

  axios
    .get(`http://localhost:5000/api/topics`)
    .then((res) => {
      document.querySelector(`${selector}`).appendChild(Tabs(res.data.topics));
    })
    .catch((err) => {
      console.log(err);
    });
};

export { Tabs, tabsAppender };
