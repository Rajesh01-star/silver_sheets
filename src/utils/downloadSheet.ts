import { CellValueState } from '../store/CellValueState';
import { useRecoilSnapshot } from 'recoil';

const useLogNonEmptyCellValues = (cellIds: string[]) => {
  const snapshot = useRecoilSnapshot();

  const logNonEmptyCellValues = () => {
    cellIds.forEach((cellId: string) => {
      const value = snapshot.getLoadable(CellValueState(cellId)).contents;
      if (value !== '') {
        console.log(`Cell ${cellId}: ${value}`);
      }
    });
  };

  return logNonEmptyCellValues;
};

export default useLogNonEmptyCellValues;
