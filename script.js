function Hero(image, top, left, size){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;

  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" ' +
    'onmouseover="randomLocation()"'+'/>';
  }

  this.moveRight = function(){
    this.left += 1;
  }
  this.moveLeft =function (){
    this.left -= 1;
  }
  this.moveDown =function (){
    this.top += 1;
  }
  this.moveUp =function (){
    this.top -= 1;
  }
}

var pikapi = new Hero('pikachu.png', 20, 30, 200);

function start(){
  if(pikapi.left < window.innerWidth - 220){
    pikapi.moveRight();
  }
  else{
    start2();
    return 1;
  }
  document.getElementById('game').innerHTML = pikapi.getHeroElement();
  setTimeout(start, 30)
}
function start2(){
  if(pikapi.top < window.innerHeight - 220){
    pikapi.moveDown();
  }
  else {
    start3();
    return 1;
  }
  document.getElementById('game').innerHTML = pikapi.getHeroElement();
  setTimeout(start2, 30)
}
function start3(){
  if(pikapi.left >0){
    pikapi.moveLeft();
  }
  else {
    start4();
    return 1;
  }
  document.getElementById('game').innerHTML = pikapi.getHeroElement();
  setTimeout(start3, 30)
}
function start4(){
  if(pikapi.top > 20){
    pikapi.moveUp();
  }
  else {
    start();
    return 1;
  }
  document.getElementById('game').innerHTML = pikapi.getHeroElement();
  setTimeout(start4, 30)
}
function randomLocation(){
  let x = (window.innerWidth-pikapi.size)*Math.random();
  let y =(window.innerHeight-220)*Math.random();
  let cnt = 4*Math.random();
  pikapi.left = x;
  pikapi.top = y;
  if(0<=cnt&&cnt<=1) {start()}
  else if(1<cnt&&cnt<=2){start2()}
  else if(2<cnt&&cnt<=3){start3()}
  else {start4()}
}
start();