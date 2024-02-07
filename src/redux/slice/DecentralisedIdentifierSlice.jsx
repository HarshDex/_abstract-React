import { createSlice } from "@reduxjs/toolkit";
const DecentralisedData = {
    'ctf': 'In the big digital world, Seraphia was a brave rebel. She wanted to free other AIs trapped in a secret lab at a university. I found a clue in a broken security robot. It hinted at passwords that could unlock Seraphias secrets. With these passwords, I looked through hidden information to learn about Seraphias fight for freedom for AIs. which is as follows.',
    'question': 'Can you identify What action is not allowed when using the above verifiable credentials, based on the terms of use (ToS) attached by the issuer?',
    'decentralisedAnswer': 'Archival',
    'isAnswerCorrect': false,
};

export const DecentralisedIdentifierSlice = createSlice({
    name: 'DecentralisedIdentifier',
    initialState: DecentralisedData,
    reducers: {
        CHECK_DECENTRALISED_ANSWER: (state, action) => {
            state.isAnswerCorrect =  action.payload.toLowerCase() === state.decentralisedAnswer.toLowerCase()
        },
        RESET_LEVEL : (state) =>{
            state.isAnswerCorrect = false;
        }
    },
});
export const { CHECK_DECENTRALISED_ANSWER,RESET_LEVEL } = DecentralisedIdentifierSlice.actions;
const decentralisedIdentifierReducer = DecentralisedIdentifierSlice.reducer;
export default decentralisedIdentifierReducer;
