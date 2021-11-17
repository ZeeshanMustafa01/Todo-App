import React, { Component } from 'react';
import _ from 'lodash';
import userContext from '../utils/Context';
import Header from './Header';
import Items from './Items';
import Edit from './Edit';

export default class Main extends Component {
	state = {
		data: {
			input: '',
			items: [],
			itemsCompleted: [],
			itemEdit: [],
			sortColum: [{ path: 'item', order: 'asc' }],
		},
	};

	handleChange = (e) => {
		const data = this.state.data;
		data.input = e.currentTarget.value;
		this.setState({ data });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const data = this.state.data;
		const text = data.input.trim();
		const input =
			text.length >= 12
				? (data.input = `${data.input.slice(0, 12)} . . .`)
				: text;

		const existingItem = data.items.find((i) => i.item === input);

		input &&
			(existingItem
				? existingItem.quantity++
				: data.items.push({ item: input, quantity: 1 }));

		data.input = '';
		this.setState({ data });
	};

	handleComplete = (item, index) => {
		const data = this.state.data;
		const task = data.items.find((i) => i.item === item);
		const completeTask = data.itemsCompleted.find((i) => i.item === item);
		// Add to  list
		task ? data.itemsCompleted.unshift(task) : data.items.push(completeTask);
		// remove from list
		task ? data.items.splice(index, 1) : data.itemsCompleted.splice(index, 1);

		this.setState({ data });
	};

	handleChangeQty = (item) => {
		const data = this.state.data;
		const edit = data.items.find((i) => i.item === item);
		edit && data.itemEdit.push(edit);
		this.setState({ data });
	};

	handleSaveEdit = () => {
		const data = this.state.data;
		data.itemEdit = [];
		data.items = data.items.filter((item) => item.quantity > 0);
		this.setState({ data });
	};

	handleRemoveItem = () => {
		const data = this.state.data;
		data.items = data.items.filter((i) => i.item !== data.itemEdit[0].item);
		data.itemEdit = [];
		this.setState({ data });
	};

	handleIncreament = () => {
		const data = this.state.data;
		data.itemEdit[0].quantity++;
		this.setState({ data });
	};

	handleDecreament = () => {
		const data = this.state.data;
		data.itemEdit[0].quantity > 0 && data.itemEdit[0].quantity--;
		this.setState({ data });
	};

	handleClearList = () => {
		const data = this.state.data;
		data.items = [];
		data.itemsCompleted = [];
		this.setState({ data });
	};

	handleSort = (path) => {
		const data = this.state.data;
		if (data.sortColum.path === path) {
			data.sortColum.order = data.sortColum.order === 'asc' ? 'desc' : 'asc';
		} else {
			data.sortColum.path = path;
			data.sortColum.order = 'asc';
		}
		data.items = _.orderBy(
			data.items,
			[data.sortColum.path],
			[data.sortColum.order]
		);
		this.setState({ data });
	};

	render() {
		const { input, items, itemsCompleted, sort, itemEdit } = this.state.data;
		const {
			handleSubmit,
			handleChange,
			handleComplete,
			handleEdit,
			handleChangeQty,
			handleDelete,
			handleIncreament,
			handleDecreament,
			handleSaveEdit,
			handleRemoveItem,
			handleSort,
			handleClearList,
		} = this;

		return (
			<userContext.Provider
				value={{
					input,
					items,
					itemsCompleted,
					sort,
					handleSubmit,
					handleChange,
					handleComplete,
					handleEdit,
					handleChangeQty,
					handleDelete,
					handleIncreament,
					handleDecreament,
					handleSaveEdit,
					handleRemoveItem,
					handleClearList,
					itemEdit,
					handleSort,
				}}>
				<div className='app'>
					<Header />
					<Items />
					<Edit />
				</div>
			</userContext.Provider>
		);
	}
}
