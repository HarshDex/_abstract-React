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
    question: "Find out the Attachment ID of the malicious attachment embedded in the provided data.",
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
  name: 'DataBreach',
  initialState: {
    currentIndex: 0,
    questions: securityQuestions.map((q) => ({
      question: q.question,
      answer: q.answer,
      userAnswer: '',
      isAnswered: false,
      isCorrect: false,
    })),
  },
  reducers: {
    setCurrentIndex: (state, action) => {
      state.currentIndex = action.payload;
    },
    setIsAnswered : (state,action) => {
      state.isAnswered = action.payload
    }
  },
});

export const { setCurrentIndex,setIsAnswered} = DataBreachSlice.actions;
export default DataBreachSlice.reducer;