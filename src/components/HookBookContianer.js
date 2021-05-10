import { useReducer } from 'react';
import react from 'react-redux';
import {useSelector,useDispatch} from "react-redux";



function HookbookContainer(){
    const numberOfBooks=useSelector(state=>state.numberOfBooks);
    const dispatch=useDispatch();
    return(
        <div>
<h1> arun sharm aHokbok - {numberOfBooks} </h1>
<button onClick={()=>dispatch(buyBook())}>buy bok</button>
        </div>
    )
}


export default HookbookContainer;