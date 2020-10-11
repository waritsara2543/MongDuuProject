$(function() {

    document.addEventListener('init', function(event) {
        var page = event.target;
        
        console.log(page.id);
  
        if (page.id === 'Home') {
            $('#back').hide();
            page.querySelector('#category').onclick = function() {
                document.querySelector('#myNavigator').pushPage('views/category.html');
              
            };
            
        } else if (page.id === 'category' ) {
            
            $('#back').show();
            document.querySelector('ons-back-button').onclick = function(event) {
                document.querySelector('#myNavigator').popPage();
                $('#back').hide();
            };
        }
        
          
        
  
    });
  })

