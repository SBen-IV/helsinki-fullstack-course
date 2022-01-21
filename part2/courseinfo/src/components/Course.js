import React from 'react'

const Header = (props) => {
	return (
	  <div>
		<h1>{props.course}</h1>
	  </div>
	)
  }
  
  const Part = (props) => {
	return (
	  <div>
		<p>{props.name} {props.exercises}</p>
	  </div>
	)
  }
  
  const Content = ( {parts} ) => {
	return (
	  <div>
		{parts.map(
		  part => (
			<Part key={part.id} name={part.name} exercises={part.exercises}></Part>
		  )
		)}
	  </div>
	)
  }
  
  const Total = ({ parts }) => {
	const total = parts.reduce((prev, curr) => prev + curr.exercises, 0)
  
	return (
	  <div>
		<b>Total of {total} exercises</b>
	  </div>
	)
  }
  
  const Course = ({ course }) => {
	return (
	  <div>
		<Header course={course.name} />
		<Content parts={course.parts} />
		<Total parts={course.parts} />
	  </div>
	)
  }

export default Course
