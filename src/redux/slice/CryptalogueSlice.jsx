import { createSlice } from "@reduxjs/toolkit";
const cryptalogueDialogues = {
    para1 : 'In the ongoing quest for privacy, the Telemetry Data Aggregator has been diligently collecting data. However, a recent inspection unveiled a critical flaw—the telemetry data reports are not being adequately protected during transit',
    para2 : 'To tackle this issue, the encryption-savvy adventurer must now choose the right method for securing the transmission of telemetry data reports. What encryption method, known for ensuring the confidentiality and integrity of data during transit, should our hero employ? Its the key to unlocking a secure path for the datas journey.',
    answer: 'tls'
}
export const CryptalogueSlice = createSlice({
    name : 'Cryptalogues',
    initialState : {
        isCorrect : false,
        isAttempted : false,
        cryptalogueDialogues : cryptalogueDialogues,
    },
    reducers : {
        SET_IS_ATTEMPTED :  (state,actions) =>{
            state.isAttempted = actions.payload
        },
        IS_CORRECT : (state,actions) =>{
            state.isCorrect = state.cryptalogueDialogues.answer === actions.payload.toLowerCase()
        },
        RESET_LEVEL : (state) => {
            console.log('level reset')
            state.isCorrect = false;
            state.isAttempted = false;
        }
    }
})
export const {SET_IS_ATTEMPTED,IS_CORRECT,RESET_LEVEL} = CryptalogueSlice.actions;
export default CryptalogueSlice.reducer