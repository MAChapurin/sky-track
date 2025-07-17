import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Coordinates, MapState } from '../types'

const initialState: MapState = {
  from: null,
  to: null
}

const mapSlice = createSlice({
  name: '@coordinates',
  initialState,
  reducers: {
    setFrom(state, action: PayloadAction<Coordinates>) {
      state.from = action.payload
    },
    setTo(state, action: PayloadAction<Coordinates>) {
      state.to = action.payload
    },
    resetCoords(state) {
      state.to = null
      state.from = null
    }
  }
})

export const { setFrom, setTo, resetCoords } = mapSlice.actions
export default mapSlice.reducer
