import React from "react";
import CardProdutos from "../Produtos/CardProdutos";
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
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding: 16px;
`

export default class Produtos extends React.Component {
  state = {
    sort: 'CRESCENTE'
  }

  pegarOrdenarEFiltrarLista = () => {
    return this.props.produtos
    .filter((produto) => {
      return this.props.filtroMaximo ? produto.preco <= this.props.filtroMaximo : true
    })
    .filter((produto) => {
      return this.props.filtroMinimo ? produto.preco >= this.props.filtroMinimo : true
    })
    .filter((produto) => produto.nome.includes(this.props.filtroBuscar))
    .sort((a, b) => this.state.sort === "CRESCENTE" ? a.preco - b.preco : b.preco - a.preco)
  }
  
  onChangeSort = (event) => {
    this.setState({sort: event.target.value})
  }

  
  render (){
    const ordenarEFiltrarLista = this.pegarOrdenarEFiltrarLista()
    return (
      <ProdutosContainer>
        <ProdutosHeader>
            <p> Quantidade de Produtos: {ordenarEFiltrarLista.length} </p>
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
