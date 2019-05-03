function makeHide(selector){
var exec = "$('."+selector+"').hide();";
return exec;
}
function hide(selector){
var F=new Function(makeHide(selector));
return(F());
}
hide('img2');
hide('img3');
hide('img4');
hide('img5');
function makeShow(selector){
var exec = "$('."+selector+"').show();";
return exec;
}
function show(selector){
var F=new Function(makeShow(selector));
return(F());
}
function click(selector,func){
var exec = "$('."+selector+"').click(function(){"
    +func+"});";
    var F=new Function(exec);
return(F());
}


$(".img1").click(function(){
    hide('img1');
    show('img2');

});

$(".img2").dblclick(function(){
    hide('img2');
    show('img3');
});

$(".button1").click(function(){
    hide('img3');
    show('img4');
});

$(".img4").hover(function(){
    hide('img4');
    show('img5');
});
$(".img5").click(function(){
    $(".img5").hide();
    $("body").css("background","yellow");
});
click('img1', makeHide('img2'));
click('img1', makeShow('img2'));

 
 
 
 
