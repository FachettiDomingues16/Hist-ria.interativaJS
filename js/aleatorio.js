 function aleatorio(lista){
  const posicao = Math.random()*lista.length;
  return lista[Math.floor(posicao)];
}