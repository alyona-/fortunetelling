/**
 * Created by Alyona on 02.01.15.
 */
var page = {};


page.tdConst = [].slice.call(document.querySelectorAll(".tdConst"));
page.tdConst.addEventListener('click',function(){
    alert('Работает');
},false);