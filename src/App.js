import React, { useState } from 'react'

const App = () => {
	const [count, setCount] = useState(0);

	const increment = () => setCount(count + 1);

	const decrement = () => setCount(count - 1);

	const increment2 = () => setCount(previousCount => previousCount + 1);

	const decrement2 = () => setCount(previousCount => previousCount - 1);

	const reset = () => setCount(0);

	const multi = () => setCount(count * 2);

	const threeHalf = () => setCount(previousCount => {
		if(previousCount % 3== 0){
			return previousCount/3
		}else{
			return previousCount
		}
	})

	return (
		<>
			<div>count: {count}</div>
			<div>
				<button onClick={increment}>+1</button>
				<button onClick={decrement}>-1</button>
			</div>
			<div>
				<button onClick={increment2}>+1</button>
				<button onClick={decrement2}>-1</button>
			</div>
			<div>
				<button onClick={reset}>Reset</button>
				<button onClick={multi}>x2</button>
				<button onClick={threeHalf}>3の倍数の割るで割る</button>
			</div>
		</>
	)
}

export default App;
