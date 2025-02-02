import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Button, Paper, Typography, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  // Animate background color based on count
  const springProps = useSpring({
    backgroundColor: `rgba(${Math.min(255, count * 10)}, ${Math.max(0, 255 - count * 10)}, 150, 1)`,
    config: { tension: 170, friction: 26 },
  });

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  return (
    <animated.div style={{ ...springProps, padding: '20px', borderRadius: '8px' }}>
      <Paper elevation={3} sx={{ maxWidth: 300, margin: '20px auto', padding: 3, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Counter: {count}
        </Typography>
        <Box display="flex" justifyContent="center" gap={2} mt={2}>
          <Button variant="contained" color="primary" onClick={increment}>
          <AddIcon />
          </Button>
          <Button variant="contained" color="error" onClick={reset}>
          <RestartAltIcon />
          </Button>
          <Button variant="contained" color="secondary" onClick={decrement}>
          <RemoveIcon />
          </Button>
        </Box>
      </Paper>
    </animated.div>
  );
};

export default Counter;
