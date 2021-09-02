// console.log(body.getElementsByTagName('li').length)
// 窗口每滚动一次，就会触发一次该函数
// scroll检测滚动事件
window.onscroll=function(){
    console.log(111);
    // scrollTop滚动坐标
    console.log(document.documentElement.scrollTop||document.body.scrollTop)
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    if(scrollTop>150){
        search.style.position='fixed';
        // search.style.z-index ='9'
    }else{
        // 不定位
        search.style.position='relative'
    }
}
// document.body.onscroll=function(){
//     console.log(document.body.scrollTop)
// }
totop.onclick=function(){
    // 修改滚动坐标的值
    document.documentElement.scrollTop=0;
    document.body.scrollTop=0;
}