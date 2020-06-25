function clickDot(n) {
  myDot(slide = n);
  ShowSlide(slide = n);
}
var slide = 1;
myDot(slide);

// function myDot(){
//     var i;
//     var dots =  document.getElementsByClassName("dot");

//     for(i = 0; i < dots.length;i++){
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     dots[slide-1].className += " active";
// }

function myDot(){
    var dots = document.getElementsByClassName('dot');
    for(var i = 0; i < dots.length ;i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slide - 1].className += " active";
}


function ShowSlide(slide){
    if(slide == 1){
        document.getElementById("right").style.backgroundImage = "url('../../Pictures/1.jpg')";
    }
    else if(slide ==2 ){
        document.getElementById("right").style.backgroundImage = "url('../../Pictures/2.jpg')"
    }
    else{
        document.getElementById("right").style.backgroundImage = "url('../../Pictures/3.jpg')"
    }
}
