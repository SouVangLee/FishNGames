import React from 'react';

class SessionForm extends React.Component {
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
      // .then(close modal
  }
  
  render() {
    console.log('sessionForm', this.props);
    let nameLabel = "";
    if (this.props.formType === 'signup') {
      nameLabel = (
        <label>Name:
        <input 
          type="text"
          value={this.state.name}
          onChange={this.handleChange('name')}
        />
      </label>
      )
    }

    console.log("nameLabel", nameLabel);

    return (
      <div className="session-form">
        <h2>Create an Account!</h2>
        <form onSubmit={this.handleSubmit}>
          { nameLabel }
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

export default SessionForm;