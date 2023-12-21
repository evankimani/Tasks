const valueOfx=document.querySelector('#x-value');
const valueOfy=document.querySelector('#y-value');
const valueOfz=document.querySelector('#z-value');
const valueOfa=document.querySelector('#output-a');
const valueOfb=document.querySelector('#output-b');
const button=document.querySelector('button');
const paragraph=document.querySelector('.display');
button.addEventListener('click',function(){
  let x= valueOfx.value;
 let y= valueOfy.value;
  let z= valueOfz.value;
    if(x>10 || y>10 || z>10||x<0||y<0||z<0){
      paragraph.style.display='contents'
      paragraph.textContent='Enter a number between 0 and 10';
      valueOfa.value=0
      valueOfb.value=0
        }
        else{
    let a= (Math.log(1+Math.cos(z-1))**3+0.71*y) /((2*x)**-3+0.005*z*y);
    let b= (Math.log(1+Math.cos(z-1))**3)+5;
    valueOfa.value=a
    valueOfb.value=b
    paragraph.style.display='none'
  }
  })
