const inputFile=document.getElementById('fileInput')
inputFile.addEventListener('change', (e)=>{
    const file= e.target.files[0]
    const reader= new FileReader()
    reader.addEventListener('load', (e)=>{
        const info=e.target.result
          console.log(info)
        const content=info.split(/\r?\n/)
       
   let modifiedlines= content.map((element)=>{
         element=element.trim()
          const line=element.split(' ')
       // console.log(line)
        let lineArr= line.slice(0,line.length-1)
      // console.log(lineArr)
       return lineArr.join(' ') +'\n'
        })
        const modifiedContent=modifiedlines.join('')
        console.log(modifiedContent)
        
        let blob= new Blob([modifiedContent], {type:'text/plain'})
           link.href=URL.createObjectURL(blob)
    })
   
    reader.readAsText(file)
})
