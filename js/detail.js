
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
                        <ons-carousel-item id="${doc.data().No}">
                            <img src="${doc.data().PosterURL}" class="" width="100%" height="90%" alt="" srcset="">
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
    .where("view", "<=", 1)
    .orderBy("view")
    .get()
    .then(function (querySnapshot) {
      $('#carousel').empty();
      querySnapshot.forEach(function (doc) {
        var Result =
          `<ons-col id="${doc.data().view}" style="margin-right:110px; margin-left:2px" width="20" height="250"><img class="" src="${doc.data().PosterURL}" alt="" width="170" height="240vh" ></ons-icon></ons-col>
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
          `<ons-col style="margin-right:110px; margin-left:2px" width="20" height="250"><img class="" src="${doc.data().PosterURL}" alt="" width="170" height="240vh" ></ons-icon></ons-col>
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
          `<ons-col style="margin-right:110px; margin-left:2px" width="20" height="250"><img class="" src="${doc.data().PosterURL}" alt="" width="170" height="240vh" ></ons-icon></ons-col>
      `;
        $("#ForYou").append(Result);
      });
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });




  // db.collection("DetailMovie").get().then((querySnapshot) => {
  //   querySnapshot.forEach((doc) => {
  //     var card = `<div class="card ">
  //      <img class="card-img-top" src="${doc.data().PosterURL}" alt=""> <div class="card-body">
  //      <h4 class="card-title">${doc.data().Title} - ${doc.data().Year} </h4>
  //      <p class="card-text">${doc.data().Type}</p>
  //    </div>

  //  </div>`;
  //     $("#allcategory").append(card);

  //   });
  // });

  document.addEventListener('init', function (event) {
    var page = event.target;
    if (page.id === 'category') {
      $(".btnCategory").click(function () {
        var id = $(this).attr('id');
        $("#showmovieCategory").empty();
        db.collection("DetailMovie").get().then(function (querySnapshot) {
          querySnapshot.forEach((doc) => {
            if(id === 'ทุกประเภท'){
              var card1 = `<div class="card ">
                            <img class="card-img-top" src="${doc.data().PosterURL}" alt=""> <div class="card-body">
                            <h4 class="card-title">${doc.data().Title} - ${doc.data().Year} </h4>
                            <p class="card-text">${doc.data().Type}</p>
                        </div>`;
            $("#showmovieCategory").append(card1);
            }else if(doc.data().Type === id){
              var card1 = `<div class="card ">
                            <img class="card-img-top" src="${doc.data().PosterURL}" alt=""> <div class="card-body">
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

  // db.collection("DetailMovie").where("Type", "==", "คอมเมดี้")
  //   .get()
  //   .then(function (querySnapshot) {
  //     querySnapshot.forEach((doc) => {
  //       var card1 = `<div class="card ">
  //       <img class="card-img-top" src="${doc.data().PosterURL}" alt=""> <div class="card-body">
  //       <h4 class="card-title">${doc.data().Title} - ${doc.data().Year} </h4>
  //        <p class="card-text">${doc.data().Type}</p>
  //     </div>

  //   </div>`;
  //       $("#comedy").append(card1);
  //       $("#comedy1").append(card1);

  //     });
  //   })
  //   .catch(function (error) {
  //     console.log("Error getting documents: ", error);
  //   });

  // db.collection("DetailMovie").where("Type", "==", "แฟนตาซี")
  //   .get()
  //   .then(function (querySnapshot) {
  //     querySnapshot.forEach((doc) => {
  //       var card1 = `<div class="card ">
  //       <img class="card-img-top" src="${doc.data().PosterURL}" alt=""> <div class="card-body">
  //       <h4 class="card-title">${doc.data().Title} - ${doc.data().Year} </h4>
  //        <p class="card-text">${doc.data().Type}</p>
  //     </div>

  //   </div>`;
  //       $("#fantasy").append(card1);
  //       $("#fantasy1").append(card1);

  //     });
  //   })
  //   .catch(function (error) {
  //     console.log("Error getting documents: ", error);
  //   });

  // db.collection("DetailMovie").where("Type", "==", "ดราม่า")
  //   .get()
  //   .then(function (querySnapshot) {
  //     querySnapshot.forEach((doc) => {
  //       var card1 = `<div class="card ">
  //       <img class="card-img-top" src="${doc.data().PosterURL}" alt=""> <div class="card-body">
  //       <h4 class="card-title">${doc.data().Title} - ${doc.data().Year} </h4>
  //        <p class="card-text">${doc.data().Type}</p>
  //     </div>

  //   </div>`;
  //       $("#drama").append(card1);
  //       $("#drama1").append(card1);

  //     });
  //   })
  //   .catch(function (error) {
  //     console.log("Error getting documents: ", error);
  //   });

  // db.collection("DetailMovie").where("Type", "==", "สยองขวัญ")
  //   .get()
  //   .then(function (querySnapshot) {
  //     querySnapshot.forEach((doc) => {
  //       var card1 = `<div class="card ">
  //       <img class="card-img-top" src="${doc.data().PosterURL}" alt=""> <div class="card-body">
  //       <h4 class="card-title">${doc.data().Title} - ${doc.data().Year} </h4>
  //        <p class="card-text">${doc.data().Type}</p>
  //     </div>

  //   </div>`;
  //       $("#horror").append(card1);
  //       $("#horror1").append(card1);

  //     });
  //   })
  //   .catch(function (error) {
  //     console.log("Error getting documents: ", error);
  //   });


  // db.collection("DetailMovie").where("Type", "==", "แอคชั่น")
  //   .get()
  //   .then(function (querySnapshot) {
  //     querySnapshot.forEach((doc) => {
  //       var card1 = `<div class="card ">
  //       <img class="card-img-top" src="${doc.data().PosterURL}" alt=""> <div class="card-body">
  //       <h4 class="card-title">${doc.data().Title} - ${doc.data().Year} </h4>
  //        <p class="card-text">${doc.data().Type}</p>
  //     </div>

  //   </div>`;
  //       $("#action").append(card1);
  //       $("#action1").append(card1);

  //     });
  //   })
  //   .catch(function (error) {
  //     console.log("Error getting documents: ", error);
  //   });


})