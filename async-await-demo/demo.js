function someLogger() {
  setTimeout(() => {
    console.log("2")
  }, 1000)
}

console.log("1")
someLogger();
console.log("3")
