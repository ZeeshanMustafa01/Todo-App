import React from 'react';

function ItemLayout({ item, index, complete, classes, icon, qtyChange }) {
	return (
		<li key={index} className='listItem'>
			<div className='item'>
				<div className='item_title'>{item.item.slice(0, 1)}</div>
				<div className='item_name'>{item.item}</div>
			</div>

			<div className='action'>
				<button
					disabled={!qtyChange}
					onClick={() => qtyChange(item.item)}
					className='action_quantity'>
					{item.quantity}
				</button>
				<button onClick={() => complete(item.item, index)} className={classes}>
					{icon}
				</button>
			</div>
		</li>
	);
}

export default ItemLayout;
