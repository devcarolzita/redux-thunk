import { AnyAction } from "redux"

const INITIAL_STATE = {
  error: null,
  isLoading: true,
  content: null
}

const rootReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch(action.type){
    case "REQUEST_OK":
      return {
        ...state,
        isLoading: false,
        content: action.payload
      }
      case "REQUEST_START":
        return {
          ...state,
          isLoading: true,
        }
      case "REQUEST_FALHA":
        return {
          ...state,
          isLoading: false,
          erro: action.erro
        }
  }
  return state;
}

export default rootReducer;