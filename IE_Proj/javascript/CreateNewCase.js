function close_nav(){
    nav = document.getElementById("nav_bar");
    nav.style.transform ='translateX(100%)' ;
    nav1 = document.getElementById("closed_nav");
    nav1.style.transform ='translateX(50%)' ;
    divv = document.getElementById("divContent");
    divv.style.marginRight = '23%';
    cButton = document.getElementById("confirmButton");
    cButton.style.marginRight = '73%';
}

function Open_nav(){
    nav = document.getElementById("closed_nav");
    nav.style.transform ='translateX(150%)';
    nav1 = document.getElementById("nav_bar");
    nav1.style.transform ='translateX(0)';
    divv = document.getElementById("divContent");
    divv.style.marginRight = '32%';
    cButton = document.getElementById("confirmButton");
    cButton.style.marginRight = '82%';
}
