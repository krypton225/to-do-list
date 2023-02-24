import { ChangeEvent, ReactElement, useState } from "react";

import IListItem from "./IListItem";
import ListTask from "./ListTask";

function App(): ReactElement {
    const [task, setTask] = useState<string>("");
    const [days, setDays] = useState<number>(1);

    const [list, setList] = useState<IListItem[]>([]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        if (e.target.name === "task") {
            setTask(e.target.value);
        } else if (e.target.name === "days") {
            setDays(parseInt(e.target.value));
        }
    };

    const addOneTask = (): void => {
        setList([...list, { taskName: task, taskDays: days }]);
        setTask("");
        setDays(0);
    };

    return (
        <div className="App">
            <div className="header">
                <input type="text" value={task} name="task" placeholder="Add new task.." onChange={handleInputChange} />
                <input type="number" value={days} name="days" min={1} placeholder="Days of the task.." onChange={handleInputChange} />

                <button className="add-btn" onClick={addOneTask}>Add task</button>
            </div>

            <div className="list">
                {
                    list.map((task: IListItem, myKey: number) => {
                        return <ListTask key={myKey} allTasks={task} />;
                    })
                }
            </div>
        </div>
    );
}

export default App;
