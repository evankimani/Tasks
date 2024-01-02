const nav= document.querySelector('.nav-links');
const closeicon= document.querySelector('#close');
const openicon= document.querySelector('#open');
closeicon.addEventListener('click',function(){
    nav.style.right="-200px";
})
openicon.addEventListener('click',function(){
nav.style.right="0";
})