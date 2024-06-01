import { SerializedError } from '@reduxjs/toolkit';

export type FetchingStatus = 'idle' | 'loading' | 'succeeded' | 'failed';

export interface IEntityAdapterState {
  loadingStatus: FetchingStatus;
  error: string | null;
}

export const initialState: IEntityAdapterState = {
  loadingStatus: 'idle',
  error: null,
};

export const setLoadingStatus = (state: IEntityAdapterState) => {
  state.loadingStatus = 'loading';
  state.error = null;
};

export const setError = (error: SerializedError) => {
  return error?.message ?? 'Что-то пошло не так';
};

export const setErrorStatus = (
  state: IEntityAdapterState,
  error: SerializedError
) => {
  state.loadingStatus = 'failed';
  state.error = setError(error);
};

export const setFulfilledStatus = (state: IEntityAdapterState) => {
  state.loadingStatus = 'idle';
  state.error = null;
};
export const isLoading = (loadingStatus: string): boolean =>
  loadingStatus === 'loading';
