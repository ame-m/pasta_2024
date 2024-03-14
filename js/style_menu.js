
document.addEventListener('DOMContentLoaded', (e) => {
    $(window).on("scroll", function () {
        // ファーストビューの高さを取得
        mvHeight = $(".header_menu_area").height();
        if ($(window).scrollTop() > mvHeight) {
          // スクロールの位置がファーストビューより下の場合にclassを付与
          $(".nav_containar").addClass("transform");
          $(".menu").addClass("transform");
          $("header .nav_containar .menu ul li").addClass("transform");
          $("#menu .logo img").addClass("transform");
          $("#menu .logo").addClass("transform");
        } else {
          // スクロールの位置がファーストビューより上の場合にclassを外す
          $(".nav_containar").removeClass("transform");
          $(".menu").removeClass("transform");
          $("header .nav_containar .menu ul li").removeClass("transform");
          $("#menu .logo img").removeClass("transform");
          $("#menu .logo").removeClass("transform");
        }
      });  
});


