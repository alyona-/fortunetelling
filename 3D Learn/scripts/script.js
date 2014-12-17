/**
 * Created by alyona on 17.12.14.
 */

$(function(){
    $(document).mousemove(function(e){
        $('#cube').css({
            '-moz-transform':'rotateX('+ e.pageY+'deg) rotateY(' +
                +e.pageX+'deg)'
        });
    });
});