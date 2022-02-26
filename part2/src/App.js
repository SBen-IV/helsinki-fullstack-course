import React, { useState, useEffect } from 'react'
import Note from './components/Note'
import noteService from './services/notes'

const App = () => {
	const [notes, setNotes] = useState([])
	const [newNote, setNewNote] = useState('A new note...')
	const [showAll, setShowAll] = useState(true)

	const hook = () => {
		noteService
			.getAll()
			.then(initialNote => {
				setNotes(initialNote)
			})
	}

	useEffect(hook, [])
	
	console.log('render', notes.length, 'notes')

	const notesToShow = showAll ? notes : notes.filter(note => note.important === true)

	const addNote = (event) => {
		event.preventDefault()
		const noteObject = {
			content: newNote,
			date: new Date().toISOString(),
			important: Math.random() < 0.5,
		}

		noteService
			.create(noteObject)
			.then(returnedNote => {
				setNotes(notes.concat(returnedNote))
				setNewNote('')
			})
	}

	const toggleImportanceOf = (id) => {
		console.log(`Importance of ${id} needs to be toggled`)
		const note = notes.find(n => n.id === id)
		const changedNote = { ...note, important: !note.important }

		noteService
			.update(id, changedNote)
			.then(returnedNote => {
				setNotes(notes.map(note => note.id !== id ? note : returnedNote))
			})
			.catch(error => {
				alert (
					`The note '${note.content}' was already deleted from server.`
				)
				setNotes(notes.filter(n => n.id !== id))
			})
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
			  <Note
			  	key={note.id}
				note={note}
				toggleImportance={() => toggleImportanceOf(note.id)}></Note>
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