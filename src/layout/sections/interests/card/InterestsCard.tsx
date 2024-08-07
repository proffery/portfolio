import { Fade } from 'react-awesome-reveal'

import { useAppContext } from '@/common/context/appContext'
import { Icon } from '@/components/icon/Icon'

import { S } from './InterestsCard_Styles'

interface ServiceCard {
  description: string
  imageId: string
  isFlip: boolean
  title: string
  viewBox: string
}

type ServicesCardPropsTypes = {
  cardIndex: number
  description: string
  iconId: string
  isFlip: boolean
  servicesWithFlip: ServiceCard[]
  setServicesWithFlip: any
  title: string
  viewBox?: string
}

export const InterestsCard = (props: ServicesCardPropsTypes) => {
  const { theme } = useAppContext()
  const onClickHandler = () => {
    props.setServicesWithFlip(
      props.servicesWithFlip.map((service, index) =>
        index === props.cardIndex
          ? { ...service, isFlip: !service.isFlip }
          : { ...service, isFlip: false }
      )
    )
  }

  return (
    <S.ServicesCard
      direction={'column'}
      is_flip={props.isFlip.toString()}
      justify={'space-around'}
      onClick={onClickHandler}
      theme={theme}
      width={'30%'}
    >
      {props.isFlip ? (
        <>
          <S.ServicesCardIconWrapper>
            <Icon
              height={'100%'}
              iconId={props.iconId}
              viewBox={props.viewBox || '0 0 70 70'}
              width={'100%'}
            />
          </S.ServicesCardIconWrapper>
          <Fade delay={300}>
            <p>{props.description}</p>
          </Fade>
        </>
      ) : (
        <>
          <S.ServicesCardIconWrapper>
            <Icon
              height={'100%'}
              iconId={props.iconId}
              viewBox={props.viewBox || '0 0 70 70'}
              width={'100%'}
            />
          </S.ServicesCardIconWrapper>
          <S.ServicesCardTitle theme={theme}>{props.title}</S.ServicesCardTitle>
        </>
      )}
    </S.ServicesCard>
  )
}
