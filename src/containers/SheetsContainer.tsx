import React, { FunctionComponent } from "react";
import classes from "./SheetsContainer.module.css";
import Sheet from "../component/Sheet/Sheet";

export type SheetsContainerProps = {}

const SheetsContainer:FunctionComponent<SheetsContainerProps> = (props)=>{
    return <Sheet />
}

export default SheetsContainer;