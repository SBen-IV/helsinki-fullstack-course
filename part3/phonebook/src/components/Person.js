import React from 'react'

const Person = ({ name, number, removePerson, id }) => {
	return (
		<div>{name} {number} <button onClick={() => removePerson(id)}>
			Delete
			</button>
		</div>
	)
}

export default Person
