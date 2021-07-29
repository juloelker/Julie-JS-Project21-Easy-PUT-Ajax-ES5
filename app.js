const http = new easyHTTP();

//delete a post
http.delete(
  "https://jsonplaceholder.typicode.com/posts/1",
  function (err, response) {
    if (err) {
      console.log(err);
    } else {
      console.log(response);
    }
  }
);
