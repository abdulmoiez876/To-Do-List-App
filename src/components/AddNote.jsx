import React, {useState} from 'react'

export default function AddNote(props) {
    const [inputTitle, setInputTitle] = useState('');
    const [inputDescription, setInputDescription] = useState('');

    // to tackle with the values typed in the input fields
    const handleChange = (event) => { 
        var eventName = event.target.name;
        var eventValue = event.target.value;
        if(eventName === "inputTitle") {
            setInputTitle(eventValue);
        } else {
            setInputDescription(eventValue);
        }
    }
    
    return (
        <form>
            <input type="text" name="inputTitle" placeholder="Add Title" value={inputTitle} onChange={handleChange}/>
            <input type="text" name="inputDescription" placeholder="Add Description" value={inputDescription} onChange={handleChange}/>
            <button
            type = 'button'
            onClick={() => {
                props.addToNotes(inputTitle, inputDescription);
                setInputTitle('');
                setInputDescription('');
            }}
            >Add</button>
        </form>
    )
}
