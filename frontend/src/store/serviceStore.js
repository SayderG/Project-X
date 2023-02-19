import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentService: {
    title: "",
    companies: [
      "",
    ],
    description: "",
    tip: "",
    price: 0,
  }
}

export const serviceSlice = createSlice({
  name: 'currentService',
  initialState,
  reducers: {
    setService: (state, action) => {
      state.currentService = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setService } = serviceSlice.actions

export default serviceSlice.reducer