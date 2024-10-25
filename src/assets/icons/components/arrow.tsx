import { SVGProps } from 'react'

export const Arrow = ({
  fill,
  height,
  viewBox,
  width,
  xmlns,
  ...rest
}: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      fill={fill ?? 'currentColor'}
      height={height ?? '100%'}
      viewBox={viewBox ?? '-5 -5 37 35'}
      width={width ?? '100%'}
      xmlns={xmlns ?? 'http://www.w3.org/2000/svg'}
      {...rest}
    >
      <path
        clipRule={'evenodd'}
        d={
          'M2.33334 14.0002C2.33334 13.3559 2.85568 12.8335 3.5 12.8335H24.5C25.1443 12.8335 25.6667 13.3559 25.6667 14.0002C25.6667 14.6446 25.1443 15.1669 24.5 15.1669H3.5C2.85568 15.1669 2.33334 14.6446 2.33334 14.0002Z'
        }
        fill={'currentColor'}
        fillRule={'evenodd'}
      />
      <path
        clipRule={'evenodd'}
        d={
          'M16.6751 6.1752C17.1306 5.71959 17.8694 5.71959 18.325 6.1752L25.325 13.1753C25.7805 13.6308 25.7805 14.3696 25.325 14.8252L18.325 21.8252C17.8694 22.2807 17.1306 22.2807 16.6751 21.8252C16.2195 21.3696 16.2195 20.6308 16.6751 20.1753L22.8501 14.0002L16.6751 7.82512C16.2195 7.3695 16.2195 6.63082 16.6751 6.1752Z'
        }
        fill={'currentColor'}
      />
    </svg>
  )
}
