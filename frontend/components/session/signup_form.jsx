import React from 'react';

class SignupForm extends React.Component {
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
      <div className="signup-form-container">
        <h2>Create an Account!</h2>

        {this.renderErrors()}

        <form onSubmit={this.handleSubmit}>

          <label className="signup-label">Name
            <br/>
            <input 
              type="text"
              value={this.state.name}
              onChange={this.handleChange('name')}
            />
          </label>
          <br/>
          
          <label className="signup-label">Email
            <br/>
            <input 
              type="text"
              value={this.state.email}
              onChange={this.handleChange('email')}
            />
          </label>
          <br/>

          <label className="signup-label last">Password
            <br/>
            <input 
              type="password"
              value={this.state.password}
              onChange={this.handleChange('password')}
            />
          </label>
          <br/>

          <button className="signup-button">Sign Up!</button>
        </form>
      </div>
    );
  }
};

export default SignupForm;