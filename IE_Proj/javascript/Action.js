$(document).ready(function () {
    $.getJSON("data.json",function (jdata) {
        document.getElementById("title").innerText = jdata.requests[1].title;
        document.getElementById("sender").innerText = jdata.requests[1].sender;
        document.getElementById("request").innerText = jdata.requests[1].text;
    })
});

function referF() {
    document.getElementById("referD").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.referButton')) {
        var dropdowns = document.getElementsByClassName("referContent");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}