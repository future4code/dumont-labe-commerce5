import React from 'react';
import styled from 'styled-components';
// import camiseta1 from '../../img/camiseta-cat-galaxy.jpg'
// import camiseta2 from '../../img/camiseta-dog-space.jpg';
// import camiseta3 from '../../img/camiseta-espaco.jpg';
// import camiseta4 from '../../img/camiseta-espaco-2.jpg';
// import camiseta5 from '../../img/camiseta-naza-meme.jpg'

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