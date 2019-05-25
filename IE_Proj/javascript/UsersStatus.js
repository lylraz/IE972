$(document).ready(function () {
    $.getJSON("data.json", function (jdata) {
        // for(var i = 0 ; i < jdata.length ; i++){
        //     alert(jdata[i].city);
        // }
        for (var i = 0; i < jdata.members.length; i++) {
            $('<div class="user-container" onclick="open_case(this.id);">' +
                '<div class="left-side">' +
                '<span class="name"><p class="t">نام:</p><p class="User_name"></p></span>' +
                '<span class="role"><p class="t">سمت:</p><p class="User_role"></p></span>' +
                '<div class="a-container"><p id="more_information" onclick="more_information(this);">نمایش اطلاعات بیشتر</p></div>' +
                '<div class="content">' +
                '<span class="name"><p class="t">ایمیل:</p><p class="User_email"></p></span>' +
                '<span class="role"><p class="t">نام کاربری:</p><p class="profileName"></p></span>' +
                '<div class="b-container">' +
                '<button class="b1">ویرایش پروفایل کاربر</button>' +
                '<button class="b2">حذف کاربر</button>' +
                '<button class="b3">غیر فعال کردن کاربر</button>' +
                '</div>' +
                '<div class="a-container"><p id="less_information" onclick="less_information(this);">پنهان کردن اطلاعات بیشتر</p></div>' +
                '</div>' +
                '</div>' +
                '<div class="pic-container"><img class="pic" src="Image/user-icon.png" alt="profilePic"></div>' +
                '</div>'
            ).appendTo('#page_container');
        }
        //update
        var par = document.getElementsByClassName("User_role"); // وارد کردن سمت ها
        var emails = document.getElementsByClassName("User_email"); // وارد کردن ایمیل
        var profileNames = document.getElementsByClassName("profileName"); // وارد کردن سمت ها
        var names = document.getElementsByClassName("User_name"); // وارد کردن اسامی
        var users_id = document.getElementsByClassName("user-container"); // آیدی
        for (var i = 0; i < jdata.members.length; i++) {
            par[i].innerHTML = jdata.members[i].role;
            emails[i].innerHTML = jdata.members[i].email;
            profileNames[i].innerHTML = jdata.members[i].profileName;
            names[i].innerHTML = jdata.members[i].firstName + " " + jdata.members[i].lastName;
            users_id[i].id = i;
        }
    })
});

function change_filter(x) {
    users = document.getElementsByClassName("user-container");

    if(x === 'students'){
        for(var i=0 ; i< users.length ; i++){
            if(users[i].children[0].children[1].children[1].innerHTML !== "کاربر عادی"){
                users[i].style.display = "none" ;
            }
            else {
                users[i].style.display = "block" ;
            }
        }
    }
    else if(x === 'employees'){
        for(var i=0 ; i< users.length ; i++){
            if(users[i].children[0].children[1].children[1].innerHTML === "کاربر عادی"){
                users[i].style.display = "none" ;
            }
            else {
                users[i].style.display = "block" ;
            }
        }
    }
    else{
        for(var i=0 ; i< users.length ; i++){
            users[i].style.display = "block" ;
        }
    }
}


function close_nav() {
    nav = document.getElementById("nav_bar");
    nav.style.transform = 'translateX(100%)';
    nav1 = document.getElementById("closed_nav");
    nav1.style.transform = 'translateX(50%)';
    users = document.getElementsByClassName("user-container");
    for (var i = 0; i < users.length; i++) {
        users[i].style.marginLeft = '31%';
    }
    s = document.getElementById("search_container");
    s.style.marginLeft = '20%';
    d = document.getElementById("divContent");
    d.style.marginLeft = '20%';
}

function Open_nav() {
    nav = document.getElementById("closed_nav");
    nav.style.transform = 'translateX(150%)';
    nav1 = document.getElementById("nav_bar");
    nav1.style.transform = 'translateX(0)';

    //users
    users = document.getElementsByClassName("user-container");
    for (var i = 0; i < users.length; i++) {
        users[i].style.marginLeft = '20%';
    }
    //search bar
    s = document.getElementById("search_container");
    s.style.marginLeft = '10%';
    d = document.getElementById("divContent");
    d.style.marginLeft = '10%';
}

// function open_case(clicked_id) {
//     height = document.getElementById(clicked_id).style.height;
//     if(height === '110px')
//         document.getElementById(clicked_id).style.height = '250px';
//     else
//         document.getElementById(clicked_id).style.height = '110px';
// }

function more_information(node) {
    var parent_node = node.parentElement.parentElement.parentElement;
    parent_node.style.height = '220px';
    node.style.display = 'none';
    setTimeout(function () {
        var children = parent_node.children[0].children[3];
        children.style.display = 'block';
    }, 300);
}

function less_information(node) {
    var parent_node = node.parentElement.parentElement.parentElement.parentElement;
    parent_node.children[0].children[3].style.display = 'none';
    parent_node.style.height = '110px';
    setTimeout(function () {
        parent_node.children[0].children[2].children[0].style.display = 'block';
    }, 300);

}