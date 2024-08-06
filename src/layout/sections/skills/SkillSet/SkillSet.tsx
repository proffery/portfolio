import { memo } from 'react'
import AliceCarousel from 'react-alice-carousel'

import 'react-alice-carousel/lib/alice-carousel.css'

import { aliceCarouselOptions } from '../../../../common/const/aliceCarouselOptions'
import { SkillsCard } from '../card/SkillsCard'
import { S } from './SkillSet_Styles'

interface Slides {
  category?: string
  imageId: string
  title: string
  viewBox?: string
}

type PropType = {
  slides: Slides[]
}

export const SkillSet = memo(({ slides }: PropType) => {
  const items = slides.map((slide, index) => (
    <SkillsCard
      imageId={slide.imageId}
      key={slide.category + index.toString()}
      title={slide.title}
      viewBox={slide.viewBox || '0 0 128 128'}
    />
  ))

  return (
    <S.Skills>
      <AliceCarousel
        autoPlay
        autoPlayInterval={2500}
        disableButtonsControls
        infinite
        items={items}
        mouseTracking
        responsive={aliceCarouselOptions}
      />
    </S.Skills>
  )
})
