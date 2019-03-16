function runImg() {
}

runImg.prototype = {
    bigbox: null,
    boxul: null,
    imglist: null,
    numlist: null,
    index: 0,
    timer: null,
    play: null,
    imgurl: [],
    count: 0,
    $: function (obj) {
        if (typeof (obj) == "string") {
            if (obj.indexOf("#") >= 0) {
                obj = obj.replace("#", "");
                if (document.getElementById(obj)) {
                    return document.getElementById(obj);
                } else {
                    alert("没有容器" + obj);
                    return null;
                }
            } else {
                return document.createElement(obj);
            }
        } else {
            return obj;
        }
    },
    info: function (id) {
        this.count = this.count <= 5 ? this.count : 5;
        this.bigbox = this.$(id);
        for (var i = 0; i < 2; i++) {
            var ul = this.$("ul");
            for (var j = 1; j <= this.count; j++) {
                var li = this.$("li");
                li.innerHTML = i == 0 ? this.imgurl[j - 1] : "";
                ul.appendChild(li);
            }
            this.bigbox.appendChild(ul);
        }
        this.boxul = this.bigbox.getElementsByTagName("ul");
        this.boxul[0].className = "imgList";
        this.boxul[1].className = "countNum";
        this.imglist = this.boxul[0].getElementsByTagName("li");
        this.numlist = this.boxul[1].getElementsByTagName("li");
        this.numlist[0].className = "current";
    },

    action: function (id) {
        this.autoplay();
        this.mouseoverout(this.bigbox, this.numlist);
    },
    imgshow: function (num, numlist, imglist) {
        this.index = num;
        var alpha = 0;
        for (var i = 0; i < numlist.length; i++) {
            numlist[i].className = "";
        }
        numlist[this.index].className = "current";
        clearInterval(this.timer);
        for (var j = 0; j < imglist.length; j++) {
            imglist[j].style.opacity = 0;
            imglist[j].style.filter = "alpha(opacity=0)";
        }
        var $this = this;
        this.timer = setInterval(function () {
            alpha += 2;
            if (alpha > 100) {
                alpha = 100
            }
            imglist[$this.index].style.opacity = alpha / 100;
            imglist[$this.index].style.filter = "alpha(opacity=" + alpha + ")";
            if (alpha == 100) {
                clearInterval($this.timer)
            }
        }, 20);
    },
//		//自动播放
    autoplay: function () {
        var $this = this;
        this.play = setInterval(function () {
            $this.index++;
            if ($this.index > $this.imglist.length - 1) {
                $this.index = 0
            }
            $this.imgshow($this.index, $this.numlist, $this.imglist);
        }, 2000)
    },
//		//处理鼠标事件
    mouseoverout: function (box, numlist) {
        var $this = this;
        box.onmouseover = function () {
            clearInterval($this.play);
        };
        box.onmouseout = function () {
            $this.autoplay($this.index);
        };
        for (var i = 0; i < numlist.length; i++) {
            numlist[i].index = i;
            numlist[i].onmouseover = function () {
                $this.imgshow(this.index, $this.numlist, $this.imglist);
            }
        }
    }
};
window.onload = function () {
    var runimg = new runImg();
    runimg.count = 3;
    runimg.imgurl = [
        "<img src='image/bnr-1.jpg'/>",
        "<img src='image/bnr-2.jpg'/>",
        "<img src='image/bnr-3.jpg'/>"];
    runimg.info("#box");
    runimg.action("#box");
};