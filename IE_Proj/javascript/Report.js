
$(document).ready(function () {
    $.getJSON("data.json",function (jdata) {
        var adminPost = 0, memberPost = 0, criticism = 0, suggestion= 0, complaint = 0, request = 0, open = 0, inQueue = 0, postponed = 0, closed = 0, satisfied = 0, notSatisfied = 0;
        for(var i = 0; i < jdata.requests.length; i++) {
            if (jdata.requests[i].role !== "کاربر عادی") {
                adminPost++;
            } else {
                memberPost++;
            }

            if (jdata.requests[i].kind === "انتقاد") {
                criticism++;
            } else if (jdata.requests[i].kind === "پیشنهاد") {
                suggestion++;
            } else if (jdata.requests[i].kind === "شکایت") {
                complaint++;
            } else {
                request++;
            }

            if (jdata.requests[i].status === "باز") {
                open++;
            } else if (jdata.requests[i].status === "در حال بررسی") {
                inQueue++;
            } else if (jdata.requests[i].status === "تعویق") {
                postponed++;
            } else {
                closed++;
            }

            if (jdata.requests[i].status === "راضی") {
                satisfied++;
            } else  if (jdata.requests[i].status === "ناراضی"){
                notSatisfied++;
            }
        }
        document.getElementById("adminPost").innerText = adminPost.toString()+" مورد ";
        document.getElementById("memberPost").innerText = memberPost.toString()+" مورد ";
        document.getElementById("criticism").innerText = criticism.toString()+" مورد ";
        document.getElementById("suggestion").innerText = suggestion.toString()+" مورد ";
        document.getElementById("complaint").innerText = complaint.toString()+" مورد ";
        document.getElementById("request").innerText = request.toString()+" مورد ";
        document.getElementById("open").innerText = open.toString()+" مورد ";
        document.getElementById("inQueue").innerText = inQueue.toString()+" مورد ";
        document.getElementById("postponed").innerText = postponed.toString()+" مورد ";
        document.getElementById("closed").innerText = closed.toString()+" مورد ";
        document.getElementById("satisfied").innerText = satisfied.toString()+" مورد ";
        document.getElementById("notSatisfied").innerText = notSatisfied.toString()+" مورد ";
    })
});

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) {
            addClass(x[i], "show");
        }
    }
}

function addClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function removeClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

function close_nav(){
    nav = document.getElementById("nav_bar");
    nav.style.transform ='translateX(100%)' ;
    nav1 = document.getElementById("closed_nav");
    nav1.style.transform ='translateX(50%)' ;
    div1 = document.getElementById("divContent");
    div1.style.marginRight = '7%';
    div2 = document.getElementById("filterContent");
    div2.style.marginRight = '7%';
}

function Open_nav(){
    nav = document.getElementById("closed_nav");
    nav.style.transform ='translateX(150%)' ;
    nav1 = document.getElementById("nav_bar");
    nav1.style.transform ='translateX(0)' ;
    div1 = document.getElementById("divContent");
    div1.style.marginRight = '15%';
    div2 = document.getElementById("filterContent");
    div2.style.marginRight = '15%';
}