/**
 * Created by Alyona on 06.01.2015.
 */


var strOptions ='<div class="boxOptions">'+
'<div class="fon"></div>'+
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
'</form>'+
'</div>';


var body = document.body;
body.innerHTML = strOptions;

var optionInp = new Array();
for(var i=0;i<16;i++){
    optionInp[i] = document.getElementsByClassName('optionInp')[i];
    alert(optionInp[i].placeholder());
}
//for(var i=0; i<str.)




