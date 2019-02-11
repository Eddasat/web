function byId(id) {
    return typeof(id) === 'string'?document.getElementById(id):id;
}
var timer=null,
    index=0,
    dots=byId("nav").getElementsByTagName('a'),
    pics=byId("banner").getElementsByTagName('div'),
    len=pics.length;
function slideimg(){
    main.onmouseover=function () {
        if(timer)clearInterval(timer)
    }
    main.onmouseout=function () {
        timer=setInterval(function () {
            index++;
            if (index>=len) index=0;
            changeImg();
        },1000)
    }
    main.onmouseout();
    for (var m=0;m<dots.length;m++){
        dots[m].id=m;
        dots[m].onclick=function () {
             index=this.id;
            changeImg()
        }
    }
}
function changeImg(){
    for(var i=0;i<len;i++){
        pics[i].style.display='none';
        dots[i].className='';
    }
    pics[index].style.display='block';
    dots[index].className='active';
}
slideimg()