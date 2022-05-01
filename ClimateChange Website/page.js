let pic = document.getElementById('pic');
let title= document.getElementById('title');
let cars = document.getElementById('cars');
let fossilFuel = document.getElementById('fossilFuel');
let manufacturing = document.getElementById('manufacturing');
let deforestation = document.getElementById('deforestation');
let foodImg = document.getElementById('foodImg');
let building = document.getElementById('building');
let actImg= document.getElementById('actImg');
let unImg = document.getElementById('unImg');


window.addEventListener('scroll',function(){
    let value= window.scrollY;
    title.style.marginRight= value * 4 + 'px';
    fossilFuel.style.left = value * 0.9+ 'px';
    manufacturing.style.right= value * 0.9 + 'px';
    deforestation.style.left = value * 0.9 + 'px';
    cars.style.right = value * 0.9 + 'px';
    foodImg.style.left= value * 0.9 + 'px';
    building.style.right= value * 1 + 'px';
    

   



})