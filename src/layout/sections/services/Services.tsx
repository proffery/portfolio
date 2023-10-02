import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle.styled"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { ServicesCard } from "./card/ServicesCard"
import { Container } from "../../../components/Container"
import { useContext } from "react"
import { ThemeContext } from "../../../context/ThemeContext"
import { theme } from "../../../styles/Theme.styled"

export const Services = () => {
    const theme = useContext(ThemeContext)
    return (
        <StyledServices id="services" theme={theme}>
            <Container direction="column">
                <SectionTitle theme={theme}>Services</SectionTitle>
                <FlexWrapper wrap="wrap" align="center" justify="center">
                    <ServicesCard iconId="servicesVideo" title="Video Edit Service" link="#" />
                    <ServicesCard iconId="servicesDesign" title="Ui/Ux Designer" link="#" />
                    <ServicesCard iconId="servicesDevelop" title="Website Developer" link="#" />
                </FlexWrapper>
            </Container>
        </StyledServices>
    )
}

const StyledServices = styled.section`
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
    padding-top: 0;
`