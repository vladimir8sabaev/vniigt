import { PropsWithChildren } from 'react';

export const TrainsTableCell = ({ children }: PropsWithChildren) => {
  return (
    <td className="cell" scope="row">
      {children}
    </td>
  );
};
