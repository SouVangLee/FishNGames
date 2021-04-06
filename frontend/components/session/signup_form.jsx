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
    this.setState( { name: '', email: '', password: ''});
    this.props.processForm(this.state)
      // .then(this.props.closeModal())
  }
  
  render() {
    console.log('sessionForm', this.props);
    return (
      <div className="signup-form-container">
        <h2>Create an Account!</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Name:
            <input 
              type="text"
              value={this.state.name}
              onChange={this.handleChange('name')}
            />
          </label> <br/>
          
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

          <button>Sign Up!</button>
        </form>
      </div>
    );
  }
};

export default SignupForm;