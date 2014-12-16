WebFontConfig = {
    google: { families: [ 'Dancing+Script:400,700:latin' ] }
};
(function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
        '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
})();


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