import React, { useState, useMemo } from 'react';

function ExpensiveCalculation() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(10);

  // Memoized value: Only re-calculated when `value` changes
  const expensiveCalculation = useMemo(() => {
    console.log('Running expensive calculation...');
    // Imagine this is a heavy computation
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += value;
    }
    return result;
  }, [value]);

  return (
    <div>
      <h1>Expensive Calculation Result: {expensiveCalculation}</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setValue(value + 1)}>Change Value</button>
    </div>
  );
}

export default ExpensiveCalculation;
