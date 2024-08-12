import { Dispatch, SetStateAction } from 'react'
import { Fade } from 'react-awesome-reveal'

import { InterestsType } from '@/common/const/data/interests'
import { useAppContext } from '@/common/context/appContext'
import { Icon } from '@/components/icon/Icon'

import { WithFlip } from '../Interests'
import { S } from './InterestsCard_Styles'

type Props = {
  cardIndex: number
  interest: InterestsType[0] & WithFlip
  interestsWithFlip: Array<InterestsType[0] & WithFlip>
  setInterestsWithFlip: Dispatch<
    SetStateAction<
      ({ description: string; imageId: string; title: string; viewBox: string } & WithFlip)[]
    >
  >
}

export const InterestsCard = ({
  cardIndex,
  interest,
  interestsWithFlip,
  setInterestsWithFlip,
}: Props) => {
  const { theme } = useAppContext()
  const onClickHandler = () => {
    setInterestsWithFlip(
      interestsWithFlip.map((interest, index) =>
        index === cardIndex
          ? { ...interest, isFlip: !interest.isFlip }
          : { ...interest, isFlip: false }
      )
    )
  }

  return (
    <S.ServicesCard
      direction={'column'}
      is_flip={interest.isFlip.toString()}
      justify={'space-around'}
      onClick={onClickHandler}
      theme={theme}
      width={'30%'}
    >
      {interest.isFlip ? (
        <>
          <S.ServicesCardIconWrapper>
            <Icon
              height={'100%'}
              iconId={interest.imageId}
              viewBox={interest.viewBox || '0 0 70 70'}
              width={'100%'}
            />
          </S.ServicesCardIconWrapper>
          <Fade delay={300}>
            <p>{interest.description}</p>
          </Fade>
        </>
      ) : (
        <>
          <S.ServicesCardIconWrapper>
            <Icon
              height={'100%'}
              iconId={interest.imageId}
              viewBox={interest.viewBox || '0 0 70 70'}
              width={'100%'}
            />
          </S.ServicesCardIconWrapper>
          <S.ServicesCardTitle theme={theme}>{interest.title}</S.ServicesCardTitle>
        </>
      )}
    </S.ServicesCard>
  )
}
