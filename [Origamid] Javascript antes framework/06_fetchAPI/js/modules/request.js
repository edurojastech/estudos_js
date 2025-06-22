const user = {
  id: 1001,
  name: "Eduardo Rojas",
  username: "EduRojas",
  email: "dudu@april.biz",
}

export const Requisicao = {
  method: 'POST',
  body: JSON.stringify(user),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
}

