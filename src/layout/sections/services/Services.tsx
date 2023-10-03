import { SectionTitle } from "../../../components/SectionTitle.styled"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { ServicesCard } from "./card/ServicesCard"
import { Container } from "../../../components/Container"
import { useContext } from "react"
import { ThemeContext } from "../../../context/ThemeContext"
import { S } from "./Services_Styles"

export const Services: React.FC = () => {
    const theme = useContext(ThemeContext)
    return (
        <S.Services id="services" theme={theme}>
            <Container direction="column">
                <SectionTitle theme={theme}>Services</SectionTitle>
                <FlexWrapper wrap="wrap" align="center" justify="center">
                    <ServicesCard iconId="servicesVideo" title="Video Edit Service" link="#" />
                    <ServicesCard iconId="servicesDesign" title="Ui/Ux Designer" link="#" />
                    <ServicesCard iconId="servicesDevelop" title="Website Developer" link="#" />
                </FlexWrapper>
            </Container>
        </S.Services>
    )
}