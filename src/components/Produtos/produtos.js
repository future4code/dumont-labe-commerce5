import React from 'react';
import styled from 'styled-components';

const ProdutosHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 10px;
`;



class Produtos extends React.Component{
    render(){
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
            <ProdutosTabela>
              <CardDeProdutos />
              <CardDeProdutos />
              <CardDeProdutos />
              <CardDeProdutos />
              <CardDeProdutos />
              <CardDeProdutos />
              <CardDeProdutos />
              <CardDeProdutos />
            </ProdutosTabela>
        </ProdutosContainer>
        );

    }

}


export default Produtos; 