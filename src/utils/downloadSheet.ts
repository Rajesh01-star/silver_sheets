import { CellValueState } from '../store/CellValueState';
import { useRecoilSnapshot } from 'recoil';

const useDownloadSheet = (cellIds: string[]) => {
  const snapshot = useRecoilSnapshot();

  const generateCsvString = () => {
    let csvString = '';

    cellIds.forEach((cellId: string) => {
      const value = snapshot.getLoadable(CellValueState(cellId)).contents;
      if (value !== '') {
        csvString += `${cellId},${value}\n`;
      }
    });

    return csvString;
  };

  return generateCsvString;
};

const generateCellIdsInRange = (start: string, end: string): string[] => {
    const [startRow, startCol] = start.split(',').map(Number);
    const [endRow, endCol] = end.split(',').map(Number);
  
    const cellIds = [];
  
    for (let row = startRow; row <= endRow; row++) {
      for (let col = startCol; col <= endCol; col++) {
        cellIds.push(`${row},${col}`);
      }
    }
  
    return cellIds;
  };

export {generateCellIdsInRange};

export default useDownloadSheet;
