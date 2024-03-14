import { useContext } from "react"
import { Fade } from 'react-awesome-reveal'
import { Icon } from "../../../../components/icon/Icon"
import { ThemeContext } from "../../../../context/ThemeContext"
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
            .map((servise, index) => index === props.cardIndex
                ? { ...servise, isFlip: !servise.isFlip }
                : { ...servise, isFlip: false }))
    }
    return (
        <S.ServicesCard
            isFlip={props.isFlip}
            theme={theme}
            direction="column"
            justify="space-between"
            width="30%"
            onClick={onClickHandler}
        >
            {props.isFlip ?
                <>
                    <Fade delay={200}>
                        <p>{props.description}</p>
                        <S.ServicesCardButton
                            theme={theme}
                            isFlip={props.isFlip}
                            hoverBackground="transparent"
                            hoverShadow="none"
                        ><Icon iconId="arrowRight"
                            width="20%"
                            />View Less
                        </S.ServicesCardButton>
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
                    <S.ServicesCardButton
                        theme={theme}
                        isFlip={props.isFlip}
                        hoverBackground="transparent"
                        hoverShadow="none"
                    >View More<Icon
                            iconId="arrowRight"
                            width="20%"
                        />
                    </S.ServicesCardButton>
                </>
            }
        </S.ServicesCard>
    )
}