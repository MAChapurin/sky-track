import type { IFlight } from '@/shared/types'

export const ActionTypes = {
  SET_TARGET_FLIGHT: 'SET_TARGET_FLIGHT',
  SET_VISIBLE: 'SET_VISIBLE',
  SET_ANIMATION: 'SET_ANIMATION',
  RESET: 'RESET'
} as const

export type Action =
  | { type: typeof ActionTypes.SET_TARGET_FLIGHT; flight: IFlight | undefined }
  | { type: typeof ActionTypes.SET_VISIBLE; isVisible: boolean }
  | { type: typeof ActionTypes.SET_ANIMATION; isClosing: boolean }
  | { type: typeof ActionTypes.RESET }

export interface State {
  targetFlight: IFlight | undefined
  isVisible: boolean
  isClosing: boolean
}
