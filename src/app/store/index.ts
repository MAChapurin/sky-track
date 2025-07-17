import { configureStore } from '@reduxjs/toolkit'
import favorites from '@/entities/favorites/model/favorites.slice'
import worldMap from '@/entities/map/model/map.slice'
import { favoritesLocalStorageSync } from '@/entities/favorites'

export const store = configureStore({
  reducer: {
    favorites,
    worldMap
  },
  devTools: import.meta.env.DEV,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(favoritesLocalStorageSync)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
