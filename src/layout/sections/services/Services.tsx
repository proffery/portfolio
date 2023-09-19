import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle.styled"
import { DecorationDot } from "../../../components/decoration/DecorationDot"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { ServicesCard } from "./card/ServicesCard"

export const Services = () => {
    return (
        <StyledServices>
            <SectionTitle>Services<DecorationDot /></SectionTitle>
            <FlexWrapper wrap="wrap" align="center" justify="center" gap="30px">
                <ServicesCard iconId="servicesVideo" title="Video Edit Service" link="#" />
                <ServicesCard iconId="servicesDesign" title="Ui/Ux Designer" link="#" />
                <ServicesCard iconId="servicesDevelop" title="Website Developer" link="#" />
            </FlexWrapper>
        </StyledServices>
    )
}

const StyledServices = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #d3eed3;
    padding-bottom: 60px;
`