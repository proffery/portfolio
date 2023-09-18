import styled from "styled-components"
import { Logo } from "../../components/logo/Logo"
import { Menu } from "../../components/menu/Menu"
import { Icon } from "../../components/icon/Icon"
import { FlexWrapper } from "../../components/FlexWrapper"

export const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <FlexWrapper align="center" gap="30px">
                <Menu />
                <Icon iconId={'moon'} width="30px" height="50px" viewBox="-4 6 37 35"/>
            </FlexWrapper>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: aliceblue;
    padding: 0 30px;
`