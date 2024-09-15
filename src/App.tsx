import { useState } from 'react';
import './App.css';

function App() {
	const [count, setCount] = useState(0);
	console.error('Error message');
	return (
		<button
			onClick={() => setCount(count + 1)}
			type={'button'}
			onMouseDown={() => {}}
			onMouseDownCapture={() => {}}
		>
			{count}
		</button>
	);
}

export default App;
