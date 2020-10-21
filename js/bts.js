window.addEventListener('DOMContentLoaded',function(){
    var tab = document.querySelector('.tab');
    var tabBtn = tab.querySelectorAll('.tab > nav a');
    var tabCon = tab.querySelectorAll('.tab div > div');

    for(var i=0;i<tabBtn.length; i++){
        tabBtn[i].addEventListener('click', funTab);
    }

    var last=0;
    function funTab(){ 
        event.preventDefault();
        var idx = this.dataset.num;
      

        tabBtn[last].classList.remove('active');
        tabCon[last].classList.remove('active');

        this.classList.add('active');
        tabCon[idx].classList.add('active');

        last=idx;
        
        // for(var i=0;i<8;i++){
        //     tabBtn[i].classList.remove('active');
        //     tabCon[i].classList.remove('active');
        // }

        // this.classList.add('active');
        // cons.classList.add('active');
        // console.log(this)
    }

});