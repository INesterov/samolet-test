import { createAction, createReducer } from 'redux-act'
import type { Region } from '../../types/region'

export const loadLibraryDataAction = createAction('load library data')
export const loadLibraryDataSuccessAction = createAction('load library data success')
export const loadLibraryDataErrorAction = createAction('load library data error')

interface IState {
  error: string;
  isLoading: boolean;
  data: Map<number, Region>
}

const initialState: IState = {
  error: '',
  isLoading: false,
  data: new Map(),
}

const reducer = createReducer({
  [loadLibraryDataAction as any]: (state: IState) => ({ ...state, isLoading: true }),
}, initialState)

export default reducer
