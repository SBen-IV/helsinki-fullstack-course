import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import Form from './components/Form'
import personService from './services/persons'

const App = () => {
	const [ persons, setPersons ] = useState([]) 
	const [ newName, setNewName ] = useState('')
	const [ newNumber, setNewNumber ] = useState('')
	const [ query, setQuery ] = useState('')
	
	const personsShown = (query === '') ? persons :
	 persons.filter(person => person.name.toLowerCase().match(query.toLowerCase()))

	const changeNewName = (event) => setNewName(event.target.value)
	
	const changeNewNumber = (event) => setNewNumber(event.target.value)

	useEffect(() => {
		personService
			.getAll()
			.then(initialPersons => setPersons(initialPersons))
	}, [])

	const addPerson = (event) => {
		event.preventDefault()

		const person = {
			name: newName,
			number: newNumber
		}

		const personExist = persons.find(person => person.name === newName)

		if (personExist) {
			console.log(personExist.id)
			console.log(person)
			const res = window.confirm(`${newName} is already added to phonebook. Replace the old number with a new one?`)

			if (res) {
				personService
					.update(person, personExist.id)
					.then(updatedPerson => {
						setPersons(persons.map(p => p.id !== personExist.id ? p : updatedPerson))
					})
			}
		} else {
			personService
				.create(person)
				.then(newPerson => {
					const newPersons = [...persons, newPerson]
					setPersons(newPersons)
				})
		}

		setNewName('')
		setNewNumber('')
	}

	const removePerson = (id) => {
		const personToRemove = persons.find(person => person.id === id)
		const res = window.confirm(`Delete ${personToRemove.name} ?`)
		console.log(res)

		if (res) {
			personService.remove(id).then(response => console.log(response))
			
			const newPersons = persons.filter(person => person.id !== id)
			setPersons(newPersons)
		}
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
			
			<Persons persons={personsShown} removePerson={removePerson}></Persons>
		</div>
	)
}

export default App