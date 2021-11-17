import Main from './components/Main';
import './Sass/App.scss';

console.log('SUPERMAN', process.env);

function App() {
	return (
		<div className='container'>
			<Main />
		</div>
	);
}

export default App;
