import { Dispatch } from "redux"

export const requestStart = () => {
  return {type: "REQUEST_START"}
}

export const requestOk = (data) => {
  return {
    type: "REQUEST_OK",
    payload: data
  }
}

export const requestFalha = (erro) => {
  return {
    type: "REQUEST_FALHOU",
    erro: erro
  }
}

export const fetchDogImagem = () => {
  return async (dispatch: Dispatch) => {
    dispatch(requestStart());
    try{
      const request = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await request.json();
      dispatch(requestOk(data.message));
    }catch(erro){
      dispatch(requestFalha(erro))
    }
  }
}