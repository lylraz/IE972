
function openGroupTab(evt, tabName) {
    var i, tabContent, group;
    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    group = document.getElementsByClassName("group");
    for (i = 0; i < group.length; i++) {
        group[i].className = group[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
