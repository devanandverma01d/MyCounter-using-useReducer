//1.Import Area
import React from 'react'
import './App.css';
import { useReducer } from 'react';

//2. Function defintion area
const Reducer = () => {
    //2.1 Hooks arae
    const initialState = 0
    //2.2 function defintion area
    const reducer = (state,action)=>{
      switch(action)
      {
        case 'INCREMENT':
          return state+1;
        case 'DECREMENT':
          return state-1;
        case 'RESET':
          return initialState;
        case 'INCREMENT BY TWO':
          return state+2;
        case 'DECREMENT BY TWO':
          return state-2;
        default:
          return state;
      }
    


    //   if (action==='INCREMENT'){
    //     return state+1;
    //   } 
    //   else if(action==='DECREMENT'){
    //     return state-1;
    //   }
    //   else if(action==='RESET'){
    //     return initialState;
    //   }
    //   else if(action==='INCREMENT BY TWO'){
    //     return state+2;
    //   }
    //   else if(action==='DECREMENT BY TWO'){
    //     return state-2;
    //   }
    }
      
    const[newState,dispatch]=useReducer(reducer,initialState);
    //2.3 Return Statement
  return (
    <div className='main'>
        <h3>Counter - Using useReduder Hook</h3>
        <hr/>
        <h1>Count = {newState}</h1>
        <button className='btn btn-primary tbdr' type='button' onClick={()=>dispatch('INCREMENT')}>Increment</button>
        <button className='btn btn-primary tbdr' type='button' onClick={()=>dispatch('DECREMENT')}>Decrement</button>
        <button className='btn btn-danger tbdr' type='button' onClick={()=>dispatch('RESET')}>Reset</button>
        <button className='btn btn-primary tbdr' type='button' onClick={()=>dispatch('INCREMENT BY TWO')}>Increment by two</button>
        <button className='btn btn-primary tbdr' type='button' onClick={()=>dispatch('DECREMENT BY TWO')}>Decrement by two</button>
    </div>
  )
}

export default Reducer;