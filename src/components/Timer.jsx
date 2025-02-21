// src/components/Timer.jsx
import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';

const Timer = ({ duration, onTimeUp, reset }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    setTimeLeft(duration); // Reset timer when `reset` prop changes
  }, [reset, duration]);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp();
      return;
    }
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, onTimeUp]);

  return <Typography variant="h6">Time Left: {timeLeft} seconds</Typography>;
};

export default Timer;