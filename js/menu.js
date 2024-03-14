window.addEventListener('DOMContentLoaded', (e) => {
    // const title1= document.querySelector('.event_title1');
    // const title2= document.querySelector('.event_title2');
    // const title3= document.querySelector('.event_title3');
    const menu_area = document.querySelector('.menu_area');
    const menu = document.querySelector('.nav_containar .menu_area .menu');
    const logo = document.querySelector('.nav_containar .logo img');
    

    /*登録した物が観測されたときに行われる処理内容 */
    const handleObserver = (elements) => {
        elements.forEach((element) => {
            if (element.isIntersecting) {
                menu.classList.add('active');  
                logo.classList.add('active');    
            } 
            // else if (element.target.classList.contains('active')) {
            //     element.target.classList.remove('active');
            // }
        });
    };
/*観測者を宣言する*/
    let observer = new IntersectionObserver(handleObserver);
/*観測者に何を観測するかを登録する*/
    // let title = document.getElementsByTagName('h1')[0];
    observer.observe(menu_area);
    

    // const event = document.querySelectorAll('event_info_base1');
    // event.forEach(element => {
    //     observer.observe(element);
    // });

    // let paragraph = document.querySelectorAll('.profile');
    // paragraph.forEach(element => {
    //     observer.observe(element);
    // })
});