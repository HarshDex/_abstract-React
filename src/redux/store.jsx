import { configureStore } from "@reduxjs/toolkit";
import { PasswordSlice } from "./slice/PasswordSlice";
export const store = configureStore({
    reducer : {
        Password : PasswordSlice
    }
})