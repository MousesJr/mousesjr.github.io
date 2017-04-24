var button_lanches = document.querySelector('#button-lanches');
var button_petiscos = document.querySelector('#button-petiscos');
var button_bebidas = document.querySelector('#button-bebidas');
var button_resumo = document.querySelector('#button-resumo');
var button_terminar = document.querySelector('#button-terminar');
var table_lanches = document.querySelector('#lanches');
var table_petiscos = document.querySelector('#petiscos');
var table_bebidas = document.querySelector('#bebidas');
var pedidos = [];
function Pedido (item, preco) {
  var pedido = {
    item: item,
    preco: preco,
    contador: 0
  }
  return pedido;
}

button_lanches.onclick = function (event) {
  table_lanches.style.visibility = 'visible';
  table_bebidas.style.visibility = 'hidden';
  table_petiscos.style.visibility = 'hidden';
}

button_petiscos.onclick = function (event) {
  table_lanches.style.visibility = 'hidden';
  table_bebidas.style.visibility = 'hidden';
  table_petiscos.style.visibility = 'visible';
}

button_bebidas.onclick = function (event) {
  table_lanches.style.visibility = 'hidden';
  table_bebidas.style.visibility = 'visible';
  table_petiscos.style.visibility = 'hidden';
}

table_lanches.addEventListener('click', function (event) {
  var row = event.target.parentElement.parentElement.childNodes;
  console.log(row);
  var item = row[0].textContent;
  var preco = row[1].textContent;
  var novo = true;
  if (pedidos.length > 0) {
    for (var indice = 0; indice<pedidos.length; indice++) {
      pedido = pedidos[indice];
      console.log(pedidos);
      if(pedido.item==item) {
        pedido.contador++;
        novo = false;
      }
    }
  }
  if (novo) {
    var novopedido = Pedido(item, preco);
    pedidos.push(novopedido);
  }
});
