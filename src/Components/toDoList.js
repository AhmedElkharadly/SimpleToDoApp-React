import './todolist.css'

const ToDoList =(props) => {
    
    return(
    <div className='listaya'>
        <span>{props.taskContent}</span>
        <div className='listBtns'>
            <button onClick={props.complete}>comlete</button>
            <button onClick={props.delete}>Delete</button>
        </div>
    </div>)
}

export default ToDoList;