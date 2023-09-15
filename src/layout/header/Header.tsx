import styled from "styled-components"
import { Logo } from "../../components/logo/Logo"
import { Menu } from "../../components/menu/Menu"
import { Icon } from "../../components/icon/Icon"

export const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <div>
                <Menu />
                <Icon iconId={'moon'}/>
            </div>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: aliceblue;
    div {
        display: flex;
        align-items: center;
        gap: 30px;
    }
`