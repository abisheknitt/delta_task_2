var circle = document.getElementById('circle');
var interval;
var drawing;
var running = true; 
var num = 0;
var frame = document.getElementById('frame');
var currentBlocks = [];
function moveleft(){
    var left = parseInt(window.getComputedStyle(circle).getPropertyValue("left"));
    if(left>0){
        circle.style.left = left - 5 + "px";
    }
}
function moveright(){
    var left = parseInt(window.getComputedStyle(circle).getPropertyValue("left"));
    if(left<800){
        circle.style.left = left + 5 + "px";
    }
}
document.addEventListener('keydown', event => {
    if(event.key==='ArrowLeft'){
        interval = setInterval(moveleft(),1);
    }
    if(event.key==='ArrowRight'){
        interval = setInterval(moveright(),1);
    }
})
document.addEventListener('keyup', event => {
    clearInterval(interval);
})
var draw_block = setInterval(function(){
    var previoustop = document.getElementById("block" + (num-1));
    if (num > 0) {
        var topvalue = parseInt(window.getComputedStyle(previoustop).getPropertyValue("top"));
      }
    if (topvalue < 400 || num == 0){
    var block = document.createElement('div');
    block.setAttribute("class","block");
    block.setAttribute("id","block" + num);
    var width= Math.floor((Math.random() * 350) + 100);
    var value1 = 800 - width;
    var left= Math.floor((Math.random()*value1) + 0);
    block.style.top = topvalue + 80 + 'px' ;
    block.style.width = parseInt(width) + 'px';
    block.style.left= parseInt(left) + 'px';
    frame.appendChild(block);
    currentBlocks.push(num);
    num++;
    }
   for (var i = 0; i < currentBlocks.length; i++) {
     let current = currentBlocks[i];
     let iblock = document.getElementById("block" + current);
     let iblockTop = parseFloat(window.getComputedStyle(iblock).getPropertyValue("top"));
     iblock.style.top = iblockTop - 0.75 + "px";
     if(iblockTop < -20){
        currentBlocks.shift()
        iblock.remove();
     }
    }
},1);


