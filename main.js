let head = document.getElementById('head');

window.onscroll = function  () {
    

    if (scrollY >= 60 ) {
        head.classList.add("sticky");

    }else {
    head.classList.remove("sticky");


}};




console.warn('Hello I`m Dola..........sorry, its not responsive ;(');


