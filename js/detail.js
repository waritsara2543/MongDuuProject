
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

  //แสดงทั้งหมด
  var db = firebase.firestore();
  db.collection("DetailMovie").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      var card = `<div class="card ">
         <video id="my-video" class="video-js" controls preload="auto" autoplay preload="auto"
                data-setup="{}">
                <source src="${doc.data().VideoURL}" type="video/mp4" />
            </video>
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
  db.collection("DetailMovie").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      var card = `
         <div class=""><img class="card-img-top" src="${doc.data().PosterURL}" alt="" ></div>
         `;
      $("#home").append(card);
    });

  });


  db.collection("DetailMovie").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      var card = `<div class="card ">
       <img class="card-img-top" src="${doc.data().PosterURL}" alt=""> <div class="card-body">
       <h4 class="card-title">${doc.data().Title} - ${doc.data().Year} </h4>
       <p class="card-text">${doc.data().Type}</p>
     </div>
      
   </div>`;
      $("#allcategory").append(card);

    });
  });



  db.collection("DetailMovie").where("Type", "==", "ความรัก")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach((doc) => {
        var card1 = `<div class="card ">
        <img class="card-img-top" src="${doc.data().PosterURL}" alt=""> <div class="card-body">
        <h4 class="card-title">${doc.data().Title} - ${doc.data().Year} </h4>
         <p class="card-text">${doc.data().Type}</p>
      </div>
       
    </div>`;
        $("#romantic").append(card1);

      });
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });

  db.collection("DetailMovie").where("Type", "==", "คอมเมดี้")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach((doc) => {
        var card1 = `<div class="card ">
        <img class="card-img-top" src="${doc.data().PosterURL}" alt=""> <div class="card-body">
        <h4 class="card-title">${doc.data().Title} - ${doc.data().Year} </h4>
         <p class="card-text">${doc.data().Type}</p>
      </div>
       
    </div>`;
        $("#comedy").append(card1);

      });
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });

  db.collection("DetailMovie").where("Type", "==", "แฟนตาซี")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach((doc) => {
        var card1 = `<div class="card ">
        <img class="card-img-top" src="${doc.data().PosterURL}" alt=""> <div class="card-body">
        <h4 class="card-title">${doc.data().Title} - ${doc.data().Year} </h4>
         <p class="card-text">${doc.data().Type}</p>
      </div>
       
    </div>`;
        $("#fantasy").append(card1);

      });
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });

  db.collection("DetailMovie").where("Type", "==", "ดราม่า")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach((doc) => {
        var card1 = `<div class="card ">
        <img class="card-img-top" src="${doc.data().PosterURL}" alt=""> <div class="card-body">
        <h4 class="card-title">${doc.data().Title} - ${doc.data().Year} </h4>
         <p class="card-text">${doc.data().Type}</p>
      </div>
       
    </div>`;
        $("#drama").append(card1);

      });
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });

  db.collection("DetailMovie").where("Type", "==", "สยองขวัญ")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach((doc) => {
        var card1 = `<div class="card ">
        <img class="card-img-top" src="${doc.data().PosterURL}" alt=""> <div class="card-body">
        <h4 class="card-title">${doc.data().Title} - ${doc.data().Year} </h4>
         <p class="card-text">${doc.data().Type}</p>
      </div>
       
    </div>`;
        $("#้horror").append(card1);

      });
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });


  db.collection("DetailMovie").where("Type", "==", "แอคชั่น")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach((doc) => {
        var card1 = `<div class="card ">
        <img class="card-img-top" src="${doc.data().PosterURL}" alt=""> <div class="card-body">
        <h4 class="card-title">${doc.data().Title} - ${doc.data().Year} </h4>
         <p class="card-text">${doc.data().Type}</p>
      </div>
       
    </div>`;
        $("#้action").append(card1);

      });
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });



    
//   db.collection("DetailMovie").where("Title", "==", "Love,Rosie")
//   .get()
//   .then(function (querySnapshot) {
//     querySnapshot.forEach((doc) => {
//       var card1 = `<div class="card ">
//       <img class="card-img-top" src="${doc.data().PosterURL}" alt=""> <div class="card-body">
//       <h4 class="card-title">${doc.data().Title} - ${doc.data().Year} </h4>
//        <p class="card-text">${doc.data().Type}</p>
//        <p class="card-text">${doc.data().Detail}</p>
//     </div>
     
