import { atom } from "recoil";
import { memorize } from "../utils/memorize";

export const CellValueState = (cellId:string)=> memorize(cellId,()=>
atom({
    key: `cell_${cellId}`,
    default:"",
}))
