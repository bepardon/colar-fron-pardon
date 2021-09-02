

selected.onclick=function(){
    var main=body.getElementsByTagName('main');
    var price=0;
    for(var i=0;i<main.length;i++){
        var selected=main[i].getElementById('selected');
        if(selected.checked){
            var p=main[i].price.innerHTML()
            pric+=parseInt(p);
        }
        i++;
    }
    return price;
}