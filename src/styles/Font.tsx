type FontPropsType = {
  Fmax: number
  Fmin: number
  family?: string
  lineHeight?: number
  weight?: number
}

export const font = ({ Fmax, Fmin, family, lineHeight, weight }: FontPropsType) => `
   font-family: ${family || 'Roboto'};
   font-weight: ${weight || 400};
   line-height: ${lineHeight || 1};
   font-size: clamp(${Fmin}px, calc( (100vw - 360px)/(1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px), ${Fmax}px);
`
