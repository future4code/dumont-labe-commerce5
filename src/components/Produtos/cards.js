import React from 'react';
import styled from 'styled-components';

const ContainerProduto = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
`
const ImagemProduto = styled.img`
max-width: 50%;
`
const ButtonCarrinho = styled.button`
width: 50px;
`

const InfoProduto = styled.div`
display: flex;
flex-direction:column;
`

class CardProduto extends React.Component {
    addCarrinho = () => {
    }

    render() {
        const produto = this.props.produto

        return (
            <ContainerProduto>
            <ImagemProduto src={produto.imgUrl} />
            <InfoProduto>
                <p>{produto.nome}</p>
                <p>R$ {produto.preco}</p>
                <ButtonCarrinho>Adicionar ao carrinho</ButtonCarrinho>
            </InfoProduto>
        </ContainerProduto>
        )
    }
}
export default CardProduto; 