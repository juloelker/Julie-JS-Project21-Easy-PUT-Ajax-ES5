const http = new easyHTTP();

//PUT an update to a post
const data1 = {
  title: "Custom Post",
  body: "This is an update to a post.",
};

http.put(
  "https://jsonplaceholder.typicode.com/posts/100",
  data1,
  function (err, post) {
    if (err) {
      console.log(err);
    } else {
      console.log(post);
    }
  }
);
