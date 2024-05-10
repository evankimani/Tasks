//function of converting decimal to binary
function decimalToBinary(num){
    
    let binArr=[]
    
      if(num>0){
        for(let i=num; i>0; i=Math.floor(i/2)){
         binArr.push(i%2)
     }
     }
   
   for(let i=binArr.length; i<8; i++){
      binArr.push(0)
    }
    binArr.reverse()
    binArr=binArr.join(' ')
    return binArr
   }
   
   //function of converting decimal to octal
   function decimalTooctal(num1){
       let octalArr=[]
       while(num1>0){
           octalArr.push(Math.floor(num1%8))
           num1=Math.floor(num1/8)
       }
       if(octalArr.length<1){
           
       }
       if(octalArr.length<1){
           octalArr.push(0)
       }
       octalArr.reverse()
       octalArr=octalArr.join('')
       return octalArr
   }
   
   //function of converting decimal to hexa-decimal
   function decimalToHexa(num3){
       let hexaArr=[]
       while(num3>0){
           if(Math.floor(num3%16===10)){
               hexaArr.push('A')
           }
           else if(Math.floor(num3%16===11)){
               hexaArr.push('B')
           }
           else if(Math.floor(num3%16===12)){
               hexaArr.push('C')
           }
           else if(Math.floor(num3%16===13)){
               hexaArr.push('D')
           }
           else if(Math.floor(num3%16===14)){
               hexaArr.push('E')
           }
           else if(Math.floor(num3%16===15)){
               hexaArr.push('F')
           }
           else{
               hexaArr.push(Math.floor(num3%16))
           }
           num3=Math.floor(num3/16)
       }   
       if(hexaArr.length<1){
           hexaArr.push(0)
       }
       hexaArr.reverse()
       hexaArr=hexaArr.join('')
       return hexaArr
   }
     // generating and rendering the number system to the table
  function generateTable(){
    let combinedNum;
     for(let i=0; i<128;i++){
       combinedNum=[]
       combinedNum.push(i)
       combinedNum.push(decimalToBinary(i))
       combinedNum.push(decimalTooctal(i))
       combinedNum.push(decimalToHexa(i))
       let tr=document.createElement('tr')
       for(let j=0; j<combinedNum.length;j++){
       let td=document.createElement('td')

        let tn =document.createTextNode(combinedNum[j])

       td.appendChild(tn)
       tr.appendChild(td)
       let table= document.getElementById('table')
       table.appendChild(tr)
       }
       console.log(combinedNum)
     }
     
     return combinedNum
     
  }
  
  console.log(generateTable())