/**
 * Created by Alyona on 02.01.2015.
 */
var page ={};
/*Функция, для перемешивания элементов массива случайным образом*/
/* Array.shuffle( deep ) - перемешать элементы массива случайным образом
 deep - необязательный аргумент логического типа, указывающий на то,
 нужно ли рекурсивно обрабатывать вложенные массивы;
 по умолчанию false (не обрабатывать)
 */
//alert('Работает');

//Метод, который реализует перемешивание элементов в массива в случайном порядке
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


                //  event.target.innerText= page.counter;
                //  alert('После добавления = '+event.target.value);
                // alert()
                break;
            }else if(classList == 'constTd'||classList=='constInput'){
                // alert('Работает');
            }else if(classList == 'generateNumber'){
                //alert('Работает');
                //функция при нажатии на кнопку
                genNumber();

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
