import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { SkillsCard } from '../card/SkillsCard'
import { S } from './SkillSet_Styles'
import {aliceCarouselOptions} from "../../../../common/const/aliceCarouselOptions";
import {memo} from "react";

interface Slides {
  imageId: string,
  title: string,
  category?: string,
  viewBox?: string
}

type PropType = {
  slides: Slides[]
}

export const SkillSet = memo(({ slides }: PropType) => {
  const items = slides.map((slide, index) => (
       <SkillsCard
          imageId={slide.imageId}
          viewBox={slide.viewBox || "0 0 128 128"}
          title={slide.title}
          key={slide.category + index.toString()}
      />
  ))

  return (
    <S.Skills>
      <AliceCarousel
        mouseTracking
        autoPlay={true}
        autoPlayInterval={2500}
        infinite={true}
        disableButtonsControls={true}
        items={items}
        responsive={aliceCarouselOptions}
      />
    </S.Skills>
  )
})
