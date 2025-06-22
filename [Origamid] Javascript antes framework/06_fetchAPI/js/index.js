import { Requisicao } from "./modules/request.js"

const urlUsers = "https://jsonplaceholder.typicode.com/users"
const urlPosts = "https://jsonplaceholder.typicode.com/posts"
const urlUser = (id) => "https://jsonplaceholder.typicode.com/users?id="+id


// FETCH NORMAL
// fetch(urlUsers)
//   .then(resp => resp.json())
//   .then(json => {
//     console.log(json)
//   })

// FETCH com Async e Await
async function fetchUsers(apiUrl) {
  const resp = await fetch(apiUrl)
  const json = await resp.json()
  const status = resp.status
  console.log({...json[0]})
  console.log( status == 200 ? 'Solicitação bem sucedida!' : 'Erro!')
 
}

// METHOD POST
async function postUser(apiUrl, payload) {
  const resp = await fetch(apiUrl, payload)
  const json = await resp.json()
  console.log('CADASTRO EFETUADO: ', json)
}



await postUser(urlPosts, Requisicao)
await fetchUsers(urlUsers)
await fetchUsers(urlUser(4))