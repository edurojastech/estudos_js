function inner(item, array) {
  const app = document.getElementById(item)
  console.log(array)
  return (
    app.innerHTML = array.map((i, index) => figure(i.name, index)).join("")
  );
}
