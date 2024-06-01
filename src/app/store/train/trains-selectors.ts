import { createSelector } from 'redux-views';
import { RootState } from '../store';
import { trainsAdapter } from './trains-reducer';

const trainsSelectors = trainsAdapter.getSelectors<RootState>(
  (state: RootState) => state.trains
);

export const selectAllTrains = createSelector(
  [trainsSelectors.selectAll],
  (allTrains) => {
    return allTrains;
  }
);

export const getTrainByName = (name: string) =>
  createSelector(
    [trainsSelectors.selectAll],
    (trains) => trains.filter((train) => train.name === name)[0]
  );
