import React, { useState } from 'react'
import Note from './components/Note'

const App = (props) => {
	const [notes, setNotes] = useState(props.notes)
	const [newNote, setNewNote] = useState('A new note...')
	const [showAll, setShowAll] = useState(true)

	const notesToShow = showAll ? notes : notes.filter(note => note.important === true)

	const addNote = (event) => {
		event.preventDefault()
		const noteObject = {
			content: newNote,
			date: new Date().toISOString(),
			important: Math.random() < 0.5,
			id: notes.length + 1
		}

		setNotes(notes.concat(noteObject))
		setNewNote('')
	}

	const handleNoteChange = (event) => {
		console.log(event.target.value)
		setNewNote(event.target.value)
	}

	return (
	  <div>
		<h1>Notes</h1>
		<div>
			<button onClick={() => setShowAll(!showAll)}>
				Show {showAll ? 'important' : 'all'}
			</button>
		</div>
		<ul>
		  {notesToShow.map(
			note => (
			  <Note key={note.id} note={note}></Note>
			)
		  )}
		</ul>
		<form onSubmit={addNote}>
			<input value={newNote} onChange={handleNoteChange}/>
			<button type="submit">Save</button>
		</form>
	  </div>
	)
  }
 
export default App