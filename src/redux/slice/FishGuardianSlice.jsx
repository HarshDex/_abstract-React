import { createSlice } from "@reduxjs/toolkit";
import email1 from '../../assets/fishGuardianImages/1.jpg'
import email2 from '../../assets/fishGuardianImages/2.jpg'
import email3 from '../../assets/fishGuardianImages/3.jpg'
import email4 from '../../assets/fishGuardianImages/4.jpg'
import email5 from '../../assets/fishGuardianImages/5.jpg'
import email6 from '../../assets/fishGuardianImages/6.jpg'
import email7 from '../../assets/fishGuardianImages/7.jpg'
import email8 from '../../assets/fishGuardianImages/8.png'
import email9 from '../../assets/fishGuardianImages/9.jpg'
import email10 from '../../assets/fishGuardianImages/10.jpg'
const fishGuardianData = [
    {
        id : 1,
        'emailImage' : '../../assets/fishGuardianImages/1.jpg',
    },
    {
        id : 2,
        'emailImage' : email2
    },
    {
        id : 3,
        'emailImage' : email3
    },
    {
        id : 4,
        'emailImage' : email4
    },
    {
        id : 5,
        'emailImage' : email5
    }
]
export const FishGuardianSlice = createSlice({
    name : 'FishGuardian',
    initialState : fishGuardianData,
    reducers : {}
})
export const {} = FishGuardianSlice.actions;
export default FishGuardianSlice.reducer
