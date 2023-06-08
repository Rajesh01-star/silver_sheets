import { atom } from "recoil";


export const SheetSizeState = atom({
    key: "SheetSizeState",
    default:{
        width:window.innerWidth-200,
        height:window.innerHeight-400,
    },
});