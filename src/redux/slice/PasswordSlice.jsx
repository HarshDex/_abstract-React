import { createSlice } from "@reduxjs/toolkit";
export const data = [
    {
        'id' : 1,
        'question' : 'Which of the following password creation methods is most likely to resist guessing attacks based on personal information?',
        'options' : [
            'Using the players birthdate',
            'Incorporating a favorite hobby',
            'Repeating characters for memorability',
            'Sequential numbers'
        ],
        'answer' : '1'
    },
    {
        'id' : 2,
        'question' : 'When assessing password strength, what factor is crucial for resilience against brute force attacks?',
        'options' : [
            'Use of uppercase and lowercase letters',
            'Length of the password',
            'Inclusion of special symbols',
            'Incorporating personal information'
        ],
        'answer' : '1'
    },
    {
        'id' : 3,
        'question' : 'Which action contributes to better password security practices?',
        'options' : [
            'egularly reusing passwords across multiple accounts',
            'Using easily memorable passwords',
            'Incorporating personal information in passwords',
            'Avoiding the use of common or generic passwords'
        ],
        'answer' : '3'
    },
    {
        'id' : 4,
        'question' : 'In terms of character type diversity, which combination is generally considered the most secure for creating passwords?',
        'options' : [
            'Uppercase letters only',
            'Lowercase letters and numbers',
            'Special symbols and sequential numbers',
            'Uppercase and lowercase letters, numbers, and symbols'
        ],
        'answer' : '3'
    },
    {
        'id' : 5,
        'question' : ' When considering password length, what role does it play in enhancing security against various attacks?',
        'options' : [
            'No impact on security',
            'Limited impact on security',
            'Significantly enhances security',
            'Decreases security'
        ],
        'answer' : '2'
    },
]
export const PasswordSlice = createSlice({
    name : 'Password',
    initialState : data,
    reducers : {
        markQuestionAsAnswered: (state, action) => {
            const questionId = action.payload;
            const updatedState = state.map((question) =>
              question.id === questionId
                ? { ...question, answered: true }
                : question
            );
            return updatedState;
    }
}});
export const {markQuestionAsAnswered} = PasswordSlice.actions
export default PasswordSlice.reducer