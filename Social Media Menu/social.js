const menu= document.querySelector('.header');
const para= document.querySelector('.header p');
console.log(para);
const icons= document.querySelector('.icons');
const li =document.querySelectorAll('li p');
console.log(li)
menu.addEventListener('click', ()=>{
icons.classList.toggle("hide");
menu.classList.toggle("rotate");
})
li.forEach((lis)=>{
    lis.addEventListener('click',
    ()=>{
para.innerHTML=lis.innerHTML;
icons.classList.add("hide");
menu.classList.toggle("rotate");

    }
    )
})