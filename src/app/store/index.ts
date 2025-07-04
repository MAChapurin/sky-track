import { configureStore } from '@reduxjs/toolkit'

import favoritesReducer from '../../entities/favorites/model/favorites.slice'

export const store = configureStore({
  reducer: {
    favoritesReducer
  },
  devTools: import.meta.env.DEV,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
