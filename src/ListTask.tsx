import IListTaskProps from "./IListTaskProps";

const ListTask = ({ allTasks }: IListTaskProps) => {
    return (
        <p>{allTasks?.taskName} - {allTasks?.taskDays}</p>
    );
};

export default ListTask;