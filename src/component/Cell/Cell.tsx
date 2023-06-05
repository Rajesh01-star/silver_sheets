import React,{ReactNode, FunctionComponent,useState, useEffect, useRef, ChangeEvent} from "react";
import { atom, useRecoilState } from "recoil";
import { CellValueState } from "../../store/CellValueState";
import classes from './Cell.module.css';


export type CellProps = {
    children: ReactNode;
}

const Cell : FunctionComponent<CellProps> = (props)=>{
    const [cellValue,setCellValue] = useRecoilState<string>(CellValueState)
    const [isEditMode,setIsEditMode] = useState(false);
    const inputRef = useRef(null);

    const changeLabelToInput = ()=> setIsEditMode(true);
    const changeInputToLabel = ()=> setIsEditMode(false);
    const onClickOutSideInputHandler = (event:MouseEvent)=> {
        if((event.target as HTMLElement)?.dataset?.cellId !== "2"){
            changeInputToLabel();
        }
    };
    const updateCellValueState = (event:ChangeEvent<HTMLInputElement>)=> setCellValue(event.target.value)

    useEffect(()=>{
        document.addEventListener("click",onClickOutSideInputHandler);
        return document.addEventListener("click",onClickOutSideInputHandler);
    },[]);

    return isEditMode ?
    <input ref={inputRef} data-cell-id={"2"} value={cellValue} onChange={updateCellValueState} /> : 
    <div data-cell-id={"2"} onClick={changeLabelToInput}>{props.children}</div>
}

export default Cell;