$(function () {

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
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  $("#signinemail").click(function () {
    var email = $("#email").val();
    var password = $("#password").val();
    //console.log(email, password);
    
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        ons.notification.alert(errorMessage);

      });
      firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        window.location.href = 'mongduu.html';
      }

    });


  });

  $("#signingoogle").click(function () {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    firebase.auth().signInWithRedirect(provider);
    firebase.auth().getRedirectResult().then(function (result) {
      if (result.credential) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
      }
      // The signed-in user info.
      var user = result.user;
    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      ons.notification.alert(errorMessage);
    });
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        window.location.href = 'mongduu.html';
      }
    });
  });

})

