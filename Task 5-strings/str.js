const input=document.querySelector('#text').value.toLowerCase().trim()
//console.log(input)
const button=document.getElementById('btn')
const outputEl=document.getElementById('output')
//console.log(button,outputEl);

button.addEventListener('click',()=>{
   
    const words=input.split(' ')
    console.log(words)
    let wordsBeforeA=[]
    for(let i= 0 ;i<words.length;i++){
        if(words[i].includes('a')){
           continue;
        }
        else{
            wordsBeforeA.push(words[i])
        }
    }
    outputEl.innerHTML=`THE WORDS THAT COME BEFORE 'a':  ${wordsBeforeA.join(',')}`
  
})
