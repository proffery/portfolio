import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { theme } from "../../../../styles/Theme.styled";

const Skills = styled(FlexWrapper)`
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    width: 70%;
    gap: 30px;
    padding: 30px;
    padding-top: 0;
    max-height: 50%;
    overflow-x: hidden;
    overflow-y: hidden;
    @media ${theme.media.mobile} {
        max-height: 50vh;
        justify-content: center;
        overflow-y: auto;
    }
`
export const S = {
    Skills
}