
$(function () {
  // Your web app's Firebase configuration

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBfgwFZDoLIRIEIbqayesMIsk4C2BUlvvk",
    authDomain: "mongduu-cae06.firebaseapp.com",
    databaseURL: "https://mongduu-cae06.firebaseio.com",
    projectId: "mongduu-cae06",
    storageBucket: "mongduu-cae06.appspot.com",
    messagingSenderId: "19158763880",
    appId: "1:19158763880:web:1ba86090c57aa8edd5aedd",
    measurementId: "G-D1SS39EJBZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  var db = firebase.firestore();
  db.collection("DetailMovie").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      var card = `<div class="card ">
         <img class="card-img-top" src="${doc.data().PosterURL}" alt="">
         <div class="card-body">
  <h4 class="card-title">${doc.data().Title} - ${doc.data().Year} </h4>
  <p class="card-text">${doc.data().Type}</p>
  <p class="card-text">${doc.data().Detail}</p>
</div>
     </div>`;
      $("#list").append(card);

    });
  });

  // แสดงรูปหน้า home
  var db = firebase.firestore();

  db.collection("DetailMovie").where("No", "<=", 1).orderBy("No")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        const Result =
          /*html*/
          `<div class="">
                        <ons-carousel-item >
                            <img src="${doc.data().PosterURL}" class="" width="100%" height="90%" alt="" srcset="" id="${doc.data().No}" onclick="openPlaylist(${doc.data().No})">
                        </ons-carousel-item>
                    </div>`
        $("#home").append(Result);
      });
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });
  //ดูล่าสุด
  db.collection("DetailMovie")
    .where("view", "<=", 12)
    .orderBy("view")
    .get()
    .then(function (querySnapshot) {
      $('#carousel').empty();
      querySnapshot.forEach(function (doc) {
        const Result =
          `<ons-col id="${doc.data().view}" style="margin-right:110px; margin-left:2px" width="20" height="250">
          <img class=""  src="${doc.data().PosterURL}" alt="" width="170" height="240vh" id="${doc.data().No}" onclick="openPlaylist(${doc.data().No})">
          </ons-col>
      `;
        $("#viewed").append(Result);
      });
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });
  //10 อันดับ
  db.collection("DetailMovie")
    .where("No", "<=", 10)
    .orderBy("No")
    .get()
    .then(function (querySnapshot) {
      $('#carousel').empty();
      querySnapshot.forEach(function (doc) {
        var Result =
          `<ons-col style="margin-right:110px; margin-left:2px" width="20" height="250">
          <img class="" src="${doc.data().PosterURL}" alt="" width="170" height="240vh" id="${doc.data().No}" onclick="openPlaylist(${doc.data().No})">
          </ons-col>
          `;
        $("#hot").append(Result);
      });
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });
  //for you
  db.collection("DetailMovie")
    .where("rating", "<=", 7)
    .orderBy("rating")
    .get()
    .then(function (querySnapshot) {
      $('#carousel').empty();
      querySnapshot.forEach(function (doc) {
        var Result =
          `<ons-col style="margin-right:110px; margin-left:2px" width="20" height="250">
          <img class="" src="${doc.data().PosterURL}" alt="" width="170" height="240vh" id="${doc.data().No}" onclick="openPlaylist(${doc.data().No})">
          </ons-col>
      `;
        $("#ForYou").append(Result);
      });
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });






  document.addEventListener('init', function (event) {
    var page = event.target;
    if (page.id === 'category') {
      $(".btnCategory").click(function () {
        var id = $(this).attr('id');
        $("#showmovieCategory").empty();
        db.collection("DetailMovie").get().then(function (querySnapshot) {
          querySnapshot.forEach((doc) => {
            if (id === 'ทุกประเภท') {
              var card1 = `<div class="card ">
                            <img class="card-img-top" src="${doc.data().PosterURL}" alt="" id="${doc.data().No}" onclick="openPlaylist1(${doc.data().No})">
                             <div class="card-body">
                            <h4 class="card-title">${doc.data().Title} - ${doc.data().Year} </h4>
                            <p class="card-text">${doc.data().Type}</p>
                        </div>`;
              $("#showmovieCategory").append(card1);
            } else if (doc.data().Type === id) {
              var card1 = `<div class="card ">
                            <img class="card-img-top" src="${doc.data().PosterURL}" alt="" id="${doc.data().No}" onclick="openPlaylist1(${doc.data().No})">
                             <div class="card-body">
                            <h4 class="card-title">${doc.data().Title} - ${doc.data().Year} </h4>
                            <p class="card-text">${doc.data().Type}</p>
                        </div>`;
              $("#showmovieCategory").append(card1);
            }
          });
        })
          .catch(function (error) {
            console.log("Error getting documents: ", error);
          });
      })
    }
  });

  document.addEventListener('init', function (event) {
    var page = event.target;
    console.log(page.id);

    if (page.id === 'detail') {
      page.querySelector('#back_button').onclick = function () {
        document.querySelector('#myNavigator').popPage();

      };


    }
    if (page.id === 'detail1') {
      page.querySelector('#back_button').onclick = function () {
        document.querySelector('#myNavigator1').popPage();
      };


    }
  });



})
//pushpage
function openPlaylist(id) {

  var db = firebase.firestore();

  document.querySelector('#myNavigator').pushPage('views/detail1.html');

  console.log(id);

  db.collection("DetailMovie").where("No", "==", id)
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        const Result =
          /*html*/
          `
        <div class="card">
                      <ons-carousel-item >
                          <img src="${doc.data().PosterURL}" class="card-img-top" width="100%" height="90%" alt="" srcset="" id="${doc.data().No}" >
                      </ons-carousel-item>
                  
                  <h4 class="card-title">${doc.data().Title} - ${doc.data().Year} </h4>
                         <p class="card-text">${doc.data().Type}</p>
                         <p class="card-text">${doc.data().Detail}</p></div>`

        $("#show").append(Result);

      });
    })







}
function openPlaylist1(id) {

  var db = firebase.firestore();


  document.querySelector('#myNavigator1').pushPage('views/detail1.html');
  console.log(id);

  db.collection("DetailMovie").where("No", "==", id)
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        const Result =
          /*html*/
          `
        <div class="card">
                      <ons-carousel-item >
                          <img src="${doc.data().PosterURL}" class="card-img-top" width="100%" height="90%" alt="" srcset="" id="${doc.data().No}" >
                      </ons-carousel-item>
                  
                  <h4 class="card-title">${doc.data().Title} - ${doc.data().Year} </h4>
                         <p class="card-text">${doc.data().Type}</p>
                         <p class="card-text">${doc.data().Detail}</p></div>`

        $("#show").append(Result);

      });
    })
}



function setColor(btn, color) {
  var count = 1;
  var property = document.getElementById(btn);
  if (count == 0) {
    property.style.color = "#FFFFFF"
    count = 1;
  }
  else {
    property.style.color = "#ebb617"
    count = 0;
  }

}