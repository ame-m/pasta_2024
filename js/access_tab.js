window.addEventListener('DOMContentLoaded', (e) => {

    const access_tab = document.querySelectorAll('.tab li');
    const access_info = document.querySelectorAll('.access li');
    // const access_map = document.querySelector('access_map');
    for (let i = 0; i < access_tab.length; i++) {
        access_tab[i].addEventListener('click', function(e) {
            e.preventDefault();
           
           
            for (let j = 0; j < access_tab.length; j++) {
                access_tab[j].classList.remove("active");
            }
            for (let j = 0; j < access_info.length; j++) {
                access_info[j].classList.remove("active");
            }

            access_tab[i].classList.add("active");
            access_info[i].classList.add("active");

        });
    }


});