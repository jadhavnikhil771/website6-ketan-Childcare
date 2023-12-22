var sliderMain = document.querySelector('.slider-main');
let item = sliderMain.getElementsByClassName('item');
   function next() 
   {
    sliderMain.append(item[0]);
   }
   function prev() 
   {
    sliderMain.prepend(item[item.length - 1]);
   }
   setInterval(
    next, 1500
   )


//  myButton Start //
let myButton = document.getElementById("myBtn");
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.documentElement.scrollTop > 100) {
        myButton.style.display = "block";
    }
    else {
        myButton.style.display = "none";
    }
}
function topFunction() {
    document.documentElement.scrollTop = 0;
}
//  myButton End //

// Buy Now Btn Start//
$('body').append
    ("<a href='https://themeforest.net/checkout/84094195/create_account?_ga=2.63813679.1430237439.1644119533-1297998632.1635997908' class='buy-now-btn' target='_blank'><img src='assets/img/envato.png' alt='envato'/>Buy Now</a>");
//  Buy Now Btn End//
