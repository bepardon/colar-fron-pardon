
// 选中
var tags=document.getElementsByClassName('selected');
// console.log(tags)

// var tagn=document.getElementsByTagName('input');
// console.log(tagn)

// 单选
for(var i=0;i<tags.length;i++){
    tags[i].onclick=()=>{        
        count();    
        console.log(111)
    }
}


// 全选
var als=document.getElementById('all');
all.onclick=function(){
    if(als.checked==true){
        for(var i=0;i<tags.length;i++){
                tags[i].checked=true;
            }
    }else{
        for(var i=0;i<tags.length;i++){
            tags[i].checked=false;
        }
    }
    
}


// 加件
function addn(e){
    // 获取前一个兄弟标签的数值
    var num=parseInt(e.previousElementSibling.value);
    // 数量加一
    e.previousElementSibling.value=num+1;
    count();
}

// 减件
function redu(e){
    var num=parseInt(e.nextElementSibling.value);
    e.nextElementSibling.value=num-1;
    if(num<=0){
        e.nextElementSibling.value=0;
    }
    count();
}

// 计算件数
var nbs=document.getElementsByClassName('count');
var alin=document.getElementById('alin');
// 单种商品价格
var pris=document.getElementsByClassName('pri');
// 总价

function count(){
    var nums=0;
    var price=0;
    var alpri=0;
    for(var i=0;i<nbs.length;i++){
        // console.log(tags);
        if(tags[i].checked==true){
            // 计算件
            var nb=parseInt(nbs[i].value);
            nums+=nb; 

            // 计算价格
            var pric=parseInt(pris[i].innerText);
            // console.log('i'+price)
            price+=eval(pric*nb);
            // console.log('pric'+price);          
            alpri+=price;
        }


    }
    alin.innerHTML=nums;
    console.log(nums);
    dprice.innerHTML=price;
    fnpri.innerHTML=alpri;
}


//首次输出件数 
var nums=0;
var price=0;
var alpri=0;
for(var i=0;i<nbs.length;i++){
    // console.log(tags);
    if(tags[i].checked==true){
        var nb=parseInt(nbs[i].value);
        nums+=nb; 
        // 计算价格
        var pric=parseInt(pris[i].innerText);
        // console.log('i'+price)
        price+=eval(pric*nb);
        // console.log('pric'+price);
        alpri+=price;
    }

}
alin.innerHTML=nums;
dprice.innerHTML=price;
fnpri.innerHTML=alpri;
console.log(nums);
