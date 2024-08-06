import { useContext, useState } from 'react'

import { services } from '../../../common/const/data/services'
import { useAppContext } from '../../../common/context/appContext'
import { Container } from '../../../components/Container'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { SectionTitle } from '../../../components/SectionTitle.styled'
import { S } from './Interests_Styles'
import { InterestsCard } from './card/InterestsCard'

export const Interests = () => {
  const { theme } = useAppContext()
  const [servicesWithFlip, setServicesWithFlip] = useState(
    services.map(service => ({ ...service, isFlip: false }))
  )

  return (
    <S.Services id={'interests'} theme={theme}>
      <Container direction={'column'}>
        <SectionTitle theme={theme}>Interests</SectionTitle>
        <FlexWrapper align={'center'} justify={'center'} wrap={'wrap'}>
          {servicesWithFlip.map((service, index) => (
            <InterestsCard
              cardIndex={index}
              description={service.description}
              iconId={service.imageId}
              isFlip={service.isFlip}
              key={service.imageId + index}
              servicesWithFlip={servicesWithFlip}
              setServicesWithFlip={setServicesWithFlip}
              title={service.title}
              viewBox={service.viewBox}
            />
          ))}
        </FlexWrapper>
      </Container>
    </S.Services>
  )
}
