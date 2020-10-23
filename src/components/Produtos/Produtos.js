import React from "react";
import CardProdutos from "./CardProdutos";
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

export default class Produtos extends React.Component {
  pegarOrdenarEFiltrarLista = () => {
    return this.props.produtos
      .filter((produto) => produto.preco < this.props.filtroMinimo)
      .filter((produto) => produto.preco > this.props.filtroMaximo)
      .filter((produto) => produto.nome.includes(this.props.filtroBuscar) < this.props.maxValue)
      .sort((a, b) => this.state.sort === "CRESCENTE" ? a.produto - b.produto : b.produto - a.produto)
  }
  onChangeSort = (event) => {
    this.setState({sort: event.target.value})
  }
    state = {
    sort: 'CRESCENTE'
  }
  
  render (){
    const ordenarEFiltrarLista = this.pegarOrdenarEFiltrarLista()
    return (
      <ProdutosContainer>
        <ProdutosHeader>
            <p> Quantidade de Produtos: {ordenarEFiltrarLista.lenght} </p>
            <label>
              Ordenação:
                  <select value={this.state.sort} onChange={this.onChangeSort}>
                <option value={'CRESCENTE'}>Crescente</option>
                <option value={'DECRESCENTE'}>Decrescente</option>
              </select>
            </label>
          </ProdutosHeader>
          <ProdutosGrid>
            {ordenarEFiltrarLista.map((produto) => {
              return <CardProdutos 
              produto={produto}
              onAddProdutoCarrinho = {this.props.onAddProdutoCarrinho}
              />
            })}
          </ProdutosGrid>
      </ProdutosContainer>
    );
  }
}
