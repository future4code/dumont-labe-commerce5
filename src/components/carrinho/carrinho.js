import React from 'react';
import styled from "styled-components";
import ItensCarrinho from "./ItensCarrinho";

const CarrinhoContainer = styled.div`
  border: 1px solid black;
  padding: 8px;
`;

const ListaProdutosContainer = styled.div`
  display: grid;
  gap: 4px;
`;

const Titulo = styled.h3`
 font-size: 1.5em;
 text-align: center;
`;

export default class Carrinho extends React.Component {

  valorTotalCompras = () => {
    let valorTotal = 0;

    for (let produto of this.props.produtosCarrinho) {
      valorTotal += produto.preco * produto.quantidade
    }
    return valorTotal;
  };

  render() {
    return (
      <CarrinhoContainer>
        <Titulo>Carrinho:</Titulo>
        <ListaProdutosContainer>
           {this.props.produtosCarrinho.map((produto) => {
            return <ItensCarrinho 
                    cartItem={produto} 
                    onRemoverProdutosdoCarrinho={this.props.onRemoverProdutosdoCarrinho}
                    />
            })} 
          <p>Valor total: R${this.valorTotalCompras()}</p>
        </ListaProdutosContainer>
      </CarrinhoContainer>
    );
  }
}