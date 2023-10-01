import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme.styled";

type GlobalStylesTypes = {
    theme: string
}

export const GlobalStyles = createGlobalStyle<GlobalStylesTypes>`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *:focus-visible {
        outline: 2px solid ${props => props.theme === 'light' ?
            theme.light.color.text.link :
            theme.dark.color.text.link
        };
    }
    
    html {
        scroll-behavior: smooth;
    }
    
    body {
        margin: 0 auto;
        height: 100vh;
        font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${props => props.theme === 'light' ?
            theme.light.color.background.primary :
            theme.dark.color.background.primary
        };
        
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }

    a {
        text-decoration: none;
    }

    section {
        padding: 60px 0;
        @media ${theme.media.mobile} {
            padding: 27px 0;
        }
    }
    //////SCROLLBAR//////

    /* width */
    ::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
        background: transparent;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #888; 
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }


    @media (prefers-reduced-motion: reduce) {
        animation: unset;
    }
`