import React from 'react';

const Greeting = ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => (
    <div className="login-container" onClick={() => openModal('login')}>
      <div className="h2-signin">Sign In</div>
      <div className="login-button-logo">
        <img className="login-logo" src={window.userLoginIcon}/>
      </div>
    </div>
  )

  const personalGreeting = () => (
    <div className="login-greeting">
      <h2>Welcome, {currentUser.name}!</h2>
      <button onClick={logout}>Log Out</button>
    </div>
  )


  return (
    currentUser ? 
    personalGreeting(currentUser, logout) : 
    sessionLinks()
  );

}

export default Greeting;