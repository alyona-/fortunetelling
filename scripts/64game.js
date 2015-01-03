/**
 * Created by Alyona on 02.01.2015.
 */
var page ={};
var template ={};
template.win = document.createElement('div');
template.win.className = 'windowOptions';
template.body = document.body;
template.buttonNo = document.createElement('button');
template.buttonYes = document.createElement('button');
template.buttonNo.className = 'buttonNo';
template.buttonYes.className = 'buttonYes';
template.buttonNo.innerText = 'Отмена';
template.buttonYes.innerText = 'Применить';
template.fon = document.getElementsByClassName('fon')[0];
template.inputValue = new Array();
for(var i=0;i<16;i++){
    template.inputValue[i]=document.createElement('input');
    template.inputValue.type ='text';
}
/*Функция, для перемешивания элементов массива случайным образом*/
/* Array.shuffle( deep ) - перемешать элементы массива случайным образом
 deep - необязательный аргумент логического типа, указывающий на то,
 нужно ли рекурсивно обрабатывать вложенные массивы;
 по умолчанию false (не обрабатывать)
 */
//alert('Работает');

//Метод, который реализует перемешивание элементов в массива в случайном порядке
page.constHr =document.querySelectorAll('.constHr');
//Превращаем page.userInput в массив для того, чтобы потом можно было обратиться к значению и поменять value
page.constHr = [].slice.call(document.querySelectorAll(".constHr"));
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


//Создаем массив чисел
page.numbArray = new Array();
for(var i=0;i<64;i++){
    page.numbArray[i]=i+1;//Присваиваем каждому элементу значение на 1 больше
}
/*Функция, которая генерирует случайное число*/
/*
function selfRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
*/
//page.inputUser = document.querySelectorAll('.inputUser');
//page.userInput = document.querySelectorAll('.userInput');
//Превращаем page.userInput в массив для того, чтобы потом можно было обратиться к значению и поменять value
page.userInput = [].slice.call(document.querySelectorAll(".userInput"));


//page.buttonGetNumb = document.getElementsByClassName('generateNumber')[0];
/**/
function genNumber(){
    page.numbArray = page.numbArray.shuffle();
    for(var i=0;i<64;i++){
        page.userInput[i].value=page.numbArray[i];
    }
    page.counter=64;
}

//page.p = document.querySelectorAll('.tdUser');
//page.p = document.querySelectorAll('.userTd');
page.counter =0;
document.querySelector('body').addEventListener('click', function(event){
   // alert('Работает');
    var target = event.target;
    do{
       // var i = false;
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
                }else{
                    // alert('Есть число');
                }
                break;
            }else if(classList == 'constTd'||classList=='constInput'||target.classList=='label'){
          //  }else if(event.target.parentNode==){
                //alert(target.parentNode.firstChild.tagName);
              //  alert(target.value);
                page.constHr[(target.value-1)*2].className = 'line_1_a';
                page.constHr[(target.value-1)*2+1].className = 'line_2_a';
            }else if(classList == 'generateNumber'){
                page.constHr[1].className = 'line_2_a';
                //функция при нажатии на кнопку
                genNumber();

            }if(classList == 'changeOption' || classList == 'changeOptionImg'){
               // alert('Работает');
                if(template.win.style.display=='none'){
                    alert('Был запуск');
                    template.fon.style.display ='block';
                    template.win.style.display = 'block';
                }
                else  createPopup();
            }if(classList == 'buttonNo'){
                template.win.style.display = 'none';
                template.fon.style.display ='none';
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


function createPopup(){

  //  template.body.appendChild(template.win);
    //template.win
   /* for(var i=0;i<16;i++){
        template.win.appendChild(template.inputValue[i]);
    }  */

    template.fon.style.display ='block';
    template.fon.appendChild(template.win);

 //   template.win.innerHTML = template.inputValue[0];
    template.win.appendChild(template.buttonNo);
    template.win.appendChild(template.buttonYes);


}
