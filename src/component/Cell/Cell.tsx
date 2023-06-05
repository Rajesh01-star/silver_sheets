import React,{Children, ReactNode, FunctionComponent,useState, useEffect, useRef} from "react";
import classes from './Cell.module.css';

export type CellProps = {
    children: ReactNode;
}

const Cell : FunctionComponent<CellProps> = (props)=>{
    const [isEditMode,setIsEditMode] = useState(false);
    const inputRef = useRef(null);

    const changeLabelToInput = ()=> setIsEditMode(true);
    const changeInputToLabel = ()=> setIsEditMode(false);
    const onClickOutSideInputHandler = (event:MouseEvent)=> {
        if((event.target as HTMLElement)?.dataset?.cellId !== "2"){
            changeInputToLabel();
        }
    };

    useEffect(()=>{
        document.addEventListener("click",onClickOutSideInputHandler);
        return document.addEventListener("click",onClickOutSideInputHandler);
    },[]);

    return isEditMode ?
    <input ref={inputRef} data-cell-id={"2"} /> : 
    <div data-cell-id={"2"} onClick={changeLabelToInput}>{props.children}</div>
}

export default Cell;