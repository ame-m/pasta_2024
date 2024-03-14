window.addEventListener('DOMContentLoaded', (e) => {

    const menu_tab = document.querySelectorAll('.tab li');
    const menu_info = document.querySelectorAll('.merchandise section');
    // const menu_base = document.querySelector('.merchandise');




    // const handleObserver = (elements) => {
    //     elements.forEach((element) => {
    //         if (element.isIntersecting) {
    //             var biggestHeight = $(".merchandise").height();
    //             $(".pasuta_area").each(function () {
    //                 if ($(this).height() > biggestHeight) {
    //                     biggestHeight = $(this).height()
    //                 }
    //             });
    //             $(".merchandise").height(biggestHeight);
    //             $("section.active").height(biggestHeight);
    //         } else {
    //             flag = false;
    //         }
    //     });
    // };
    /*観測者を宣言する*/
    // let observer = new IntersectionObserver(handleObserver);
    /*観測者に何を観測するかを登録する*/

    // observer.observe(menu_base);//.navigationが表示されてるか確認



   








    for (let i = 0; i < menu_tab.length; i++) {
        menu_tab[i].addEventListener('click', function (e) {
            e.preventDefault();


            // var biggestHeight = $(".merchandise").height();
            // $(".pasuta_area").each(function(){
            //     if ($(this).height() > biggestHeight ) {
            //         biggestHeight = $(this).height()
            //     }
            // });
            // menu_info[i].height(biggestHeight);



            // var biggestHeight = "0";
            // $(".merchandise *").each(function(){
            //     if ($(this).height() > biggestHeight ) {
            //         biggestHeight = $(this).height()
            //     }
            // });
            // $(".merchandise").height(biggestHeight);
            for (let j = 0; j < menu_tab.length; j++) {
                menu_tab[j].classList.remove("active");
            }
            for (let j = 0; j < menu_info.length; j++) {
                menu_info[j].classList.remove("active");
            }

            menu_tab[i].classList.add("active");
            menu_info[i].classList.add("active");

        });
    }


});