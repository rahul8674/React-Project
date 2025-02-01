import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web'; // For animated background

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  // Using react-spring to animate background color based on count
  // Here we map count to a color value. You might need to adjust the interpolation for a bezier curve effect.
  const springProps = useSpring({
    background: `rgba(${Math.min(255, count * 10)}, ${Math.max(0, 255 - count * 10)}, 150, 1)`,
    config: { tension: 170, friction: 26 } // Adjust these for a bezier-like effect if needed
  });

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  return (
    <animated.div style={{ ...springProps, padding: '20px', borderRadius: '8px' }}>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </animated.div>
  );
};

export default Counter;
