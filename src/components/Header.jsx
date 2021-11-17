import React, { useContext } from 'react';
import Input from './Input';
import userContext from '../utils/Context';
import Sorting from './common/Sorting';

function Header() {
	const context = useContext(userContext);

	return (
		<header className='header'>
			<div className='header_box'>
				<div className='header_text'>
					<div className='header_text--title'>Your List</div>
					<div onClick={context.handleClearList} className='header_text--clear'>
						Clear List
					</div>
				</div>
				<Sorting />
			</div>
			<Input />
			<div />
		</header>
	);
}

export default Header;
