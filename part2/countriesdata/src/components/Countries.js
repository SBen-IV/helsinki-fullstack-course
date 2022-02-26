import React from 'react'

const Countries = ({ countries }) => {
	const showCountry = () => {
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
	}

	return (<div>
		<ul>
			{countries.map(country => 
				<li>
					{country.name.common} <button onClick={showCountry}>Show</button>
				</li>)}
		</ul>
	</div>)

}

export default Countries