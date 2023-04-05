import { ADD, REDUCE } from "./actionTypes"

export const handleAdd = (payload) => {
    return {
        type: ADD,
        payload
    }
}
export const handleReduce = (payload) => {
    return {
        type: REDUCE,
        payload
    }
}