import {configureStore} from "@reduxjs/toolkit";
import {PasswordSlice} from "./slice/PasswordSlice";
import {DataBreachSlice} from "./slice/DataBreachSlice";
import {DecentralisedIdentifierSlice} from "./slice/DecentralisedIdentifierSlice";
import {FinancialVigilanceSlice} from "./slice/FinancialVigilanceSlice"; 
import {FishGuardianSlice} from "./slice/FishGuardianSlice";
import {UtopianPrivacySlice} from "./slice/UtopianPrivacySlice";
import {SecretVaultSlice} from "./slice/SecretVaultSlice";
import {CryptalogueSlice} from "./slice/CryptalogueSlice";
export const store = configureStore({
    reducer : {
        Password : PasswordSlice.reducer,
        DataBreach : DataBreachSlice.reducer,
        DecentralisedIdentifier : DecentralisedIdentifierSlice.reducer,
        Financial : FinancialVigilanceSlice.reducer,
        FishGuardian : FishGuardianSlice.reducer,
        UtopianPrivacy : UtopianPrivacySlice.reducer,
        Secret : SecretVaultSlice.reducer,
        Cryptalogues : CryptalogueSlice.reducer
    }
})