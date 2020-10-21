window.addEventListener('DOMContentLoaded', function () {
  var liEle = document.querySelectorAll('.menu_Select, li');
  window.addEventListener('scroll', fadeFun);
  var winH = window.innerHeight;

  function fadeFun() {
    liEle.forEach(function (el, idx) {
      if (el.offsetTop - winH < this.scrollY) {
        el.classList.add('active');
      }
    });
  }



});