import logoWhite from '../../assets/images/logo.png'
import logoGray from '../../assets/images/logo-gray.png'
import styled from 'styled-components'
type LogoPropsType = {
    color: "white" | "gray"
}
export const Logo = (props: LogoPropsType) => {
    return (
        <StyledLogoLink href="#">
            <StyledLogoImg src={props.color === "white" ? logoWhite : logoGray} alt="Logo" />
        </StyledLogoLink>
    )
}

const StyledLogoLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledLogoImg = styled.img`
    display: flex;
    height: 100%;
    width: auto;
`