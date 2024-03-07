import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  Dispatch, INITIAL_STATE_TYPE } from '../types';
import { fetchDogImagem } from '../redux/actions';
import './index.css'
function DoguinhosCard() {
  const isLoading = useSelector((globalState:INITIAL_STATE_TYPE) => globalState.isLoading);
  const isImg = useSelector((globalState:INITIAL_STATE_TYPE) => globalState.content);

  const dispatch:Dispatch  =useDispatch();
  
  return (
    <div>
      <p> Veja um doguinho</p>
      <button onClick={() => dispatch(fetchDogImagem())}>Click Me</button>
      {isLoading ?  <p>Carregando...</p> : <div className='borderStyle'> <div className='doguinhoBox'><img src={isImg}  /> </div></div>}
    </div>
  )
}

export default DoguinhosCard
