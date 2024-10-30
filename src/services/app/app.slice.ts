import en, { Dictionaries } from '@/i18n/dictionaries/en'
import { Locale } from '@/i18n/get-dictionaries'
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
    dict: en as Dictionaries,
    isLoading: false as boolean,
    locale: 'en' as Locale,
    sectionInView: 'home' as Sections,
  },
  name: 'app',
  reducers: {
    setDictionary: (state, action: PayloadAction<Dictionaries>) => {
      state.dict = action.payload
    },
    setLocale: (state, action: PayloadAction<Locale>) => {
      state.locale = action.payload
    },
    setSectionInView: (state, action: PayloadAction<Sections>) => {
      state.sectionInView = action.payload
    },
  },
})

export const appActions = slice.actions
export const appReducer = slice

export type Sections = 'about' | 'contacts' | 'home' | 'projects'
