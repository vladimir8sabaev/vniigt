import { createAsyncThunk } from '@reduxjs/toolkit';
import { ITrain } from '../../interfaces/train';
import { RootState } from '../store';
import { isLoading } from '../store-collection';

const thunkCondition = (state: RootState) => {
  const {
    trains: { loadingStatus, ids },
  } = state;

  return !ids.length && !isLoading(loadingStatus);
};

export const fetchTrains = createAsyncThunk(
  'fetchTrains',
  async () => {
    return fetch(
      'https://gist.githubusercontent.com/allbel/ae2f8ead09baf7bb66d281e3a6050261/raw/4c898f101913cd7918ab1dbfce008fa12c6d4838/mock.json'
    )
      .then((res) => res.json())
      .then((data: ITrain[]) => {
        return data;
      });
  },
  {
    condition: (_, { getState }) => thunkCondition(getState() as RootState),
  }
);
