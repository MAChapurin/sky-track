import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface FavoritesState {
  favorites: string[]
}

const initialState: FavoritesState = {
  favorites: []
}

export const favoritesSlice = createSlice({
  name: '@favorites',
  initialState,
  reducers: {
    resetFavorites: state => {
      state.favorites = []
    },
    addFavoritesItem: (state, action: PayloadAction<string>) => {
      state.favorites.push(action.payload)
    },
    removeFavoritesItem: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter(item => item !== action.payload)
    },
    toogleFavoritesItem: (state, action: PayloadAction<string>) => {
      if (state.favorites.includes(action.payload)) {
        state.favorites = state.favorites.filter(
          item => item !== action.payload
        )
      } else {
        state.favorites.push(action.payload)
      }
    }
  }
})

export const {
  resetFavorites,
  addFavoritesItem,
  removeFavoritesItem,
  toogleFavoritesItem
} = favoritesSlice.actions

export default favoritesSlice.reducer
