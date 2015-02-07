/**
 * Created by Alyona on 19.12.14.
 */

var page = {};
page.body = document.body;
page.tableConst = document.createElement('table');
page.trConst = new Array();
page.tdConst = new Array();
page.str = new String();

page.str = 'work';
//page.tdConst.className = 'tdConst';

page.body.appendChild(page.tableConst);

for(var i=0;i<4;i++){
    page.trConst[i]=document.createElement('tr');
    page.tableConst.appendChild(page.trConst[i]);

    for(var j=0;j<16;j++){
        page.str = (j+1)*(i+1);
        page.tdConst[i] = document.createElement('td');
        page.tdConst[i].className = 'tdConst';
        page.trConst[i].appendChild(page.tdConst[i]);
        page.tdConst[i].innerHTML = page.str;
    }
}

page.p = document.querySelectorAll('.tdUser');
document.querySelector('body').addEventListener('click', function(event){
    var target = event.target;
    do{
        var i = false;
        var classList = target.classList.toString();
        classList = classList.split(' ');
        for(var i in classList){
            if(classList == 'tdUser'){i=true;break;}
        }
        if(i==true)break;
        target=target.parentNode;
    }while(target.tagName == 'BODY');
    event.returnValue=false;
    alert(page.p.value);
    clickTdUser(target);
});

function clickTdUser(link){
    alert('work');
}
