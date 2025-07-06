import type { Middleware } from '@reduxjs/toolkit'
import {
  addFavoritesItem,
  removeFavoritesItem,
  resetFavorites,
  toogleFavoritesItem
} from './favorites.slice'
import { STORAGE_KEYS } from '@/shared/config'

const favoriteActionTypes = new Set<string>([
  addFavoritesItem.type,
  removeFavoritesItem.type,
  resetFavorites.type,
  toogleFavoritesItem.type
])

interface FavoritesState {
  favorites: string[]
}

interface AppState {
  favorites: FavoritesState
}

export const favoritesLocalStorageSync: Middleware<unknown, AppState> =
  store => next => action => {
    const result = next(action)

    if (
      typeof action === 'object' &&
      action !== null &&
      'type' in action &&
      typeof action.type === 'string' &&
      favoriteActionTypes.has(action.type)
    ) {
      const favorites = store.getState().favorites.favorites
      try {
        localStorage.setItem(
          STORAGE_KEYS.FAVORITES,
          JSON.stringify({ favorites })
        )
      } catch (err) {
        console.error('Failed to write favorites to localStorage:', err)
      }
    }

    return result
  }
