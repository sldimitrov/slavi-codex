async function someLogger() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("2")
    }, 1000)
  })
}

console.log("1")
someLogger().then((result) => {
  console.log(result);
});
console.log("3")
