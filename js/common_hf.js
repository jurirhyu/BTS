$(function () {
  //start
  $("header").load("index_head_foot.html header .nevbar",pageEvent);
  $("footer").load("index_head_foot.html footer .everythingForFooter ");

  function pageEvent(){
    var menu = document.querySelector('.menu');
        var menuTri = menu.querySelector('.menu .trigger-menu');
        var menuCon=menu.querySelector('.menu p');

        menuTri.addEventListener('click',fun2);
        
        function fun2(e){
            e.preventDefault();
            menuTri.classList.toggle('active');
            menuCon.classList.toggle('active');
            setTimeout(function(){
                menuCon.addEventListener('click', function(e){
                    
                        menuTri.classList.remove('active');
                        menuCon.classList.remove('active');
                
                        
                });
            },100);
        }

        $('.menu p a').on('click',function(e){
          e.preventDefault();
          var txt = $(this).text();
          localStorage.page = txt;

          var link = $(this).attr('href');
          location.href = link;
         })

         if(localStorage.page !== 'HOME' && localStorage.page !== 'MUSIC'){
          $('.nevbar').addClass('active');
         }

    

  }


  //end
});
