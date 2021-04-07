import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
     };

     this.handleSubmit = this.handleSubmit.bind(this);
     this.demoUser = this.demoUser.bind(this);
  }

  
  handleChange(type) {
    return (e) => {
      this.setState({ [type]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
      .then(() => this.props.closeModal())
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  demoUser() {
    const user = { email: "guest@guest.com", password: "password"}
    this.props.processForm(user).then(this.props.closeModal)
  }

  render() {

    return (
      <div>
        <div className="login-form-container">
        <h2>Sign In!</h2>

          {this.renderErrors()}

          <form onSubmit={this.handleSubmit}>
            <label className="login-label">Email
              <br/>
              <input 
                type="text"
                value={this.state.email}
                onChange={this.handleChange('email')}
              />
            </label>
            <br/>

            <label className="login-label last">Password
              <br/>
              <input 
                type="password"
                value={this.state.password}
                onChange={this.handleChange('password')}
              />
            </label>
            <br/>

            <button className="login-button">LOG IN</button>
          </form>
        </div>
        <button className="demo-user" onClick={this.demoUser}>DEMO USER</button>
        <br/>
        <button 
          className="signup-modal-page"
          onClick={() => this.props.openModal('signup')}
          >CREATE AN ACCOUNT</button>
      </div>
    );
  }  
}

export default LoginForm;