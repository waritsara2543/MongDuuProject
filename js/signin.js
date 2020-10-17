$(function(){
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
   

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log(user);
       window.location.href = 'views/home(recommened).html';
      }
    });

  $("#signinemail").click(function(){
      var email = $("#email").val();
      var password = $("#password").val();
      console.log(email, password);
      
      firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          $("#error").text(errorMessage);
        });
        
   });
 
});
