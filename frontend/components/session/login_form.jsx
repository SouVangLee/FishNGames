import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
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
      .then(this.props.closeModal())
  }

  render() {
    console.log('loginForm', this.props);
    return (
      <div className="login-form-container">
        <h2>Sign In!</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Email:
            <input 
              type="text"
              value={this.state.email}
              onChange={this.handleChange('email')}
            />
          </label><br/>

          <label>Password:
            <input 
              type="password"
              value={this.state.password}
              onChange={this.handleChange('password')}
            />
          </label> <br/>

          <button>Log In</button>
        </form>
      </div>
    );
  }  
}

export default LoginForm;