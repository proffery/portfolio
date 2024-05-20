import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { SkillsCard } from '../card/SkillsCard'
import { S } from './SkillSet_Styles'
import {Bounce} from "react-awesome-reveal";
import {aliceCarouselOptions} from "../../../../common/const/aliceCarouselOptions";
import {useAppContext} from "../../../../common/context/appContext";
import {extractNumberFromString} from "../../../../common/utils/extractNumberFromString";
import {themeObj} from "../../../../common/const/themeObj";

interface Slides {
  imageId: string,
  title: string,
  category?: string,
  viewBox?: string
}

type PropType = {
  slides: Slides[]
}



export const SkillSet = ({ slides }: PropType) => {
    const { width } = useAppContext()
    const breakpoint = extractNumberFromString(themeObj.media.mobile)

  const items = slides.map((slide, index) => (
      width > breakpoint ? <Bounce duration={400}>
        <SkillsCard
            imageId={slide.imageId}
            viewBox={slide.viewBox || "0 0 128 128"}
            title={slide.title}
            key={slide.category + index.toString()}
        /></Bounce>
      : <SkillsCard
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
}
