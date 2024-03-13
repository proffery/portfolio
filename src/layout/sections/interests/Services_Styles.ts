import { theme } from '../../../styles/Theme.styled';
import { FlexWrapper } from './../../../components/FlexWrapper';
import styled from "styled-components";

const Services = styled.section`
    ${FlexWrapper} {
        gap: 30px;
        @media ${theme.media.tablet} {
            gap: 26px;
        }
        @media ${theme.media.mobile} {
            gap: 14px;
        }
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme === 'light' ?
        theme.light.color.background.primary :
        theme.dark.color.background.primary
    };
`

export const S = {
    Services
}