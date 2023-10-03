import styled, { css } from "styled-components";
import { theme } from "../../../styles/Theme.styled";

type StyledMobileMenuTypes = {
    isOpen: boolean,
}

const MobileMenu = styled.nav`
    opacity: .9;
`

const MobileMenuPopup = styled.div<StyledMobileMenuTypes>`
    display: none;

    ${props => props.isOpen && css<StyledMobileMenuTypes>`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        justify-content: center;
        text-align: center;
    `}
    
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.primary :
        theme.dark.color.background.primary
    };
    
    ul {
        align-items: center;
        list-style-type: none;
        font-size: 40px;
        font-weight: 700;
        line-height: 136%;
    }
    li + li {
        margin-top: 50px;
    }
`

const BurgerButton = styled.button<StyledMobileMenuTypes>`
    position: fixed;
    right: 25px;
    top: 5px;
    width: 30px;
    height: 30px;
    z-index: 99999;
    background-color: transparent;
    border: none;
    cursor: pointer;
    span {
        display: block;
        width: 30px;
        height: 2px;
        background-color: ${props => props.theme === 'light' ?
            theme.light.color.text.primary :
            theme.dark.color.text.primary
        };

        ${props => props.isOpen && css<StyledMobileMenuTypes>`
            background-color: rgba(255, 255, 255, 0);
        `}

        position: absolute;
        &::before {
            content: "";
            position: absolute;
            display: block;
            width: 30px;
            height: 2px;
            background-color: ${props => props.theme === 'light' ?
                theme.light.color.text.primary :
                theme.dark.color.text.primary
            };
            transform: translateY(-8px);

            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: translateY(0) rotate(-45deg);
            `}
        }

        &::after {
            content: "";
            position: absolute;
            display: block;
            width: 30px;
            height: 2px;
            background-color: ${props => props.theme === 'light' ?
                theme.light.color.text.primary :
                theme.dark.color.text.primary
            };
            transform: translateY(8px);

            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: translateY(0) rotate(45deg);
                width: 30px;
            `}
        }
    }

`

export const S = {
    MobileMenu,
    MobileMenuPopup,
    BurgerButton,
}