export default function List(props) {
    const taskList = props.taskList;
    const taskItems = taskList.map(task => {
        return (
            <li key={task.id} className="list-group-item">
                <div className="list-item">
                    <input id={task.id} type="checkbox" defaultChecked={task.done} />
                    <label htmlFor={task.id}>{task.content}</label>
                </div>
                <div className="btn-group">
                    <button type="button" className="btn btn__danger">
                        Delete
                    </button>
                </div>
            </li>)
    })

    return (
        <div className="list">
            <h2 id="list-heading">{/* nunmber of list */}</h2>
            <ul className="list-group">
                {taskItems}
            </ul>
        </div>
    )
}