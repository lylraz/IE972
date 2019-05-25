$(document).ready(function () {
    $.getJSON("data.json",function (jd) {


        for(var i = 0 ; i < jd.requests.length ; i++){
            $('<div class="case-container" onclick="open_case(this.id);">' +
                '<div class="left-side">' +
                '<span class="subject"><p class="t">عنوان:</p><p class="user-subject"></p></span>' +
                '<span class="sender"><p class="t">ارسال کننده:</p><p class="user"></p></span>' +
                '<span class="date-container"><p class="date">تاریخ:</p><p class="case-date"></p></span>' +
                '<div class="content"><div class="text"><p class="ti">متن درخواست:</p><p class="case-content"></p></div>' +
                '<div class="button-container"><button onclick="goToCaseActionPage();" class="action-button"> اقدام </button></div></div>' +
                '</div>' +
                '<div class="case-title "><p class="type"></p></div>' +
                '</div>'
            ).appendTo('#page_container');
        }
        //update
        var sub = document.getElementsByClassName("user-subject"); // وارد کردن عناوین
        var senders = document.getElementsByClassName("user"); // وارد کردن اسامی
        var divs = document.getElementsByClassName("case-title"); // case title
        var types = document.getElementsByClassName("type"); // وارد کردن نوع مورد
        var dates = document.getElementsByClassName("case-date"); // وارد کردن نوع مورد
        var texts = document.getElementsByClassName("case-content"); // وارد کردن متن مورد
        var case_id = document.getElementsByClassName("case-container"); // آیدی
        for(var i = 0 ; i<jd.requests.length ; i++) {
            sub[i].innerHTML = jd.requests[i].title;
            senders[i].innerHTML = jd.requests[i].sender;
            dates[i].innerHTML = jd.requests[i].date;
            types[i].innerHTML = jd.requests[i].kind;
            texts[i].innerHTML = jd.requests[i].text;
            case_id[i].id = i;

            if (jd.requests[i].kind === "شکایت") {
                divs[i].className += " s";
            } else if (jd.requests[i].kind === "انتقاد"){
                divs[i].className += " e";
            } else if (jd.requests[i].kind === "پیشنهاد"){
                divs[i].className += " p";
            }
            else{
                divs[i].className += " d";
            }
        }
    })
});

// alert(userID);
//
// $(document).ready(function () {
//     $.getJSON("data.json",function (jdata) {
//         if (jdata.members[i].role !== "کاربر عادی") {
//             alert("jjj");
//             $('<li><a href="Report.html"> گزارش‌گیری </a></li>\n' +
//                 '<li><a href="UsersStatus.html"> مدیریت کاربران </a></li>\n' +
//                 '<li><a href="UserConfirmation.html"> تایید کاربران </a></li>'
//             ).appendTo('#nav');
//         }
//     })
// });

function close_nav(){
    nav = document.getElementById("nav_bar");
    nav.style.transform ='translateX(100%)' ;
    nav1 = document.getElementById("closed_nav");
    nav1.style.transform ='translateX(50%)' ;
    cases = document.getElementsByClassName("case-container");
    for (var i = 0 ; i<cases.length ; i++){
        cases[i].style.marginLeft = '16%';
    }
    s = document.getElementById("search_container");
    s.style.marginLeft = '16%';
}

function Open_nav(){
    nav = document.getElementById("closed_nav");
    nav.style.transform ='translateX(150%)' ;
    nav1 = document.getElementById("nav_bar");
    nav1.style.transform ='translateX(0)' ;
    cases = document.getElementsByClassName("case-container");
    for (var i = 0 ; i<cases.length ; i++){
        cases[i].style.marginLeft = '5%';
    }
    s = document.getElementById("search_container");
    s.style.marginLeft = '5%';
}

function open_case(clicked_id) {
    height = document.getElementById(clicked_id).style.height;
    if (height === '60px') {
        document.getElementById(clicked_id).style.height = '260px';
        setTimeout(function() {
            var children = document.getElementById(clicked_id).children[0].children[3];
            children.style.display = 'block' ;
        }, 400);

    } else {
        document.getElementById(clicked_id).style.height = '60px';
        var children = document.getElementById(clicked_id).children[0].children[3];
        children.style.display = 'none' ;
    }
}

function goToCaseActionPage() {
    window.location = "Action.html" ;
}