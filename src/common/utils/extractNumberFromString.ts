export const extractNumberFromString = (str: string): number => {
  return +str.replace(/(^.+\D)(\d+)(\D.+$)/i, '$2')
}
