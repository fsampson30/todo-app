import { useState } from 'react'
import './Counter.css'
import { PropTypes } from 'prop-types'

export default function Counter() {
    const [count, setCount] = useState(0)

    function incrementCounterParentFunction(by){
        setCount(count + by)
    }

    function decrementCounterParentFunction(by){
        setCount(count - by)
    }

    return (
        <>
            <span className="totalCount">{count}</span>
            <CounterButton by={1} incrementMethod={incrementCounterParentFunction} decrementMethod={decrementCounterParentFunction}/>
            <CounterButton by={2} incrementMethod={incrementCounterParentFunction} decrementMethod={decrementCounterParentFunction}/>
            <CounterButton by={5} incrementMethod={incrementCounterParentFunction} decrementMethod={decrementCounterParentFunction}/>
        </>
    )
}


function CounterButton({ by, incrementMethod, decrementMethod }) {

    const [count, setCount] = useState(0)

    function incrementCouterFunction() {
        setCount(count + by)
        incrementMethod(by)
    }

    function dencrementCouterFunction() {
        setCount(count - by)
        decrementMethod(by)
    }

    return (
        <div className="Counter">
            <div>
                <button className="counterButton" onClick={incrementCouterFunction}>+{by}</button>
                <button className="counterButton" onClick={dencrementCouterFunction}>-{by}</button>
            </div>
        </div>
    )
}

CounterButton.propTypes = {
    by: PropTypes.number
}

CounterButton.defaultProps = {
    by: 1
}