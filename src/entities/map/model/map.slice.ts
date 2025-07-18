import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Coordinates, MapState } from '../types'

const initialState: MapState = {
  activeFlight: null,
  center: [55.4146, 37.9063] //Moscow
}

const mapSlice = createSlice({
  name: '@coordinates',
  initialState,
  reducers: {
    setCenter(state, action: PayloadAction<Coordinates>) {
      state.center = action.payload
    },
    setActiveFlight(state, action: PayloadAction<string>) {
      state.activeFlight = action.payload
    }
  }
})

export const { setActiveFlight, setCenter } = mapSlice.actions
export default mapSlice.reducer
