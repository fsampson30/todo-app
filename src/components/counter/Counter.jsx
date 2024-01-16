import { useState } from 'react'
import './Counter.css'
import { PropTypes } from 'prop-types'


export default function Counter({by}) {

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

Counter.propTypes = {
    by: PropTypes.number
}

Counter.defaultProps = {
    by: 1
}