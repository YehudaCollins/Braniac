import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function SignUp(){
    const [showLogin, setShowLogin] = useState(true);
  
    const toggleForm = () => {
      setShowLogin(!showLogin);
    };

    const backgroundImageStyle = {
      backgroundImage: `url("https://static.vecteezy.com/system/resources/thumbnails/027/875/773/original/dark-futuristic-low-poly-surface-background-with-the-gentle-motion-of-black-polygonal-triangle-shapes-and-glowing-red-neon-light-4k-and-looping-technology-motion-background-animation-video.jpg")`,    };
    return (
      <div className="main-SignUp" style={backgroundImageStyle}>
          <div className="titel">
            <div className="text">Brainiac</div>
          </div>
          {showLogin ? (
          <div>
            <h2 className="textmain">Login</h2>
            {/* <form className="Login" onSubmit={handleSubmit}></form> */}
            <form className='Login'>
              <input
                className='inpet'
                type="email"
                name="email"
                placeholder="Email"
              />
              <input
                className='inpet'
                type="password"
                name="password"
                placeholder="Password"
              />
              <button className='buttonlogin'  type="submit">Login</button>
              <p><button className='buttonlogin' onClick={toggleForm}>Don't have an account? </button></p>

            </form>
          </div>
        ) : (
          <div>
            <h2 className="textmain">SignUp</h2>
            <form className='Login'>
              <input
                className='inpet'
                type="email"
                name="email"
                placeholder="Email"
              />
              <input
                className='inpet'
                type="text"
                name="name"
                placeholder="First Name"
              />
              <input
                className='inpet'
                type="text"
                name="lastName"
                placeholder="Last Name"
              />
              <div className='label'>
                <label>
                Boy
                  <input
                    className='inpet'
                    type="radio"
                    name="gender"
                    value="boy"
                  />
                </label>
                <label>
                Girl
                  <input
                    className='inpet'
                    type="radio"
                    name="gender"
                    value="girl"
                  />
                </label>
              </div>
              <input
                className='inpet'
                type="number"
                name="age"
                placeholder="Age"
              />
              <input
                className='inpet'
                type="password"
                name="password"
                placeholder="Password"

              />
              <button className="buttonsignup"  type="submit">SignUp</button>
              <p> <button className="buttonsignup" onClick={toggleForm}>Already have an account?</button></p>

            </form>
          </div>
        )}
      </div>
    );
  }
export default SignUp;
ניתן להסיר את הייבוא הבא
import firebase from 'firebase'; // יבוא מהספרייה המרכזית של Firebase

