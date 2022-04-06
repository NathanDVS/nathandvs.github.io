var clicked = true;

document.getElementById('toggler').onclick = function() {
    if (clicked) {
        document.getElementById('content').style.display = "none";
    } else {
        $(".content").fadeIn(1000);
    }
  
    clicked = !clicked;
};
