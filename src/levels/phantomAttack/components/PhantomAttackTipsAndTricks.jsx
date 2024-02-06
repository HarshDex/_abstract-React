import React from 'react'
import './PhantomAttackTipsAndTricks.css'
import { useNavigate } from 'react-router-dom'
const PhantomAttackTipsAndTricks = () => {
  const navigate = useNavigate();
  return (
    <div className="phantom-attack-tips-and-tricks">
      <div className="phantom-attack-social-heading">
        <h1>Social Engineering and its Potential Risks</h1>
      </div>
      <div className="phatom-attack-tips-data">
        <div className="social-engineering-def">
          <p>Social engineering is a method used by individuals or groups to manipulate others into divulging confidential information, providing access to restricted systems, or performing actions that may not be in their best interest. Unlike traditional hacking methods that rely on exploiting technical vulnerabilities, social engineering exploits human psychology and emotions to gain access to sensitive information or systems.
          <br />
          This could involve techniques such as pretexting (creating a fabricated scenario to extract information), phishing (sending deceptive emails or messages to trick individuals into revealing sensitive information), or impersonation (pretending to be someone else to gain access).
          <br />
          Social engineering attacks can target anyone, from individuals to large organizations, and they often rely on exploiting trust, curiosity, fear, or urgency to achieve their goals. It's essential to be aware of social engineering tactics and to exercise caution when sharing information or responding to requests, especially online or over the phone.</p>
        </div>
        <div className="types-of-social-attacks">
          <h4>There are various types of social engineering scams, each designed to manipulate individuals or organizations into divulging sensitive information, providing access to systems, or performing certain actions. Here are some common types:</h4>
          <h2>Types of Social engineering Attacks</h2>
          <h3>Phishing:</h3>
          <p>This involves sending deceptive emails or messages that appear to come from a legitimate source, such as a bank or a trusted organization. The goal is to trick recipients into clicking on malicious links, downloading malware, or providing sensitive information like passwords or credit card numbers.</p>
          <h3>Pretexting</h3>
          <p>In pretexting, the attacker creates a fabricated scenario to trick individuals into revealing information or performing actions they normally wouldn't. For example, an attacker might pose as a colleague or authority figure and request sensitive information under the guise of an urgent situation.</p>
          <h3>Baiting:</h3>
          <p>Baiting involves offering something enticing, such as a free download or a USB drive, that contains malware. When the victim takes the bait and interacts with the malicious item, their system becomes compromised.</p>
          <h3>Quid Pro Quo:</h3>
          <p>In this type of scam, the attacker offers something in exchange for information or access. For instance, they might pose as IT support and offer to help with a technical issue in exchange for the victim's login credentials.</p>
          <h3>Tailgating</h3>
          <p>Also known as piggybacking, tailgating involves an attacker physically following someone into a restricted area without proper authorization. This exploits the natural tendency to hold doors open for others or to avoid confrontation.</p>
          <h3>Vishing</h3>
          <p>Vishing (voice phishing) uses phone calls to deceive individuals into providing sensitive information or performing actions. The attacker might impersonate a trusted entity, such as a bank representative, and manipulate the victim into revealing account details or transferring funds.</p>
          <h3>Watering Hole Attack: </h3>
          <p>In this type of attack, the attacker compromises a website that is frequently visited by the target group. When individuals from the target group visit the site, they may unknowingly download malware or be redirected to a phishing page.</p>
        </div>
        <div className="phatom-attack-tips-return">
          <button onClick={()=>navigate(-1)}>Return to Quest</button>
        </div>
      </div>
    </div>
  )
}

export default PhantomAttackTipsAndTricks