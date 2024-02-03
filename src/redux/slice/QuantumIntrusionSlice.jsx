import { createSlice } from "@reduxjs/toolkit";
const quantumIntrusionData = {
    para1 : 'In the neon-lit cityscape, a mysterious hacker known as Cipher had breached the fortified walls of my digital sanctuary. As I delved into the code that once secured my cybernetic haven, a disquieting truth emerged.',
    para2 : 'The seamless connectivity I meticulously crafted through QuantumID integration had become a double-edged sword. Cipher exploited this avenue, reactivating cybernetic augmentations I thought were long dormant.',
    para3 : 'In a desperate attempt to uncover the breach, I examined the traces left by Cipher within the QuantumID authentication mechanisms. The following code snippet hinted at the cunning infiltration',
    question : 'Amid the lines of code lay the key to Ciphers success. Can you decipher the specific user information Cipher gained access to this time?',
    answer : 'email',
}
export const QuantumIntrusionSlice = createSlice({
    name : 'Quantum',
    initialState : {
        isAttempted : false,
        isCorrect : true,
        quantumIntrusionData : quantumIntrusionData,
    },
    reducers : {
        RESET_LEVEL : (state) =>{
            state.isAttempted = false;
            state.isCorrect = false;
        },
        SET_IS_ATTEMPTED : (state,action) =>{
            state.isAttempted = action.payload;
        },
        SET_iS_CORRECT : (state,action) =>{
            state.isCorrect = state.quantumIntrusionData.answer === action.payload.toLowerCase();
        }
    }
})
export const {RESET_LEVEL,SET_iS_CORRECT,SET_IS_ATTEMPTED} = QuantumIntrusionSlice.actions;
export default QuantumIntrusionSlice.reducer