import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import { validatePassword } from 'firebase/auth';

function SignUp() {
  const [showLogin, setShowLogin] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyAQcK6mjBoOow8p0vw0_IHjAXtZIYvksWk",
      authDomain: "braniac-f455c.firebaseapp.com",
      databaseURL: "https://braniac-f455c-default-rtdb.firebaseio.com",
      projectId: "braniac-f455c",
      storageBucket: "braniac-f455c.appspot.com",
      messagingSenderId: "404956277459",
      appId: "1:404956277459:web:67f78249db064dad944226"
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    firebase.auth();
  }, []);

  const handleClick = () => {
    setShowForm(true);
  };

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  const handleSubmit = async (e) => {
    //מונע מהכל להתאפס
    e.preventDefault(); 
    
  // מכניס את המידע
const email = e.target.elements.email.value;
const password = e.target.elements.password.value;
const name = e.target.elements.name?.value || "";
const gender = e.target.elements.gender?.value || "";
const age = e.target.elements.age?.value || "";

const verifyPassword = e.target.elements.verifyPassword.value;

// בדיקה אם הסיסמה ואימות הסיסמה תואמים
if (password !== verifyPassword) {
alert("The password does not match");
return;
}

try {
  // יוצר איימייל חדש עם ססמה
  const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
  const user = userCredential.user;

  
      // מכניס את המידע ומכניס בשם יוזרס
      const database = firebase.database();
      const usersRef = database.ref("users");  

      //שם לכל אחד שם מפתח על פי האימייל
      const newUserRef = usersRef.child(name); 
      
      await newUserRef.set({
        email,
        name,
        gender,
        age,
      });

      // נכנס לאתר לאחר שהכל הסתיים בהצלחה
      navigate("/Home");
    } catch (error) {
      console.error("Authentication error:", error);
      alert(error.message);
    }
  };
  const backgroundImageStyle = {
    backgroundImage: url("https://static.vecteezy.com/system/resources/thumbnails/027/875/773/original/dark-futuristic-low-poly-surface-background-with-the-gentle-motion-of-black-polygonal-triangle-shapes-and-glowing-red-neon-light-4k-and-looping-technology-motion-background-animation-video.jpg"),
  };
  

  return (
    <div className="main-SignUp" style={backgroundImageStyle}>
      <div className="titel">
        <div className="text">Brainiac</div>
      </div>

      {!showForm && (
        <>
          <div className="main-Websitedetails">
            <div className="picters">
              <img src="/Photos/1.png" alt="1" className="picture" />
              <img src="/Photos/5.png" alt="2" className="picture" />
              <img src="/Photos/4.png" alt="3" className="picture" />
            </div>
            <div className="Websitedetails">
              <h1 className="Websitedetails-text">The Best and Fun Way for Children to Learn</h1>
              <div className="colors">
                <h3 className="color1">English</h3>
                <h3 className="color2">Math</h3>
                <h3 className="color3">shapes</h3>
              </div>
              <p className="Websitedetails-text2">
                Brainiac is a special website that helps kids learn through fun games. Parents and teachers can make their own exercises, and the website turns them into super cool games that help kids get better at things like English, math, and shapes - all while having a great time playing!
              </p>
              <br></br>
              <h2 className="Websitedetails-text">
                The site is completely free. All that remains is to start playing and enjoy learning!
              </h2>
            </div>
          </div>
          <button className="button1" onClick={handleClick}>Enter the game</button>
        </>
      )}

      {showForm && (
        <div>
          {showLogin ? (
            <div>
              <h2 className="textmain">Login</h2>
              <form className='Login' onSubmit={handleSubmit}>
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
                <button className='buttonlogin' type="submit">Login</button>
                <p><button className='buttonlogin' onClick={toggleForm}>Don't have an account? </button></p>
              </form>
            </div>
          ) : (
            <div>
              <h2 className="textmain">SignUp</h2>
              <form className='Login' onSubmit={handleSubmit}>
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
                  placeholder="Full Name"
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
                <input
                  className='inpet'
                  type="password"
                  name="verifyPassword"
                  placeholder="Verify password"
                />
                <button className="buttonsignup" type="submit" >SignUp</button>
                <p><button className="buttonsignup" onClick={toggleForm}>Already have an account?</button></p>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SignUp;
