import React, { useState } from 'react';
import Header from './Header';
import AddNote from './AddNote';
import Note from './Note';

export default function App() {
    const [notes, setNotes] = useState([]);
    const listContext = React.createContext(notes)

    const addToNotes = (inputTitle, inputDescription) => {
        if (inputTitle.length === 0 && inputDescription.length === 0) {
            return
        }
        else if (notes.length === 0) {
            setNotes([{
                id: 1,
                title: inputTitle,
                description: inputDescription
            }])
        }
        else {
            setNotes(prev => [
                ...prev,
                {
                    id: prev[prev.length - 1].id + 1,
                    title: inputTitle,
                    description: inputDescription
                }
            ])
        }
    }

    const onDelete = (id) => {
        setNotes(notes.filter(note => id !== note.id))
    }

    const onEdit = (data) => {
        const newArray = notes.map(note => {
            if (note.id === data.id) {
                if (data.attr === 'title') {
                    return {
                        ...note,
                        title: data.title
                    }
                }
                else {
                    return {
                        ...note,
                        description: data.desc
                    }
                }
            }
            return note;
        })
        setNotes(newArray)
    }

    return (
        <>
            <Header />

            <listContext.Provider value={notes}>
                <AddNote
                    addToNotes={addToNotes}
                />
            </listContext.Provider>
            
            {notes.map(note => <Note
                key={note.id}
                id={note.id}
                title={note.title}
                description={note.description}
                onDelete={onDelete}
                onEdit={onEdit}
            />)}
        </>
    )
}
