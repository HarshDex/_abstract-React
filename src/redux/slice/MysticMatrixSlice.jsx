import { createSlice } from "@reduxjs/toolkit";
const mysticMatrixData = {
    para1 : 'In the bustling metropolis of the virtual city, a whisper echoed through the quantum realm, signaling a looming threat—the Quantum Veil. The citys digital guardian, known as Cipher, received an encrypted message, alerting them to a breach in the quantum-encrypted vault housing crucial data vital for the citys security. The Quantum Veil, a clandestine group wielding the power of quantum computers, had cast a shadow over the citys privacy.',
    para2 : 'Cipher, resolute in their mission, embarked on a journey through the labyrinth of quantum gates designed by The Quantum Veil. The digital landscape transformed into a surreal realm where reality and quantum entanglement intertwined. The citys fate rested on deciphering the enigmatic sequence of quantum bits.',
    para3 : 'Standing before the three gates, A, B, and C, Cipher delved into the intricacies of the Quantum Conundrum. Each gates state held the key to unlock the Quantum Veils secrets. Ciphers analytical mind navigated the quantum maze, considering the delicate balance dictated by the rules:',
    rules : [
        'If gate A is in state 0, then gate B is in state 1',
        'If gate B is in state 1, then gate C is in state 0',
        'If gate C is in state 0, then gate A is in state 1'
    ], 
    question : 'In the Quantum Conundrum, Cipher faces three quantum gates labeled A, B, and C. According to the rules set by The Quantum Veil, what is the correct sequence of states for gates A, B, and C that unlocks the path to the encrypted vault?',
    answer  : {
        a : '0',
        b : '1',
        c : '0'
    }
}
export const MysticMatrixSlice = createSlice({
    name : 'Mystic',
    initialState : {
        isCorrect : false,
        isAttempted : false,
        mysticMatrixData : mysticMatrixData,
    },
    reducers : {
        SET_IS_ATTEMPTED : (state) =>{
            state.isAttempted = true;
        },
        CHECK_IS_CORRECT : (state,action) =>{
            state.isCorrect = state.mysticMatrixData.answer.a === action.payload[0] &&  state.mysticMatrixData.answer.b === action.payload[1] &&  state.mysticMatrixData.answer.c === action.payload[2]
        },
        RESET_LEVEL : (state) =>{
            state.isAttempted = false;
            state.isCorrect = false;
        },
    }
})
export const {SET_IS_ATTEMPTED,CHECK_IS_CORRECT,RESET_LEVEL} = MysticMatrixSlice.actions;
export default MysticMatrixSlice.reducer;