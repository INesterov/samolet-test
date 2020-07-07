import { createAction, createReducer } from 'redux-act'
import type { Region } from '../../types/region'

export const loadLibraryDataAction = createAction('load library data')
export const loadLibraryDataSuccessAction = createAction<Map<number, Region>>('load library data success')
export const loadLibraryDataErrorAction = createAction<string>('load library data error')

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
  [loadLibraryDataErrorAction as any]: (state: IState, payload) => ({ ...state, isLoading: false, error: payload }),
  [loadLibraryDataSuccessAction as any]: (state: IState, payload) => ({ ...state, isLoading: false, error: '', data: payload }),
}, initialState)

export default reducer
