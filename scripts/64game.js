/**
 * Created by Alyona on 02.01.2015.
 */
var page ={};
var template ={};
template.win = document.createElement('div');
//template.win.className = 'windowOptions';
template.win.className = 'boxOptions';
template.body = document.body;

template.valueSpan =document.querySelectorAll('.valueSpan');
template.valueSpan = [].slice.call(document.querySelectorAll(".valueSpan"));

template.optionInp = document.querySelectorAll('.optionInp');
template.optionInp = [].slice.call(document.querySelectorAll(".optionInp"));



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
            }if(classList == 'onNot'){
                template.win.style.display = 'none';
                template.fon.style.display ='none';
            }if(classList == 'onOk'){
                applyChangeOptions();
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
function applyChangeOptions(){
  //  alert(template.optionInp[0].value);
    template.valueSpan[0].innerText = 'Новое значение 1';
    template.valueSpan[1].innerText = 'Новое значение 2';
    template.win.style.display = 'none';
    template.fon.style.display ='none';
}

function createPopup(){
    template.input = document.getElementsByClassName('optionInp')[0];

    template.body.appendChild(template.win);
    template.win.innerHTML = template.content;
   // document.getElementById('option1').setAttribute("placeholder", "текст");

    for(var i=0;i<16;i++){
        template.optionInp[i].setAttribute("placeholder", template.valueSpan[i].innerText);
    }


}


//'<div class="boxOptions">'
template.content ='<div class="fon"></div>'+
    '<form>'+
    '<h4>Вы можете изменить значения в таблице:</h4>'+
    '<table class="optionTable">'+
    '<tr class="optionTr">'+
    '<td class="optionTd">'+
    '<label for="option1" class="optionLab">Значение 1: </label>'+
    '</td>'+
    '<td class="optionTd">'+
    '<input type="text" placeholder="Значение 1" id="option1" class="optionInp">'+
    '<button class="optionButton">'+
    '<img src="../img/button_options.png" class="optionImg" alt="картинка опций">'+
    '</button>'+
    '</td>'+
    '<td class="optionTd">'+
    '<label for="option9" class="optionLab">Значение 9: </label>'+
    '</td>'+
    '<td class="optionTd">'+
    '<input type="text" placeholder="Значение 9" id="option9" class="optionInp">'+
    '<button class="optionButton">'+
    '<img src="../img/button_options.png" class="optionImg" alt="картинка опций">'+
    '</button>'+
    '</td>'+
    '</tr>'+
    '<tr class="optionTr">'+
    '<td class="optionTd">'+
    '<label for="option2" class="optionLab">Значение 2: </label>'+
    '</td>'+
    '<td class="optionTd">'+
    '<input type="text" placeholder="Значение 2" id="option2" class="optionInp">'+
    '<button class="optionButton">'+
    '<img src="../img/button_options.png" class="optionImg" alt="картинка опций">'+
    '</button>'+
    '</td>'+
    '<td class="optionTd">'+
    '<label for="option10" class="optionLab">Значение 10: </label>'+
    '</td>'+
    '<td class="optionTd">'+
    '<input type="text" placeholder="Значение 10" id="option10" class="optionInp">'+
    '<button class="optionButton">'+
    '<img src="../img/button_options.png" class="optionImg" alt="картинка опций">'+
    '</button>'+
    '</td>'+
    '</tr>'+
    '<tr class="optionTr">'+
    '<td class="optionTd">'+
    '<label for="option3" class="optionLab">Значение 3: </label>'+
    '</td>'+
    '<td class="optionTd">'+
    '<input type="text" placeholder="Значение 3" id="option3" class="optionInp">'+
    '<button class="optionButton">'+
    '<img src="../img/button_options.png" class="optionImg" alt="картинка опций">'+
    '</button>'+
    '</td>'+
    '<td class="optionTd">'+
    '<label for="option11" class="optionLab">Значение 11: </label>'+
    '</td>'+
    '<td class="optionTd">'+
    '<input type="text" placeholder="Значение 11" id="option11" class="optionInp">'+
    '<button class="optionButton">'+
    '<img src="../img/button_options.png" class="optionImg" alt="картинка опций">'+
    '</button>'+
    '</td>'+
    '</tr>'+
    '<tr class="optionTr">'+
    '<td class="optionTd">'+
    '<label for="option4" class="optionLab">Значение 4: </label>'+
    '</td>'+
    '<td class="optionTd">'+
    '<input type="text" placeholder="Значение 4" id="option4" class="optionInp">'+
    '<button class="optionButton">'+
    '<img src="../img/button_options.png" class="optionImg" alt="картинка опций">'+
    '</button>'+
    '</td>'+
    '<td class="optionTd">'+
    '<label for="option12" class="optionLab">Значение 12: </label>'+
    '</td>'+
    '<td class="optionTd">'+
    '<input type="text" placeholder="Значение 12" id="option12" class="optionInp">'+
    '<button class="optionButton">'+
    '<img src="../img/button_options.png" class="optionImg" alt="картинка опций">'+
    '</button>'+
    '</td>'+
    '</tr>'+
    '<tr class="optionTr">'+
    '<td class="optionTd">'+
    '<label for="option5" class="optionLab">Значение 5: </label>'+
    '</td>'+
    '<td class="optionTd">'+
    '<input type="text" placeholder="Значение 5" id="option5" class="optionInp">'+
    '<button class="optionButton">'+
    '<img src="../img/button_options.png" class="optionImg" alt="картинка опций">'+
    '</button>'+
    '</td>'+
    '<td class="optionTd">'+
    '<label for="option13" class="optionLab">Значение 13: </label>'+
    '</td>'+
    '<td class="optionTd">'+
    '<input type="text" placeholder="Значение 13" id="option13" class="optionInp">'+
    '<button class="optionButton">'+
    '<img src="../img/button_options.png" class="optionImg" alt="картинка опций">'+
    '</button>'+
    '</td>'+
    '</tr>'+
    '<tr class="optionTr">'+
    '<td class="optionTd">'+
    '<label for="option6" class="optionLab">Значение 6: </label>'+
    '</td>'+
    '<td class="optionTd">'+
    '<input type="text" placeholder="Значение 6" id="option6" class="optionInp">'+
    '<button class="optionButton">'+
    '<img src="../img/button_options.png" class="optionImg" alt="картинка опций">'+
    '</button>'+
    '</td>'+
    '<td class="optionTd">'+
    '<label for="option14" class="optionLab">Значение 14: </label>'+
    '</td>'+
    '<td class="optionTd">'+
    '<input type="text" placeholder="Значение 14" id="option14" class="optionInp">'+
    '<button class="optionButton">'+
    '<img src="../img/button_options.png" class="optionImg" alt="картинка опций">'+
    '</button>'+
    '</td>'+
    '</tr>'+
    '<tr class="optionTr">'+
    '<td class="optionTd">'+
    '<label for="option7" class="optionLab">Значение 7: </label>'+
    '</td>'+
    '<td class="optionTd">'+
    '<input type="text" placeholder="Значение 7" id="option7" class="optionInp">'+
    '<button class="optionButton">'+
    '<img src="../img/button_options.png" class="optionImg" alt="картинка опций">'+
    '</button>'+
    '</td>'+
    '<td class="optionTd">'+
    '<label for="option15" class="optionLab">Значение 15: </label>'+
    '</td>'+
    '<td class="optionTd">'+
    '<input type="text" placeholder="Значение 15" id="option15" class="optionInp">'+
    '<button class="optionButton">'+
    '<img src="../img/button_options.png" class="optionImg" alt="картинка опций">'+
    '</button>'+
    '</td>'+
    '</tr>'+
    '<tr class="optionTr">'+
    '<td class="optionTd">'+
    '<label for="option8" class="optionLab">Значение 8: </label>'+
    '</td>'+
    '<td class="optionTd">'+
    '<input type="text" placeholder="Значение 8" id="option8" class="optionInp">'+
    '<button class="optionButton">'+
    '<img src="../img/button_options.png" class="optionImg" alt="картинка опций">'+
    '</button>'+
    '</td>'+
    '<td class="optionTd">'+
    '<label for="option16" class="optionLab">Значение 16: </label>'+
    '</td>'+
    '<td class="optionTd">'+
    '<input type="text" placeholder="Значение 16" id="option16" class="optionInp">'+
    '<button class="optionButton">'+
    '<img src="../img/button_options.png" class="optionImg" alt="картинка опций">'+
    '</button>'+
    '</td>'+
    '</tr>'+
    '</table>'+
    '<button class="onOk">Применить</button>'+
    '<button class="onNot">Отмена</button>'+
    '</form>';