import React from 'react'
import { useNavigate } from 'react-router-dom'
const QuantumIntrusionTipsAndTricks = () => {
    const Navigate = useNavigate();
  return (
    <div className="quantum-intrusion-tips-and-tricks">
        <div className="tips-heading">
            <h1>O-Auth 2.0</h1>
        </div>
        <div className="tips-para1">
            <p>OAuth 2.0 is all about giving access to data but doesn't spill the beans on who the owner of that data is.</p>
        </div>
        <div className="tips-para2">
            <p>Now, in the world of OAuth 2.0, there's a key player called "scope." It's like the boss controlling who gets access and what permissions during the authentication and authorization process. The scope parameter is like a wishlist of specific permissions that a client application (usually a user) asks for from the authorization server.</p>
        </div>
        <div className="tips-para3">
            <p>Here comes OpenID Connect (OIDC), the cool addition that sits on top of OAuth 2.0. It brings in a bunch of details about the person logging in, acting like a badge that tells the client who you are.</p>
        </div>
        <div className="tips-para4">
            <p>OIDC allows a client to establish a login session and get info about the resource owner, also known as identity. It's like a passport that works across multiple applications with a single login.</p>
        </div>
        <div className="tips-para5">
            <p>Think of it as Single Sign-On (SSO) for social media—logging in with Twitter or Facebook.</p>
        </div>
        <div className="tips-para6">
            <p>Now, picture using an ATM. The ATM is the client, hungry for banking services, and your bank card is the ticket it uses. The card has your basic info, and OIDC builds upon OAuth to provide more identity-related details.</p>
        </div>
        <div className="tips-para7">
            <p>The OIDC flow is like a dance with OAuth. The client asks the authorization server for access, using a specific scope to signal it's an OIDC exchange. The authorization server does its usual OAuth routine, creating an authorization code and sending it back.</p>
        </div>
        <div className="tips-para8">
            <p>But here's the twist: Along with the access token, the client also gets an ID token. Unlike the mysterious access token, the ID token is a clear string called a JSON Web Token (JWT). It's like a decoder ring for the client, containing crucial info like your ID, login time, and security checks against tampering. We call these nuggets of data "claims.</p>
        </div>
        <button className='return-button-quantum-intrusion' onClick={()=>Navigate(-1)}>Return to the quest</button>
    </div>
  )
}

export default QuantumIntrusionTipsAndTricks