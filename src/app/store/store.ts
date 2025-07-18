import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import favorites from '@/entities/favorites/model/favorites.slice'
import worldMap from '@/entities/map/model/map.slice'
import { STORAGE_KEYS } from '@/shared/config'

const favoritesPersistConfig = {
  key: STORAGE_KEYS.FAVORITES,
  storage
}

const persistedFavorites = persistReducer(favoritesPersistConfig, favorites)

export const store = configureStore({
  reducer: {
    favorites: persistedFavorites,
    worldMap
  },
  devTools: import.meta.env.DEV,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE']
      }
    })
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
