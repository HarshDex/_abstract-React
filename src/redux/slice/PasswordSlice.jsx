import { createSlice } from "@reduxjs/toolkit";
export const data = [{
    'id': 1,
    'question': 'Which of the following password creation methods is most likely to resist guessing attacks based on personal information?',
    'options': [
    'Using the player\'s birthdate',
    'Incorporating a favorite hobby',
    'Repeating characters for memorability',
    'Sequential numbers'
    ],
    'answer': '1',
    'generalInfo': 'Creating passwords based on personal information increases the risk of being guessed. It is advisable to avoid easily guessable patterns.'
},
{
    'id': 2,
    'question': 'When assessing password strength, what factor is crucial for resilience against brute force attacks?',
    'options': [
    'Use of uppercase and lowercase letters',
    'Length of the password',
    'Inclusion of special symbols',
    'Incorporating personal information'
    ],
    'answer': '1',
    'generalInfo': 'The length of the password is crucial for resilience against brute force attacks. Longer passwords are generally more secure.'
},
{
    'id': 3,
    'question': 'Which action contributes to better password security practices?',
    'options': [
    'Regularly reusing passwords across multiple accounts',
    'Using easily memorable passwords',
    'Incorporating personal information in passwords',
    'Avoiding the use of common or generic passwords'
    ],
    'answer': '3',
    'generalInfo': 'Avoiding the use of personal information in passwords and using unique passwords for different accounts contributes to better security practices.'
},
{
    'id': 4,
    'question': 'In terms of character type diversity, which combination is generally considered the most secure for creating passwords?',
    'options': [
    'Uppercase letters only',
    'Lowercase letters and numbers',
    'Special symbols and sequential numbers',
    'Uppercase and lowercase letters, numbers, and symbols'
    ],
    'answer': '3',
    'generalInfo': 'A combination of uppercase and lowercase letters, numbers, and symbols is generally considered the most secure for creating passwords.'
},
{
    'id': 5,
    'question': 'When considering password length, what role does it play in enhancing security against various attacks?',
    'options': [
    'No impact on security',
    'Limited impact on security',
    'Significantly enhances security',
    'Decreases security'
    ],
    'answer': '2',
    'generalInfo': 'The length of the password significantly enhances security. Longer passwords are more resistant to various attacks.'
},
// Additional objects
{
    'id': 6,
    'question': 'What is the purpose of multi-factor authentication (MFA) in enhancing account security?',
    'options': [
    'Increases the complexity of passwords',
    'Requires multiple passwords',
    'Utilizes additional verification methods',
    'Decreases the need for passwords'
    ],
    'answer': '3',
    'generalInfo': 'Multi-factor authentication enhances account security by requiring users to provide multiple forms of verification, beyond just a password.'
},
{
    'id': 7,
    'question': 'Why is it important to keep software and systems up-to-date for security?',
    'options': [
    'Improves user experience',
    'Enhances system performance',
    'Fixes software bugs',
    'Reduces the risk of security vulnerabilities'
    ],
    'answer': '3',
    'generalInfo': 'Keeping software and systems up-to-date is crucial for security as it ensures that known vulnerabilities are patched, reducing the risk of exploitation.'
}];
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