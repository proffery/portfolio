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
    sectionInView: 'home' as Sections,
  },
  name: 'app',
  reducers: {
    setSectionInView: (state, action: PayloadAction<Sections>) => {
      state.sectionInView = action.payload
    },
  },
})

export const appActions = slice.actions
export const appReducer = slice

export type Sections = 'about' | 'contacts' | 'home' | 'projects'
