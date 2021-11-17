import React, { useContext } from 'react';
import { GrFormAdd } from 'react-icons/gr';
import userContext from '../utils/Context';

function Input() {
	const context = useContext(userContext);

	return (
		<form onSubmit={context.handleSubmit} className='form'>
			<input
				autoFocus
				className='input_item'
				type='text'
				placeholder='Add Item'
				value={context.input}
				onChange={context.handleChange}
			/>

			<button onClick={context.handleSubmit} className='input_button'>
				<GrFormAdd />
			</button>
		</form>
	);
}

export default Input;
