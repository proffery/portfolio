import styled from "styled-components"
import { Link } from "../../components/link/Link.styled"
import { Container } from "../../components/Container"

export const Footer = () => {
    return (
        <StyledFooter>
            <Container direction="column" align="center" justify="center" gap="10px">
                <Name>Coded by&nbsp;<Link href="#" color="white" fontSize="16px">Dmitry Shamko</Link></Name>
                <Copyrights>All Rights Reserved 2023@</Copyrights>
            </Container>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f1d0d0;
    padding: 72px;
    height: 200px;
    border-radius: 50% 50% 0 0;
`

const Name = styled.span`
    font-size: 16px;
    color: white;
    display: flex;
`

const Copyrights = styled.span`
    font-size: 11px;
    color: white;
`