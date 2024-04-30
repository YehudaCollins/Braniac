// import { initializeApp } from "http://www.gstatic.com/firebasejs/10.7.2/firebase/app";
//  import { getAuth,  signInWithEmailAndPassword } from "http://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
 

const firebaseConfig = {
    apiKey: "AIzaSyAQcK6mjBoOow8p0vw0_IHjAXtZIYvksWk",
    authDomain: "braniac-f455c.firebaseapp.com",
    databaseURL: "https://braniac-f455c-default-rtdb.firebaseio.com",
    projectId: "braniac-f455c",
    storageBucket: "braniac-f455c.appspot.com",
    messagingSenderId: "404956277459",
    appId: "1:404956277459:web:67f78249db064dad944226"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  

  // Submit button event listener
  const submit = document.getElementById('submit');
  submit.addEventListener("click", (event) => {
    event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

   createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Creating Account...")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
    // firebase.auth().createUserWithEmailAndPassword(email, password)
    //   .then((userCredential) => {
    //     const user = userCredential.user;
    //     alert("Creating Account...");
    //     window.location.href = "grand.html";
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     alert(errorMessage);
    //   });
  });

// // Import Firebase modules
// import { initializeApp } from "firebase/app";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// // Initialize Firebase with your config
// const firebaseConfig = {
//         apiKey: "AIzaSyAQcK6mjBoOow8p0vw0_IHjAXtZIYvksWk",
//         authDomain: "braniac-f455c.firebaseapp.com",
//         databaseURL: "https://braniac-f455c-default-rtdb.firebaseio.com",
//         projectId: "braniac-f455c",
//         storageBucket: "braniac-f455c.appspot.com",
//         messagingSenderId: "404956277459",
//         appId: "1:404956277459:web:67f78249db064dad944226"
//       };

// firebase.initializeApp(firebaseConfig);
// const auth = getAuth();

// // Submit button event listener
// const submitButton = document.getElementById('submit');
// submitButton.addEventListener('click', (event) => {
//     event.preventDefault();

//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             // Signed up successfully
//             const user = userCredential.user;
//             alert(`Account created for ${user.email}`);
//             // ... perform additional actions after successful registration
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             alert(`Error: ${errorCode} - ${errorMessage}`);
//             console.error(error);
//         });
// });
