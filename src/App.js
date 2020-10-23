import React from "react";
import Filtro from "./components/Filtro/filtro";
import Produtos from "./components/Produtos/Produtos"
import Carrinho from "./components/carrinho";
import styled from 'styled-components';

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 16px;
  gap: 8px;
`;

const produtos = [
  {
    id: 1,
    img: "https://i.ibb.co/jWBSVYz/camiseta-star-wars-1.jpg",
    nome: "Camiseta Star Wars",
    preco: 50,
  },
  {
    id: 2,
    img: "https://i.ibb.co/Q8ZG3jN/camiseta-naza-meme.jpg",
    nome: "Produto 2",
    preco: 50,
  },
  {
    id: 3,
    img: "https://i.ibb.co/v3t36dK/camiseta-nasa-1.jpg",
    nome: "Produto 3",
    preco: 50,
  },
  {
    id: 4,
    img: "https://i.ibb.co/gmZ13qQ/camiseta-et-1.jpg",
    nome: "Produto 4",
    preco: 50,
  },
  {
    id: 5,
    img: "https://i.ibb.co/M6B4SYR/camiseta-espaco-2.jpg",
    nome: "Produto 5",
    preco: 50,
  },
  {
    id: 6,
    img: "https://i.ibb.co/G9Wr6TK/camiseta-espaco.jpg",
    nome: "Produto 6",
    preco: 50,
  },
  {
    id: 7,
    img: "https://i.ibb.co/hXK2krh/camiseta-dog-space.jpg",
    nome: "Produto 7",
    preco: 50,
  },
  {
    id: 8,
    img: "https://i.ibb.co/7v7GxDs/camiseta-cat-galaxy.jpg",
    nome: "Produto 8",
    preco: 50,
  },
];

export default function App() {
  return (
    <AppContainer>
      <Filtro />
      <Produtos produtos={produtos} />
      <Carrinho />
    </AppContainer>
  );
}
