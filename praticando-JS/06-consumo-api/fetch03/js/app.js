const urlAPI = 
  "https://pokeapi.co/api/v2/pokemon?limit=82&offset=0"

fetch(urlAPI).then((response) =>
  response.json().then((resp) => inner('app', resp.results)))
