import { createSlice } from "@reduxjs/toolkit";
const secretVaultData = {
    story : "Once upon a time in the digital kingdom of Cyberspaceia, there was a magical castle known as the Secure Fortress. This castle protected valuable treasures and information, and only the bravest of users were granted entry.Our hero, a curious player named Alex, decided to embark on a quest to explore the Secure Fortress. To gain access, the castle's gatekeeper handed Alex a magical token. This token, akin to a special key, granted passage through the castle's gates and allowed access to its many chambers.As Alex ventured deeper into the fortress, the gatekeeper explained that the token needed a safe place to stay during the journey. There were two options - the enchanted Cookie Jar and the mystical Local Storage Chest.In the Cookie Jar, a small compartment attached to Alex's magical belt, the token would be stored securely. This way, every time Alex approached the castle gate, the token would be presented, granting seamless access without the need for constant authentication.On the other hand, the Local Storage Chest was a special compartment within Alex's device, a place where the token could rest for a more extended period. However, it required extra care, as mischievous creatures known as Cookiesnatchers lurked in the shadows, attempting to steal tokens left unguarded.As Alex continued the quest, encountering challenges and puzzles, the importance of choosing the right token storage method became clear. The Cookie Jar provided quick and convenient access, while the Local Storage Chest offered a more enduring solution with a need for extra protection.Through this magical adventure, players like Alex learned that selecting the appropriate token storage method depended on the nature of the quest and the level of security needed for their digital journey in the kingdom of Cyberspaceia.",
    question : "You discover that someone managed to breach your website's defenses by finding a hidden weakness. As you investigate how your site uses cookies to remember users, you suspect there might be more issues than just the usual kind of hacking (XSS).You begin to wonder if there's another way attackers could tamper with these cookie-based codes and mess up how users log in to your site.",
    answer : "csrf",
}
export const SecretVaultSlice = createSlice({
    name : 'Secret',
    initialState : {
        isCorrect : false,
        isAttempt : false,
        secretVaultDataStory : secretVaultData.story,
        secretVaultDataQuestion : secretVaultData.question,
        secretVaultDataAnswer : secretVaultData.answer
    },
    reducers : {
        IS_ANSWER_CORRECT_SECRET : (state,action) => {
            const userAnswer = String(action.payload);
            state.isCorrect = state.secretVaultDataAnswer.toLowerCase() === userAnswer.toLowerCase();
        },
        SET_IS_ATTEMPTED : (state,action) =>{
            state.isAttempt = action.payload;
        },
        RESET_LEVEL : (state) => {
            state.isCorrect = false;
            state.isAttempt = false;
        }
    }
})
export const {IS_ANSWER_CORRECT_SECRET,RESET_LEVEL,SET_IS_ATTEMPTED} = SecretVaultSlice.actions
export default SecretVaultSlice.reducer