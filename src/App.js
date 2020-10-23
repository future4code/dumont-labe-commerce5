import React from "react";
import Filtro from "./components/Filtro/filtro";
import Produtos from "./components/Produtos/Produtos"
import Carrinho from "./components/carrinho/carrinho";
import styled from 'styled-components';

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 20px;
  gap: 8px;
`;


const produtos = [
  {
    id: 1,
    img: "https://i.ibb.co/jWBSVYz/camiseta-star-wars-1.jpg",
    nome: "Camiseta Star Wars",
    preco: 30,
  },
  {
    id: 2,
    img: "https://i.ibb.co/Q8ZG3jN/camiseta-naza-meme.jpg",
    nome: "Camiseta Nazaré Meme - Naza",
    preco: 40,
  },
  {
    id: 3,
    img: "https://i.ibb.co/v3t36dK/camiseta-nasa-1.jpg",
    nome: "Camiseta Logo Nasa",
    preco: 50,
  },
  {
    id: 4,
    img: "https://i.ibb.co/gmZ13qQ/camiseta-et-1.jpg",
    nome: "Camiseta ET",
    preco: 80,
  },
  {
    id: 5,
    img: "https://i.ibb.co/M6B4SYR/camiseta-espaco-2.jpg",
    nome: "Camiseta Espaço Sideral",
    preco: 45,
  },
  {
    id: 6,
    img: "https://i.ibb.co/G9Wr6TK/camiseta-espaco.jpg",
    nome: "Camiseta Astronauta ",
    preco: 30,
  },
  {
    id: 7,
    img: "https://i.ibb.co/hXK2krh/camiseta-dog-space.jpg",
    nome: "Camiseta Dog Astronauta",
    preco: 50,
  },
  {
    id: 8,
    img: "https://i.ibb.co/7v7GxDs/camiseta-cat-galaxy.jpg",
    nome: "Camiseta Gatinho na Galáxia",
    preco: 69,
  },
];

export default class App extends React.Component {
  state = {
    filtroMinimo: "",
    filtroMaximo: "",
    filtroBuscar: "",
    produtosCarrinho: [],
    listaDeProdutos: produtos
  };

  onChangeFiltroMinimo = (event) => {
    this.setState({filtroMinimo: event.target.value});    
  }

  onChangeFiltroMaximo = (event) => {
    this.setState({filtroMaximo: event.target.value});   
  }

  onChangeFiltroBuscar = (event) => {
    this.setState({filtroBuscar: event.target.value});    
  }
  
  onAddProdutoCarrinho = (idProduto) => {
    const produtoNoCarrinho = this.state.produtosCarrinho.find(produto => idProduto === produto.id)

    if(produtoNoCarrinho) {
      const novosProdutosCarrinho = this.state.produtosCarrinho.map(produto => {
        if(idProduto === produto.id) {
          return {
            ...produto,
            quantidade: produto.quantidade + 1
          }
        }

        return produto;
    })

    this.setState({produtosCarrinho: novosProdutosCarrinho})
  } else {
    const totalProdutoCarrinho = produtos.find(produto => idProduto === produto.id)

    const novosProdutosCarrinho = [...this.state.produtosCarrinho, 
      {...totalProdutoCarrinho, quantidade: 1}]

    this.setState({produtosCarrinho: novosProdutosCarrinho})
  }
}

  onRemoverProdutosdoCarrinho = (idProduto) => {
    const novosProdutosNoCarrinho = this.state.produtosCarrinho.map((produto) => {
      if(produto.id ===  idProduto) {
        return {
          ...produto,
          quantidade: produto.quantidade - 1,
        }
      }
      return produto
    }).filter((produto)=> produto.quantidade > 0);
    this.setState({produtosCarrinho: novosProdutosNoCarrinho})
  }

  render() {
    return (
      <AppContainer>
        <Filtro 
          filtroMinimo={this.state.filtroMinimo}
          filtroMaximo={this.state.filtroMaximo}
          filtroBuscar={this.state.filtroBuscar}
          onChangeFiltroMinimo={this.onChangeFiltroMinimo}
          onChangeFiltroMaximo={this.onChangeFiltroMaximo}
          onChangeFiltroBuscar={this.onChangeFiltroBuscar}
        />
        <Produtos 
          produtos={produtos} 
          filtroMinimo={this.state.filtroMinimo}
          filtroMaximo={this.state.filtroMaximo}
          filtroBuscar={this.state.filtroBuscar}
          onAddProdutoCarrinho={this.onAddProdutoCarrinho}
        />
        <Carrinho
          produtosCarrinho={this.state.produtosCarrinho}
          onRemoverProdutosdoCarrinho={this.onRemoverProdutosdoCarrinho}
        />
      </AppContainer>
    );
  }
}