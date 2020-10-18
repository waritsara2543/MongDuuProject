$(function () {


  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.

      displayName = user.displayName;
      email = user.email;
      photoUrl = user.photoURL;
      console.log(displayName, email, photoUrl);

      $("#username").text(email);
      $("#displayname").text(displayName);
      $("#photo").attr("src", photoUrl);

    } else {
      // User is signed out.
      window.location.href = "signin.html";
    }
  });
  document.addEventListener('init', function (event) {
    var page = event.target;
    if (page.id === 'profile') {
      $("#signOut").click(function () {
        console.log("Exit");
        firebase.auth().signOut().then(function () {
          window.location.href = "signin.html"
        }).catch(function (error) {
            // An error happened.
        });
      });
    }
  });

})
