import './tasks.scss'

export default function Task({task, index, deleteFromList, changeDoneStatus}) {

        return (
            <li className='single-task' key={index}>
                <input type='checkbox' />
                <div className={task.done ? 'custom-checkbox-done' : 'custom-checkbox-not-done'} onClick={() => changeDoneStatus(index)}>{task.done ? 'V' : ''}</div>
                <span className={task.done ? 'name-done' : 'name-not-done'}>{task.name}</span>
                <button onClick={() => deleteFromList(index)}>X</button>
            </li>
        )
        
}