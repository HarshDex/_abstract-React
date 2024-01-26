import { createSlice } from "@reduxjs/toolkit";
const UtopianPrivacyData = {
    para1 : 'Embark on this challenge as you delve into evaluating the risk level of government agency access to customer data for residents of the fictional Utopian Union. Quantum Dynamics, a Utopian-based technology company, routinely receives approximately 200 of the enclosed missives from government entities.',
    para2 : 'Termed Galactic Security Missives (GSMs), these communications are issued by the Utopian government, specifically the Galactic Bureau of Investigation (GBI). GSMs provide restricted access to customer details such as nomenclature, locations, and service duration. Imposing non-disclosure prerequisites accompany GSMs, constraining Quantum Dynamics from openly disseminating particulars.',
    para3 : 'Your objective is to gauge the Transfer Impact Assessment (TIA) risk level: high, medium, or low, considering the repercussions for customer privacy and data protection.'
}
const correct_answer = 'high'
export const UtopianPrivacySlice = createSlice({
    name: 'UtopianPrivacy',
    initialState: {
      isCorrect: false,
      isAttempted: false,
      UtopianPrivacyData: {
        para1: UtopianPrivacyData.para1,
        para2: UtopianPrivacyData.para2,
        para3: UtopianPrivacyData.para3,
      },
    },
    reducers: {
      IS_ANSWER_CORRECT: (state, action) => {
        state.isCorrect = action.payload.toLowerCase() === correct_answer;
      },
      IS_ATTEMPTED: (state, action) => {
        state.isAttempted = action.payload;
      },
      ON_CLOSE: (state) => {
          state.isAttempted = false;
          state.isCorrect = false;
      },
    },
  });  
export const {IS_ANSWER_CORRECT,IS_ATTEMPTED,ON_CLOSE} = UtopianPrivacySlice.actions
export default UtopianPrivacySlice.reducer
