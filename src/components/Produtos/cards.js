import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
`


class Cards extends React.Component {
    render(){
        return(
            <Grid>
            </Grid>
        )
    }
}

export default Cards; 