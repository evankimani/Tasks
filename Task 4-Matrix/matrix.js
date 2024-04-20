
        const btn = document.getElementById('button')

        btn.addEventListener('click', () => {
            const rows = parseInt(document.getElementById("rows").value);
            const columns = parseInt(document.getElementById("columns").value);
            const matrix = [];

            // Generate new matrix
            for (let i = 0; i < rows; i++) {
                matrix.push([]);
                for (let j = 0; j < columns; j++) {
                    matrix[i].push(Math.floor(Math.random() * 100)); 
                }
            }

            // Display matrix in the table
            const table = document.getElementById("matrixTable");
            table.innerHTML = '';

            for (let i = 0; i < rows; i++) {
                let row = table.insertRow();
                for (let j = 0; j < columns; j++) {
                    let cell = row.insertCell();
                    cell.textContent = matrix[i][j];
                }
            }
            //slice the matrx in the shaded region
            let sliced = matrix[0].slice(rows-1);
           
            for (let i = 1; i < matrix.length; i++) {
           
                sliced = sliced.concat(matrix[i].slice(rows-1-i, matrix[i].length- i));
                }
               
            
            //obtain the largest element in the shaded region
            let largest = sliced[0]
            for (let i = 0; i < sliced.length; i++) {
                if (sliced[i] > largest) {
                    largest = sliced[i]
                }
            }
        
             document.getElementById('large').value = largest
        })
    