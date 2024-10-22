import { RootState } from '@/services/store'

export const selectAppIsLoading = (state: RootState) => state.app.isLoading
export const selectSectionInView = (state: RootState) => state.app.sectionInView
export const selectScrollPosition = (state: RootState) => state.app.scrollPosition
