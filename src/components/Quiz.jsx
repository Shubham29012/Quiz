// src/components/Quiz.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Timer from './Timer';
import { saveQuizResult } from '../db/indexedDB';
import {
  Button,
  Typography,
  Container,
  Card,
  CardContent,
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { fetchQuestions } from '../utils/fetchQuestions';

const Quiz = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [timeUp, setTimeUp] = useState(false);
  const [attemptHistory, setAttemptHistory] = useState([]);

  useEffect(() => {
    const loadQuiz = async () => {
      const questions = await fetchQuestions(categoryId);
      setQuiz({ id: categoryId, title: `Category ${categoryId}`, questions });
    };
    loadQuiz();
  }, [categoryId]);

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);

    // Check if the answer is correct
    const isCorrect = answer === quiz.questions[currentQuestion].correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
    }

    // Add attempt to history
    setAttemptHistory([...attemptHistory, { question: quiz.questions[currentQuestion].text, answer, isCorrect }]);

    // Automatically move to the next question after 1 second
    setTimeout(() => {
      if (currentQuestion < quiz.questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null); // Reset selected answer for the next question
        setTimeUp(false); // Reset timer
      } else {
        const result = { quizId: quiz.id, score, total: quiz.questions.length, attemptHistory };
        saveQuizResult(result);
        navigate('/result', { state: result });
      }
    }, 1000); // 1-second delay before moving to the next question
  };

  const handleTimeUp = () => {
    setTimeUp(true);
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null); // Reset selected answer for the next question
      setTimeUp(false); // Reset timer
    } else {
      const result = { quizId: quiz.id, score, total: quiz.questions.length, attemptHistory };
      saveQuizResult(result);
      navigate('/result', { state: result });
    }
  };

  if (!quiz) return <Typography>Loading...</Typography>;

  const currentQ = quiz.questions[currentQuestion];

  return (
    <Container>
      <Card>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom>
            {quiz.title}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {currentQ.text}
          </Typography>
          <FormControl component="fieldset">
            <RadioGroup
              value={selectedAnswer}
              onChange={(e) => handleAnswer(e.target.value)}
            >
              {currentQ.options.map((option, index) => (
                <FormControlLabel
                  key={index}
                  value={option}
                  control={<Radio />}
                  label={option}
                  disabled={selectedAnswer !== null} // Disable radio buttons after selection
                />
              ))}
            </RadioGroup>
          </FormControl>
          {selectedAnswer && (
            <Box mt={2}>
              {selectedAnswer === currentQ.correctAnswer ? (
                <Typography variant="body1" style={{ color: 'green' }}>
                  <CheckCircleIcon /> Correct!
                </Typography>
              ) : (
                <Typography variant="body1" style={{ color: 'red' }}>
                  <CancelIcon /> Incorrect!
                </Typography>
              )}
            </Box>
          )}
          <Timer
            duration={30}
            onTimeUp={handleTimeUp}
            reset={currentQuestion} // Reset timer when question changes
          />
        </CardContent>
      </Card>
    </Container>
  );
};

export default Quiz;