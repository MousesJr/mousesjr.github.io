console.log("main");
function Livro(valor, titulo, autor, editora, categoria, prateleiraLoja, corredorEstoque, prateleiraEstoque, corredorLoja, disponibilidadeNoEstoque=true, disponibilidadenNaLoja=true, encomendado=false, vendido=false){
  this.disponibilidadeNoEstoque = disponibilidadeNoEstoque;
  this.disponibilidadenNaLoja = disponibilidadenNaLoja;
  this.valor = valor;
  this.prateleiraLoja = prateleiraLoja;
  this.prateleiraEstoque = prateleiraEstoque;
  this.encomendar = function encomendar(){
    if(valor>=150){
      if(vendido===true){
        this.encomendado = !encomendado;
        document.write("Encomenda realizada com sucesso:\nLivro : "+titulo+""+"-"+". Editora"+editora);
        return ['Encomenda realizada com sucesso!'];
      } else {
        throw "O valor da compra excede os R$150 tolerados para encomenda. Por favor, efetue o pagamento para fazer a encomenda."
      }
    } else {
      this.encomendado=!encomendado;
      document.write("Encomenda realizada com sucesso:\nLivro: "+titulo+""+"-"+". Editora"+editora);
      return ['Encomenda realizada com sucesso!(Favor fazer o no caixa na retirada do livro, Obrigado!)']
    }
  };
  this.vender = function vender(pagamento=valor){
    if(pagamento>this.valor){
      var troco =  pagamento - this.valor;
      this.vendido = true;
      document.write("Venda realizada com sucesso:\nLivro: "+titulo+"-"+". Editora:"+editora);
      return [`Pagamento realizado com sucesso! Troco: R$${troco}`];
    } else if(pagamento==this.valor){
      this.vendido=true;
      document.write("Venda realizada com sucesso:\nLivro: "+titulo+"-"+". Editora:"+editora);
      return ["Pagamento realizado com sucesso!"]
    }else if(pagamento<this.valor){
      throw "Pagamento inválido! Por favor, pague o valor total do livro."
    }
  }
  this.tempoLimite = function tempoLimite(){
    this.tempoLimite = true;
    if(vendido===false){
      disponibilidadenNaLoja=true;
      disponibilidadeNoEstoque=false;
      document.write("Livro posto na loja para venda por esgotamento do tempo de espera para retirada:\n Livro: "+titulo+"-"+autor+". Editora:"+editora);
      return ["Livro posto para venda, na loja, com sucesso!"];
    }
  }
  this.promocao = function promocao(){
    this.valor = valor - (valor*0.3);
    document.write("Desconto de 30% dado no valor do livro "+titulo+" de "+autor+" da editora "+editora);
    return [`Desconto: R$${valor*0.3}`];
  }
  this.blackFriday = function blackFriday(){
    this.valor = valor - (valor*0.8);
    document.write("Desconto de 80% dado no valor do livro "+titulo+" de "+autor+" da editora "+editora);
    return[`Desconto: R$${valor*0.8}`];
  }
  this.valePresente = function valePresente(){
    this.valor = valor - (valor*0.1);
    document.write("Desconto de 10% dado no valor do livro "+titulo+" de "+autor+" da editora "+editora);
    return[`Desconto: R$${valor*0.1}`];
  }
  this.indisponibilizar = function indisponibilizar(){
      this.disponibilidadeNoEstoque = false;
      this.disponibilidadenNaLoja = false;
      this.prateleiraLoja = 0;
      this.prateleiraEstoque = 0;
      this.corredorLoja = 0;
      this.corredorEstoque = 0;
      document.write("[INDÍSPONIVEL]:\n Livro: "+titulo+"-"+autor+". Editora: "+editora);
  }
  this.disponibilizar = function disponibilizar(){
    this.disponibilidadenNaLoja = true;
    this.disponibilidadeNoEstoque = true;
    this.prateleiraLoja = prateleiraLoja;
    this.prateleiraEstoque = prateleiraEstoque;
    this.corredorLoja = corredorLoja;
    this.corredorEstoque = corredorEstoque;
    document.write("[DISPONÍVEL]:\n Livro: "+titulo+"-"+autor+". Editora: "+editora);
  }
}
