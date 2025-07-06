import { STORAGE_KEYS } from '@/shared/config'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface FavoritesState {
  favorites: string[]
}

const getInitialFavoritesState = (): FavoritesState => {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.FAVORITES)
    if (stored) {
      const parsed = JSON.parse(stored)
      if (Array.isArray(parsed.favorites)) {
        return { favorites: parsed.favorites }
      }
    }
  } catch {
    return { favorites: [] }
  }
  return { favorites: [] }
}

const initialState: FavoritesState = getInitialFavoritesState()

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
      const index = state.favorites.indexOf(action.payload)
      if (index !== -1) {
        state.favorites.splice(index, 1)
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
