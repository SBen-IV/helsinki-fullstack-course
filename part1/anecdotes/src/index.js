import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Anecdote = ({title, text, votes}) => {
  return (
    <>
      <h1>{title}</h1>
      {text}<br></br>
      Has {votes} votes.<br></br>
    </>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(new Array(anecdotes.length).fill(0))
  const [mostVoted, setMostVoted] = useState(0)

  const addVote = () => {
    const copy = [ ...votes ]
    copy[selected] += 1
    setVote(copy)
    setMostVoted(copy.indexOf(Math.max(...copy)))
  }

  return (
    <div>
      <Anecdote title="Anecdote of the day" text={props.anecdotes[selected]} votes={votes[selected]}></Anecdote>
      <button onClick={addVote} >Vote</button>
      <button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}>Next anecdote</button>
      <Anecdote title="Anecdote with most votes" text={props.anecdotes[mostVoted]} votes={votes[mostVoted]}></Anecdote>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'))