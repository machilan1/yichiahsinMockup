const header = document.querySelector('header');
const body =document.querySelector('body');
const showcase = document.querySelector('.product-showcase')
let isScroll =false ;
let currentY = window.scrollY;

const debounce =function(fn,delay){
    let timeoutID;
    return function(){
        if(timeoutID){
            clearTimeout(timeoutID);
        }
        timeoutID =setTimeout(fn,delay);
    };
};



window.onscroll =debounce(()=>{

    isScroll = true;
    if(currentY >= window.scrollY){
        header.classList.remove('hidetop')
    }else{
        header.classList.add('hidetop')

    }
    isScroll =false;currentY = window.scrollY;;

},50)


window.onload=()=>{
    body.classList.add('active');
}