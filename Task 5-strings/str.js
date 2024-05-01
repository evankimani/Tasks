const input=document.querySelector('#text').value.toLowerCase().trim()
const button=document.getElementById('btn')
const outputEl=document.getElementById('output')

button.addEventListener('click',()=>{
//function of generating an array from the string
function generateArr(str){
    let arr=[]
    let words=''
    for(let i = 0; i<str.length; i++){
        if(str[i] !==' '){
            words+= str[i]
        }
        else{
            arr.push(words)
            words=''
        }  
    }
    if(words!==''){
             arr.push(words)
      }
     return arr
   } 
    arr=generateArr(input)

//generating words before a word with character 'a'
    let wordsBeforeA=[]

    for(let i= 0 ;i<arr.length;i++){
        if(arr[i].includes('a')){
            wordsBeforeA.push(arr[i-1])
        }
    }
   outputEl.innerHTML=`THE WORDS THAT COME BEFORE 'a';  ${wordsBeforeA.join(': ')}`

})
