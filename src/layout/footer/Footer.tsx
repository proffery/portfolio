import styled from "styled-components"
import { Link } from "../../components/link/Link.styled"

export const Footer = () => {
    return (
        <StyledFooter>
            <Name>Coded by&nbsp;<Link href="#" color="white" fontSize="16px">Dmitry Shamko</Link></Name>
            <Copyrights>All Rights Reserved 2022</Copyrights>
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
    width: 200%;
    transform: translateX(-25%);
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