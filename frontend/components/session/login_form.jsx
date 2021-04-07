import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
     };

     this.handleSubmit = this.handleSubmit.bind(this);
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

  render() {

    return (
      <div>
        <h2>Sign In!</h2>
        <div className="login-form-container">

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

            <button className="login-button">Log In</button>
          </form>
        </div>
      </div>
    );
  }  
}

export default LoginForm;