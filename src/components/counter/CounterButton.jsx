import { PropTypes } from 'prop-types'
import { useState } from 'react'

export default function CounterButton({ by, incrementMethod, decrementMethod }) {

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