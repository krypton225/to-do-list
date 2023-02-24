import { ReactElement } from "react";

function App(): ReactElement {
    return (
        <div className="App">
            <div className="header">
                <input type="text" name="task" placeholder="Add new task.." />
                <button className="add-btn">Add task</button>
            </div>

            <div className="list">List</div>
        </div>
    );
}

export default App;
