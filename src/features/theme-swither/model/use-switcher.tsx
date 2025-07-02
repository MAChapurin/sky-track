import { useLayoutEffect, useSyncExternalStore } from 'react'
import { THEME_MODE } from '../constants'
import { themeStore } from './use-theme'

export const useSwithTheme = () => {
  const theme = useSyncExternalStore(
    themeStore.subscribe,
    themeStore.getSnapshot
  )

  const onClick = () => {
    themeStore.setTheme(
      theme === THEME_MODE.DARK ? THEME_MODE.LIGHT : THEME_MODE.DARK
    )
  }

  useLayoutEffect(() => {
    themeStore.setTheme(theme)
  }, [theme])

  return {
    onClick,
    theme
  }
}
