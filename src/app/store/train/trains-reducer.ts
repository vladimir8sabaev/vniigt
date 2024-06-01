import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { ITrain } from '../../interfaces/train';
import { fetchTrains } from './trains-thunk';
import {
  initialState,
  setErrorStatus,
  setFulfilledStatus,
  setLoadingStatus,
} from '../store-collection';

export const trainsAdapter = createEntityAdapter({
  selectId: (train: ITrain) => train.name,
});

export const trainSlice = createSlice({
  name: 'trains',
  initialState: trainsAdapter.getInitialState(initialState),
  reducers: {
    updateTrainSpec: (state, action) => {
      const { trainName, specIndex, updatedSpec } = action.payload;
      const train = state.entities[trainName];
      if (train) {
        train.characteristics[specIndex] = updatedSpec;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrains.pending, (state) => setLoadingStatus(state))
      .addCase(fetchTrains.fulfilled, (state, { payload }) => {
        trainsAdapter.setMany(state, payload);
        setFulfilledStatus(state);
      })
      .addCase(fetchTrains.rejected, (state, { error }) =>
        setErrorStatus(state, error)
      );
  },
});

export const { updateTrainSpec } = trainSlice.actions;
export default trainSlice.reducer;
