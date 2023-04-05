import { ADD, REDUCE } from "./actionTypes";

const initState = {
    count: 10
}

export const reducerFunction = (state = initState, { type, payload }) => {
    switch (type) {
        case ADD: {
            return {
                ...state,
                count: state.count + payload
            }
        }
        case REDUCE: {
            return {
                ...state,
                count: state.count - payload
            }
        }
        default: {
            return state;
        }

    }
}