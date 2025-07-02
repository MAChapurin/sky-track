import { STORAGE_KEYS } from '@/shared/config'
import { THEME_MODE } from '../constants'

type ThemeType = (typeof THEME_MODE)[keyof typeof THEME_MODE]

let currentTheme: ThemeType = getInitialTheme()

const listeners = new Set<() => void>()

function getInitialTheme(): ThemeType {
  if (typeof window === 'undefined') return THEME_MODE.LIGHT
  const stored = localStorage.getItem(STORAGE_KEYS.THEME)
  if (stored === THEME_MODE.LIGHT || stored === THEME_MODE.DARK) return stored
  const prefersDark = window.matchMedia?.(
    '(prefers-color-scheme: dark)'
  ).matches
  return prefersDark ? THEME_MODE.DARK : THEME_MODE.LIGHT
}

function setTheme(newTheme: ThemeType) {
  currentTheme = newTheme
  localStorage.setItem(STORAGE_KEYS.THEME, newTheme)
  document.documentElement.classList.remove(THEME_MODE.LIGHT, THEME_MODE.DARK)
  document.documentElement.classList.add(newTheme)
  listeners.forEach(cb => cb())
}

function subscribe(callback: () => void) {
  listeners.add(callback)
  return () => listeners.delete(callback)
}

function getSnapshot(): ThemeType {
  return currentTheme
}

export const themeStore = {
  getSnapshot,
  subscribe,
  setTheme
}
