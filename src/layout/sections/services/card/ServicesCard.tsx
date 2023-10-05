import { Icon } from "../../../../components/icon/Icon"
import { useContext } from "react"
import { ThemeContext } from "../../../../context/ThemeContext"
import { S } from "./ServicesCard_Styles"
import { Flip } from "react-awesome-reveal"

interface ServiceCard {
    title: string,
    imageId: string,
    description: string,
    viewBox: string,
    isFlip: boolean
}

type ServicesCardPropsTypes = {
    iconId: string,
    title: string,
    viewBox?: string,
    description: string,
    isFlip: boolean,
    setServicesWithFlip: any,
    cardIndex: number,
    servicesWithFlip: ServiceCard[],
}

export const ServicesCard: React.FC<ServicesCardPropsTypes> = (props: ServicesCardPropsTypes) => {
    const theme = useContext(ThemeContext)

    return (
        <S.ServicesCard isFlip={props.isFlip} theme={theme} direction="column" justify="space-between" width="30%">
            {props.isFlip ? 
                <>
                    <p>{props.description}</p>
                    <S.ServicesCardButton 
                        theme={theme}
                        isFlip={props.isFlip}
                        hoverBackground="transparent" 
                        hoverShadow="none"
                        onClick={() => {
                            let updatedServices = [...props.servicesWithFlip]
                            updatedServices[props.cardIndex].isFlip = !updatedServices[props.cardIndex].isFlip
                            props.setServicesWithFlip(updatedServices)
                        }}
                    ><Icon iconId="arrowRight" width="20%"/>View Less</S.ServicesCardButton>
                </>
                
                    :     
                <>
                    <S.ServicesCardIconWrapper>
                        <Icon iconId={props.iconId} height="73px" width="73px" viewBox={props.viewBox ||  "0 0 70 70"}/>
                    </S.ServicesCardIconWrapper>
                    <S.ServicesCardTitle theme={theme}>{props.title}</S.ServicesCardTitle>
                    <S.ServicesCardButton 
                        theme={theme}
                        isFlip={props.isFlip}
                        hoverBackground="transparent" 
                        hoverShadow="none" 
                        onClick={() => {
                            let updatedServices = [...props.servicesWithFlip]
                            updatedServices[props.cardIndex].isFlip = !updatedServices[props.cardIndex].isFlip
                            props.setServicesWithFlip(updatedServices)
                        }}
                    >View More<Icon iconId="arrowRight" width="20%"/></S.ServicesCardButton>
                </>
            }
        </S.ServicesCard>
    )
}