const tableBody= document.getElementById('table-body');
const inputEl= document.getElementById('filterInput')
const newData=(url)=>{
    return fetch(url)
    .then((res)=>{
        return res.json()
    })
}
   function generateTable(data){
    data.forEach(element => {
        const row= document.createElement('tr')
        row.innerHTML=`
        <td>${element.name}</td>
        <td>${element.email}</td>
        <td>${element.amount}</td>
        <td>${element.date}</td>
        <td>${element.city}</td>`
        tableBody.appendChild(row)
    });
   }

function filterTable(){
    const inputValue =inputEl.value.toLowerCase();
    const rows = document.querySelectorAll('#table-body tr')
    rows.forEach(function(row) {
        const name = row.getElementsByTagName('td')[0].textContent.toLowerCase();

        if (name.indexOf(inputValue) > -1) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

newData('Table.json')
.then((data)=>{
    generateTable(data)  
    inputEl.addEventListener('input',filterTable)
})