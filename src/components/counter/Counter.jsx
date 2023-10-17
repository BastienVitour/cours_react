import { useState, useEffect } from 'react'
import './counter.scss'

export default function Counter() {

    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(counter + 1)
    }

    useEffect(() => {
        if(counter === 50) {
            alert("Le compteur est arrivé à 50")
        }
    }, [counter])

    return (

        <div className='counter'>
            <span>Count is {counter}</span>
            <button className='btn btn-success' onClick={increment}>Increment</button>
        </div>

    )

}