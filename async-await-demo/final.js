function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Ivan" });
    }, 500);
  })
}

function getComments(post) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Nice post!", "Great!"]);
    }, 500);
  })
}

function getPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Post 1", "Post 2"]);
    }, 500);
  })

}

async function getData() {
  const user = await getUser();
  const posts = await getPosts(user.id);
  const comments = await getComments(posts[0]);

  console.log(comments);
}

getData()
