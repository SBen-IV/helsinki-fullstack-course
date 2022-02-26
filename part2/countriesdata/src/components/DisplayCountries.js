import React from 'react'
import Countries from './Countries'
import Country from './Country'

const DisplayCountries = ({ countries }) => {
	console.log(countries)

	if (countries.length === 0) {
		return <div>No matches.</div>
	} else if (countries.length === 1) {
		const country = countries[0]
		const languages = []

		for (const language in country.languages) {
			languages.push(country.languages[language])
		}

		return (
			<div>
				<h1>{country.name.common}</h1>
				<p>Capital {country.capital[0]}<br></br>
				Population {country.population}</p>
				<h2>Languages</h2>
				<ul>
					{languages.map(language => <li key={language}>{language}</li>)}
				</ul>
				<img src={country.flags.png} alt={country.name.common}></img>
			</div>
		)
	} else if (countries.length <= 10) {
		return (
			<div>
				<ul>
					<Countries countries={countries}></Countries>
				</ul>
			</div>
		)
	}

	return <div>Too many matches, specify another filter.</div>
}

export default DisplayCountries