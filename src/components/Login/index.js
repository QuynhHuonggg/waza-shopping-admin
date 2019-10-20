
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import auth from './Auth.module.scss'
import { IoMdPerson, IoIosLock } from "react-icons/io";

export default class Auth extends Component {
  constructor(props) {
    super(props)
    let loggedIn = false
    this.state = {
      username: '',
      password: '',
      loggedIn
    }
    this.onChange = this.onChange.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitForm(e) {
    e.preventDefault()
    const { username, password } = this.state

    if (username === "wazaadmin" && password === "shopping") {
      this.setState({
        loggedIn: true
      })
    }
  }
  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/admin" />
    }
    return (
      <div className={auth.body}>
        <div className="row justify-content-center">
          <div className="col-xs-12 col-sm-6 col-md-3">
            <div className={auth.rowContainer}>

            <h6 style={{color:'blue', textAlign:'center'}}>WAZA SHOPPING</h6>
            <h1 className={auth.tillte}>Login</h1>

            <form onSubmit={this.submitForm}>
              <div className="form-group">
                {/* userName */}  
                <label for="text" className={auth.Username}>  <IoMdPerson/> Username</label>
                <input 
                  className="form-control" 
                  type="text"
                  placeholder="Enter UserName"
                  name="username"
                  value={this.state.username}
                  onChange={this.onChange}
                />
              </div>
              <br />
              {/* password */}
              <div className="form-group">
                <label for="password"> <IoIosLock/> Password</label>
                <input
                  className="form-control"
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <br />
               {/* button Login */}
              <button type="submit" class="btn btn-primary btn-md" style={{marginLeft: '70px'}}>Login</button>
              <br />
            </form>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

