import { useContext, useState } from "react"
import { Container } from "../../../components/Container"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { SectionTitle } from "../../../components/SectionTitle.styled"
import { services } from "../../../common/const/data/services"
import { S } from "./Interests_Styles"
import { InterestsCard } from "./card/InterestsCard"
import {useAppContext} from "../../../common/context/appContext";

export const Interests = () => {
    const { theme} = useAppContext()
    const [servicesWithFlip, setServicesWithFlip] = useState(services.map((service) => ({...service, isFlip: false })))


    return (
        <S.Services id="interests" theme={theme}>
            <Container direction="column">
                <SectionTitle theme={theme}>Interests</SectionTitle>
                <FlexWrapper wrap="wrap" align="center" justify="center">
                    {servicesWithFlip.map((service, index) => 
                        <InterestsCard
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