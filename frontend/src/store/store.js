import { configureStore } from '@reduxjs/toolkit'
import AppStoreReducer from './appStore'
import serviceStoreReducer from './serviceStore'
export const store = configureStore({
  reducer: {
    appStore: AppStoreReducer,
    serviceStore: serviceStoreReducer,
  },
})