const inputEl=document.getElementById('input');
const typeEl=document.getElementById('type');
const meaning=document.getElementById('meaning');
const title=document.getElementById("stitle")
const answer=document.getElementById('answer');
const audioEl=document.getElementById('audio');
async function fetchAPI(word){
    try {
        typeEl.style.display="block" 
        meaning.style.display="none"
        typeEl.innerText=`Searching the meaning of"${word}"`
        const url=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const result= await fetch(url).then((res) =>res.json());
if(result.title){
    title.innerHTML=word;
    meaning.style.display="block"
answer.innerText='N/A'
audioEl.style.display='none'
typeEl.style.display="none"
}
else{
    typeEl.style.display="none"
    meaning.style.display="block"
    audioEl.style.display='inline-flex'
    title.innerHTML=result[0].word;
    answer.innerText=result[0].meanings[0].definitions[0].definition;
    audioEl.src =result[0].phonetics[0].audio
}
    
} catch (error) {
        console.log(error)
        typeEl.innerText='An error happened try agail later'
    }
    
}
inputEl.addEventListener('keyup', (e)=>{
    if(e.target.value && e.key==='Enter'){
        fetchAPI(e.target.value)
    }
})
