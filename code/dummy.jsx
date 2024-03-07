<div className="container">
      <div className="left-section">
        <img src={welcomeimage} alt="Illustration" className="welcome-image" />
      </div>


      <div className="left-section">
      <img src={welcomeimage} className="welcome-image"/>
    </div>






    .left-section {
    flex: 1;
    display: flex;
    width: 800px;
    height: 900px;
}

.welcome-image{
  display: flex;
  object-fit: cover;
  width: 100%;
  height: 100%;
  float: left;
}






const firebase = require('firebase');
// Import Firestore explicitly
require('firebase/firestore');


const firebaseConfig = {
  apiKey: "AIzaSyBMJDr1LsSD7lWtFZ3w87ERmgNKlWRNHx0",
  authDomain: "noteworthy-cabd3.firebaseapp.com",
  projectId: "noteworthy-cabd3",
  storageBucket: "noteworthy-cabd3.appspot.com",
  messagingSenderId: "1016305354618",
  appId: "1:1016305354618:web:503e927ec21843f9e3b8c3",
  measurementId: "G-VC902QVDYN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();






// function createUser() {
  //   // Create data object to send with the request
  //   const data = {
  //     Email: email,
  //     Name: name,
  //     Password: password
  //   };
  
  //   // Send POST request with data object
  //   Axios.post('http://localhost:5000/register', data)
  //     .then(() => {
  //       console.log("User has been created");
  //     })
  //     .catch(error => {
  //       console.error("Error creating user:", error);
  //     });
  // }






  const handleLogin = async () => {
    try {
      event.preventDefault()
      console.log(email, password); // Logging input values for debugging
  
      // Sign in the user with email and password
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
  
      // Extract the user object from the userCredential
      const user = userCredential.user;
  
      // Construct the log object with the user's UID
      const log = { uid: user.uid };
  
      // Display an alert to indicate successful login
      alert("User logged in successfully");
  
      // Navigate to the "/homesc" route with the log object as state
      navigate('/home', { state: log });
    } catch (error) {
      // Handle errors
      console.error("Error logging in:", error.message);
      // You can display error messages to the user or handle them in other ways
    }
  };