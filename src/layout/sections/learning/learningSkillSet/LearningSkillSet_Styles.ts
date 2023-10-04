import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";

const Skills = styled(FlexWrapper)`
    display: flex;
    justify-content: start;
    width: 100%;
    gap: 30px;
    padding: 30px;
    padding-top: 0;
    overflow-x: auto;
    &::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }
`
export const S = {
    Skills
}