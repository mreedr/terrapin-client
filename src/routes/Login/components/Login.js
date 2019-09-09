import React, { Component } from 'react';
import './Login.scss';
import { browserHistory, Link } from 'react-router';

import LoginForm from '../../../components/forms/LoginForm';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { };
    this.afterLogin = this.afterLogin.bind(this);
  }

  componentDidMount() {
    document.title = 'Login - Terrapin Ticketing';
  }

  afterLogin() {
    browserHistory.push('/my-profile');
  }

  render() {
    return (
      <div className='container login-container'>
        <div className="card login-card">
          <div className='row login-selector'>
            <button
              className='col s6 btn-flat btn-large active'
              style={{borderRadius: 0}}>
              Login
            </button>
            <div
              className='col s6 btn-flat btn-large'
              onClick={() => browserHistory.push('/signup')}
              style={{borderRadius: 0}}>
              Signup
            </div>
          </div>
          <LoginForm afterLogin={this.afterLogin} />
        </div>
        <Link to='/forgot-password' className="right-align"><small>Forgot Password?</small></Link>
      </div>
    );
  }
}

export default Login;
