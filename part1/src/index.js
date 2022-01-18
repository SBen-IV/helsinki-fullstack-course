import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
	return (
		<div>
			<p>Hello {props.name}, you are {props.age} years old</p>
		</div>
	)
}

const App = () => {
	const name = "Mark"
	const age = 10
	return (
		<div>
			<h1>Greetings</h1>
			<Hello name="George" age={80-34}/>
			<Hello name={name} age={age}/>
			<Hello name="Alice" age="unkown"/>
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
