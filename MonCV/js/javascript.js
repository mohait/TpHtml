
function fonction(x) {
    var ele = x.parentNode.parentNode.nextElementSibling;
   var list = document.getElementsByClassName("formation");
   
   for (i=0 ; i<list.length ; i++){
       if( list[i].style.display=="block"){
           list[i].style.display="none";
       }
   }
   ele.children[1].style.display ="block";
   var max = ele.children[1].offsetHeight ;
   ele.children[1].style.display ="none";
   ele.children[1].style.height ="20px";
   ele.children[1].style.display ="block";
   timedCount();




   
   var h = 28;
   function timedCount() {
    
       ele.children[1].style.height = h +'px';
       h = h+20 ;
    
    if (h >  max ) {
        console.log(i);
        clearTimeout(t);
        return;
    }
    t = setTimeout(function () {
        timedCount()
    }, 100);
}


}