//   </div>`;
//       $("#loveRosie").append(card1);

//     });
//   })
//   .catch(function (error) {
//     console.log("Error getting documents: ", error);
//   });

// db.collection("DetailMovie").where("Title", "==", "Swiss Army Man")
//   .get()
//   .then(function (querySnapshot) {
//     querySnapshot.forEach((doc) => {
//       var card1 = `<div class="card ">
//       <img class="card-img-top" src="${doc.data().PosterURL}" alt=""> <div class="card-body">
//       <h4 class="card-title">${doc.data().Title} - ${doc.data().Year} </h4>
//        <p class="card-text">${doc.data().Type}</p>
//        <p class="card-text">${doc.data().Detail}</p>
//     </div>
     
//   </div>`;
//       $("#swissarmyman").append(card1);

//     });
//   })
//   .catch(function (error) {
//     console.log("Error getting documents: ", error);
//   });

// db.collection("DetailMovie").where("Title", "==", "Enchanted")
//   .get()
//   .then(function (querySnapshot) {
//     querySnapshot.forEach((doc) => {
//       var card1 = `<div class="card ">
//       <img class="card-img-top" src="${doc.data().PosterURL}" alt=""> <div class="card-body">
//       <h4 class="card-title">${doc.data().Title} - ${doc.data().Year} </h4>
//        <p class="card-text">${doc.data().Type}</p>
//        <p class="card-text">${doc.data().Detail}</p>
//     </div>
     
//   </div>`;
//       $("#enchanted").append(card1);

//     });
//   })
//   .catch(function (error) {
//     console.log("Error getting documents: ", error);
//   });

// db.collection("DetailMovie").where("Title", "==", "สิ่งเล็กๆที่เรียกว่ารัก")
//   .get()
//   .then(function (querySnapshot) {
//     querySnapshot.forEach((doc) => {
//       var card1 = `<div class="card ">
//       <img class="card-img-top" src="${doc.data().PosterURL}" alt=""> <div class="card-body">
//       <h4 class="card-title">${doc.data().Title} - ${doc.data().Year} </h4>
//        <p class="card-text">${doc.data().Type}</p>
//        <p class="card-text">${doc.data().Detail}</p>
//     </div>
     
//   </div>`;
//       $("#สิ่งเล็กๆที่เรียกว่ารัก").append(card1);

//     });
//   })
//   .catch(function (error) {
//     console.log("Error getting documents: ", error);
//   });

// db.collection("DetailMovie").where("Title", "==", "Under The Shadow")
//   .get()
//   .then(function (querySnapshot) {
//     querySnapshot.forEach((doc) => {
//       var card1 = `<div class="card ">
//       <img class="card-img-top" src="${doc.data().PosterURL}" alt=""> <div class="card-body">
//       <h4 class="card-title">${doc.data().Title} - ${doc.data().Year} </h4>
//        <p class="card-text">${doc.data().Type}</p>
//        <p class="card-text">${doc.data().Detail}</p>
//     </div>
     
//   </div>`;
//       $("#undertheshadow").append(card1);

//     });
//   })
//   .catch(function (error) {
//     console.log("Error getting documents: ", error);
//   });


// db.collection("DetailMovie").where("Title", "==", "Apostle")
//   .get()
//   .then(function (querySnapshot) {
//     querySnapshot.forEach((doc) => {
//       var card1 = `<div class="card ">
//       <img class="card-img-top" src="${doc.data().PosterURL}" alt=""> <div class="card-body">
//       <h4 class="card-title">${doc.data().Title} - ${doc.data().Year} </h4>
//        <p class="card-text">${doc.data().Type}</p>
//        <p class="card-text">${doc.data().Detail}</p>
//     </div>
     
//   </div>`;
//       $("#apostle").append(card1);

//     });
//   })
//   .catch(function (error) {
//     console.log("Error getting documents: ", error);
//   });


