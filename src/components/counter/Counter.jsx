import { useState } from 'react'
import './Counter.css'
import { PropTypes } from 'prop-types'

export default function Counter() {
    const [count, setCount] = useState(0)

    function incrementCounterParentFunction(by){
        setCount(count + by)
    }

    return (
        <>
            <span className="totalCount">{count}</span>
            <CounterButton />
            <CounterButton by={2} />
            <CounterButton by={5} />
        </>
    )
}


function CounterButton({ by }) {

    const [count, setCount] = useState(0)

    function incrementCouterFunction() {
        setCount(count + by)
    }

    function dencrementCouterFunction() {
        setCount(count - by)
    }

    return (
        <div className="Counter">
            <span className="count">{count}</span>
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