import { configureStore } from '@reduxjs/toolkit'
import AppStoreReducer from './appStore'
export const store = configureStore({
  reducer: {
    appStore: AppStoreReducer,
  },
})