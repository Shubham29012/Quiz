// src/components/QuizResult.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Typography, Container, Card, CardContent, List, ListItem, ListItemText } from '@mui/material';

const QuizResult = () => {
  const { state } = useLocation();
  const result = state || { score: 0, total: 0, attemptHistory: [] };

  return (
    <Container>
      <Card>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom>
            Quiz Result
          </Typography>
          <Typography variant="h6" gutterBottom>
            Score: {result.score} / {result.total}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Attempt History
          </Typography>
          <List>
            {result.attemptHistory.map((attempt, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={`Question: ${attempt.question}`}
                  secondary={`Your Answer: ${attempt.answer}`}
                />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Container>
  );
};

export default QuizResult;