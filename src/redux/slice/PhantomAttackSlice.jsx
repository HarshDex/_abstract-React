import { createSlice } from "@reduxjs/toolkit";
const phantomAttackData = {
    para1 : 'In the thriving metropolis of Cyberspace City, Quantum Bank, a pillar of financial security, faces an unprecedented challenge. A wave of targeted social engineering attacks has swept through the city, leaving Quantum Banks reputation hanging in the balance. The source of these attacks remains unknown, posing a serious threat to the banks cybersecurity measures.',
    para2 : 'Quantum Bank employees receive an email appearing to be from their internal IT department. The email urgently requests employees to update their security credentials, citing the need to enhance overall cybersecurity in the wake of recent suspicious activities. Within the email is a link that promises a seamless update process, but its true intention is to lead unsuspecting employees to a deceptive login page designed to capture their credentials.',
    question : 'Can you investigate the matter tell which type of attack it must be?',
    answer : 'phishing',
}
export const PhantomAttackSlice = createSlice({
    name : 'Phantom',
    initialState : {
        isCorrect : false,
        isAttempted : false,
        phantomAttackData : phantomAttackData,
    },
    reducers : {
        SET_IS_ATTEMPTED : (state) =>{
            state.isAttempted = true;
        },  
        SET_IS_CORRECT : (state,action) =>{
            state.isCorrect = state.phantomAttackData.answer === action.payload.toLowerCase();
        },
        RESET_LEVEL : (state) =>{
            state.isAttempted = false;
            state.isCorrect = false;
        }
    }
})
export const {SET_IS_ATTEMPTED,SET_IS_CORRECT,RESET_LEVEL} = PhantomAttackSlice.actions;
export default PhantomAttackSlice.reducer
