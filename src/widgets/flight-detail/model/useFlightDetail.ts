import { useCallback, useEffect, useReducer, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { FLIGHTS } from '@/shared/db/fligths.data'
import { KEY_BOARDS, SEARCH_PARAMS } from '@/shared/config'
import { ActionTypes, type Action, type State } from '../types'
import { useKeyDown } from '@/shared/hooks'

const initialState: State = {
  targetFlight: undefined,
  isVisible: false,
  isClosing: false
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.SET_TARGET_FLIGHT:
      return { ...state, targetFlight: action.flight }
    case ActionTypes.SET_VISIBLE:
      return { ...state, isVisible: action.isVisible }
    case ActionTypes.SET_ANIMATION:
      return { ...state, isClosing: action.isClosing }
    case ActionTypes.RESET:
      return initialState
    default:
      return state
  }
}

export const useFlightDetail = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const containerRef = useRef<HTMLDivElement>(null!)
  const [searchParams, setSearchParams] = useSearchParams()

  const airlineParam = searchParams.get(SEARCH_PARAMS.AIRLINE)

  const targetAirline = FLIGHTS.find(el => el.airline === airlineParam)

  const cleanup = useCallback(() => {
    dispatch({ type: ActionTypes.SET_TARGET_FLIGHT, flight: undefined })
    setSearchParams(params => {
      params.delete(SEARCH_PARAMS.AIRLINE)
      return params
    })
  }, [setSearchParams])

  const closeWithAnimation = useCallback(() => {
    const el = containerRef.current
    if (!el) return

    el.style.transition = 'transform 0.3s ease'
    el.style.transform = 'translateX(100%)'

    const onTransitionEnd = () => {
      el.removeEventListener('transitionend', onTransitionEnd)
      cleanup()
      dispatch({ type: ActionTypes.SET_VISIBLE, isVisible: false })
      if (el) {
        el.style.transition = ''
        el.style.transform = ''
      }
    }

    el.addEventListener('transitionend', onTransitionEnd)
    dispatch({ type: ActionTypes.SET_ANIMATION, isClosing: true })
  }, [cleanup])

  useKeyDown(KEY_BOARDS.Escape, closeWithAnimation)

  useEffect(() => {
    if (targetAirline) {
      if (document.startViewTransition) {
        document.startViewTransition(() =>
          dispatch({
            type: ActionTypes.SET_TARGET_FLIGHT,
            flight: targetAirline
          })
        )
      } else {
        dispatch({ type: ActionTypes.SET_TARGET_FLIGHT, flight: targetAirline })
      }
      requestAnimationFrame(() =>
        dispatch({ type: ActionTypes.SET_VISIBLE, isVisible: true })
      )
    } else {
      dispatch({ type: ActionTypes.SET_VISIBLE, isVisible: false })
    }
  }, [targetAirline])

  return {
    targetFlight: state.targetFlight,
    isVisible: state.isVisible,
    containerRef,
    closeWithAnimation
  }
}
