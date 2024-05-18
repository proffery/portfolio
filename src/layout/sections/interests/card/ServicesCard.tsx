import React, { useContext } from "react"
import { Fade } from 'react-awesome-reveal'
import { Icon } from "../../../../components/icon/Icon"
import { ThemeContext } from "../../../../common/context/ThemeContext"
import { S } from "./ServicesCard_Styles"

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
    const onClickHandler = () => {
        props.setServicesWithFlip(props.servicesWithFlip
            .map((service, index) => index === props.cardIndex
                ? { ...service, isFlip: !service.isFlip }
                : { ...service, isFlip: false }))
    }
    return (
        <S.ServicesCard
            isFlip={props.isFlip}
            theme={theme}
            direction="column"
            justify="space-around"
            width="30%"
            onClick={onClickHandler}
        >
            {props.isFlip ?
                <>
                    <S.ServicesCardIconWrapper >
                        <Icon iconId={props.iconId}
                              height="100%"
                              width="100%"
                              viewBox={props.viewBox || "0 0 70 70"}
                        />
                    </S.ServicesCardIconWrapper>
                    <Fade delay={300}>
                        <p>{props.description}</p>
                    </Fade>
                </>
                :
                <>
                    <S.ServicesCardIconWrapper >
                        <Icon iconId={props.iconId}
                            height="100%"
                            width="100%"
                            viewBox={props.viewBox || "0 0 70 70"}
                        />
                    </S.ServicesCardIconWrapper>
                    <S.ServicesCardTitle theme={theme}>{props.title}</S.ServicesCardTitle>
                </>
            }
        </S.ServicesCard>
    )
}
