import { memo } from 'react';
import { CurrentTrainTableCell } from '../CurrentTrainTableCell/CurrentTrainTableCell';

export interface ICurrentTrainTableRowProps {
  speed: number;
  force: number;
  engineAmperage: number;
  index: number;
  handleDisable: (value: boolean) => void;
}

export const CurrentTrainTableRow = memo(function ({
  engineAmperage,
  force,
  speed,
  handleDisable,
  index,
}: ICurrentTrainTableRowProps) {
  return (
    <tr>
      <CurrentTrainTableCell
        index={index}
        handleDisable={handleDisable}
        type="engineAmperage"
        initialValue={'' + engineAmperage}
      />
      <CurrentTrainTableCell
        index={index}
        handleDisable={handleDisable}
        type="force"
        initialValue={'' + force}
      />
      <CurrentTrainTableCell
        index={index}
        handleDisable={handleDisable}
        type="speed"
        initialValue={'' + speed}
      />
    </tr>
  );
});
