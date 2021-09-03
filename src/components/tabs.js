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
  //getting topics from an API and putting them into the tab component to create a tab that is appended to a passed in selector
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
