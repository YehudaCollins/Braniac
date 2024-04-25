import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Card from "./card";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import cards from "./cardDeta";
import Math from "./Math";
import English from "./English";   
import Shapes from "./shapes"; 
import "./App.css"; 
import "./English.css";
import "./Math.css";
import "./Shapes.css";



function App() {
  const [userName, setUserName] = useState("");
  const [userGold, setUserGold] = useState("");
  const [loading, setLoading] = useState(true);

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

    const usersRef = firebase.database().ref("users");

    const onDataChange = (snapshot) => {
      const userData = snapshot.val();
      console.log("Database:", userData); // Log database object
      if (userData) {
        const userId = Object.keys(userData)[0];
        const user = userData[userId];
        if (user && user.name) {
          setUserName(user.name);
          setUserGold(user.gold);
        }
      }
      setLoading(false);
    };

    usersRef.on("value", onDataChange);

    return () => {
      usersRef.off("value", onDataChange);
    };
  }, []);

  const backgroundImageStyle = {
    backgroundImage: `url("https://wallpaper-house.com/data/out/4/wallpaper2you_41215.jpg")`,
  };
  

  
  return (
 
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Math" element={<Math />} />
          <Route path="/English" element={<English />} />
          <Route path="/Shapes" element={<Shapes />} />
        </Routes>
      </Router>
     

    
  );

     
  function Home() {
    return(
      <div className="main" style={backgroundImageStyle}>
      <div className="titel1">
        <div className="titel">
          <div className="text">Brainiac</div>
        </div>
      </div>
      <div className="card">
        {cards.map((card) => (
          <Card card={card} key={card.id} />
        ))}
      </div>
      <div className="bottem">
        <div className="jj">User from Unity: <div className="h">{userName} {userGold}</div></div>
      </div>
    </div>
    );
  }
}

export default App;