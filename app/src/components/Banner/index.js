import React from 'react'

import { Container, Details, Img, Title, Description } from './style'

import img13 from '../../images/13.png'

export default function Banner() {
    return (
        <Container>
            <Details>
                <Title>Cobre um amigo</Title>

                <Description>
                    Mantenha suas parcerias em dia, use o PicChau para fazer suas cobranças.
                </Description>
            </Details>
            <Img source={img13} />
        </Container>
    )
}