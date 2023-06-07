import React,{ FunctionComponent,useState, useEffect, useRef, ChangeEvent} from "react";
import { useRecoilState } from "recoil";
import { CellValueState } from "../../store/CellValueState";
import classes from './Cell.module.css';

export const CELL_WIDTH = 100;
export const CELL_HEIGHT = 25;


export type CellProps = {
    cellId:string;
}

const Cell : FunctionComponent<CellProps> = (props)=>{
    const [cellValue,setCellValue] = useRecoilState<string>(CellValueState(props.cellId))
    const [isEditMode,setIsEditMode] = useState(false);
    const inputRef = useRef(null);

    const changeLabelToInput = ()=> setIsEditMode(true);
    const changeInputToLabel = ()=> setIsEditMode(false);
    const onClickOutSideInputHandler = (event:MouseEvent)=> {
        if((event.target as HTMLElement)?.dataset?.cellId !== props.cellId){
            changeInputToLabel();
        }
    };
    const updateCellValueState = (event:ChangeEvent<HTMLInputElement>)=> setCellValue(event.target.value)

    useEffect(()=>{
        document.addEventListener("click",onClickOutSideInputHandler);
        return document.addEventListener("click",onClickOutSideInputHandler);
    },[]);

    return isEditMode ?
    <input ref={inputRef} data-cell-id={props.cellId} value={cellValue} onChange={updateCellValueState} /> : 
    <div data-cell-id={props.cellId} onClick={changeLabelToInput}>{cellValue}</div>
}

export default Cell;