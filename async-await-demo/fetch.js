async function fetchData() {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon2/ditto')
    const data = await res.json()

    console.log("data", data)
  } catch(err) {
    console.log("Failed to fetch data.", err)
  }
}

fetchData()
