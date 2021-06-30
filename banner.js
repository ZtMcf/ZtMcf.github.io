
var div = document.getElementById('flash');
var img = div.getElementsByTagName('img');
var ul = div.getElementsByTagName('ul')[0];
var li = ul.getElementsByTagName('li');
var len = img.length;
var count = 0;
function run () {
    count++;
    count = count == 5 ? 0 : count;
    for (var i = 0; i < len; i++) {
        img[i].style.display = 'none';
    }
    img[count].style.display = 'block';
    for (var i = 0; i < li.length; i++) {
        li[i].style.backgroundColor = "#fff";
    }
    li[count].style.backgroundColor = "#f40";
}
var timer = setInterval(run, 1000);
div.onmouseover = function () {
    clearInterval(timer);
}
div.onmouseleave = function () {
    timer = setInterval(run, 1000);
}
for (var i = 0; i < len; i++) {
    li[i].index = i;
    li[i].onmouseenter = function () {
        for (var i = 0; i < len; i++) {
            li[i].style.background = '#fff';
            img[i].style.display = 'none';
        }
        this.style.background = '#f40';
        img[this.index].style.display = 'block';
    }
}
