import React,{useState} from 'react'
import Base from "../core/Base";
import { Redirect } from "react-router-dom";
import { signin, authenticate, isAuthenticated } from "../auth/helper";


const Signin = () => {

  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    didRedirect: false
  })

  const {email, password, error, didRedirect} = values
  const { user } = isAuthenticated();

  const handleChange = name => event =>{
    setValues({ ...values, error: false, [name]: event.target.value });
  }

  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false});
    signin({ email, password })
    .then(data => {
      if(data.error){
        setValues({ ...values, error: data.error });
      }else{
        authenticate(data, () => {
          setValues({
            ...values,
            didRedirect: true
          });
        });
        console.log("Successful")
      }
    })
  }

  const signInForm = () =>{
    return(
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <label className="text-light">Email</label>
              <input
                onChange={handleChange("email")}
                value={email}
                className="form-control"
                type="email"
              />
            </div>

            <div className="form-group">
              <label className="text-light">Password</label>
              <input
                onChange={handleChange("password")}
                value={password}
                className="form-control"
                type="password"
              />
            </div>
            <button onClick={onSubmit} className="btn btn-success btn-block">
              Submit
            </button>
          </form>
        </div>
      </div>
    )
    
  }

  const performRedirect = () => {
    if(didRedirect){
      return <Redirect to="/profile" />;
    }
  }

  return(
    <Base title="Sign in page" description="A page for user to sign in">
      {signInForm()}
      {performRedirect()}
    </Base>
  )
}

export default Signin;