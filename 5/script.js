
const apiUrl = "https://api.example.com/data";

function fetchData(url) {
  fetch(url)
    .then((response) => {
      if (response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
}

fetchData(apiUrl);


function postData(url, data) {}

const dataToPost = {
  name: "John Doe",
  age: 21,
};

postData(apiUrl, dataToPost);