import { configureStore } from "@reduxjs/toolkit";
import { PasswordSlice } from "./slice/PasswordSlice";
import { DataBreachSlice } from "./slice/DataBreachSlice";
import { DecentralisedIdentifierSlice } from "./slice/DecentralisedIdentifierSlice";
import {FinancialVigilanceSlice} from "./slice/FinancialVigilanceSlice"; 
import {FishGuardianSlice} from "./slice/FishGuardianSlice";
export const store = configureStore({
    reducer : {
        Password : PasswordSlice.reducer,
        DataBreach : DataBreachSlice.reducer,
        DecentralisedIdentifier : DecentralisedIdentifierSlice.reducer,
        Financial : FinancialVigilanceSlice.reducer,
        FishGuardian : FishGuardianSlice.reducer
    }
})