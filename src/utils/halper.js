import {v4 as uuid} from "uuid"

export function createUniqueID(){
    return uuid().slice(0,8)
}