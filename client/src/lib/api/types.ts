export enum ActionType {
  'FETCH',
  'FETCH_SUCCESS',
  'FETCH_ERROR',
}

export interface State<TData> {
  data: TData | null;
  isLoading: boolean;
  error: boolean;
}

export interface StartFetch {
  type: ActionType.FETCH;
}

export interface FetchSuccess<TData> {
  type: ActionType.FETCH_SUCCESS,
  payload: TData
}

export interface FetchError {
  type: ActionType.FETCH_ERROR;
}

export type FetchActionTypes<TData> = StartFetch | FetchSuccess<TData> | FetchError
