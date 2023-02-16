export default function List(props) {
    const taskList = props.taskList;
    const filter = props.filter;
    const checkBox = props.onCheckBox;
    const clickDelete = props.onDelete;


    const onCheckBoxChange = (id, e) => {
        e.preventDefault();
        console.log("showid: ", id, e.target.value)
        checkBox(id);
    }
    const onDelete = (id) => {
        clickDelete(id);

    }
    const taskItems = taskList
        .filter(task => {
            if (filter === "done") {
                return task.done
            }
            if (filter === "active") {
                return !task.done
            }
            return true
        })
        .map(task => {
            return (
                <li key={task.id} className="list-group-item">
                    <div className="list-item">
                        <input id={task.id} type="checkbox" defaultChecked={task.done}
                            onChange={(event) => onCheckBoxChange(task.id, event)} />
                        <label htmlFor={task.id}>{task.content}</label>
                    </div>
                    <div className="btn-group">
                        <button type="button" className="btn btn__danger" onClick={() => onDelete(task.id)}>
                            Delete
                        </button>
                    </div>
                </li>
            )
        })
    return (
        <div className="list">
            <h2 id="list-heading">Task remaining</h2>
            <ul className="list-group">
                {taskItems}
            </ul>
        </div>
    )
}