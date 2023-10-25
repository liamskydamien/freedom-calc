const EnterUserDetails = () => {
    return (
        <div className="card">
            <ol className="steps">
                <li className="step overflow-hidden">
                    <div className="step-circle">1</div>
                    <h3>Done</h3>
                </li>
                <li className="step overflow-hidden">
                    <div className="step-circle">2</div>
                    <h3>In progress</h3>
                </li>
                <li className="step overflow-hidden">
                    <div className="step-circle">3</div>
                    <h3>Waiting</h3>
                </li>
            </ol>
            <button className="btn btn-primary">Hello World</button>
        </div>
    )
}

export default EnterUserDetails;
