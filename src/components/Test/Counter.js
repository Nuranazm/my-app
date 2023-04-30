import { useReducer } from "react";


const PLUS = "PLUS";
const MINUS = "MINUS";


const initialState ={
    count:0
}
function countReducer (state,action) {
      console.log(action)
      console.log(state)

      if(action.type === PLUS) {
        return {
            ...state,
            count : state.count + 1,
        };
      }
      if(action.type === MINUS) {
        return {
            ...state,
            count:state.count - 1,
        }
      }
    //   if(action.type === MINUS) {
    //     return {
    //         ...state,
    //         count:state.count - 1,
    //     };
    //   }
}


const Counter = () => {
    // const[counter,setCounter] =useState(0)
    
    const[count,dispatchCount] =useReducer(countReducer,{count:0},initialState)

    

    function plusHandler () {
        dispatchCount({type:PLUS});
    }

    function minusHandler () {
        if(count.count !== 0) {
            dispatchCount({type:MINUS})
        }
    }
  return (
    
     <div>
        <button  onClick={plusHandler}>+</button>
        <div>{count.count}</div>
        <button onClick={minusHandler}>-</button>

    </div>
    
   
  )
}


export default Counter;