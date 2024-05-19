import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import UnityGameComponent from './UnityGameComponent';
import Card from "./card";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import cards from "./cardDeta";
import Mathh, { handleLevelCompletion } from './Math';
import English from "./English";
import Shapes from "./shapes";
import SignUp from "./SignUp";
import "./SignUp.css";
import "./App.css";
import "./levels.css";
import "./unity.css";
import H from "./butoon";

function App() {
  const [userData, setUserData] = useState(null);

  const firebaseConfig = {
    apiKey: "AIzaSyAQcK6mjBoOow8p0vw0_IHjAXtZIYvksWk",
    authDomain: "braniac-f455c.firebaseapp.com",
    databaseURL: "https://braniac-f455c-default-rtdb.firebaseio.com",
    projectId: "braniac-f455c",
    storageBucket: "braniac-f455c.appspot.com",
    messagingSenderId: "404956277459",
    appId: "1:404956277459:web:67f78249db064dad944226"
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = localStorage.getItem('userId');
      if (userId) {
        const database = firebase.database();
        const userRef = database.ref(`users/${userId}`);
        try {
          const snapshot = await userRef.once('value');
          const userData = snapshot.val();
          if (userData) {
            setUserData(userData);
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };
  
    fetchUserData();
  }, []);

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/h" element={<H/>} />
        <Route path="/unity" element={ <UnityGameComponent handleLevelCompletion={handleLevelCompletion} />} />
        <Route path="/Home" element={<Home setUserData={setUserData} />} />
        <Route path="/Math" element={<Mathh />} />
        <Route path="/English" element={<English />} />
        <Route path="/Shapes" element={<Shapes />} />
      </Routes>
    </Router>
  );
}

function Home({ setUserData }) {
  const { state } = useLocation();
  const { userData } = state || {};
  const { name, age, gender } = userData || {};
  const navigate = useNavigate();

  const handleLogout = () => {
    firebase.auth().signOut().then(() => {
      // Reset the userData state when the user logs out
      setUserData(null);
      // Remove the user's unique ID from localStorage
      localStorage.removeItem('userId');
      navigate("/");
    }).catch((error) => {
      console.error("Error signing out:", error);
    });
  };
  const backgroundImageStyle = {
    backgroundImage: `url("https://wallpaper-house.com/data/out/4/wallpaper2you_41215.jpg")`,
  };

  return (
    <div className="main" style={backgroundImageStyle}>
      <div className="titel1">
        <div className="titel">
          <div className="textname">        
            <button className='LogOut' onClick={handleLogout}><FontAwesomeIcon icon={faSignOut} /></button>
              {name}
          </div>
          <div className="text">Brainiac</div>
        </div>
      </div>
      <div className="card">
        {cards.map((card) => (
          <Card card={card} key={card.id} />
        ))}
      </div>
      <div className="bottem">
        <div>Age: {age}</div>
        <div>Gender: {gender}</div>
      </div>
    </div>
  );
}

export default App;
