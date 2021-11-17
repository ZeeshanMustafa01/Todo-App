import React, { Fragment, useContext } from 'react';
import userContext from '../utils/Context';
import { button } from '../utils/Buttons';
import { BiPlus } from 'react-icons/bi';
import { BiMinus } from 'react-icons/bi';

function Edit(props) {
	const context = useContext(userContext);
	const edit = context.itemEdit;
	return (
		<Fragment>
			{edit.length > 0 && (
				<div className='edit-overlay'>
					<div className='edit-container'>
						<h4>{edit[0].item}</h4>

						<div className='edit_actions'>
							{button(context.handleDecreament, 'minus', <BiMinus />)}
							{button('_', 'edit_quantity', edit[0].quantity)}
							{button(context.handleIncreament, 'plus', <BiPlus />)}
						</div>

						{button(context.handleSaveEdit, 'edit_ok', 'Ok')}
						{button(context.handleRemoveItem, 'edit_remove', 'Romove Item')}
					</div>
				</div>
			)}
		</Fragment>
	);
}

export default Edit;
