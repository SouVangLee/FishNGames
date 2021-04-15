import React from 'react';

const Greeting = ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => (
    <div className="login-container" onClick={() => openModal('login')}>
      <div className="h2-signin">Sign In</div>
      <div className="login-logo">
      </div>
    </div>
  )

  const personalGreeting = () => (
    <div className="login-greeting">
      <h2 className="greet-message">Welcome, {currentUser.name}!</h2>
      <button 
        className="greet-logout-button"
        onClick={logout}>Log Out</button>
    </div>
  )


  return (
    currentUser ? 
    personalGreeting(currentUser, logout) : 
    sessionLinks()
  );

}

export default Greeting;