import {useState} from 'react'; //useState is name of the hook
import "./style.css";

export default function StateHook(){
    const [count,setCount]=useState(0) //state variable is created under functional component & have store data & update data and useState always return true becoz it's function initial value can be anything 0
    function IncBtnHandler(){
        setCount((prev)=>prev + 1);
    }
    const DecBtnHandler = () =>setCount(count-1);

    return(
        <div className='display-flex'>
        <button onClick={DecBtnHandler} className='count-btn'>Decrement Button</button>
        <button onClick={IncBtnHandler} className='count-btn'>Increament Button</button>
        <p className={`'circle-count' ${count < 0 ? "circle-count" : "circle-count-increment"}`}>{count}</p>
        </div>
    )

}