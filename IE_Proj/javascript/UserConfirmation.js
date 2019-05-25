$(document).ready(function () {
    $.getJSON("data.json",function (jdata) {
        // if (jdata.members[userID].role !== "کاربر عادی") {
        //     $('<li><a href="Report.html"> گزارش‌گیری </a></li>\n' +
        //         '<li><a href="UsersStatus.html"> مدیریت کاربران </a></li>\n' +
        //         '<li><a class="active" href="UserConfirmation.html"> تایید کاربران </a></li>'
        //     ).appendTo('#nav_bar');
        // }
        for(var i = 0; i < jdata.members.length; i++) {
            if (jdata.members[i].role !== "کاربر عادی") {
                $(
                    '<div class="user-container" id="">\n' +
                    '            <div class="left-side">\n' +
                    '                <div class="information">\n' +
                    '                    <span class="name">\n' +
                    '                        <p class="t"> نام: </p>\n' +
                    '                        <p class="User_name">  </p>\n' +
                    '                    </span>\n' +
                    '                    <span class="role">\n' +
                    '                        <p class="t"> سمت: </p>\n' +
                    '                        <p class="User_role">  </p>\n' +
                    '                    </span>\n' +
                    '                    <span class="email">\n' +
                    '                        <p class="t"> پست الکترونیکی: </p>\n' +
                    '                        <p class="User_mail">  </p>\n' +
                    '                    </span>\n' +
                    '                </div>\n' +
                    '                <div class="verify">\n' +
                    '                    <img class="check" id="" src="Image/check.png" alt="check" onclick="acceptedTextShow(this.id)">\n' +
                    '                    <div class="accepted" id="">\n' +
                    '                        تایید شد!\n' +
                    '                    </div>\n' +
                    '                    <img class="cross" id="" src="Image/cross.png" alt="cross" onclick="notAcceptedTextShow(this.id)">\n' +
                    '                    <div class="notAccepted" id="">\n' +
                    '                        رد شد!\n' +
                    '                    </div>\n' +
                    '                </div>\n' +
                    '\n' +
                    '            </div>\n' +
                    '            <div class="pic-container">\n' +
                    '                <img class="pic" src="Image/user-icon.png" alt="profilePic">\n' +
                    '            </div>\n' +
                    '        </div>'
                ).appendTo('#page_container');
            }
        }

        var roles = document.getElementsByClassName("User_role");
        var names = document.getElementsByClassName("User_name");
        var emales = document.getElementsByClassName("User_mail");
        var users_id = document.getElementsByClassName("user-container");
        var checks = document.getElementsByClassName("check");
        var crosses = document.getElementsByClassName("cross");
        var accepteds = document.getElementsByClassName("accepted");
        var notAccepteds = document.getElementsByClassName("notAccepted");
        var i_html = 0;
        for(var i = 0; i < jdata.members.length; i++) {
            if (jdata.members[i].role !== "کاربر عادی") {
                roles[i_html].innerHTML = jdata.members[i].role;
                names[i_html].innerHTML = jdata.members[i].firstName + " " + jdata.members[i].lastName;
                emales[i_html].innerHTML = jdata.members[i].email;
                users_id[i_html].id = ""+i_html;
                checks[i_html].id = "check"+i_html;
                crosses[i_html].id = "cross"+i_html;
                accepteds[i_html].id = "accepted"+i_html;
                notAccepteds[i_html].id = "notAccepted"+i_html;
                i_html++;
            }
        }
    })
});

function acceptedTextShow(id) {
    var index = id.toString().lastIndexOf('k');
    var newID = id.toString().substr(index+1);
    document.getElementById("accepted"+newID).style.display = "block";
    document.getElementById("cross"+newID).style.display = "none";
}

function notAcceptedTextShow(id) {
    var index = id.toString().lastIndexOf('s');
    var newID = id.toString().substr(index+1);
    document.getElementById("notAccepted"+newID).style.display = "block";
    document.getElementById("check"+newID).style.display = "none";
}

function close_nav(){
    nav = document.getElementById("nav_bar");
    nav.style.transform ='translateX(100%)';
    nav1 = document.getElementById("closed_nav");
    nav1.style.transform ='translateX(50%)';
    users = document.getElementsByClassName("user-container");
    for (var i = 0; i < users.length; i++){
        users[i].style.marginLeft = '31%';
    }
}

function Open_nav(){
    nav = document.getElementById("closed_nav");
    nav.style.transform ='translateX(150%)';
    nav1 = document.getElementById("nav_bar");
    nav1.style.transform ='translateX(0)';
    users = document.getElementsByClassName("user-container");
    for (var i = 0; i < users.length; i++){
        users[i].style.marginLeft = '20%';
    }
}

