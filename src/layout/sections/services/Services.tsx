import { SectionTitle } from "../../../components/SectionTitle.styled"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { ServicesCard } from "./card/ServicesCard"
import { Container } from "../../../components/Container"
import { useContext, useState } from "react"
import { ThemeContext } from "../../../context/ThemeContext"
import { S } from "./Services_Styles"
import { services } from "../../../data/services"
import { Flip } from "react-awesome-reveal"

export const Services: React.FC = () => {
    const theme = useContext(ThemeContext)
    const [servicesWithFlip, setServicesWithFlip] = useState(services.map((service) => ({...service, isFlip: false })))


    return (
        <S.Services id="services" theme={theme}>
            <Container direction="column">
                <SectionTitle theme={theme}>Services</SectionTitle>
                <FlexWrapper wrap="wrap" align="center" justify="center">
                    {servicesWithFlip.map((service, index) => 
                        <ServicesCard 
                            key={service.imageId + index}
                            iconId={service.imageId} 
                            title={service.title} 
                            viewBox={service.viewBox}
                            isFlip={service.isFlip}
                            description={service.description}
                            setServicesWithFlip={setServicesWithFlip}
                            servicesWithFlip={servicesWithFlip}
                            cardIndex={index}
                        />
                    )}
                </FlexWrapper>
            </Container>
        </S.Services>
    )
}