//   db.collection("DetailMovie").where("Title", "==", "Harry Potter")
//   .get()
//   .then(function (querySnapshot) {
//     querySnapshot.forEach((doc) => {
//       var card1 = `<div class="card ">
//       <img class="card-img-top" src="${doc.data().PosterURL}" alt=""> <div class="card-body">
//       <h4 class="card-title">${doc.data().Title} - ${doc.data().Year} </h4>
//        <p class="card-text">${doc.data().Type}</p>
//        <p class="card-text">${doc.data().Detail}</p>
//     </div>
     
//   </div>`;
//       $("#harrypotter").append(card1);

//     });
//   })
//   .catch(function (error) {
//     console.log("Error getting documents: ", error);
//   });

// db.collection("DetailMovie").where("Title", "==", "Her")
//   .get()
//   .then(function (querySnapshot) {
//     querySnapshot.forEach((doc) => {
//       var card1 = `<div class="card ">
//       <img class="card-img-top" src="${doc.data().PosterURL}" alt=""> <div class="card-body">
//       <h4 class="card-title">${doc.data().Title} - ${doc.data().Year} </h4>
//        <p class="card-text">${doc.data().Type}</p>
//        <p class="card-text">${doc.data().Detail}</p>
//     </div>
     
//   </div>`;
//       $("#her").append(card1);

//     });
//   })
//   .catch(function (error) {
//     console.log("Error getting documents: ", error);
//   });

// db.collection("DetailMovie").where("Title", "==", "Birdman")
//   .get()
//   .then(function (querySnapshot) {
//     querySnapshot.forEach((doc) => {
//       var card1 = `<div class="card ">
//       <img class="card-img-top" src="${doc.data().PosterURL}" alt=""> <div class="card-body">
//       <h4 class="card-title">${doc.data().Title} - ${doc.data().Year} </h4>
//        <p class="card-text">${doc.data().Type}</p>
//        <p class="card-text">${doc.data().Detail}</p>
//     </div>
     
//   </div>`;
//       $("#birdman").append(card1);

//     });
//   })
//   .catch(function (error) {
//     console.log("Error getting documents: ", error);
//   });

// db.collection("DetailMovie").where("Title", "==", "Edge of Tomorrow")
//   .get()
//   .then(function (querySnapshot) {
//     querySnapshot.forEach((doc) => {
//       var card1 = `<div class="card ">
//       <img class="card-img-top" src="${doc.data().PosterURL}" alt=""> <div class="card-body">
//       <h4 class="card-title">${doc.data().Title} - ${doc.data().Year} </h4>
//        <p class="card-text">${doc.data().Type}</p>
//        <p class="card-text">${doc.data().Detail}</p>
//     </div>
     
//   </div>`;
//       $("#edgeoftomorrow").append(card1);

//     });
//   })
//   .catch(function (error) {
//     console.log("Error getting documents: ", error);
//   });

// db.collection("DetailMovie").where("Title", "==", "Snow White And The Huntsman ")
//   .get()
//   .then(function (querySnapshot) {
//     querySnapshot.forEach((doc) => {
//       var card1 = `<div class="card ">
//       <img class="card-img-top" src="${doc.data().PosterURL}" alt=""> <div class="card-body">
//       <h4 class="card-title">${doc.data().Title} - ${doc.data().Year} </h4>
//        <p class="card-text">${doc.data().Type}</p>
//        <p class="card-text">${doc.data().Detail}</p>
//     </div>
     
//   </div>`;
//       $("#snowwhite").append(card1);

//     });
//   })
//   .catch(function (error) {
//     console.log("Error getting documents: ", error);
//   });


// db.collection("DetailMovie").where("Title", "==", "Baby Driver")
//   .get()
//   .then(function (querySnapshot) {
//     querySnapshot.forEach((doc) => {
//       var card1 = `<div class="card ">
//       <img class="card-img-top" src="${doc.data().PosterURL}" alt=""> <div class="card-body">
//       <h4 class="card-title">${doc.data().Title} - ${doc.data().Year} </h4>
//        <p class="card-text">${doc.data().Type}</p>
//        <p class="card-text">${doc.data().Detail}</p>
//     </div>
     
//   </div>`;
//       $("#babydriver").append(card1);

//     });
//   })
//   .catch(function (error) {
//     console.log("Error getting documents: ", error);
//   });




})
