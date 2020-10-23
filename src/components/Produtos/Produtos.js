import React from "react";
import { CardProdutos } from "./CardProdutos";
import styled from "styled-components";

const ProdutosContainer = styled.div`
  border: 1px solid blue;
`
const ProdutosHeader = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`
const ProdutosGrid = styled.div `
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;
`

export class Produtos extends React.Component {
  render (){
  return (
    <ProdutosContainer>
      <ProdutosHeader>
          <p> Quantidade de Produtos: 8 </p>
          <label>
            Ordenação:
                <select>
              <option>Crescente</option>
              <option>Decrescente</option>
            </select>
          </label>
        </ProdutosHeader>
        <ProdutosGrid>
          {this.props.produtos.map((produto) => {
            return <CardProdutos produto={produto}/>
          })}
        </ProdutosGrid>
    </ProdutosContainer>
  );
}
}
export default Produtos;