
function fonction(x) {

   var list = document.getElementsByClassName("formation");
   
   for (i=0 ; i<5 ; i++){
       if( list[i].style.display=="block"){
           list[i].style.display="none";
       }
   }
   x.parentNode.parentNode.nextElementSibling.children[1].style.display ="block";

}

