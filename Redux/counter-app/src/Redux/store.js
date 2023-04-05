import { legacy_createStore } from "redux";
import { reducerFunction } from "./reducer";
export const store = legacy_createStore(reducerFunction)