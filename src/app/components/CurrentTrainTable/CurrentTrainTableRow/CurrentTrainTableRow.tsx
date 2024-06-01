import { CurrentTrainTableCell } from '../CurrentTrainTableCell/CurrentTrainTableCell';
import { Dispatch, SetStateAction } from 'react';

export interface ICurrentTrainTableRowProps {
  speed: number;
  force: number;
  engineAmperage: number;
  index: number;
  setIsDisabled: Dispatch<SetStateAction<boolean>>;
}

export const CurrentTrainTableRow = ({
  engineAmperage,
  force,
  speed,
  setIsDisabled,
  index,
}: ICurrentTrainTableRowProps) => {
  return (
    <tr>
      <CurrentTrainTableCell
        index={index}
        setIsDisabled={setIsDisabled}
        type="engineAmperage"
        initialValue={'' + engineAmperage}
      />
      <CurrentTrainTableCell
        index={index}
        setIsDisabled={setIsDisabled}
        type="force"
        initialValue={'' + force}
      />
      <CurrentTrainTableCell
        index={index}
        setIsDisabled={setIsDisabled}
        type="speed"
        initialValue={'' + speed}
      />
    </tr>
  );
};
