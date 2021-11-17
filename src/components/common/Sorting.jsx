import React, { useContext } from 'react';
import { BiSort } from 'react-icons/bi';
import userContext from '../../utils/Context';

function Sorting(props) {
	const context = useContext(userContext);

	return (
		<div onClick={() => context.handleSort('item')} className='header_icon'>
			<BiSort title='sort' />
		</div>
	);
}

export default Sorting;
