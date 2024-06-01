import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = { name: '' };

export const currentTrainSlice = createSlice({
  name: 'currentTrain',
  initialState: initialState,
  reducers: {
    setCurrentTrain(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
  },
});

export const { setCurrentTrain } = currentTrainSlice.actions;
export default currentTrainSlice.reducer;
