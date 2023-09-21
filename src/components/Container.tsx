import styled from "styled-components";
import { FlexWrapper } from "./FlexWrapper";


export const Container = styled(FlexWrapper)`
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    max-width: 1440px;
    width: 90%;
    height: 100%;
    margin: 0 auto;
`