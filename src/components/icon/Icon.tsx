import iconsSprite from '@/assets/images/icons-sprite.svg'

type IconPropsType = {
  height?: string
  iconId: string
  onClick?: any
  viewBox?: string
  width?: string
}

export const Icon = (props: IconPropsType) => {
  return (
    <svg
      height={props.height || '50px'}
      viewBox={props.viewBox || '-8 -5 37 35'}
      width={props.width || '50px'}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
    </svg>
  )
}
