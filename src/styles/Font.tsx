type FontPropsType = {
  fMax: number
  fMin: number
  family?: string
  lineHeight?: number
  weight?: number
}

export const font = ({ fMax, fMin, family, lineHeight, weight }: FontPropsType) => `
   font-family: ${family || 'Roboto'};
   font-weight: ${weight || 400};
   line-height: ${lineHeight || 1};
   font-size: clamp(${fMin}px, calc( (100vw - 360px)/(1440 - 360) * (${fMax} - ${fMin}) + ${fMin}px), ${fMax}px);
`
