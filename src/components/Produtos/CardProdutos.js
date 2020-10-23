import React from "react";
import styled from "styled-components";
import { Produtos } from "./Produtos";

const CardContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;

const CardInfo = styled.div`
display: flex;
flex-direction:column;
padding: 16px;
margin-top: 5px;

p {
  margin: 5px 0;
}
`
const BotaoAddCarrinho = styled.button`
  align-self: center;
`

export default class CardProdutos extends React.Component {
  render (){
    const produto = this.props.produto
    return <CardContainer>
    <img src={produto.img}/>
      <CardInfo>
        <p>{produto.nome}</p>
        <p>R${produto.preco},00 </p>
        <BotaoAddCarrinho onClick={() => this.props.onAddProdutoCarrinho(produto.id)}> Adicionar ao carrinho </BotaoAddCarrinho>
      </CardInfo>
    </CardContainer>
  }
}
