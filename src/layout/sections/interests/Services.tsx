import { useContext, useState } from "react"
import { Container } from "../../../components/Container"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { SectionTitle } from "../../../components/SectionTitle.styled"
import { ThemeContext } from "../../../common/context/ThemeContext"
import { services } from "../../../common/data/services"
import { S } from "./Services_Styles"
import { ServicesCard } from "./card/ServicesCard"

export const Services: React.FC = () => {
    const theme = useContext(ThemeContext)
    const [servicesWithFlip, setServicesWithFlip] = useState(services.map((service) => ({...service, isFlip: false })))


    return (
        <S.Services id="interests" theme={theme}>
            <Container direction="column">
                <SectionTitle theme={theme}>Interests</SectionTitle>
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