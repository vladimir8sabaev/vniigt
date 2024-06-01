import { useCallback, useState } from 'react';
import { currentTrainSelector } from '../../store/current-train/current-train-selectors';
import { useAppSelector } from '../../store/store';
import { getTrainByName } from '../../store/train/trains-selectors';
import { CurrentTrainTableRow } from './CurrentTrainTableRow/CurrentTrainTableRow';

export const CurrentTrainTable = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  const currentTrainName = useAppSelector(currentTrainSelector);
  const currentTrain = useAppSelector(getTrainByName(currentTrainName));

  const handleDisable = useCallback((value: boolean) => {
    setIsDisabled(value);
  }, []);

  const currentTrainSpecs = currentTrain.characteristics.map((row, index) => {
    const uniqueKey = row.speed + row.force + row.engineAmperage;
    return (
      <CurrentTrainTableRow
        index={index}
        handleDisable={handleDisable}
        key={uniqueKey}
        {...row}
      />
    );
  });

  return currentTrainName ? (
    <>
      <table className="table">
        <caption className="table_title">{currentTrainName}</caption>
        <thead>
          <tr className="row_header">
            <th scope="col">Ток двигателя</th>
            <th scope="col">Сила тяги</th>
            <th scope="col">Скорость</th>
          </tr>
        </thead>
        <tbody>{currentTrainSpecs}</tbody>
      </table>
      <button disabled={isDisabled}>Отправить данные</button>
    </>
  ) : (
    <p>LOADING...</p>
  );
};
