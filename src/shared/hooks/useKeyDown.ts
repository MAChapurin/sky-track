import { useEffect } from 'react'

export const useKeyDown = (
  key: string,
  callback: (event: KeyboardEvent) => void,
  deps: ReadonlyArray<unknown> = []
) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === key) {
        callback(event)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, callback, ...deps])
}
