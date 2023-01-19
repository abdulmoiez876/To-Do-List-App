import React, { useState } from 'react';

function Note(props) {
    const [disabled, setDisabled] = useState(true);
    const [doneMark, setDoneMark] = useState(false);

    const changeHandler = (event) => {
        if(event.target.name === 'title') {
            props.onEdit({
                id: props.id,
                attr: 'title',
                value: event.target.value
            })
        }
        else if(event.target.name === 'desc') {
            props.onEdit({
                id: props.id,
                attr: 'desc',
                value: event.target.value
            })
        }
    }

    return (
        <div className="note">
            <input className='h1' type="text" value={props.title} disabled={disabled} onChange={changeHandler} name='title'/>
            <input className='p' type="text" value={props.description} disabled={disabled} onChange={changeHandler} name='desc'/>
            <i className="fa-solid fa-circle-check" style={{color: doneMark && 'green'}} onClick={() => {
                console.log('cs')
                setDoneMark(!doneMark)
            }}></i>
            <i className="fa-solid fa-trash"
                onClick={function () {
                    props.onDelete(props.id);
                }}
            ></i>
            {disabled ?
                <i className="fa-solid fa-pen-to-square" onClick={() => {
                    setDisabled(!disabled)
                }}></i>
                :
                <i className="fa-solid fa-floppy-disk" onClick={() => {
                    setDisabled(!disabled)
                }}></i>
            }
        </div>
    )
}

export default Note;