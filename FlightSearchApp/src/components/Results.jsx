
function Results(){
    return(
    <>
    

    <div className="results-container">
        <div className="image">
            <img src="./venturevibes.jpg"></img>
        </div>

        <div className="results"></div>
        <div className="location-input">
            <label>Location: </label>
            <label className="location-output-response">Response</label>
        </div>
        <div className="budget-output">
            <label>Budget: </label>
            <label className="budget-output-response">Response</label>
        </div>

        <div className="estimated-time-output">
        <label>Estimated Time: </label>
        <label className="estimated-time-output-response">Response</label>
        </div>

        <div className="best-route-output">
        <label>Best Route: </label>
        <label className="best-route-output-response">Response</label>
        </div>
    </div>
    </>

)}

export default Results