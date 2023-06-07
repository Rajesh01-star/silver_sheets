import React,{ FunctionComponent, ReactNode} from "react";

export type ColumnProps = {
    children:ReactNode | string;

}

const Column: FunctionComponent<ColumnProps> = (props) =>{
    return <td>{props.children}</td>;
}

export default Column;