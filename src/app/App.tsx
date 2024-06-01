import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './store/store';
import { fetchTrains } from './store/train/trains-thunk';
import { TrainTable } from './components/TrainsTable/TrainsTable';
import { currentTrainSelector } from './store/current-train/current-train-selectors';
import { CurrentTrainTable } from './components/CurrentTrainTable/CurrentTrainTable';

function App() {
  const dispatch = useAppDispatch();
  const currentTrainName = useAppSelector(currentTrainSelector);

  useEffect(() => {
    dispatch(fetchTrains());
  }, []);

  return (
    <div className="page">
      <TrainTable />
      {currentTrainName && <CurrentTrainTable />}
    </div>
  );
}

export default App;
