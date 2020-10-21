"use strict";

//text-ani last
window.addEventListener('DOMContentLoaded', function () {
  var shopAni = document.querySelector('.shop_ani');
  var txt = document.querySelector('.shop_ani span');
  shopAni.addEventListener("mouseover", function () {
    var sW = txt.offsetWidth;
    shopAni.style.width = sW + 'px';
    txt.textContent += txt.textContent;
    setInterval(function () {
      txt.style = "transition:0s linear; transform:translateX(-" + sW + "px)";
      setTimeout(function () {
        txt.style = "transition:10s; transform:translateX(" + 5 + "px)";
      }, 500);
    }, 500);
  });
  var logo = document.querySelectorAll("#logo path"); // console.log(logo)

  for (var i = 0; i < logo.length; i++) {
    console.log("letter$(i) is $(logo[i].getTotalLength()}");
  }
});