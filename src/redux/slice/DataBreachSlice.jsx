import { createSlice } from "@reduxjs/toolkit";

export const securityQuestions = [
  {
    question: "Determine the IP address associated with the unauthorized access attempt in the Game Activity Log.",
    answer: "192.168.1.100",
  },
  {
    question: "Identify the IP address demonstrating abnormal network behavior during the log analysis.",
    answer: "212.54.32.78",
  },
  {
    question: "Ascertain the Attachment ID of the malicious attachment embedded in the provided data.",
    answer: "atch-1567",
  },
  {
    question: "Determine the username of the individual attempting to modify a database entry.",
    answer: "user",
  },
  {
    question: "Pinpoint the IP address that engaged in a covert infiltration attempt, employing advanced evasion techniques to obscure its presence.",
    answer: "203.128.45.210",
  },
];

export const DataBreachSlice = createSlice({
  name: 'dataBreach',
  initialState: {
    questions: securityQuestions.map((q) => ({
      question: q.question,
      userAnswer: '',
      isAnswered: false,
      isCorrect: false,
    })),
  },
  reducers: {
    setUserAnswer: (state, action) => {
      const { question, userAnswer } = action.payload;
      const questionIndex = state.questions.findIndex((q) => q.question === question);

      if (questionIndex !== -1) {
        state.questions[questionIndex].userAnswer = userAnswer;
      }
    },
    checkAnswer: (state, action) => {
      const { question } = action.payload;
      const questionIndex = state.questions.findIndex((q) => q.question === question);

      if (questionIndex !== -1) {
        const correctAnswer = securityQuestions[questionIndex].answer.toLowerCase();
        const userAnswer = state.questions[questionIndex].userAnswer.toLowerCase();

        state.questions[questionIndex].isAnswered = true;
        state.questions[questionIndex].isCorrect = userAnswer === correctAnswer;
      }
    },
  },
});

export const { setUserAnswer, checkAnswer } = DataBreachSlice.actions;
export default DataBreachSlice.reducer;
