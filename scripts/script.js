function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var page = {};
page.answer = new Array();
/*
page.answer[0] ="Сегодня будет выходной";
page.answer[1]="Получу пятерку без всякого труда.";
page.answer[2]="Спалят на списывании.";
page.answer[3]="Буду решать интересную задачу.";
page.answer[4]="Позвонит Билл Гейтс.";
page.answer[5]="Гугл мечтает о тебе. :))"; */
page.answer[0] ='Бифит';
page.answer[2] ='Бифит';
page.answer[4] ='Бифит';
page.answer[6] ='Бифит';
page.answer[8] ='Бифит';
page.answer[1] ='Айсимпл';
page.answer[3] ='Айсимпл';
page.answer[5] ='Айсимпл';
page.answer[7] ='Айсимпл';
page.answer[9] ='Айсимпл';

page.str =new String;


page.body = document.body;
<<<<<<< HEAD
page.magicBall = document.getElementsByClassName('magicBall')[0];
page.magicButton =document.createElement('button');
page.magicButton.className = 'magicButton';
page.magicText =document.createElement('span');
page.magicText.className = 'magicText';
page.str = 'Нажми на меня, чтобы узнать свое будущее';
page.magicButton.innerText = page.str;
page.magicBall.appendChild(page.magicButton);

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


page.magicButton.addEventListener('click', function(){
    //alert('работает');
    page.magicBall.removeChild(page.magicButton);
    page.magicBall.appendChild(page.magicText);
   var number= getRandomInt(0, 5);
    page.magicText.innerText = page.answer[number];
},false);
=======
page.magicText = document.getElementsByClassName('magicText')[0];

page.str = "Нажми на меня, чтобы узнать ответ.";
page.magicText.innerHTML =page.str;
>>>>>>> fc7771a889d377e1a0b85337b6edbcfe736c3170

page.magicTextBlock = document.getElementsByClassName('magicTextBlock')[0];
page.magicTextBlock.addEventListener('click',function(){
    var number = getRandomInt(0,5);
    page.str = page.answer[number];
    page.magicText.innerHTML =page.str;

},false);
