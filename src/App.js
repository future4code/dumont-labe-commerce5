import React from 'react';
import Cards from './components/cards.js';
import Carrinho from './components/carrinho.js';
import Filtro from './components/filtro.js';
import styled from 'styled-components';

const ProdutoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
  border: 1px solid black;
  `

function App() {
  return (
    <div>
      <ProdutoWrapper>
        <Filtro/>
        <Cards/>
        <Carrinho/>
      </ProdutoWrapper>
    </div>
  );
}

export default App;
