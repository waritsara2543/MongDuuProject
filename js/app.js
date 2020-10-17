// $(function() {

//     document.addEventListener('init', function(event) {
//         var page = event.target;
        
//         console.log(page.id);
  
//         if (page.id === 'Home') {
//             $('#back').hide();
//             page.querySelector('#category').onclick = function() {
//                 document.querySelector('#myNavigator').pushPage('views/category.html');
              
//             };
        
            
//         } else if (page.id === 'category' ) {
            
//             $('#back').show();
//             document.querySelector('ons-back-button').onclick = function(event) {
//                 document.querySelector('#myNavigator').popPage();
//                 $('#back').hide();
//             };
//             page.querySelector('#detail').onclick = function() {
//                 document.querySelector('#myNavigator').pushPage('detail.html');
//             };
//         } 
         
//     });
//   })

$(function() {

    document.addEventListener('init', function(event) {
        var page = event.target;
        
        console.log(page.id);
  
        if (page.id === 'Home') {
            $('#back').show();
            document.querySelector('ons-back-button').onclick = function(event) {
                document.querySelector('#myNavigator').popPage();
                $('#back').hide();
            };
        } 
        
          
        
  
    });
  })

  var createAlertDialog = function() {
    var dialog = document.getElementById('my-alert-dialog');
  
    if (dialog) {
      dialog.show();
    } else {
      ons.createElement('alert-dialog.html', { append: true })
        .then(function(dialog) {
          dialog.show();
        });
    }
  };
  
  var hideAlertDialog = function() {
    document
      .getElementById('my-alert-dialog')
      .hide();
  };
  
  var notify = function() {
    ons.notification.alert('This dialog was created with ons.notification');
  };