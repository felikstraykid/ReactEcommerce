import ReactDOM from "react-dom";
import { useState, useEffect} from 'react'

function Timer() {
    const [count, setCount] = useState(0);
    const [cal, setCal] = useState(0);

    useEffect(() => {
        setCal(() => count * 3);
    } , [count]);

    

    return(

        <>
       
        <div></div>
        <h1 className="text-warning">The count is : {count}</h1>
        <button onClick={() => setCount((c) => c+1)} className="btn-success btn-lg">Click here</button>
        <h2 className="text-info">The cal is : {cal}</h2>
        </>
    )
}

export default Timer