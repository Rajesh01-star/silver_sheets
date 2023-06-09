// import { atom, DefaultValue } from "recoil";
// import { memorize } from "../utils/memorize";
// import { CellValueState } from "../store/CellValueState";
// import { cellIdtoMatrixIndices } from "./cellIdToMatrixIndices";

// export const updateCellValues = (parsedData: any[][]) => {
//   parsedData.forEach((eachRow) => {
//     eachRow.forEach((eachCell) => {
//       console.log(`${eachCell.cellId}: ${eachCell.value}`);
//       const cellAtom = CellValueState(eachCell.cellId);
//       memorize(eachCell.cellId, () => {
//         return atom({
//           key: `cell_${eachCell.cellId}`,
//           default: new DefaultValue(eachCell.value),
//         });
//       });
//     });
//   });
// };

export {}