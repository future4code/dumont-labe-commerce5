import React from 'react';
import Cards from './components/Produtos/cards.js';
import Carrinho from './components/carrinho.js';
import Filtro from './components/filtro.js';
import styled from 'styled-components';
import camiseta1 from './img/camiseta-cat-galaxy.jpg';
import camiseta2 from './img/camiseta-dog-space.jpg';
import camiseta3 from './img/camiseta-espaco.jpg';
import camiseta4 from './img/camiseta-espaco-2.jpg';
import camiseta5 from './img/camiseta-naza-meme.jpg'


const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
  border: 1px solid black;
  `

function App() {
  return (
    <div>
      <Wrapper>
          <h1>Card de Produtos</h1>
          <img src={camiseta1} />
            <p> Produto </p> 
            <p> R$ 40.00 </p>
            <p>Adicionar ao Carrinho</p>
      </Wrapper>
    </div>
  );
}

export default App;
