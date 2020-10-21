//text-ani last
window.addEventListener('DOMContentLoaded',function(){
    var shopAni = document.querySelector('.menu_select li:last-of-type');
    var txt = document.querySelector('.shop_ani span');

    

    var mq = window.matchMedia("(max-width:1024px)");
    var match = 'p';
    mq.addListener(function(e){
        if(e.matches){
            //mobile
            match = 'm';
           
            
        }else{
            //pc
            match = 'p';
            
        }
        txtAni();
    });
    function txtAni(){
        if(match == 'p' && window.innerWidth > 1024){
            txt.textContent += txt.textContent;
            txt.textContent += txt.textContent;
            txt.textContent += txt.textContent;
        }else{
            txt.textContent = 'shop';
        }
    }txtAni();

    var txtShop;
    shopAni.addEventListener("mouseenter",function(){
            
        var sW = txt.offsetWidth;
        var idx = 0;
        txtShop = setInterval(function(){
                idx += 10;
                if(idx < sW-window.innerWidth){
                    txt.style="transition:0s linear; transform:translate(-"+idx+"px,-50%)";
                }else{
                    txt.style="transition:0s; transform:translate("+5+"px,-50%)";
                    idx=0;
                }
                
            
        },20);
    });


    shopAni.addEventListener("mouseleave",function(){
        clearInterval(txtShop);
    });

//end
});


