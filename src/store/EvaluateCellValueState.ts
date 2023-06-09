import { selector } from "recoil";
import { memorize } from "../utils/memorize";
import { CellValueState } from "./CellValueState";
import { evaluate } from "mathjs";
import { getEquationExpressionFromState } from "../utils/getEquationExpressionFromState";

export const EvaluatedCellValueState = <T> (cellId: string) =>
  memorize(`evaluatedCell_${cellId}`, () =>
    selector({
      key: `evaluatedCell_${cellId}`,
      get: ({ get }) => {
        const value = get(CellValueState(cellId));
        if (typeof value === "string" && value.startsWith("=")) {
          try {
            const evaluatedExpression = getEquationExpressionFromState(
              get,
              value.slice(1)
            );
            if (evaluatedExpression === "!ERROR") {
              return "!ERROR";
            }
            return evaluate(evaluatedExpression);
          } catch {
            return value;
          }
        }
        return value;
      }
    })
  );
