import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from 'react-redux'
import { RootState } from '../rootReducer'

const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector

export default useSelector
