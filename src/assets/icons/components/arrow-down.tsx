import { SVGProps } from 'react'

export const ArrowDown = ({
  fill,
  height,
  stroke,
  viewBox,
  width,
  xmlns,
  ...rest
}: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      fill={'none'}
      height={height ?? '100%'}
      stroke={stroke ?? 'currentColor'}
      viewBox={viewBox ?? '0 0 54 36'}
      width={width ?? '100%'}
      xmlns={xmlns ?? 'http://www.w3.org/2000/svg'}
      {...rest}
    >
      <path
        d={'M9.5 5.25L27 22.75L44.5 5.25'}
        shapeRendering={'crispEdges'}
        stroke={'white'}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
        strokeWidth={'6'}
      />
    </svg>
  )
}
