function Countdown(props) {
    return (
        <div className="countdown">
            <div className="flip-down"></div>
            <div className="bottom"></div>
            <p className="count">{props.output ? props.output : 0}</p>
            <p className="days count-title">{props.heading}</p>
        </div>
    )
}

export default Countdown;