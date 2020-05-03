console.log('AJAX READY')


$( document ).ready(function(){
    $.ajax({
        url: './assets/cities.csv',
        dataType: 'text',
    }).done(data =>{
        
        let rows = data.split('\n');
        let tableHTML = '<table class="table">';

        for(let rowdex = 0; rowdex < rows.length; rowdex++){
            if (rowdex === 0) {
                tableHTML += '<thead>';
                tableHTML += '<tr>';
            } else {
                tableHTML += '<tr>';
            }

            let cells = rows[rowdex].split(',');
            for(let celldex = 0; celldex < cells.length; celldex++){
                if (rowdex === 0) {
                    tableHTML += '<th scope="col">';
                    tableHTML += cells[celldex];
                    tableHTML += '</th>';
                } else if(celldex >0) {
                    tableHTML += '<td>';
                    tableHTML += cells[celldex];
                    tableHTML += '</td>';
                } else{
                    tableHTML += '<th scope="row">';
                    tableHTML += cells[celldex];
                    tableHTML += '</th>'; 
                }
            }
            if (rowdex === 0) {
                tableHTML += '</tr>';
                tableHTML += '</thead>';
                tableHTML += '<tbody>';
            } else {
                tableHTML += '</tr>';
            }
        }
        tableHTML += '</tbody>';
        tableHTML += '</table>';
        $('body').append(tableHTML);
    });
});