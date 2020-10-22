import React from 'react';
import Cards from './components/Produtos/cards.js';
import Carrinho from './components/carrinho.js';
import Filtro from './components/filtro.js';
import styled from 'styled-components';
import camiseta1 from './img/camiseta-cat-galaxy.jpg';
import camiseta2 from './img/camiseta-dog-space.jpg';
import camiseta3 from './img/camiseta-espaco.jpg';
import camiseta4 from './img/camiseta-espaco-2.jpg';
import camiseta5 from './img/camiseta-naza-meme.jpg';
import camiseta6 from './img/camiseta-nasa-1.jpg';
import camiseta7 from './img/camiseta-star-wars-1.jpg';
import camiseta8 from './img/camiseta-et-1.jpg';
import CardProduto from './components/Produtos/cards.js';


const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
  border: 1px solid black;
  `
const Produtos = [
  {
    id: 1,
    img: { camiseta1 },
    name: 'Produto 1',
    value: 50
  },
  {
    id: 2,
    img: { camiseta2 },
    name: 'Produto 2',
    value: 50
  },
  {
    id: 3,
    img: { camiseta3 },
    name: 'Produto 3',
    value: 50
  },
  {
    id: 4,
    img: { camiseta4 },
    name: 'Produto 4',
    value: 50
  },
  {
    id: 5,
    img: { camiseta5 },
    name: 'Produto 5',
    value: 50
  },
  {
    id: 6,
    img: { camiseta6 },
    name: 'Produto 6',
    value: 50
  },
  {
    id: 7,
    img: { camiseta7 },
    name: 'Produto 7',
    value: 50
  },
  {
    id: 8,
    img: { camiseta8 },
    name: 'Produto 8',
    value: 50
  },
]



function App() {
  return (
    <div>
      <Wrapper>
        <Filtro/>
        <CardProduto/>
        <Carrinho/>
      </Wrapper>
    </div>
  );
}

export default App;
