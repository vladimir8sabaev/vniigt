import { useMemo } from 'react';
import { useAppSelector } from '../../store/store';
import { selectAllTrains } from '../../store/train/trains-selectors';
import { TrainsTableRow } from './TrainsTableRow/TrainsTableRow';

export const TrainTable = () => {
  const trains = useAppSelector(selectAllTrains);

  const trainsTableRows = useMemo(() => {
    return trains.map((train) => {
      const { description, name } = train;
      return (
        <TrainsTableRow key={name} name={name} description={description} />
      );
    });
  }, [trains]);

  return trains ? (
    <table className="table">
      <caption className="table_title">Поезда</caption>
      <thead>
        <tr className="row_header">
          <th scope="col">Название поезда</th>
          <th scope="col">Описание поезда</th>
        </tr>
      </thead>
      <tbody>{trainsTableRows}</tbody>
    </table>
  ) : (
    <p>LOADING...</p>
  );
};
