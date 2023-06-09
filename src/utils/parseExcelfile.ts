import * as XLSX from 'xlsx';

export const parseExcelFile = (file: File): Promise<any[][]> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e: ProgressEvent<FileReader>) => {
      try {
        const data = new Uint8Array(e.target!.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });

        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];

        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 }) as any[][];

        // Add cell ID information to the parsed data
        const parsedDataWithCellId = jsonData.map((row, rowIndex) =>
          row.map((cellValue, columnIndex) => ({
            cellId: `${rowIndex},${columnIndex}`,
            value: cellValue,
          }))
        );

        // console.log('Parsed Excel Data:', parsedDataWithCellId); // Log the parsed data with cell ID

        resolve(parsedDataWithCellId);
      } catch (error) {
        reject(error);
      }
    };

    reader.readAsArrayBuffer(file);
  });
};
