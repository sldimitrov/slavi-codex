function getUser(callback) {
  setTimeout(() => {
    callback({ id: 1, name: "Ivan" });
  }, 1000);
}

function getComments(post, callback) {
  setTimeout(() => {
    callback(["Nice post!", "Great!"]);
  }, 1000);
}

function getPosts(userId, callback) {
  setTimeout(() => {
    callback(["Post 1", "Post 2"]);
  }, 1000);
}

getUser((user) => {
  console.log("User:", user);

  getPosts(user.id, (posts) => {
    console.log("Posts:", posts);

    getComments(posts[0], (comments) => {
      console.log("Comments:", comments);
    });

  });
});

