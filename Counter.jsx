import { useState } from "react";

function Counter(){
    let [count,setCount] = useState(0)
    function increase(){
        setCount(count+1)
    }

    function decrease(){
        setCount(count-1)
    }

    function reset(){
        setCount(count=0)
    }
    return(
        <div>
            <h1>Counter App</h1>
            <h2>{count}</h2>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
            <button className="reset" onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter;