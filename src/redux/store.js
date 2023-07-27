import { configureStore } from '@reduxjs/toolkit'
import InitSlice from './slices/init_slice'

export const store = configureStore({
  reducer: {
    init: InitSlice
  },
})