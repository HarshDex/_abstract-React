import React from 'react'
import './SecretFlow.css'
import { useNavigate } from 'react-router-dom'
const SecretFlow = () => {
  const navigate = useNavigate();
  const onBackhandler = () =>{
    navigate(-1);
  }
  return (
    <div className="secret-flow">
        <h1>What is the functioning mechanism of authentication flow in contemporary technologies?</h1>
        <p>Upon user login, they furnish their username and password, which the API scrutinizes against the database, ensuring a match with security measures like hashing and salting. Successful authentication grants the user access, enabling actions like an authenticated admin deleting a user’s account. Unauthorized users seeking such actions are denied due to lacking permissions.</p>
        <h5>To identify the request sender, the authenticated user’s user ID is included in the request, preventing unauthorized users without the same user ID from making requests. In systems using cookie-based session ID storage, threats like Cross-Site Request Forgery (CSRF) and Cross-Site Scripting (XSS) attacks arise.</h5>
        <h6>In a CSRF attack, an attacker tricks a user into unintended requests, exploiting their authenticated session cookie. In an XSS attack, malicious scripts injected into a trusted website may lead to the unauthorized access of a user’s account by stealing their session cookies.</h6>
        <p>To secure session tokens and prevent impersonation, session tokens are introduced, tied to an admin’s machine. A separate database maintains a sessions table linking users to session IDs. Upon admin login, a secure session ID is generated and stored, requiring its inclusion in API requests for authentication, adding an extra layer of security.</p>
        <p>Ensuring privacy and security involves generating random, statistically impossible-to-brute-force session IDs. Storing these tokens can be done via cookie-based storage, attaching data like the session ID to the website, or in local storage within the browser.</p>
        <p>Architecturally, each user request involves at least one database read to validate the session, necessitating database scaling for increased user loads. Protection against DoS attacks is crucial to prevent system overload from excessive requests.</p>
        <p>JSON Web Tokens (JWTs) serve as an industry-standard method (RFC 7519) for secure claim representation between parties. Decentralized authentication includes a separate token generation API generating client-side stored tokens. JSON Web Tokens consist of a header, payload, and signature, specifying encryption algorithm, token type, and ensuring data integrity through encryption with a secret key on the client. Users include JWTs in API requests, and the API verifies data integrity using the token’s signature through asymmetric encryption.</p>
        <button onClick={onBackhandler}>Go Back to Mission</button>
    </div>
  )
}

export default SecretFlow