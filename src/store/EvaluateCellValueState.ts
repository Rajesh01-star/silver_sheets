import { selector } from "recoil";
import { memorize } from "../utils/memorize";
import { CellValueState } from "./CellValueState";
import { evaluate } from "mathjs";
// import { getEquationExpressionFromState } from "../utils/getEquationExpressionFromState";

export const EvaluatedCellValueState = <T> (cellId: string) =>
  memorize(`evaluatedCell_${cellId}`, () =>
    selector({
      key: `evaluatedCell_${cellId}`,
      get: ({ get }) => {
        const value = get(CellValueState(cellId)) as string;
        if(value.startsWith("=")){
            try{
                return evaluate(value.slice(1))
            }catch{
                return value;
            }
        }
        return value
        
      }
    })
  );