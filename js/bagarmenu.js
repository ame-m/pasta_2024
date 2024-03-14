document.addEventListener('DOMContentLoaded', (e) => {
    const navigation = document.querySelector('.menu');
    const menu = document.querySelector('.hanbaga');
    const nav_sp = document.querySelector('.menu_area_sp .menu');
    const curtain = document.querySelector('.curtain');
    // const film= document.querySelector('.menu_area_sp .film');
    let flag = false;


    const handleObserver = (elements) => {
        elements.forEach((element) => {
            if (element.isIntersecting) {
                flag = true;
            } else {
                flag = false;
            }
        });
    };
    /*観測者を宣言する*/
    let observer = new IntersectionObserver(handleObserver);
    /*観測者に何を観測するかを登録する*/

    observer.observe(navigation);//.navigationが表示されてるか確認



    menu.addEventListener('click', (e) => {
        //もし.navigationが表示されていたら(flag=true).navigation,.hanbagaからactiveのクラス名を消してそのCSSを適応させる、もし.navigationが表示されていなかったら(flag=false).navigation,.hanbagaにactiveのクラス名を追加してそのCSSを適応させる

        if (flag) {
            menu.classList.remove('active');
            navigation.classList.remove('active');
            nav_sp.classList.remove('active');
            curtain.classList.remove('active');
            // film.classList.remove('active');
        } else {
            menu.classList.add('active');
            navigation.classList.add('active');
            nav_sp.classList.add('active');
            curtain.classList.add('active');
            // film.classList.add('active');
        }

    });
    curtain.addEventListener('click', (e) => {
        menu.classList.remove('active');
        navigation.classList.remove('active');
        nav_sp.classList.remove('active');
        curtain.classList.remove('active');
        // navigation.classList.add('active');
        // console.log(e);
        // if(e.target.menu.)
        // menu.classList.add('active');
    });


});



