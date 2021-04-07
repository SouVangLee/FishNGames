import React from 'react';

const Greeting = ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => (
    <div>
      <nav className="login-signup">
        <button onClick={() => openModal('login')}>Sign In</button>
        <button onClick={() => openModal('signup')}>Create An Account</button>
      </nav>
    </div>
  )

  const personalGreeting = () => (
    <div>
      <h2>Welcome, {this.props.currentUser.name}!</h2>
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