import type {
  RootState as RootStateType,
  AppDispatch as AppDispatchType
} from '@/store/store'

declare global {
  type RootState = RootStateType
  type AppDispatch = AppDispatchType
}
