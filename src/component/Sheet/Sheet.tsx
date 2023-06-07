import React,{ FunctionComponent} from "react";
import Row from "../Row/Row";
import Column from "../Column/Column";
import Resizer from "../Resizer/Resizer";
import Cell, { CELL_HEIGHT, CELL_WIDTH } from "../Cell/Cell";
import { SheetSizeState } from "../../store/SheetSizeState";
import { useRecoilState } from "recoil";
import classes from "./Sheet.module.css";

export type SheetProps = {}

const Sheet: FunctionComponent<SheetProps> = (props) =>{
    const SheetSize = useRecoilState(SheetSizeState);
    const numberOfColumns = Math.ceil(SheetSize[0].width/CELL_WIDTH);
    const numberOfRows = Math.ceil(SheetSize[0].height/CELL_HEIGHT);

    return (
        <div className={classes.SheetWrapper}>
        <table className={classes.Sheet}>
            <tbody>
                {[...Array(numberOfRows)].map((row,rowIndex)=>(
                    <Row>
                        {[...Array(numberOfColumns)].map((column,columnIndex)=>(
                            <Column>
                                <Cell cellId={`${rowIndex},${columnIndex}`} />
                            </Column>
                        ))}
                    </Row>
                ))}
            </tbody>
        </table>
        <Resizer />
        </div>
    );
}

export default Sheet;