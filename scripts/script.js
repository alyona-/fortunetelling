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
page.answer[0] ='Разлука для любви - что ветер для огня: слабую она гасит, а большую раздувает.';
page.answer[2] ='Пьяным народом управлять легче.';
page.answer[4] ='Сделай всё, что сможешь, и будь что будет.';
page.answer[6] ='Не следует множить сущности без необходимости.';
page.answer[8] ='Практика - критерий истины.';
page.answer[1] ='Будущее - место, куда удобнее всего складывать свои мечты.';
page.answer[3] ='Не задав правильный вопрос, невозможно получить правильный ответ.';
page.answer[5] ='Слово «луна» это только палец, указующий на луну, но не сама луна. И горе тому, кто спутает палец с самой луной.';
page.answer[7] ='Ищите Истину и не поклоняйтесь тем, кто её открыл.';
page.answer[9] ='Мысль изречённая есть ложь.';
page.answer[10] ='Путь к порядку вещей лежит через порядок мыслей.';
page.answer[11] ='Всю свою жизнь человек отвлекается от того ради чего создан.';
page.answer[12] ='У того, кто делает - получается редко. У того, кто не делает - не получается никогда.';
page.answer[13] ='Когда дует ветер перемен, одни возводят стены, другие строят ветряные мельницы.';
page.answer[14] ='При разных принципах не найти общего языка.';
page.answer[15] ='Дорогу осилит идущий.';
page.answer[16] ='Хочешь помочь человеку – дай ему не рыбу, а удочку.';
page.answer[17] ='Вера может сдвинуть горы.';
page.answer[18] ='Кто хочет сдвинуть мир, пусть сдвинет себя.';

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