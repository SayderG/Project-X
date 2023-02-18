import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentScreen: 0
}

export const appStoreSlice = createSlice({
  name: 'currentScreen',
  initialState,
  reducers: {
    setScreen: (state, action) => {
      state.currentScreen = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setScreen } = appStoreSlice.actions

export default appStoreSlice.reducer