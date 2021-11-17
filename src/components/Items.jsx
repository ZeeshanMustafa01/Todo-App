import React, { useContext } from 'react';
import userContext from '../utils/Context';
import ItemLayout from './common/ItemLayout';
import { MdOutlineDone } from 'react-icons/md';
import Completed from './Completed';

function Items() {
	const context = useContext(userContext);
	return (
		<ul className='items-container'>
			{context.items.map((item, i) => (
				<ItemLayout
					key={i}
					item={item}
					index={i}
					complete={context.handleComplete}
					classes='action_done'
					icon={<MdOutlineDone />}
					qtyChange={context.handleChangeQty}
				/>
			))}
			<Completed />
		</ul>
	);
}

export default Items;
