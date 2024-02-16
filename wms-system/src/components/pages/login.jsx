import React from 'react'
import 'login.css'
function Login(){
  return (
    <>
     <div className="container">
        <div className="col-sm-12">
            
          <div className="background">
            <div className="shape"></div>
            <div className="shape"></div>
          </div>
          <form>
            <h3>Panadura Nursing Home Private Hospital</h3>
            <br />
            <h3>Login Here</h3>
    
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="Email or Phone" id="username" />
    
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" id="password" />
    
            <button>Log In</button>
          </form>  
        </div>
      </div>
    </>
  );
};

export default Login