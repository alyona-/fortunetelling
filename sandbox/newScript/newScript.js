/**
 * Created by Alyona on 29.12.14.
 */
var page ={};
/*Функция, для перемешивания элементов массива случайным образом*/
/* Array.shuffle( deep ) - перемешать элементы массива случайным образом
 deep - необязательный аргумент логического типа, указывающий на то,
 нужно ли рекурсивно обрабатывать вложенные массивы;
 по умолчанию false (не обрабатывать)
 */
/*
Array.prototype.shuffle = function( b )
{
    var i = this.length, j, t;
    while( i )
    {
        j = Math.floor( ( i-- ) * Math.random() );
        t = b && typeof this[i].shuffle!=='undefined' ? this[i].shuffle() : this[i];
        this[i] = this[j];
        this[j] = t;
    }
    return this;
};
  */

/*
page.userInput = [].slice.call(document.querySelectorAll(".userInput"));
page.numbArray = new Array();
for(var i=0;i<64;i++){
    page.numbArray[i]=i+1;
}  */
/*Функция, которая генерирует случайное число*/
/*
function selfRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}  */

//page.inputUser = document.querySelectorAll('.inputUser');
//page.buttonGetNumb = document.getElementsByClassName('generateNumber')[0];
/*
page.buttonGetNumb.addEventListener('click',function(){
    //alert('Работает');
    var numb = selfRandom(1,64);
    //page.userTd[numb].style.background ='red';
    alert(page.numbArray);
    alert(page.numbArray.shuffle());
    page.numbArray = page.numbArray.shuffle();
    alert(page.numbArray);
    //Заполнение элементов случайным образом
    for(var i=0;i<64;i++){
        page.userInput[i].value=page.numbArray[i];
    }
},false); */

//page.p = document.querySelectorAll('.tdUser');
page.counter =0;
document.querySelector('body').addEventListener('click', function(event){
    alert('работает');
    var target = event.target;
    do{
        //var i = false;
        var classList = target.classList.toString();
        classList = classList.split(' ');
        for(var i in classList){
            if(classList == 'userTd'||classList=='userInput'){ i=true;
               // alert('До добавления = '+event.target.value);
                if(event.target.value==''&& page.counter<65){
                   // alert('Нет ничего');
                    page.counter++;
                    event.target.value = page.counter;
                    if(page.counter ==64)alert('Вы заполнили поля. Можете начать игру!');
                }
                else if(page.counter==64){
                   alert('Вы заполнили поля. Можете начать игру!');
                }
            //    break;
            }else if(classList == 'constTd'||classList=='constInput'){
              // alert('Работает');
            }
            else break;
        }
        if(i==true)break;
        target=target.parentNode;
    }while(target.tagName == 'BODY');
    event.returnValue=false;
    //alert(page.p.value);
    //alert(event.target.value);

 /*   for(var i in classList){
        if(classList == 'userTd'){i=true;
            page.counter++;
            event.target.value = page.counter;
            event.target.innerText= page.counter;

            break;}
    } */

   /* page.counter++;
    event.target.value = page.counter;
    event.target.innerText= page.counter;*/


  // clickTdUser(target);
});

function clickTdUser(link){
    alert('work');
}
