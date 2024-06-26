import { ChangeEvent, memo, useEffect, useRef, useState } from 'react';
import styles from './CurrentTrainTableCell.module.scss';
import clsx from 'clsx';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { currentTrainSelector } from '../../../store/current-train/current-train-selectors';
import { updateTrainSpec } from '../../../store/train/trains-reducer';
import { getTrainByName } from '../../../store/train/trains-selectors';

export interface ICurrentTrainTableCellProps {
  initialValue: string;
  type: 'speed' | 'force' | 'engineAmperage';
  index: number;
  handleDisable: (value: boolean) => void;
}

export const CurrentTrainTableCell = memo(function ({
  initialValue,
  type,
  handleDisable,
  index,
}: ICurrentTrainTableCellProps) {
  const [value, setValue] = useState<string>(initialValue);
  const [error, setError] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();
  const currentTrainName = useAppSelector(currentTrainSelector);
  const currentTrain = useAppSelector(getTrainByName(currentTrainName));

  useEffect(() => {
    const errors = document.querySelectorAll('.error');
    handleDisable(errors.length > 0);
  }, [value]);

  const getValidationPattern = (): RegExp => {
    switch (type) {
      case 'engineAmperage':
        return new RegExp(/^[1-9][0-9]*$/);
      case 'force':
        return new RegExp(/^(?!0*(?:\.0+)?$)(\d+)(\.\d+)?$/);
      default:
        return new RegExp(/^[0-9]+$/);
    }
  };

  const validationPattern = getValidationPattern();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value.match(validationPattern)) {
      setError(true);
    } else {
      setError(false);
    }
    setValue(e.target.value);
  };

  const handleBlur = () => {
    const value = inputRef.current!.value;

    if (error || value === initialValue) {
      return;
    }

    const updatedSpec = {
      ...currentTrain.characteristics[index],
      [type]: +value,
    };

    dispatch(
      updateTrainSpec({
        trainName: currentTrainName,
        specIndex: index,
        updatedSpec: updatedSpec,
      })
    );
  };

  return (
    <td className="cell" scope="row">
      <input
        onBlur={handleBlur}
        ref={inputRef}
        onChange={(e) => handleChange(e)}
        className={clsx(styles.input, error && 'error')}
        type="text"
        value={value}
      />
    </td>
  );
});
