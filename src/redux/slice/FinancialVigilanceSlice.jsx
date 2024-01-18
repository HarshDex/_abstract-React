import { createSlice } from "@reduxjs/toolkit";
const bankCallScenario = [
  {
    "id": 1,
    "dialogue": "Hello, this is ABSTRACT BANK calling to offer you an exclusive promotion on our new banking services.",
    "options": [
      { 
        text: "Hang up immediately", 
        reason: "You are correct! It's always safer to hang up when receiving unsolicited calls. The caller's identity is unknown."
      },
      { 
        text: "Ask for more details about the promotion",
         reason: "Requesting more details helps you assess the legitimacy of the call without providing personal information. But it is not wise to choose this option right now" 
      },
      { 
        text: "Provide personal information to avail the promotion",
        reason: "You are Wrong! Avoid providing personal information over the phone, especially to unknown callers, to protect yourself from potential scams." 
      }
    ],
    "correctAnswer": 0,
    "reason": "Correct! It's always safer to hang up when receiving unsolicited calls. The caller's identity is unknown.",
    "isCorrect": false,
    "answerChoose" : null,
  },
  {
    "id": 2,
    "dialogue": "We've noticed some unusual activity on your account. Can you confirm your account details for verification?",
    "options": [
      { 
        text: "Hang up and call the bank using the official number", 
      reason: "You are correct! To ensure security, hang up and call the bank using a known and official number. The caller's identity is unknown." },
      { 
        text: "Provide the information as requested", 
      reason: "You are wrong! Avoid providing sensitive information over the phone, especially when the call is unexpected and unverified." },
      { 
        text: "Ask for a call-back number to verify legitimacy", reason: "Requesting a call-back number allows you to independently verify the legitimacy of the call without disclosing information immediately. But it is not wise to choose this option right now" }
    ],
    "correctAnswer": 0,
    "reason": "Correct! To ensure security, hang up and call the bank using a known and official number. The caller's identity is unknown.",
    "isCorrect": false,
    "answerChoose" : null,

  },
  {
    "id": 3,
    "dialogue": "Your account is about to be suspended. To prevent this, we need your password for security purposes.",
    "options": [
      { 
        text: "Provide the password as requested", 
      reason: "You are Wrong !Avoid providing your password over the phone. Legitimate banks never ask for passwords in this manner." },
      { 
        text: "Hang up and report the call", 
      reason: " You are Correct! Legitimate banks never ask for your password over the phone. Hang up and report the call." },
      { 
        text: "Ask for more details before deciding", 
      reason: "Seeking more details can help you assess the legitimacy of the request without immediately providing sensitive information. But it is not wise to choose this option right now" }
    ],
    "correctAnswer": 1,
    "reason": "Correct! Legitimate banks never ask for your password over the phone. Hang up and report the call. The caller's identity is unknown.",
    "isCorrect": false,
    "answerChoose" : null,
  },
  {
    "id": 4,
    "dialogue": "This is ABSTRACT BANK calling to confirm a recent transaction on your account. Did you make a purchase of $500 at [legitimate store]?",
    "options": [
      { 
        text: "Confirm the transaction",
       reason: "Confirming the transaction details over the phone is a legitimate and secure way to verify the authenticity of the call.But it is not wise to choose this option right now" },
      { 
        text: "Provide account details for verification", 
        reason: "You are Wrong! Avoid providing account details over the phone. Instead, confirm the transaction by other means, such as logging into your online banking account." },
      {
         text: "Hang up and call the bank using the official number", 
      reason: "You are correct! To ensure security, hang up and call the bank using a known and official number. The caller's identity is unknown." }
    ],
    "correctAnswer": 2,
    "reason": "Correct! When in doubt, hang up and call the bank using a known and official number. The caller's identity is unknown.",
    "isCorrect": false,
    "answerChoose" : null,

  },
  {
    "id": 5,
    "dialogue": "You've won a cash prize! To claim it, we need your bank account details for the transfer.",
    "options": [
      { 
        text: "Provide the bank account details", 
        reason: "You are wrong! Avoid providing sensitive information over the phone, especially in response to unexpected offers. But you are wrong because this could be an attempt to obtain your personal information." },
      { 
        text: "Hang up and report the call", 
        reason: "Correct! Scammers often use fake prizes to trick individuals into providing sensitive information. Hang up and report the call. The caller's identity is unknown." },
      {
         text: "Ask for proof of the prize and verification process", 
         reason: "Requesting proof and details about the prize can help you assess its legitimacy without immediately providing sensitive information but it is not wise to do this in currect scenario But it is not wise to choose this option right now" }
    ],
    "correctAnswer": 1,
    "reason": "Correct! Scammers often use fake prizes to trick individuals into providing sensitive information. Hang up and report the call. The caller's identity is unknown.",
    "isCorrect": false,
    "answerChoose" : null,
  },
  {
    "id": 6,
    "dialogue": "This is ABSTRACT BANK calling to verify a recent login to your online banking. Can you confirm the last transaction you made?",
    "options": [
      { text: "Confirm the last transaction details", reason: " Correct! Confirming the last transaction details over the phone is a legitimate and secure way to verify the authenticity of the call." },
      { text: "Ask for a call-back number to verify legitimacy", reason: "Requesting a call-back number allows you to independently verify the legitimacy of the call without disclosing information immediately. But it is not wise to choose this option right now" },
      { text: "Hang up and call the bank using the official number", reason: " you can do this but this is not much potential risk call In this situation, To ensure security, hang up and call the bank using a known and official number. The caller's identity is unknown." }
    ],
    "correctAnswer": 0,
    "reason": "Correct! In this situation, hanging up and calling the bank using a known and official number is a secure way to confirm the call's legitimacy. The caller's identity is unknown.",
    "isCorrect": false,
    "answerChoose" : null,

  },
  {
    "id": 7,
    "dialogue": "We are conducting a survey on behalf of banks. Can you provide your credit card details for authentication?",
    "options": [
      { text: "Provide credit card details", reason: "You are wrong! Avoid providing sensitive information like credit card details for surveys. Legitimate surveys do not request such information over the phone." },
      { text: "Hang up and report the call", reason: "Correct! Legitimate surveys do not request sensitive information like credit card details. Hang up and report the call. The caller's identity is unknown." },
      { text: "Ask for the purpose of the survey and the company's details", reason: "Seeking more information about the survey can help you assess its legitimacy without immediately providing sensitive information.But it is not wise to choose this option right now" }
    ],
    "correctAnswer": 1,
    "reason": "Correct! Legitimate surveys do not request sensitive information like credit card details. Hang up and report the call. The caller's identity is unknown.",
    "isCorrect": false,
    "answerChoose" : null,

  },
  {
    "id": 8,
    "dialogue": "We've detected suspicious activity on your credit card. Can you confirm the last three transactions to help us investigate?",
    "options": [
      { text: "Confirm the transactions", reason: "Correct! Confirming the transactions over the phone is a legitimate and secure way to verify the authenticity of the call." },
      { text: "Provide the credit card details for verification", reason: "You are wrong! Avoid providing full credit card details over the phone. Instead, confirm the transactions by other means, such as logging into your online banking account." },
      { text: "Hang up and call the bank using the official number", reason: " In this situation, To ensure security, hang up and call the bank using a known and official number. The caller's identity is unknown. But it is not wise to choose this option right now" }
    ],
    "correctAnswer": 0,
    "reason": "Correct! Legitimate banks will not ask you to provide full credit card details over the phone. Hanging up and calling the bank using a known and official number is the right move. The caller's identity is unknown.",
    "isCorrect": false,
    "answerChoose" : null,

  },
  {
    "id": 9,
    "dialogue": "Your account has been compromised. We need your account password to secure it.",
    "options": [
      { text: "Provide the account password", reason: "You are wrong! Avoid providing your account password over the phone. Legitimate banks will never ask for your account password in this manner." },
      { text: "Hang up and report the call", reason: "Correct! Legitimate banks will never ask for your account password over the phone. Hang up and report the call. The caller's identity is unknown." },
      { text: "Ask for a call-back number to verify legitimacy", reason: "Requesting a call-back number allows you to independently verify the legitimacy of the call without disclosing information immediately.But it is not wise to choose this option right now" }
    ],
    "correctAnswer": 1,
    "reason": "Correct! Legitimate banks will never ask for your account password over the phone. Hang up and report the call. The caller's identity is unknown.",
    "isCorrect": false,
    "answerChoose" : null,

  },
  {
    "id": 10,
    "dialogue": "Urgent message from your bank! Your account will be frozen unless you provide your PIN for verification.",
    "options": [
      { text: "Provide the PIN as requested", reason: "You are wrong !Avoid providing your PIN over the phone. Legitimate banks do not ask for your PIN in this manner." },
      { text: "Hang up and report the call", reason: "Correct! Legitimate banks do not ask for your PIN over the phone. Hanging up and reporting the call is the safest choice. The caller's identity is unknown." },
      { text: "Ask for more details before deciding", reason: "Seeking more details can help you assess the legitimacy of the request without immediately providing sensitive information.But it is not wise to choose this option right now" }
    ],
    "correctAnswer": 1,
    "reason": "Correct! Legitimate banks do not ask for your PIN over the phone. Hanging up and reporting the call is the safest choice. The caller's identity is unknown.",
    "isCorrect": false,
    "answerChoose" : null,

  },
  {
    "id": 11,
    "dialogue": "This is ABSTRACT BANK calling to inform you about a recent security update. Can you confirm your mailing address for verification?",
    "options": [
      { text: "Confirm the mailing address", reason: "Correct! You can probably do this , Verifying your mailing address by calling the bank using a known and official number is a secure way to handle this situation. The caller's identity is unknown." },
      { text: "Provide additional personal information", reason: "Avoid providing additional personal information over the phone, especially when the call is unexpected and unverified." },
      { text: "Hang up and call the bank using the official number", reason: "In this situation, To ensure security, hang up and call the bank using a known and official number. The caller's identity is unknown.But it is not wise to choose this option right now" }
    ],
    "correctAnswer": 0,
    "reason": "Correct! Verifying your mailing address by calling the bank using a known and official number is a secure way to handle this situation. The caller's identity is unknown.",
    "isCorrect": false,
    "answerChoose" : null,

  },
  {
    "id": 12,
    "dialogue": "Congratulations! You've been selected for a credit card with 0% interest. We just need your social security number for processing.",
    "options": [
      { text: "Provide the social security number", reason: "You are wrong! Avoid providing your social security number over the phone, especially in response to unexpected offers. This could be an attempt to obtain sensitive information." },
      { text: "Hang up and report the call", reason: "Correct! Scammers often use fake credit card offers to obtain sensitive information. Hang up and report the call. The caller's identity is unknown." },
      { text: "Ask for more details about the credit card offer", reason: "Seeking more details about the offer can help you assess its legitimacy without immediately providing sensitive information. But it is not wise to choose this option right now" }
    ],
    "correctAnswer": 1,
    "reason": "Correct! Scammers often use fake credit card offers to obtain sensitive information. Hang up and report the call. The caller's identity is unknown.",
    "isCorrect": false,
    "answerChoose" : null,

  },
  {
    "id": 13,
    "dialogue": "We've noticed a large withdrawal from your account. Can you confirm if you made this transaction?",
    "options": [
      { text: "Provide the transaction details", reason: "You are wrong! Avoid providing transaction details over the phone, especially when the call is unexpected and unverified." },
      { text: "Ask for more information about the withdrawal", reason: "Seeking more information about the withdrawal can help you assess the legitimacy of the call without immediately providing sensitive information.But it is not wise to choose this option right now" },
      { text: "Hang up and call the bank using the official number", reason: "Absolutely right! To ensure security, hang up and call the bank using a known and official number. The caller's identity is unknown." }
    ],
    "correctAnswer": 2,
    "reason": "Correct! Verifying the authenticity of the call by hanging up and calling the bank using a known and official number is a secure approach. The caller's identity is unknown.",
    "isCorrect": false,
    "answerChoose" : null,
  },
  {
    "id": 14,
    "dialogue": "Urgent security alert! Your account is at risk. Please provide your email password for verification.",
    "options": [
      { text: "Provide the email password", reason: "You are wrong ! Avoid providing your email password over the phone. Legitimate banks will never ask for your email password in this manner." },
      { text: "Hang up and report the call", reason: "Correct! Legitimate banks will never ask for your email password over the phone. Hang up and report the call. The caller's identity is unknown." },
      { text: "Ask for a call-back number to verify legitimacy", reason: "Requesting a call-back number allows you to independently verify the legitimacy of the call without disclosing information immediately.But it is not wise to choose this option right now" }
    ],
    "correctAnswer": 1,
    "reason": "Correct! Legitimate banks will never ask for your email password over the phone. Hang up and report the call. The caller's identity is unknown.",
    "isCorrect": false,
    "answerChoose" : null,
  },
];

