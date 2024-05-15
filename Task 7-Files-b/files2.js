function removeDuplicatesInSequences(sequences) {
    const processedSequences = sequences.map(sequence => {
        const numbers = sequence.split('').map(Number);
         const countMap = numbers.reduce((map, num) => {
            map[num] = (map[num] || 0) + 1;
            return map;
        }, {});
        const uniqueNumbers = numbers.filter(num => countMap[num] === 1);
        return uniqueNumbers.join('');
    });
 
    return processedSequences;
}
const inputFile=document.getElementById('fileInput')

inputFile.addEventListener('change',(e)=>{
    const file=e.target.files[0]
    const reader=new FileReader()
reader.addEventListener('load',(e)=>{
    const fileContent= e.target.result
//console.log(fileContent)
     const sequenceArr=fileContent.split('0')
     const modifiedFile=removeDuplicatesInSequences(sequenceArr).join('0')
     const modifiedFileSeqence=modifiedFile.split('').join(',')
     const blob1=new Blob([modifiedFileSeqence],{type:'text/plain'})
link.href=URL.createObjectURL(blob1)
    
    })
    reader.readAsText(file)
})


