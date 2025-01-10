fetch("https://api.example.com/data")
    .then(response => {
        console.log(response.data);
    })
    .catch(error => console.error("Error fetching data:", error));
    fetch("https://api.example.com/data")
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => console.log("Fetched data:", data)) 
    .catch(error => console.error("Error fetching data:", error));
    function fetchData() {
      fetch("https://jsonplaceholder.typicode.com/posts")
          .then(response => {
              if (!response.ok) {
                  throw new Error(`Failed to fetch. Status: ${response.status}`);
              }
              return response.json();
          })
          .then(data => {
              console.log("Data fetched successfully:", data);
            
              data.forEach(post => {
                  console.log(`Post ID: ${post.id}, Title: ${post.title}`);
              });
          })
          .catch(error => {
              console.error("Error during GET request:", error);
          });
  }
  

  fetchData();
  