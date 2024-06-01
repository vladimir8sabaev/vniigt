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

  const showSpeeds = () => {
    const finalArr = [];
    for (let i = 0; i < currentTrain.characteristics.length; i++) {
      finalArr.push(currentTrain.characteristics[i].speed);
    }
    const finalString = finalArr.sort((a, b) => a - b).join(', ');
    console.log(
      `${currentTrainName}. Скоростные ограничения, отсортированные по возрастанию:`,
      finalString
    );
  };

  return currentTrainName ? (
    <div className="current-table">
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
      <button
        onClick={showSpeeds}
        className="primary_btn"
        disabled={isDisabled}
      >
        Отправить данные
      </button>
    </div>
  ) : (
    <p>LOADING...</p>
  );
};
