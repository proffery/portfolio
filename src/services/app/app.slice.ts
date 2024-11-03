import en, { Dictionaries } from '@/i18n/dictionaries/en'
import { Locale } from '@/i18n/get-dictionaries'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { TierResult } from 'detect-gpu'
import { boolean } from 'zod'

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
    gpuData: { tier: 1, type: 'WEBGL_UNSUPPORTED' } as TierResult,
    isLoading: false as boolean,
    isMobile: false as boolean,
    locale: 'en' as Locale,
    sectionInView: 'home' as Sections,
  },
  name: 'app',
  reducers: {
    setDictionary: (state, action: PayloadAction<Dictionaries>) => {
      state.dict = action.payload
    },
    setGpuData: (state, action: PayloadAction<TierResult>) => {
      state.gpuData = action.payload
    },
    setIsMobile: (state, action: PayloadAction<boolean>) => {
      state.isMobile = action.payload
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
