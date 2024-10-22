import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  extraReducers: builder => {
    builder.addMatcher(
      action => action.type.endsWith('pending'),
      state => {
        state.isLoading = true
      }
    )
    builder.addMatcher(
      action => action.type.endsWith('fulfilled'),
      state => {
        state.isLoading = false
      }
    )
    builder.addMatcher(
      action => action.type.endsWith('rejected'),
      state => {
        state.isLoading = false
      }
    )
  },
  initialState: {
    isLoading: false as boolean,
    scrollPosition: { x: 0, y: 0 } as ScrollPosition,
    sectionInView: 'home' as Sections,
  },
  name: 'app',
  reducers: {
    setScrollPosition: (state, action: PayloadAction<ScrollPosition>) => {
      state.scrollPosition = action.payload
    },
    setSectionInView: (state, action: PayloadAction<Sections>) => {
      state.sectionInView = action.payload
    },
  },
})

export const appActions = slice.actions
export const appReducer = slice

export type Sections = 'about' | 'contacts' | 'home' | 'projects'
export type ScrollPosition = { x: number; y: number }
