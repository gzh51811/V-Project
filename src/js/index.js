(function () {
    var html = document.documentElement;
    var hWidth = html.getBoundingClientRect().width;
    console.log(hWidth)
    html.style.fontSize = hWidth / 16 + "px";
    //1rem=40px
})()