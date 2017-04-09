// 随机选择3个颜色
function color() {
    var r1 = Math.round(Math.random() * 255);
    var g1 = Math.round(Math.random() * 255);
    var b1 = Math.round(Math.random() * 255);
    var r2 = Math.round(Math.random() * 255);
    var g2 = Math.round(Math.random() * 255);
    var b2 = Math.round(Math.random() * 255);
    var r3 = Math.round(Math.random() * 255);
    var g3 = Math.round(Math.random() * 255);
    var b3 = Math.round(Math.random() * 255);
    color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";
    color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";
    color3 = "rgb(" + r3 + "," + g3 + "," + b3 + ")";
}
// 随机选3个格子
function grid() {
    grid1 = Math.floor(Math.random() * 9);
    grid2 = Math.floor(Math.random() * 9);
    grid3 = Math.floor(Math.random() * 9);
    //不能选重
    if (grid1 == grid2 || grid1 == grid3 || grid2 == grid3) {
        grid();
    }
}
var x = document.getElementsByClassName("box1");
//随机改变3个随机格子的颜色
function change() {
    color();
    grid();
    x[grid1].style.backgroundColor = color1;
    x[grid2].style.backgroundColor = color2;
    x[grid3].style.backgroundColor = color3;
}
//改变颜色之后恢复本色,然后再运行
function restore() {
    for (var i = 0; i < x.length; i++) {
/*        if (x[i].style.backgroundColor != "orange") {
            x[i].style.backgroundColor = "orange";
        }*/
        x[i].style.backgroundColor="orange";
    }
    change();
}
//开始闪
btnStart.onclick=start;
    function start() {
    y = setInterval("restore()", 1000);
}
// 结束闪
btnReset.onclick=function reset() {
    clearInterval(y);
    for (var i = 0; i < x.length; i++) {
        if (x[i].style.backgroundColor != "rgb(255,165,0)") {
            x[i].style.backgroundColor = "orange";
        }
        // x[i].style.backgroundColor="orange";
    }
}

