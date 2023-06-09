import { atom, RecoilState } from "recoil";
import { memorize } from "../utils/memorize";

export const CellValueState: (cellId: string, defaultValue?: any) => RecoilState<any> = (cellId, defaultValue) =>
  memorize(cellId, () =>
    atom({
      key: `cell_${cellId}`,
      default: defaultValue !== undefined ? defaultValue : '',
    })
  );