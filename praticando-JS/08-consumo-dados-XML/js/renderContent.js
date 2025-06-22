function renderContent(imagem, desc) {
  const itemImg = document.createElement("img")
  const p = document.createElement("p")
  const app = document.getElementById('app')

  itemImg.src = imagem
  app.appendChild(itemImg)

  p.textContent = desc
  p.style.marginBottom = '26px'
  app.appendChild(p)
}