import React from 'react';
import Carrinho from './components/carrinho.js';
import Filtro from './components/filtro.js';
import styled from 'styled-components';
import Home from './components/Produtos/home.js';


const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
  border: 1px solid black;
  `
const produtos = [
  {
    id: 1,
    imgUrl: 'https://i.ibb.co/jWBSVYz/camiseta-star-wars-1.jpg',
    name: 'Camiseta Star Wars',
    value: 50
  },
  {
    id: 2,
    imgUrl: 'https://i.ibb.co/Q8ZG3jN/camiseta-naza-meme.jpg',
    name: 'Produto 2',
    value: 50
  },
  {
    id: 3,
    imgUrl: 'https://i.ibb.co/v3t36dK/camiseta-nasa-1.jpg',
    name: 'Produto 3',
    value: 50
  },
  {
    id: 4,
    imgUrl: 'https://i.ibb.co/gmZ13qQ/camiseta-et-1.jpg',
    name: 'Produto 4',
    value: 50
  },
  {
    id: 5,
    imgUrl: 'https://i.ibb.co/M6B4SYR/camiseta-espaco-2.jpg',
    name: 'Produto 5',
    value: 50
  },
  {
    id: 6,
    imgUrl: 'https://i.ibb.co/G9Wr6TK/camiseta-espaco.jpg',
    name: 'Produto 6',
    value: 50
  },
  {
    id: 7,
    imgUrl: 'https://i.ibb.co/hXK2krh/camiseta-dog-space.jpg',
    name: 'Produto 7',
    value: 50
  },
  {
    id: 8,
    imgUrl: 'https://i.ibb.co/7v7GxDs/camiseta-cat-galaxy.jpg',
    name: 'Produto 8',
    value: 50
  },
]



function App() {
  return (
    <div>
      <Wrapper>
        <Filtro/>
        <Home produtos={produtos}/>
        <Carrinho/>
      </Wrapper>
    </div>
  );
}

export default App;
