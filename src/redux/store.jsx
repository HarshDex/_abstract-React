import { configureStore } from "@reduxjs/toolkit";
import { PasswordSlice } from "./slice/PasswordSlice";
import { DataBreachSlice } from "./slice/DataBreachSlice";
export const store = configureStore({
    reducer : {
        Password : PasswordSlice.reducer,
        DataBreach : DataBreachSlice.reducer
    }
})