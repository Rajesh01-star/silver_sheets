import React,{ FunctionComponent, ReactNode} from "react";

export type RowProps = {
    children:ReactNode | string;
}

const Row: FunctionComponent<RowProps> = (props) =>{
    return <tr>{props.children}</tr>;
}

export default Row;