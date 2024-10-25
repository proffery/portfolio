type IconPropsType = {
  height?: string
  iconId: string
  spriteUrl: string
  viewBox?: string
  width?: string
}

export const SvgSpriteIcon = ({ height, iconId, spriteUrl, viewBox, width }: IconPropsType) => {
  return (
    <svg
      height={height || '100%'}
      viewBox={viewBox || '0 0 128 128'}
      width={width || '100%'}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      <use xlinkHref={`${spriteUrl}#${iconId}`} />
    </svg>
  )
}
