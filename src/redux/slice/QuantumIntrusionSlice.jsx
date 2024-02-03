import { createSlice } from "@reduxjs/toolkit";
const quantumIntrusionData = {
    para1 : 'In the neon-lit cityscape, a mysterious hacker known as Ninja had breached the fortified walls of my digital sanctuary. As I delved into the code that once secured my cybernetic haven, a disquieting truth emerged.',
    para2 : 'The seamless connectivity I meticulously crafted through QuantumID integration had become a double-edged sword. Ninja exploited this avenue, reactivating cybernetic augmentations I thought were long dormant.',
    para3 : 'In a desperate attempt to uncover the breach, I examined the traces left by Ninja within the QuantumID authentication mechanisms. The following code snippet hinted at the cunning infiltration',
    question : 'Amoung the lines of code lay the key to Ninjas success. Can you decipher the specific user information Ninja gained access to this time?',
    answer : 'email',
}
const quantumIDCredentials = `
    # Credentials you get from registering a new application
    client_id = '<the id you get from cybernetics megacorp>'
    client_secret = '<the secret you get from cybernetics megacorp>'
    redirect_uri = 'https://your.registered/callback'

    # OAuth endpoints given in the cybernetics megacorp API documentation
    authorization_base_url = "https://accounts.cybernaticsmegacorp.com/o/oauth2/v2/auth"
    token_url = "https://www.cybernaticsmegacorpapis.com/oauth2/v4/token"
    scope = [
        "openid",
        "https://www.cybernaticsmegacorpapis.com/auth/userinfo.email",
    ]

    from requests_oauthlib import OAuth2Session
    cybernatics_megacorp = OAuth2Session(client_id, scope=scope, redirect_uri=redirect_uri)

    # Redirect user to cybernetics megacorp for authorization
    authorization_url, state = cybernatics_megacorp.authorization_url(
        authorization_base_url,
        # offline for refresh token
        # force to always make user click authorize
        access_type="offline", prompt="select_account"
    )
    print('Please go here and authorize:', authorization_url)

    # Get the authorization verifier code from the callback url
    redirect_response = input('Paste the full redirect URL here: ')

    # Fetch the access token
    cybernatics_megacorp.fetch_token(
        token_url, client_secret=client_secret, authorization_response=redirect_response
    )

    # Fetch a protected resource, i.e. user profile
    r = cybernatics_megacorp.get('https://www.cybernaticsmegacorpapis.com/oauth2/v1/userinfo')
    print(r.content)
`;
export const QuantumIntrusionSlice = createSlice({
    name : 'Quantum',
    initialState : {
        isAttempted : false,
        isCorrect : false,
        quantumIntrusionData : quantumIntrusionData,
        quantumIDCredentials : quantumIDCredentials
    },
    reducers : {
        RESET_LEVEL : (state) =>{
            state.isAttempted = false;
            state.isCorrect = false;
        },
        SET_IS_ATTEMPTED : (state,action) =>{
            state.isAttempted = action.payload;
        },
        SET_iS_CORRECT : (state,action) =>{
            state.isCorrect = state.quantumIntrusionData.answer === action.payload.toLowerCase();
        }
    }
})
export const {RESET_LEVEL,SET_iS_CORRECT,SET_IS_ATTEMPTED} = QuantumIntrusionSlice.actions;
export default QuantumIntrusionSlice.reducer