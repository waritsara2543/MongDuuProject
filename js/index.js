$(function(){

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyB_zpLZaKVozmkmP3jpDq_ho4R7ScHvVlc",
    authDomain: "psu1-80756.firebaseapp.com",
    databaseURL: "https://psu1-80756.firebaseio.com",
    projectId: "psu1-80756",
    storageBucket: "psu1-80756.appspot.com",
    messagingSenderId: "508447784420",
    appId: "1:508447784420:web:3e7b55a6df7436fa235bf1",
    measurementId: "G-2JDTBKQMDS"
  };
  // Initialize Firebase
  //firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.

        displayName = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        console.log(displayName, email, photoUrl);

        $("#username").text(email);
        $("#displayname").text(displayName);
        $("#photo").attr("src",photoUrl);

        
      } else {
        // User is signed out.
        window.location.href ="signin.html";
      }
    });
    $("#signout").click(function () {
      firebase.auth().signOut()
          .then(function () {
              // Sign-out successful.
          }).catch(function (error) {
              // An error happened.
          });
  });
})

