import React, { useState } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import Form from './components/Form'

const App = () => {
	const [ persons, setPersons ] = useState([
		{ name: 'Arto Hellas', number: '040-123456' },
		{ name: 'Ada Lovelace', number: '39-44-5323523' },
		{ name: 'Dan Abramov', number: '12-43-234345' },
		{ name: 'Mary Poppendieck', number: '39-23-6423122' }
	  ]) 
	const [ newName, setNewName ] = useState('')
	const [ newNumber, setNewNumber ] = useState('')
	const [ query, setQuery ] = useState('')
	
	const personsShown = (query === '') ? persons :
	 persons.filter(person => person.name.toLowerCase().match(query.toLowerCase()))

	const changeNewName = (event) => setNewName(event.target.value)
	
	const changeNewNumber = (event) => setNewNumber(event.target.value)

	const addPerson = (event) => {
		event.preventDefault()

		if (persons.find(person => person.name === newName)) {
			alert(`${newName} is already added to phonebook`)
		} else {
			const person = {
				name: newName,
				number: newNumber
			}
	
			const newPersons = [...persons, person]
			setPersons(newPersons)
		}

		setNewName('')
		setNewNumber('')
	}

	const changeQuery = (event) => {
		setQuery(event.target.value)
	}

	return (
		<div>
			<h2>Phonebook</h2>
			<Filter value={query} onChange={changeQuery}></Filter>

			<h3>Add new</h3>

			<Form onSubmit={addPerson}
				valueName={newName}
				onChangeName={changeNewName}
				valueNumber={newNumber}
				onChangeNumber={changeNewNumber}>
			</Form>

			<h2>Numbers</h2>
			
			<Persons persons={personsShown}></Persons>
		</div>
	)
}

export default App