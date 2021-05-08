import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
    const [state, setstate] = useState(false);

    function deleteHandler() {
        setstate(true);
    }

    function closeHandler() {
        setstate(false);
    }

    return (
        <div>
            <h1>My Todos</h1>
            <div className='card'>
                <h2>{props.title}</h2>
                <div className='actions'>
                    <button className='btn' onClick={deleteHandler}>Delete</button>
                </div>
            </div>
            { state && <Modal onCancel={closeHandler} onConfirm = {closeHandler} />}
            { state && <Backdrop onClick = {closeHandler}/>}
        </div>
    );
}

export default Todo;