"use strict";

window.addEventListener('DOMContentLoaded', function () {
  var menu = document.querySelector('.menu');
  var menuTri = menu.querySelector('.menu .trigger-menu');
  var menuCon = menu.querySelector('.menu p');
  menuTri.addEventListener('click', fun);
  console.log('hi');

  function fun() {
    menuTri.classList.add('active');
    menuCon.classList.add('active'); // setTimeout(function () {
    //     window.addEventListener('click', function (e) {
    //         // console.log(e.target.parentElement.className);
    //         // console.log(e.target.tagName);
    //         // menuTri.classList.remove('active');
    //         // menuCon.classList.remove('active');
    //     });
    // }, 100);
  }
}); // function popup(){
//     var idx = this.dataset.num;
//     popEle.classList.add('active');
//     popele.addEventListener('click', function(e){
//     })
// }
// window.addEventListener('click', funGone)
// window명령을 menuTri 다음에 발생시킨다.
// ===============================
// ============================================
// function dataChange(fun){
//     menuTri.classList.toggle('active');
//     menuCon.classList.toggle('active');
// }
// window.addEventListener('click', function(){
//     var stop =this.scrollY;
// });
// function funGone(){
//     menuTri.classList.remove('active');
//     menuCon.classList.remove('active');
// }
// if fun(){
//         menuTri.classList.toggle('active');
//         menuCon.classList.toggle('active');
//     } else {
//         funGone(){
//                 menuTri.classList.remove('active');
//                 menuCon.classList.remove('active');
//         }
//     }