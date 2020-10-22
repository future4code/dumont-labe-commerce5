import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
`
const ImagensProdutos = styled.img`
max-width: 50%;
`
const ButtonCarrinho = styled.button`
width: 50px;
`

class CardProduto extends React.Component {
    render() {
        const Produto = this.props.produto

        return (
            <Card>
                <ImagensProdutos/>
                <p>{Produto.name}</p>
                <p>R${Produto.value}</p>
                <ButtonCarrinho>Adicionar ao Carrinho</ButtonCarrinho>
            </Card>
        )
    }
}
export default CardProduto; 