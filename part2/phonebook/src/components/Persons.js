import React from 'react'
import Person from './Person'

const Persons = ({ persons, removePerson }) => {
	return (
		<ul>
		{persons.map(
			person =>
			<Person 
				key={person.name}
				name={person.name}
				number={person.number}
				removePerson={removePerson}
				id={person.id}>
			</Person>
		)}
	</ul>
	)
}

export default Persons