import React from 'react';
import styled from 'styled-components';

const ProdutosHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
`;



class Home extends React.Component {
  render() {
    return (
      <div>
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
      </div>
    );

  }

}


export default Home; 