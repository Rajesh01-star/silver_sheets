import { useRecoilCallback } from 'recoil';
import { CellValueState } from './CellValueState';

const useUpdateCellValues = () => {
  const setCellValue = useRecoilCallback(({ set }) => (cellId: string, value: any) => {
    set(CellValueState(cellId), value);
  });

  const updateCellValues = (sheetDataArray: any[]) => {
    sheetDataArray.forEach((rowData: any[]) => {
      rowData.forEach((cellData: { cellId: string; value: any }) => {
        const { cellId, value } = cellData;
        // console.log(cellId, value);
        setCellValue(cellId, value);
      });
    });
  };

  return updateCellValues;
};

export default useUpdateCellValues;
