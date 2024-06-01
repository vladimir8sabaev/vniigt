import { RootState } from '../store';

export const currentTrainSelector = (state: RootState) =>
  state.currentTrain.name;
