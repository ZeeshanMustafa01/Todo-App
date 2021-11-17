import React, { useContext } from 'react';
import userContext from '../utils/Context';
import ItemLayout from './common/ItemLayout';
import { MdOutlineDone } from 'react-icons/md';

function Completed() {
	const context = useContext(userContext);
	return (
		<div onClick={context.handleEdit} className='complete '>
			{context.itemsCompleted.length > 0 && <h4>COMPLETED</h4>}

			<div className='complete_items'>
				{context.itemsCompleted.map((item, i) => (
					<ItemLayout
						key={i}
						item={item}
						index={i}
						complete={context.handleComplete}
						classes='action_done action_complete'
						icon={<MdOutlineDone />}
					/>
				))}
			</div>
		</div>
	);
}

export default Completed;
