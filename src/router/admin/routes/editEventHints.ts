import { Request, Response } from "express";
import { eventHint } from "./getEventHints";

interface editEventHintRequest {
    id:string
    location:string
}

// แก้ไข event hint

const editEventHints = (req:Request<any,any,editEventHintRequest>,res:Response<eventHint>)=>{

}

export default editEventHints