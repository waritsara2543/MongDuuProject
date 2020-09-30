$(function(){
    // Your web app's Firebase configuration
      // For Firebase JS SDK v7.20.0 and later, measurementId is optional
      var firebaseConfig = {
        apiKey: "AIzaSyDZpva4kU8bE3LHUpTZrLEb5umnQ6ZNhJY",
        authDomain: "plearnhub-2ec30.firebaseapp.com",
        databaseURL: "https://plearnhub-2ec30.firebaseio.com",
        projectId: "plearnhub-2ec30",
        storageBucket: "plearnhub-2ec30.appspot.com",
        messagingSenderId: "190419378965",
        appId: "1:190419378965:web:c74b7d60ffd552a050bf1c",
        measurementId: "G-YPC8JBBWWT"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();
    
      var db = firebase.firestore();
      db.collection("movies").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
           var card =`<div class="card">
           <img class="card-img-top" src="${doc.data().postURL}" alt="">
           <div class="card-body">
               <h4 class="card-title">${doc.data().title} - ${doc.data().year} </h4>
               <p class="card-text">${doc.data().detail}</p>
           </div>
       </div>`;
       $("#list").append(card);
    
        });
    });
    })