import axios from 'axios'
import React, { useState, useEffect } from 'react'
import DisplayCountries from './components/DisplayCountries'

const App = () => {
	const [ countries, setCountries ] = useState([])
	const [ query, setQuery ] = useState('')
	const [ countriesShown, setCountriesShown ] = useState([])
	
	useEffect(() => {
		axios
			.get('https://restcountries.com/v3.1/all')
			.then(response => {
				console.log(response.data)
				setCountries(response.data)
			})
	}, [])

	const lookupCountries = (event) => {
		setQuery(event.target.value)
		setCountriesShown(
			countries.filter(country =>
				country.name.common.toLowerCase().match(event.target.value.toLowerCase())
			)
		)
	}

	return (
		<div>
			Find countries <input value={query} onChange={lookupCountries}></input>
			<DisplayCountries countries={countriesShown}></DisplayCountries>
		</div>
	)

}

export default App
