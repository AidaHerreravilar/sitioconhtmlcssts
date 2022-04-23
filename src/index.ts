let precioUnitario: number[] = [145, 85, 100, 105, 210];
let cargarProductos = () => {
  for (let i =0; i < stock.length; i++) {
    let divProducto = document.createElement("div");
    divProducto.classList.add("item-producto");
    divProducto.id = producto-${i};
    let nombreProducto = document.createElement("p");
    nombreProducto.innerHTML = ´${precioUnitario[i]}´;
    let selectorCantidad = document.createElement("input");
    selectorCantidad.id = ´selector-cantidad-${i}´;
    selectorCantidad.type = "number";
    selectorCantidad.max = String(stock[i]);
    selectorCantidad.min = "0";
    divProducto.appendChild(nombreProducto);
    divProducto.appendChild(precioProducto);
    divProducto.appendChild(selectorCantidad);
    containerProductos.appendChild(divProducto);
  }
.productos {
  color: rgb(202, 73, 13);
  text-align: center;
  padding: 30px;
  margin: 30px;
}
