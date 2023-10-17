import Task from './Task';
import './tasks.scss';
import { useState } from 'react';

export default function Tasks() {

    const [list, setList] = useState([{"name": "one", "done": false}, {"name": "two", "done": false}, {"name": "three", "done": false}])

	const deleteFromList = (index) => {
		setList(list.filter((_, listIndex) => listIndex !== index))
	}

	const addToList = (element) => {
		setList([...list, {"name": element, "done": false}])
	}

    const changeDoneStatus = (index) => {
        let newList = list.map((element, listIndex) => {
            if(index === listIndex) {
                element.done = !element.done
            }
            return element
        })
        setList(newList)
    }

	const handleSubmit = (e) => {
		e.preventDefault()
		let input = e.target[0]
		if(input.value !== '' && input.value !== null) {
			addToList(input.value)
			input.value = ''
		}
	}

	return (
        <div className='main-task-list'>
            <div className='task-list'>
                
                <h2>Todo</h2>
                <hr/>
                <form onSubmit={handleSubmit}>
                    <input placeholder='Add a new task' />
                    <button>+</button>
                </form>
                
                <ul id='not-done-tasks'>
                    {list.map((task, index) => {
                        if(!task.done) {
                            return (
                                <Task task={task} index={index} deleteFromList={deleteFromList} changeDoneStatus={changeDoneStatus} key={index} />
                            )
                        }
                    })}
                </ul>
                <hr/>
                <ul id='done-tasks'>
                    {list.map((task, index) => {
                        if(task.done) {
                            return (
                                <Task task={task} index={index} deleteFromList={deleteFromList} changeDoneStatus={changeDoneStatus} key={index} />
                            )
                        }
                    })}
                </ul>
            </div>
        </div>
	);

}