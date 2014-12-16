function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var page = {};
page.answer = new Array();
page.answer[0] ="Сегодня будет выходной";
page.answer[1]="Получу пятерку без всякого труда.";
page.answer[2]="Спалят на списывании.";
page.answer[3]="Буду решать интересную задачу.";
page.answer[4]="Позвонит Билл Гейтс.";
page.answer[5]="Гугл мечтает о тебе. :))";

page.str =new String;


page.body = document.body;
page.magicText = document.getElementsByClassName('magicText')[0];

page.str = "Нажми на меня, чтобы узнать ответ.";
page.magicText.innerHTML =page.str;

page.magicTextBlock = document.getElementsByClassName('magicTextBlock')[0];
page.magicTextBlock.addEventListener('click',function(){
    var number = getRandomInt(0,5);
    page.str = page.answer[number];
    page.magicText.innerHTML =page.str;

},false);