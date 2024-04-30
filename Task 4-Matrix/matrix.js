
        const btn = document.getElementById('button')

        btn.addEventListener('click', () => {
            const rows = parseInt(document.getElementById("rows").value);
            console.log(rows)
            const columns = parseInt(document.getElementById("columns").value);
            const matrix = [];
            const table = document.getElementById("matrixTable");
            table.innerHTML = '';
            // Generate new matrix
            if(rows>columns){
                alert('columns should be greater or equal to rows')
                document.getElementById('large').value = ''
              
            }
            else{
            for (let i = 0; i < rows; i++) {
                matrix.push([]);
                let row = table.insertRow();
                for (let j = 0; j < columns; j++) {
                    matrix[i].push(Math.floor(Math.random() * 100)); 
                    let cell = row.insertCell();
                    cell.textContent = matrix[i][j];
                }
            }
           
            //obtain the largest element in the shaded region
            let largest = matrix[0][rows-1]
            for (let i = 0; i < rows; i++) {
                for(let j=rows-1-i; j<=columns-i;j++){
                    if (matrix[i][j] > largest) {
                        largest = matrix[i][j]
                }
                }   
            }
             document.getElementById('large').value = largest
            }
            })
    
    