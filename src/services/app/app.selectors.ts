import { RootState } from '@/services/store'

export const selectAppIsLoading = (state: RootState) => state.app.isLoading
export const selectSectionInView = (state: RootState) => state.app.sectionInView
export const selectDictionary = (state: RootState) => state.app.dict
export const selectLocale = (state: RootState) => state.app.locale
