window.addEventListener("DOMContentLoaded", function () {
  //start
  function setCookie() {
    var date = new Date(); //날짜를 남긴다.
    date.setTime(date.getTime() + 50000); //오늘 날짜의 시간을 초로 환산했을때의 값을 가지고온다
    document.cookie = "event=oneday; expires=" + date.toUTCString() + ";"; //쿠키를 남기는 방법
  }
  function getCookie() {
    var cookie = document.cookie;
    var reg = /oneday/;

    if (reg.test(cookie)) {
      $(".popup").hide();
    } else {
      $(".popup").show();
    }
  }
  getCookie();

  $(".popup a").on("click", function () {
    var check = $("input[name=oneday]").prop("checked");
    if (check) setCookie();
    $(".popup").hide();

    //end
  });
});
