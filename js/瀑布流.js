function waterfall(wrap, boxes) {
    //获取屏幕显示的列数
    var boxWidth = boxes[0].offsetWidth + 20;
    var windowWidth = document.documentElement.clientWidth;
    var colsNumber = Math.floor(windowWidth / boxWidth);

    // 设置容器的宽度
    wrap.style.width = boxWidth * colsNumber + 'px';

    // 定义一个数组并存储每一列的高度
    var everyHeight = new Array();
    for (var i = 0; i < boxes.length; i++) {
        if (i < colsNumber) {
            everyHeight[i] = boxes[i].offsetHeight + 20;
        } else {

            var minHeight = Math.min.apply(null, everyHeight);

            var minIndex = getIndex(minHeight, everyHeight);

            var leftValue = boxes[minIndex].offsetLeft - 10;
            boxes[i].style.position = 'absolute';
            boxes[i].style.top = minHeight + 'px';
            boxes[i].style.left = leftValue + 'px';
            everyHeight[minIndex] += boxes[i].offsetHeight + 20;
        };
    }
}

//获取最小列的索引
function getIndex(minHeight, everyHeight) {
    for (index in everyHeight) {
        if (everyHeight[index] == minHeight) {
            return index;
        };
    };
};

window.onload = function() {
    var wrap = document.getElementById('wrap');
    var boxes = wrap.getElementsByTagName('div');
    waterfall(wrap, boxes);
}