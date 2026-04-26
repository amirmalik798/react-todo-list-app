

function Controls({clearAllTasks, setQueryType, queryType}) {
    return(
        <div className="controls">
            <button className={`control-btn ${queryType === "All Tasks" ? "active" : ""}`}
             onClick={() => setQueryType('All Tasks')}>All Tasks</button>
            <button className={`control-btn ${queryType === "Incomplete Tasks" ? "active" : ""}`} onClick={() => {setQueryType('Incomplete Tasks')}}>Incomplete Tasks</button>
            <button className={`control-btn ${queryType === "Completed Tasks" ? "active" : ""}`} onClick={() => setQueryType('Completed Tasks')}>Completed Tasks</button>
        </div>
    )
}

export default Controls;