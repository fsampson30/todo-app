export default function Counter() {

    function incrementCouterFunction() {
        console.log('increment clicked')
    }

    return (
        <div className="Counter">
            <span className="count">0</span>
            <div>
                <button className="counterButton" onClick={incrementCouterFunction}>+1</button>
            </div>
        </div>
    )
}