export const FinancialVigilanceSlice = createSlice({
    name : 'Financial',
    initialState : {
      currentIndex : 0,
      isAttempted : false,
      bankCallScenarioData : bankCallScenario.map((elem)=>({
        id : elem.id,
        dialogue : elem.dialogue,
        options : elem.options,
        correctAnswer : elem.correctAnswer,
        reason : elem.reason,
        isCorrect : elem.isCorrect,
        answerChoose : elem.answerChoose
     })),
     isDialogueOver : false,
    },
    reducers : {
      setCurrentIndex : (state,action)=>{
        state.currentIndex = action.payload
      },
      checkAnswer : (state,action) => {
        const currentQuestion = state.bankCallScenarioData[state.currentIndex];
        // Make sure to update the specific question's state
        currentQuestion.isCorrect = action.payload === currentQuestion.correctAnswer;
      },
      setIsAttempted : (state,action) => {
        state.isAttempted = action.payload
      },
      setAnswerChoose : (state,action) => {
        state.bankCallScenarioData[state.currentIndex].answerChoose = action.payload;
      },
      setCorrectAnswer : (state,action) =>{
        state.bankCallScenarioData.isCorrect = action.payload
      },
      setIsDialogueOver : (state,action)=>{
        state.isDialogueOver = action.payload
      }
    }
})
export const {setCurrentIndex,checkAnswer,setIsAttempted,setAnswerChoose,setCorrectAnswer,setIsDialogueOver} = FinancialVigilanceSlice.actions
export default FinancialVigilanceSlice.reducer