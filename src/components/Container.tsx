import styled from "styled-components";
import { FlexWrapper } from "./FlexWrapper";
import { theme } from "../styles/Theme.styled";


export const Container = styled(FlexWrapper)`
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    max-width: 1440px;
    width: 90%;
    height: 100%;
    margin: 0 auto;
    padding: 60px 0;
    @media ${theme.media.mobile} {
        padding: 27px 0;
    }
    @media ${theme.media.mobile} {
        background-position: bottom right, center;
    }
`