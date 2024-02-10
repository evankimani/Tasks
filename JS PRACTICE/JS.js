//fetching  a json file
/*fetch('./js.json').then((res) =>{
    return res.json();
})
.then((data)=>{
console.log(data)
})
//fetching  a text file
fetch('./js.txt').then((res) =>{
    return res.text();
})
.then((data)=>{
console.log(data)
})
//fetching  from an api
fetch("https://api.github.com/users/bradtraversy").then((res) =>{
    return res.json();
})
.then((data)=>{
console.log(data)
})*/
const arr= ['nice', 'fine','good','fair','poor']
const slicer= arr.toReversed()
console.log(slicer)
console.log(arr)
const one=arr[2]
console.log(one)
const arr2=['nice1', 'fine1','good1','fair1','poor1']
const arr3=arr.concat(arr2)
console.log(arr3)
const join= arr3.join('-    ')
console.log(join)
const str=arr3.toString()
console.log(str)

