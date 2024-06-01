import { memo } from 'react';
import { setCurrentTrain } from '../../../store/current-train/current-train-reducer';
import { useAppDispatch } from '../../../store/store';
import { TrainsTableCell } from '../TrainsTableCell/TrainsTableCell';
import styles from './TrainsTableRow.module.scss';

export interface ITrainsTableRowProps {
  name: string;
  description: string;
}

export const TrainsTableRow = memo(
  ({ name, description }: ITrainsTableRowProps) => {
    const dispatch = useAppDispatch();

    const changeCurrentTrain = (name: string) => {
      dispatch(setCurrentTrain(name));
    };

    return (
      <tr className={styles.table_row} onClick={() => changeCurrentTrain(name)}>
        <TrainsTableCell>{name}</TrainsTableCell>
        <TrainsTableCell>{description}</TrainsTableCell>
      </tr>
    );
  }
);
