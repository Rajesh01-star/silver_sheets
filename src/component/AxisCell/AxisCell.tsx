import React,{FunctionComponent, ReactNode} from "react";
import classes from "./AxisCell.module.css";

export type AxisCellProps = {
    children:ReactNode;
};

const AxisCell:FunctionComponent<AxisCellProps> = (props)=>{
    return <th className={classes.AxisCell}>{props.children}</th>
}

export default AxisCell;