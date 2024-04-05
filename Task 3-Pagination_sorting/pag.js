document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const tableBody = document.getElementById('tableBody');
    const pagination = document.getElementById('pagination');
  
    let data = []; 
    let filteredData = [];
    let currentPage = 1;
    const itemsPerPage = 10;
  console.log(pagination)
    // Fetch data from JSON file
    function fetchData() {
      fetch('pag.json')
        .then(response => response.json())
        .then(jsonData => {
          data = jsonData;
          filteredData = [...data];
          renderTable();
          renderPagination();
        })
        .catch(error => console.error('Error fetching data:', error));
    }
  
    // Functions to render table and pagination
    function renderTable() {
      tableBody.innerHTML = '';
      filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${row.name}</td>
          <td>${row.email}</td>
          <td>${row.amount}</td>
          <td>${row.date}</td>
          <td>${row.city}</td>
        `;
        tableBody.appendChild(tr);
    
      });
    }
  //function to render pagination

    function renderPagination() {
      pagination.innerHTML = '';
      const totalPages = Math.ceil(filteredData.length / itemsPerPage);
      for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement('li');
        li.classList.add('page-item');
        li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
        if (i === currentPage) {
          li.classList.add('active');
        }
        li.addEventListener('click', () => {
          currentPage = i;
          renderTable();
          renderPagination();
          sortTable()
        });
        pagination.appendChild(li);
      }
    }
     // Event listener for search input
     searchInput.addEventListener('input', () => {
      const searchText = searchInput.value.toLowerCase().trim();
      filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchText) ||
        item.email.toLowerCase().includes(searchText) ||
        item.amount.toLowerCase().includes(searchText) ||
        item.date.toLowerCase().includes(searchText)
      );
      currentPage = 1;
      renderTable();
      renderPagination();
      sortTable()
    });

    fetchData();
    
    //function to sort the data in the columns

    function sortTable(columnName) {
      const table = document.getElementById("myTable");
      const rows = Array.from(table.getElementsByTagName("tr")).slice(1); 
      const icon = document.getElementById(columnName + "Icon");

      rows.sort((a, b) => {
          const aValue = a.querySelector("td:nth-child(" + (['name', 'email', 'amount', 'date', 'city'].indexOf(columnName) + 1) + ")").textContent.trim().toLowerCase();
          const bValue = b.querySelector("td:nth-child(" + (['name', 'email', 'amount', 'date', 'city'].indexOf(columnName) + 1) + ")").textContent.trim().toLowerCase();
          return bValue.localeCompare(aValue);
      });

      if (icon.classList.contains("fa-caret-down")) {
          rows.reverse();
          icon.classList.replace("fa-caret-down", "fa-caret-up");
      } else {
          icon.classList.replace("fa-caret-up", "fa-caret-down");
      }
      table.tBodies[0].append(...rows);
  }
  // Sorting event listeners
  const headers = document.querySelectorAll('th[id$="Header"]');
  headers.forEach(header => {
      header.addEventListener('click', () => {
      
          const columnName = header.id.replace('Header', '');
          sortTable(columnName);  
      });
  });
   
   
  });

  