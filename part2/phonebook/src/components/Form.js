import React from "react"

const Form = ({ onSubmit, valueName, onChangeName, valueNumber, onChangeNumber}) => {
	return (
		<form onSubmit={onSubmit}>
			<div>
				Name: <input value={valueName} onChange={onChangeName}/>
			</div>
			<div>
				Number: <input value={valueNumber} onChange={onChangeNumber}/>
			</div>
			<div>
				<button type="submit">Add</button>
			</div>
		</form>
	)
}

export default Form