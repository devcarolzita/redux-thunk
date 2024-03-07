import { AnyAction } from 'redux';
import { ThunkDispatch } from "redux-thunk";

export type INITIAL_STATE_TYPE = {
  isError: string;
  content: string;
  isLoading: boolean;
}

export type GlobalStateType = {
  isDog: INITIAL_STATE_TYPE
}

export type Dispatch = ThunkDispatch<GlobalStateType, unknown, AnyAction>;